# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
bun run dev          # Start Astro development server (localhost:4321)
bun run build        # Build production site (includes type checking)
bun run preview      # Preview built site locally
bun run clean        # Clean Astro build artifacts
```

### Code Quality
```bash
bun run fix          # Fix all
bun run biome:fix    # Format and lint TypeScript/JavaScript code (auto-fix)
bun run biome:ci     # Check formatting and linting (CI mode)
bun run textlint:fix # Fix Japanese text formatting in content files
bun run textlint:ci  # Check Japanese text formatting (CI mode)
```

### Content Creation
```bash
bun run new          # Generate new blog article from boilerplate template
bun run ts           # Run TypeScript files directly (uses Node.js experimental features)
```

## Architecture Overview

### Framework & Stack
- **Static Site Generator**: Astro v5 with TypeScript and React 18
- **Styling**: Vanilla Extract CSS-in-JS with atomic design patterns
- **Content**: Markdown files with YAML frontmatter in Astro content collections (`src/content/blog/`)
- **Data Layer**: Astro content collections with Zod schema validation
- **Build Tool**: Vite (via Astro)

### Project Structure
```
src/
├── components/          # React components (atomic design, hydrated with client:load)
│   ├── atoms/          # Basic UI elements (Link, Tag, etc.)
│   ├── organisms/      # Complex components (ArticleList, Header, etc.)
│   └── templates/      # Layout templates
├── layouts/            # Astro layouts
│   └── MainLayout.astro
├── pages/              # Astro pages (routing)
│   ├── index.astro    # Home page
│   ├── p/[page].astro # Pagination
│   ├── entry/[slug].astro # Article pages
│   ├── tag/           # Tag filtering pages
│   └── tags/          # Tags index
├── content/           # Content collections
│   ├── blog/          # Blog posts as .md files
│   └── config.ts      # Content collection schema
├── utils/             # Utility functions (pagination, markdown, tags)
├── config.ts          # Site configuration constants
└── style.css.ts       # Global styles
```

### Content Management
- Articles stored as `.md` files in `src/content/blog/`
- Frontmatter fields: `slug` (optional), `title`, `date`, `draft` (default: false), `tags` (optional array)
- Article URLs: `/entry/{slug}` (slug from frontmatter or filename)
- Draft articles (`draft: true`) are excluded from production builds

### Page Generation
- **Index pages**: Paginated article listings (10 articles per page) at `/` and `/p/{n}`
- **Article pages**: Individual blog posts at `/entry/{slug}`
- **Tag pages**: Tag-filtered listings at `/tag/{tagSlug}` with pagination
- Dynamic page creation handled via `getStaticPaths()` in Astro page files
- Content collection queries filtered to exclude draft articles in production

### Component Architecture
- **Atomic Design**: Components organized as atoms → organisms → templates → pages
- **React Components**: Hydrated client-side with `client:load` directive
- **Astro Pages**: Server-side rendered `.astro` files in `src/pages/`
- **Path Aliases**: `@` maps to `src/` directory
- **CSS-in-JS**: Vanilla Extract for type-safe styling via Vite plugin
- **Font Icons**: FontAwesome React components

### Key Features
- RSS feed generation at `/rss.xml` (generated via `rss.xml.ts` endpoint)
- XML sitemap generation (via `@astrojs/sitemap`)
- Google Analytics integration (production only, in MainLayout)
- Progressive Web App manifest at `/manifest.json`
- Static site generation with 35+ pages

### Configuration Files
- `astro.config.mjs`: Main Astro configuration with React, sitemap, MDX integrations
- `src/content/config.ts`: Content collection schema with Zod validation
- `biome.jsonc`: Code formatting and linting rules
- `src/config.ts`: Site constants (URLs, tracking IDs, limits)

## Development Workflow

### Creating New Articles
1. Run `bun run new` to generate boilerplate from `src/boilerplate.md`
2. Edit frontmatter (slug, title, remove draft flag)
3. Write content in Markdown format
4. Test locally with `bun run dev`

### Code Style
- Use Biome for TypeScript/JavaScript formatting
- Use textlint for Japanese content quality
- Follow atomic design principles for components
- Prefer TypeScript over JavaScript for new files

### Testing Changes
- Development server supports hot reloading
- Build locally with `bun run build` before deployment
- Check both formatting tools pass: `biome:ci` and `textlint:ci`