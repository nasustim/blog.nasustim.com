import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const list = data.allMarkdownRemark.edges.map(v => v.node.frontmatter)
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        🌊 おみつ雑記
      </h1>
      <div>
        <ul>{list.map(v => (<li>{v?.title}</li>))}</ul>
      </div>
    </main>
  );
};


export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark {
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
