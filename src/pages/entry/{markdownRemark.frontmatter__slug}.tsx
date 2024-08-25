import { MainTemplate } from "@/components/templates/main";
import { type PageProps, graphql } from "gatsby";

const EntryPage: React.FC<PageProps<Queries.EntryPageQuery>> = ({ data }) => {
	if (!data.markdownRemark) {
		return <></>;
	}
	const { frontmatter, html } = data.markdownRemark;

	return (
		<MainTemplate>
			<div>
				<div>
					<h1>{frontmatter?.title}</h1>
					<h2>{frontmatter?.date}</h2>
					{/* biome-ignore lint: dangerouslySetInnerHTML */}
					{html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : <></>}
				</div>
			</div>
		</MainTemplate>
	);
};

export default EntryPage;

export const pageQuery = graphql`
  query EntryPage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
