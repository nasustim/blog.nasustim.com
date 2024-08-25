import type { GatsbyConfig } from "gatsby";
import { GTAG_TRACKING_ID, SITE_DOMAIN } from "./src/config";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `blog.nasustim.com`,
		siteUrl: `https://${SITE_DOMAIN}`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
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
        width: 400
      }
    },
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "static/icon.png",
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/content/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: "./src/content/",
			},
			__key: "content",
		},
		"gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "./src",
        },
        extensions: [],
      }
    },
	],
  jsxRuntime: 'automatic',
};

export default config;
