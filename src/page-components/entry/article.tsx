import { MarkdownRenderer } from "@/components/organisms/markdown-renderer";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { Template } from "@/components/templates";
import { toPlainText } from "@/utils/markdownUtils";
import { type HeadFC, type PageProps, graphql } from "gatsby";
import { z } from "zod";

const EntryPage: React.FC<PageProps<Queries.EntryPageQueryQuery>> = ({
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
  query EntryPageQuery ($id: String!) {
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

const frontmatterSchema = z.object({
  date: z.string(),
  slug: z.string(),
  title: z.string(),
  draft: z.boolean(),
});

const siteMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  siteUrl: z.string(),
});

export const querySchema = z.object({
  markdownRemark: z.object({
    frontmatter: frontmatterSchema,
    rawMarkdownBody: z.string(),
  }),
  site: z.object({
    siteMetadata: siteMetadataSchema,
  }),
});

export const Head: HeadFC<Queries.EntryPageQueryQuery> = (props) => {
  const parseResult = querySchema.safeParse(props.data);
  if (parseResult.error) {
    throw new Error(parseResult.error.message);
  }
  const data = parseResult.data;

  const description = toPlainText(data.markdownRemark.rawMarkdownBody).slice(
    0,
    160,
  );

  return (
    <CommonHead
      title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
      siteUrl={`${data.site.siteMetadata.siteUrl}/entry/${data.markdownRemark.frontmatter.slug}`}
      description={description}
    />
  );
};
