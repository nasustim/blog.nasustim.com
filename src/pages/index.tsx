import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Template } from "@/components/templates/";
import { ArticleList } from "@/components/organisms/articleList";
import { CommonHead } from "@/components/organisms/meta/common-head";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
  location,
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
        <ArticleList list={list} />
      </main>
    </Template>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { draft: { eq: false } } }
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
