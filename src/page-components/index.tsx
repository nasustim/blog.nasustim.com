import { graphql, type HeadFC, type PageProps } from "gatsby";
import { z } from "zod";
import { ArticleList } from "@/components/organisms/articleList";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { Template } from "@/components/templates/";
import { extractTagsWithCounts } from "@/utils/tagUtils";

const frontmatterSchema = z.object({
  date: z.string(),
  slug: z.string(),
  title: z.string(),
  draft: z.boolean(),
  tags: z.array(z.string()).nullable(),
});

const nodeSchema = z.object({
  frontmatter: frontmatterSchema,
  html: z.string(),
});

const IndexPage: React.FC<
  PageProps<Queries.IndexPageQueryQuery, IndexPageContext>
> = ({ data, location, pageContext }) => {
  const list = data.allMarkdownRemark.edges.map((v) => {
    const result = nodeSchema.safeParse(v.node);
    if (result.error) {
      throw new Error(result.error.message);
    }
    const { html, frontmatter } = result.data;

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      slug: frontmatter.slug,
      body: html,
      tags: frontmatter.tags ?? [],
    };
  });

  // Extract all tags from the allTags query
  const allArticlesWithTags = data.allTags.edges.map((edge) => ({
    tags: (edge.node.frontmatter?.tags || []).filter(
      (tag): tag is string => tag !== null,
    ),
  }));
  const tagsWithCounts = extractTagsWithCounts(allArticlesWithTags);

  return (
    <Template pathname={location.pathname}>
      <main>
        <ArticleList
          list={list}
          currentPageIndex={pageContext.currentPageIndex}
          pagesCount={pageContext.pagesCount}
          allTags={tagsWithCounts}
        />
      </main>
    </Template>
  );
};

export const query = graphql`
  query IndexPageQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: { frontmatter: { draft: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            draft
            tags
          }
          html
        }
      }
    }
    allTags: allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => {
  return <CommonHead />;
};
