import { MainTemplate } from "@/components/templates/main";
import { Link, type HeadFC, type PageProps } from "gatsby";

const pageStyles = {
	color: "#232129",
	padding: "96px",
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
};

const paragraphStyles = {
	marginBottom: 48,
};
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<MainTemplate>
			<main style={pageStyles}>
				<h1 style={headingStyles}>Page not found</h1>
				<p style={paragraphStyles}>
					Sorry 😔, we couldn’t find what you were looking for.
					<br />
					<Link to="/">Go home</Link>.
				</p>
			</main>
		</MainTemplate>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;