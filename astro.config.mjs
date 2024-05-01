import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/consts";

export default defineConfig({
	site: SITE_URL,
	integrations: [
		mdx(),
		sitemap(),
		react({
			experimentalReactChildren: true,
		}),
	],
});
