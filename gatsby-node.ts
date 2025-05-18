import path from "node:path";
import type { CreatePagesArgs, GatsbyNode } from "gatsby";
import { ARTICLE_LIST_PAGE_LIMIT } from "./src/config";
import { getIndexPagePath } from "./src/utils/paginationUtils";
import { z } from "zod";

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
};
