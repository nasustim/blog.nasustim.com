import { graphql, type HeadFC, type PageProps } from "gatsby";
import { MainTemplate } from "@/components/templates/main";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const list = data.allMarkdownRemark.edges.map((v) => v.node.frontmatter);
  return (
    <MainTemplate>
      <main>
        <div>
          <ul>
            {list.map((v) => {
              const slug = v?.slug ?? ''
              const title = v?.title ?? ''

              return <li key={`article-list-${slug}`}>
                <a href={`/entry${slug}`}>{title}</a>
              </li>
            })}
          </ul>
        </div>
      </main>
    </MainTemplate>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
