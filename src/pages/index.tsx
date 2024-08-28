import { graphql, type HeadFC, type PageProps } from "gatsby";
import { MainTemplate } from "@/components/templates/main";
import { Link } from "@/components/atoms/link";
import { SITE_ORIGIN } from "@/config";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
	const list = data.allMarkdownRemark.edges.map((v) => v.node.frontmatter);
	return (
		<MainTemplate>
			<main>
				<div>
					<ul>
						{list.flatMap((v) => {
							if (!(v?.slug && v.title)) return [];
							return [
								<li key={`article-list-${v.slug}`}>
									<Link to={new URL(`/entry${v.slug}`, SITE_ORIGIN)}>
										{v.title}
									</Link>
								</li>,
							];
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
