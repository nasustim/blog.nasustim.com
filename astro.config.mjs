import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
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
