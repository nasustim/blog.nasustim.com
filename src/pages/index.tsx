import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Template } from "@/components/templates/";
import { ArticleList } from "@/components/organisms/articleList";
import { CommonHead } from "@/components/organisms/meta/common-head";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
	const list = data.allMarkdownRemark.edges
		.map((v) => ({
			frontMatter: v.node.frontmatter,
			html: v.node.html,
		}))
		.flatMap((v) => {
			return {
				title: v?.frontMatter?.title ?? "",
				date: v?.frontMatter?.date ?? "",
				slug: v?.frontMatter?.slug ?? "",
				body: v?.html ?? "",
			};
		});

	return (
		<Template>
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
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
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
