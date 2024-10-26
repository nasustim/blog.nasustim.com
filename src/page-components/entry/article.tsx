import { MarkdownRenderer } from "@/components/organisms/markdown-renderer";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { Template } from "@/components/templates";
import { toPlainText } from "@/utils/markdownUtils";
import { type HeadFC, type PageProps, graphql } from "gatsby";

const EntryPage: React.FC<PageProps<Queries.EntryPageQuery>> = ({
  data,
  location,
}) => {
  if (!data.markdownRemark) {
    return <></>;
  }
  const { frontmatter, rawMarkdownBody } = data.markdownRemark;
  if (frontmatter?.draft) {
    return <></>;
  }
  return (
    <Template pathname={location.pathname}>
      <main>
        <MarkdownRenderer
          title={frontmatter?.title ?? ""}
          date={frontmatter?.date ?? undefined}
          markdown={rawMarkdownBody ?? ""}
        />
      </main>
    </Template>
  );
};

export default EntryPage;

export const query = graphql`
  query EntryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        draft
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl 
      }
    }
  }
`;

export const Head: HeadFC<Queries.EntryPageQuery> = ({ data }) => {
  const articleTitle = data?.markdownRemark?.frontmatter?.title ?? "";
  const siteTitle = data?.site?.siteMetadata?.title ?? "";

  const slug = data?.markdownRemark?.frontmatter?.slug ?? "";
  const siteUrl = data?.site?.siteMetadata?.siteUrl ?? "";

  const description = toPlainText(
    data?.markdownRemark?.rawMarkdownBody ?? "",
  ).slice(0, 160);

  return (
    <CommonHead
      title={`${articleTitle} | ${siteTitle}`}
      siteUrl={`${siteUrl}/entry/${slug}`}
      description={description}
    />
  );
};
