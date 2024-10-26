import type { GatsbyConfig } from "gatsby";
import { GTAG_TRACKING_ID, SITE_ORIGIN, TITLE } from "./src/config";

const config: GatsbyConfig = {
  siteMetadata: {
    title: TITLE,
    siteUrl: SITE_ORIGIN,
    description: "a weblog by @nasustim (Mitsuhiro Hibino)",
    twitterUsername: "@nasustim",
    image: "static/favicon.png",
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
        icon: "static/favicon.png",
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
  ],
  jsxRuntime: "automatic",
};

export default config;
