import path from "node:path";
import type { CreatePagesArgs, GatsbyNode } from "gatsby";
import { z } from "zod";
import { ARTICLE_LIST_PAGE_LIMIT } from "./src/config";
import { getIndexPagePath } from "./src/utils/paginationUtils";
import {
  extractTagsWithCounts,
  filterArticlesByTag,
  getTagPagePath,
} from "./src/utils/tagUtils";

export const onPostBuild: GatsbyNode["onPostBuild"] = ({ reporter }) => {
  reporter.info("Build has finished! 🙌");
};

const schema = z.object({
  allMarkdownRemark: z.object({
    edges: z.array(
      z.object({
        node: z.object({
          id: z.string(),
          frontmatter: z.object({
            slug: z.string(),
            tags: z.array(z.string()).nullable(),
          }),
        }),
      }),
    ),
  }),
});

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions;
  const result = await graphql<z.infer<typeof schema>>(`
      query CreatePagesQuery {
        allMarkdownRemark(
          sort: {frontmatter: {date: DESC}}
          filter: { frontmatter: { draft: { eq: false } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                slug
                tags
              }
            }
          }
        }
      }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  // Create article list
  const posts = result.data?.allMarkdownRemark.edges;
  if (!posts) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const pagesCount = Math.ceil(posts.length / ARTICLE_LIST_PAGE_LIMIT);
  Array.from({ length: pagesCount }).forEach((_, i) => {
    const currentPageIndex = i;

    createPage<IndexPageContext>({
      path: getIndexPagePath(currentPageIndex),
      component: path.resolve("./src/page-components/index.tsx"),
      context: {
        limit: ARTICLE_LIST_PAGE_LIMIT,
        skip: currentPageIndex * ARTICLE_LIST_PAGE_LIMIT,
        pagesCount,
        currentPageIndex,
      },
    });
  });

  // Create articles
  for (const post of posts) {
    createPage<EntryPageContext>({
      path: `/entry/${post.node.frontmatter.slug}`,
      component: path.resolve("./src/page-components/entry/article.tsx"),
      context: {
        id: post.node.id,
      },
    });
  }

  // Create tag pages
  const articlesWithTags = posts.map((post) => ({
    ...post.node,
    tags: post.node.frontmatter.tags || [],
  }));

  const tagsWithCounts = extractTagsWithCounts(articlesWithTags);

  // Create individual tag pages
  for (const tagData of tagsWithCounts) {
    const articlesForTag = filterArticlesByTag(articlesWithTags, tagData.tag);
    const tagPagesCount = Math.ceil(
      articlesForTag.length / ARTICLE_LIST_PAGE_LIMIT,
    );

    Array.from({ length: tagPagesCount }).forEach((_, i) => {
      const currentPageIndex = i;

      createPage<TagPageContext>({
        path: getTagPagePath(tagData.tagSlug, currentPageIndex),
        component: path.resolve("./src/page-components/tag/articles.tsx"),
        context: {
          tag: tagData.tag,
          tagSlug: tagData.tagSlug,
          limit: ARTICLE_LIST_PAGE_LIMIT,
          skip: currentPageIndex * ARTICLE_LIST_PAGE_LIMIT,
          pagesCount: tagPagesCount,
          currentPageIndex,
        },
      });
    });
  }
};
