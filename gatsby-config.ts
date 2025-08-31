import type { GatsbyConfig } from "gatsby";
import { z } from "zod";
import { GTAG_TRACKING_ID, SITE_ORIGIN, TITLE } from "./src/config";

const rssFeedShema = z.object({
  allMarkdownRemark: z.object({
    nodes: z.array(
      z.object({
        excerpt: z.string(),
        html: z.string(),
        frontmatter: z.object({
          slug: z.string(),
          title: z.string(),
          date: z.string(),
        }),
      }),
    ),
  }),
  site: z.object({
    siteMetadata: z.object({
      siteUrl: z.string(),
    }),
  }),
});

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: TITLE,
    siteUrl: SITE_ORIGIN,
    description: "a weblog by @nasustim (Mitsuhiro Hibino)",
    twitterUsername: "@nasustim",
    image: "static/favicon-48x48.png",
  },
  graphqlTypegen: {
    typesOutputPath: "./src/types/gatsby-types.d.ts",
    generateOnBuild: true,
    documentSearchPaths: ["./plugins/**/gatsby-node.ts"],
  },
  plugins: [
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [GTAG_TRACKING_ID],
      },
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        width: 400,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon-48x48.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
      __key: "content",
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@": "./src",
        },
        extensions: [],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: (props: { query: object }) => {
              const result = rssFeedShema.safeParse(props.query);
              if (result.error) {
                throw new Error(result.error.message);
              }
              const query = result.data;

              return query.allMarkdownRemark.nodes.map((node) => {
                const url = `${query.site.siteMetadata.siteUrl}/entry/${node.frontmatter.slug}`;
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              query RssFeedQuery {
                allMarkdownRemark(
                  sort: {frontmatter: {date: DESC}}
                  filter: { frontmatter: { draft: { eq: false } } }
                ) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed of blog.nasustim.com",
          },
        ],
      },
    },
  ],
  jsxRuntime: "automatic",
};

export default config;
