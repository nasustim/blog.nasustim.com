import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): SiteSiteMetadata => {
	const data = useStaticQuery<SiteSiteMetadata>(graphql`
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

	return data.site.siteMetadata;
};
