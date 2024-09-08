import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Template } from "@/components/templates/";
import { ArticleList } from "@/components/organisms/articleList";
import { useSiteMetadata } from "@/hooks/useMetadata";

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
	const { title, description, twitterUsername, image, siteUrl } =
		useSiteMetadata();

	siteUrl.match("entry") ? "article" : "website";

	return (
		<>
			<meta name="description" content={description} />

			{/** OpenGraph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={siteUrl} />
			<meta
				property="og:type"
				content={
					// todo: Change to more surely process
					siteUrl.match("entry") ? "article" : "website"
				}
			/>

			{/** X (former Twitter) */}
			<meta property="twitter:card" content="summary" />
			<meta property="twitter:url" content={siteUrl} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:image" content={image} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:creator" content={twitterUsername} />
			<title>{title}</title>
		</>
	);
};
