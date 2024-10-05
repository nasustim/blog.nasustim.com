import { graphql, useStaticQuery } from "gatsby";
import type { FC } from "react";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  siteUrl?: string;
};

export const CommonHead: FC<Props> = ({
  title,
  description,
  image,
  siteUrl,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl 
        }
      }
    }
  `);
  const { twitterUsername } = data.site.siteMetadata;

  const _title = title ?? data.site.siteMetadata.title;
  const _description = description ?? data.site.siteMetadata.description;
  const _image = image ?? data.site.siteMetadata.image;
  const _siteUrl = siteUrl ?? data.site.siteMetadata.siteUrl;

  return (
    <>
      <html lang="ja" />

      <title>{_title}</title>
      <meta name="description" content={_description} />
      <link rel="canonical" href={_siteUrl} />

      {/** OpenGraph */}
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:image" content={_image} />
      <meta property="og:url" content={_siteUrl} />
      <meta
        property="og:type"
        content={
          // todo: Change to more surely process
          _siteUrl.match("entry") ? "article" : "website"
        }
      />

      {/** X (former Twitter) */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={_siteUrl} />
      <meta property="twitter:title" content={_title} />
      <meta property="twitter:image" content={_image} />
      <meta property="twitter:description" content={_description} />
      <meta property="twitter:creator" content={twitterUsername} />
    </>
  );
};
