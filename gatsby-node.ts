import path from "node:path"
import { createFilePath } from "gatsby-source-filesystem"
import { ARTICLE_LIST_PAGE_LIMIT } from './src/config'

export const onPostBuild = ({ reporter }) => {
  reporter.info('Build has finished! 🙌')
}

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
      {
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
      path: i === 0 ? "/" : `/page/${currentPageIndex + 1}`,
      component: path.resolve("./src/page-components/index.tsx"),
      context: {
        limit: ARTICLE_LIST_PAGE_LIMIT,
        skip: i * ARTICLE_LIST_PAGE_LIMIT,
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

