/**
 * Tag utility functions
 */

/**
 * Convert a tag name to a URL-safe slug
 * Handles Japanese characters, spaces, and special characters
 */
export function createTagSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().trim());
}

/**
 * Get tag page path for a given tag slug
 */
export function getTagPagePath(tagSlug: string, pageIndex = 0): string {
  const basePath = `/tag/${tagSlug}`;
  return pageIndex === 0 ? basePath : `${basePath}/page/${pageIndex + 1}`;
}

/**
 * Get tags index page path
 */
export function getTagsIndexPath(): string {
  return "/tags";
}

/**
 * Sort tags alphabetically (handles Japanese characters properly)
 */
export function sortTags(tags: string[]): string[] {
  return [...tags].sort((a, b) => a.localeCompare(b, "ja"));
}

/**
 * Extract unique tags from a collection of articles with their counts
 */
export function extractTagsWithCounts(
  articles: Array<{ tags?: string[]; data?: { tags?: string[] } }>,
): Array<{ tag: string; tagSlug: string; count: number }> {
  const tagCounts = new Map<string, number>();

  for (const article of articles) {
    // Handle both Gatsby (article.tags) and Astro (article.data.tags) formats
    const tags = article.data?.tags || article.tags;
    if (tags) {
      for (const tag of tags) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }
  }

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      tagSlug: createTagSlug(tag),
      count,
    }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "ja"));
}

/**
 * Filter articles by tag
 */
export function filterArticlesByTag<T extends { tags?: string[] }>(
  articles: T[],
  targetTag: string,
): T[] {
  return articles.filter((article) => article.tags?.includes(targetTag));
}
