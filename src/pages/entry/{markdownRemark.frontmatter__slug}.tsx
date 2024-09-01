import { MarkdownRenderer } from "@/components/organisms/markdown-renderer";
import { Template } from "@/components/templates";
import { type PageProps, graphql } from "gatsby";

const EntryPage: React.FC<PageProps<Queries.EntryPageQuery>> = ({ data }) => {
	if (!data.markdownRemark) {
		return <></>;
	}
	const { frontmatter, rawMarkdownBody } = data.markdownRemark;

	return (
		<Template>
			<main>
				<div>
					<h1>{frontmatter?.title}</h1>
					<h2>{frontmatter?.date}</h2>
					<MarkdownRenderer markdown={rawMarkdownBody ?? ""} />
				</div>
			</main>
		</Template>
	);
};

export default EntryPage;

export const pageQuery = graphql`
  query EntryPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
