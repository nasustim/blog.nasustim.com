# Tagging Feature Implementation Plan

## 1. Update Type Definitions
- [x] Add `tags` field to frontmatter schemas in relevant files  
- [x] Create new page context types for tag pages

## 2. Enhance GraphQL Queries  
- [ ] Update `gatsby-node.ts` queries to fetch tags from frontmatter
- [ ] Update article page query to include tags
- [ ] Update index page query to include tags for display in article lists

## 3. Create Tag Pages in gatsby-node.ts
- [ ] Collect all unique tags from articles (excluding drafts)
- [ ] Generate individual tag pages at `/tag/{tag-slug}` showing articles with that tag
- [ ] Generate a tags index page at `/tags` listing all available tags with article counts

## 4. Create New Page Components
- [ ] `src/page-components/tag/index.tsx` - Tag list page showing all tags
- [ ] `src/page-components/tag/articles.tsx` - Individual tag page showing articles with that tag

## 5. Create Tag Components
- [ ] `src/components/atoms/tag/` - Individual tag link component
- [ ] `src/components/organisms/tag-list/` - List of tags component

## 6. Update Existing Components
- [ ] **MarkdownRenderer**: Add tags display with clickable links below article title/date
- [ ] **ArticleList**: Add tags display in article list items
- [ ] Update GraphQL fragments and schemas to include tags

## 7. Create Utilities
- [ ] Tag slug generation (handle Japanese characters, spaces, special chars)
- [ ] Tag sorting and filtering utilities

## 8. Update Navigation/Linking
- [ ] Add tags navigation to main template if desired
- [ ] Ensure all tag links use consistent URL structure (`/tag/{tag-slug}`)

## Testing & Verification
- [ ] Run `npm run build` to verify build works
- [ ] Run `npm run biome:ci` to check code quality
- [ ] Test tag pages load correctly
- [ ] Verify tag links work from articles
- [ ] Check tags display in article lists