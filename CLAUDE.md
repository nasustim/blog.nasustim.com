# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
bun run dev          # Start Gatsby development server (localhost:8000)
bun run build        # Build production site
bun run serve        # Serve built site locally
bun run clean        # Clean Gatsby cache and public directory
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
- **Static Site Generator**: Gatsby.js v5 with TypeScript and React 18
- **Styling**: Vanilla Extract CSS-in-JS with atomic design patterns
- **Content**: Markdown files with YAML frontmatter stored in `src/content/`
- **GraphQL**: Type-safe queries with Zod schema validation
- **Build Tool**: Webpack (via Gatsby)

### Project Structure
```
src/
├── components/          # React components (atomic design)
│   ├── atoms/          # Basic UI elements (Link, etc.)
│   ├── organisms/      # Complex components (ArticleList, Header, etc.)
│   └── templates/      # Layout templates
├── page-components/    # Page-level components for routing
├── content/           # Blog posts as .md files
├── utils/             # Utility functions (pagination, markdown)
├── types/             # TypeScript definitions
├── config.ts          # Site configuration constants
└── style.css.ts       # Global styles
```

### Content Management
- Articles stored as `.md` files in `src/content/`
- Required frontmatter fields: `slug`, `title`, `date`, `draft`
- Optional frontmatter: `tags` (array)
- Article URLs: `/entry/{slug}`
- Draft articles (draft: true) are excluded from builds

### Page Generation
- **Index pages**: Paginated article listings (10 articles per page)
- **Article pages**: Individual blog posts at `/entry/{slug}`
- Dynamic page creation handled in `gatsby-node.ts`
- GraphQL queries filtered to exclude draft articles in production

### Component Architecture
- **Atomic Design**: Components organized as atoms → organisms → templates → pages
- **Path Aliases**: `@` maps to `src/` directory
- **CSS-in-JS**: Vanilla Extract for type-safe styling
- **Font Icons**: FontAwesome React components

### Key Features
- RSS feed generation at `/rss.xml`
- XML sitemap generation
- Google Analytics integration (production only)
- Image optimization with gatsby-plugin-image
- Progressive Web App manifest

### Configuration Files
- `gatsby-config.ts`: Main Gatsby configuration
- `gatsby-node.ts`: Page generation logic
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