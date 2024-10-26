import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Template } from "@/components/templates/";
import { ArticleList } from "@/components/organisms/articleList";
import { CommonHead } from "@/components/organisms/meta/common-head";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
  location,
  pageContext,
}) => {
  const list = data.allMarkdownRemark.edges.map((v) => {
    const frontmatter = v?.node?.frontmatter;
    const html = v?.node?.html;

    return {
      title: frontmatter?.title ?? "",
      date: frontmatter?.date ?? "",
      slug: frontmatter?.slug ?? "",
      body: html ?? "",
    };
  });

  return (
    <Template pathname={location.pathname}>
      <main>
        <ArticleList
          list={list}
          currentPageIndex={pageContext.currentPageIndex}
          pagesCount={pageContext.pagesCount}
        />
      </main>
    </Template>
  );
};

export const query = graphql`
  query IndexPage($skip: Int!, $limit: Int!) {
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
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => {
  return <CommonHead />;
};
