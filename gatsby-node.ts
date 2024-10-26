import path from "node:path"
import type { GatsbyNode } from "gatsby"
import { ARTICLE_LIST_PAGE_LIMIT } from './src/config'
import { getIndexPagePath } from "./src/utils/paginationUtils";

export const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  reporter.info('Build has finished! 🙌')
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
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
  const posts = result.data.allMarkdownRemark.edges;
  const pagesCount = Math.ceil(posts.length / ARTICLE_LIST_PAGE_LIMIT);
  Array.from({ length: pagesCount }).forEach((_, i) => {
    const currentPageIndex = i;
    createPage({
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
    createPage({
      path: `/entry/${post.node.frontmatter.slug}`,
      component: path.resolve("./src/page-components/entry/article.tsx"),
      context: {
        id: post.node.id,
      },
    });
  }
};

