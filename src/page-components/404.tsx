import { type HeadFC, Link, type PageProps } from "gatsby";
import { Template } from "@/components/templates";

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

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Template pathname={location.pathname}>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Template>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
