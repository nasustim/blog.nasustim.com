import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Template } from "@/components/templates/";
import { ArticleList } from "@/components/organisms/articleList";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { z } from "zod";

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

type TagArticleQueryData = {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        frontmatter: {
          date: string;
          slug: string;
          title: string;
          draft: boolean;
          tags: string[] | null;
        };
        html: string;
      };
    }>;
  };
};

const TagArticlesPage: React.FC<
  PageProps<TagArticleQueryData, TagPageContext>
> = ({ data, location, pageContext }) => {
  const { tag, currentPageIndex, pagesCount } = pageContext;

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
    };
  });

  return (
    <Template pathname={location.pathname}>
      <main>
        <h1>Articles tagged with "{tag}"</h1>
        <ArticleList
          list={list}
          currentPageIndex={currentPageIndex}
          pagesCount={pagesCount}
        />
      </main>
    </Template>
  );
};

export const query = graphql`
  query TagArticlesPageQuery ($tag: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: { 
        frontmatter: { 
          draft: { eq: false }
          tags: { in: [$tag] }
        } 
      }
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
  }
`;

export default TagArticlesPage;

export const Head: HeadFC<TagArticleQueryData, TagPageContext> = ({
  pageContext,
}) => {
  const { tag } = pageContext;
  return <CommonHead title={`Articles tagged with "${tag}"`} />;
};
