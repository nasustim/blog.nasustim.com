import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.nasustim.com',
  publicDir: './static',
  integrations: [
    react(),
    sitemap(),
    mdx(),
  ],
  vite: {
    plugins: [vanillaExtractPlugin()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  build: {
    format: 'file',
  },
  trailingSlash: 'ignore',
});
