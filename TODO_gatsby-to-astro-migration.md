# Gatsby to Astro Migration - Task Breakdown

## Overview
Migrate from Gatsby.js to Astro while preserving all appearance and features including:
- Paginated article listing (10 per page)
- Individual article pages
- Tag-based filtering with pagination
- RSS feed, sitemap, analytics
- Vanilla Extract CSS styling
- All existing content and routes

---

## Phase 1: Project Setup & Dependencies

### 1.1 Initialize Astro Project
- [ ] Install Astro core dependencies
- [ ] Set up TypeScript configuration compatible with Astro
- [ ] Configure path aliases (`@/*` → `./src/*`)
- [ ] Set up bun as package manager

### 1.2 Install Required Integrations
- [ ] `@astrojs/react` - React component support
- [ ] `@astrojs/mdx` or content collections for markdown
- [ ] `@astrojs/sitemap` - XML sitemap generation
- [ ] `@astrojs/rss` - RSS feed generation
- [ ] Image optimization solution (Astro's built-in or sharp)
- [ ] Vanilla Extract integration for Astro

### 1.3 Install Supporting Libraries
- [ ] Keep existing utilities: `zod`, `clsx`, `ts-dedent`
- [ ] Keep markdown processors: `remark-gfm`, `rehype-raw`
- [ ] Keep FontAwesome if still needed
- [ ] Remove Gatsby-specific dependencies

---

## Phase 2: Content Collections & Data Layer

### 2.1 Set Up Content Collections
- [ ] Create `src/content/config.ts` with content collection schema
- [ ] Define frontmatter schema matching existing structure (slug, title, date, draft, tags)
- [ ] Validate schema with Zod
- [ ] Migrate all `.md` files from `src/content/` to `src/content/blog/`

### 2.2 Replace GraphQL Queries
- [ ] Replace `IndexPageQuery` with content collection queries
- [ ] Replace `EntryPageQuery` with content collection single item fetch
- [ ] Replace `TagArticlesPageQuery` with tag filtering logic
- [ ] Implement sorting by date (DESC)
- [ ] Implement draft filtering for production builds

### 2.3 Utility Function Migration
- [ ] Keep `paginationUtils` (no changes needed)
- [ ] Keep `tagUtils` (no changes needed)
- [ ] Keep `markdownUtils` (no changes needed)
- [ ] Update `config.ts` with new Astro build URLs

---

## Phase 3: Styling System Migration

### 3.1 Vanilla Extract Setup
- [ ] Configure `@vanilla-extract/vite-plugin` for Astro
- [ ] Verify `src/style.css.ts` theme works with Astro
- [ ] Test component-scoped `.css.ts` files compile correctly
- [ ] Ensure global styles apply properly

### 3.2 Component Styles Migration
- [ ] Verify all atom component styles work (Link, Tag)
- [ ] Verify all organism component styles work (ArticleList, Header, etc.)
- [ ] Verify template styles work
- [ ] Test responsive breakpoints (860px desktop)
- [ ] Test markdown renderer styles (headings, code, tables, etc.)

---

## Phase 4: Component Migration

### 4.1 Atomic Components
- [ ] Migrate `atoms/link` to Astro (handle external links)
- [ ] Migrate `atoms/tag` to Astro

### 4.2 Organism Components
- [ ] Migrate `organisms/header` to Astro
- [ ] Migrate `organisms/article-list` to Astro (with pagination)
- [ ] Migrate `organisms/markdown-renderer` to Astro/React hybrid
- [ ] Migrate `organisms/tag-list` to Astro
- [ ] Migrate `organisms/meta/common-head` to Astro layout head

### 4.3 Template/Layout Components
- [ ] Migrate `templates/index` to Astro layout
- [ ] Ensure header, footer, and main content area work
- [ ] Test layout nesting and slot usage

---

## Phase 5: Page Routing & Generation

### 5.1 Static Routes
- [ ] Create `src/pages/index.astro` (home page)
- [ ] Create `src/pages/404.astro` (not found)
- [ ] Create `src/pages/tags/index.astro` (tags index)

### 5.2 Dynamic Routes
- [ ] Create `src/pages/entry/[slug].astro` (article pages)
- [ ] Implement `getStaticPaths()` to generate all article pages
- [ ] Filter out draft articles in production
- [ ] Pass frontmatter and content to page component

### 5.3 Pagination Routes
- [ ] Create `src/pages/p/[page].astro` (index pagination)
- [ ] Implement `getStaticPaths()` with pagination logic (10 per page)
- [ ] Calculate total pages and page numbers
- [ ] Handle page 1 vs `/p/1` routing

### 5.4 Tag Filtering Routes
- [ ] Create `src/pages/tag/[tagSlug]/index.astro` (tag page 1)
- [ ] Create `src/pages/tag/[tagSlug]/page/[page].astro` (tag pagination)
- [ ] Implement `getStaticPaths()` for all tag combinations
- [ ] Filter articles by tag with pagination

---

## Phase 6: Page Components & Logic

### 6.1 Index Page
- [ ] Migrate `page-components/index.tsx` logic to Astro
- [ ] Fetch paginated articles from content collection
- [ ] Pass articles, page count, current page to ArticleList
- [ ] Implement SEO meta tags in layout head

### 6.2 Article Page
- [ ] Migrate `page-components/entry/article.tsx` logic to Astro
- [ ] Fetch single article by slug
- [ ] Render markdown content with MarkdownRenderer
- [ ] Implement article-specific meta tags (OG, Twitter cards)
- [ ] Handle draft articles (empty render or 404)

### 6.3 Tag Pages
- [ ] Migrate `tag/articles.tsx` logic to Astro
- [ ] Fetch and filter articles by tag
- [ ] Implement pagination for tag pages
- [ ] Render ArticleList with tag-filtered content

### 6.4 Tags Index Page
- [ ] Migrate `tag/index.tsx` logic to Astro
- [ ] Extract all unique tags with counts
- [ ] Sort tags alphabetically (locale-aware)
- [ ] Render TagList component

---

## Phase 7: Build-Time Features

### 7.1 RSS Feed
- [ ] Create `src/pages/rss.xml.ts` endpoint
- [ ] Use `@astrojs/rss` to generate feed
- [ ] Include title, date, excerpt, full HTML content
- [ ] Filter out draft articles
- [ ] Validate output matches existing RSS structure

### 7.2 Sitemap
- [ ] Configure `@astrojs/sitemap` in `astro.config.mjs`
- [ ] Verify all public pages are included
- [ ] Exclude draft article pages

### 7.3 Google Analytics
- [ ] Add Google Analytics script to layout head
- [ ] Use production tracking ID: `G-3YY246MS11`
- [ ] Conditionally load based on environment

### 7.4 PWA Manifest
- [ ] Create `public/manifest.json` or use Astro PWA integration
- [ ] Reference `favicon-48x48.png` icon
- [ ] Set app name, colors, etc.

---

## Phase 8: Configuration & Build

### 8.1 Astro Config
- [ ] Create `astro.config.mjs` with all integrations
- [ ] Set site URL: `https://blog.nasustim.com`
- [ ] Configure build output directory
- [ ] Enable React integration with proper options
- [ ] Configure Vanilla Extract plugin

### 8.2 TypeScript Config
- [ ] Update `tsconfig.json` for Astro
- [ ] Extend `astro/tsconfigs/strict` or appropriate preset
- [ ] Maintain path alias `@/*`
- [ ] Include Astro type definitions

### 8.3 Development Scripts
- [ ] Update `package.json` scripts for Astro commands
- [ ] `dev` → `astro dev`
- [ ] `build` → `astro build`
- [ ] `preview` → `astro preview` (replace `serve`)
- [ ] Keep `biome:fix`, `textlint:fix`, `new` scripts

### 8.4 Content Creation Script
- [ ] Update `scripts/create-new-article.ts` if needed
- [ ] Ensure boilerplate path matches new structure
- [ ] Verify output directory is correct (`src/content/blog/`)

---

## Phase 9: Testing & Validation

### 9.1 Visual Testing
- [ ] Compare homepage appearance (side-by-side)
- [ ] Compare article page appearance
- [ ] Compare tag pages appearance
- [ ] Compare tags index appearance
- [ ] Verify 404 page styling
- [ ] Test responsive design on mobile/tablet

### 9.2 Functional Testing
- [ ] Test all internal links work correctly
- [ ] Test external links open in new tabs
- [ ] Test pagination navigation (prev/next, page numbers)
- [ ] Test tag filtering and navigation
- [ ] Verify draft articles are hidden in production
- [ ] Test RSS feed validates and contains correct data
- [ ] Test sitemap includes all pages

### 9.3 Performance Testing
- [ ] Compare build times (Gatsby vs Astro)
- [ ] Verify page load performance (Lighthouse scores)
- [ ] Check bundle sizes
- [ ] Verify images are optimized

### 9.4 Code Quality
- [ ] Run `bun run biome:ci` and fix any issues
- [ ] Run `bun run textlint:ci` on content
- [ ] Verify TypeScript has no errors
- [ ] Check for any console warnings

---

## Phase 10: Deployment & Cleanup

### 10.1 Build Configuration
- [ ] Update build/deployment scripts if needed
- [ ] Test production build locally
- [ ] Verify all environment variables are set
- [ ] Check analytics tracking works in production

### 10.2 Git & Version Control
- [ ] Create migration branch
- [ ] Commit all changes with clear messages
- [ ] Update `.gitignore` for Astro artifacts
- [ ] Create pull request

### 10.3 Documentation
- [ ] Update `CLAUDE.md` with new Astro commands
- [ ] Update README if it exists
- [ ] Document any breaking changes or new patterns
- [ ] Remove Gatsby-specific documentation

### 10.4 Cleanup
- [ ] Remove all Gatsby dependencies from `package.json`
- [ ] Delete `gatsby-config.ts`, `gatsby-node.ts`
- [ ] Delete Gatsby type definitions
- [ ] Remove `.cache/`, `public/` directories from git
- [ ] Remove Gatsby-specific config files
- [ ] Archive old Gatsby code if needed

### 10.5 Final Deployment
- [ ] Deploy to production (or staging first)
- [ ] Verify live site matches expectations
- [ ] Test RSS feed URL works
- [ ] Test sitemap URL works
- [ ] Monitor for any errors

---

## Risk Assessment & Contingencies

### High Risk Areas
- **Vanilla Extract compatibility**: May need alternative CSS-in-JS solution
- **Markdown rendering**: React-markdown in Astro may need special handling
- **Image optimization**: Different patterns than Gatsby
- **Dynamic route generation**: Astro's getStaticPaths differs from gatsby-node

### Fallback Plans
- **CSS Migration**: Can fall back to CSS Modules or Tailwind if Vanilla Extract fails
- **Component Hydration**: May need to mark some components for client-side hydration
- **Build Performance**: Astro should be faster, but may need optimization

---

## Success Criteria

✅ All existing routes work with same URLs
✅ Visual appearance is pixel-perfect match
✅ RSS feed validates and has same structure
✅ Sitemap includes all pages
✅ Pagination works correctly (10 per page)
✅ Tag filtering works correctly
✅ Draft articles are hidden
✅ Analytics tracking works
✅ Build completes without errors
✅ All linters pass
✅ Performance is equal or better

---

## Estimated Timeline

- **Phase 1-2**: 2-3 hours (setup + content)
- **Phase 3-4**: 3-4 hours (styling + components)
- **Phase 5-6**: 4-5 hours (routing + pages)
- **Phase 7-8**: 2-3 hours (features + config)
- **Phase 9-10**: 2-3 hours (testing + deployment)

**Total: ~13-18 hours**

---

## Notes

- This migration maintains the exact same feature set
- Astro should provide better performance (partial hydration)
- Content files remain unchanged (only directory structure)
- Most utility functions can be reused as-is
- The biggest changes are in routing and data fetching patterns
