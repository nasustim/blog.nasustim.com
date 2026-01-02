import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_ORIGIN, TITLE } from "@/config";
import { makeDescription } from "@/utils/markdownUtils";

export async function GET(context: APIContext) {
  // Get all non-draft blog posts
  const allPosts = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  // Sort by date descending
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: TITLE,
    description:
      "Latest articles from Mitsuhiro Hibino's blog (https://blog.nasustim.com)",
    site: context.site ?? SITE_ORIGIN,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: makeDescription(post.body),
      link: `/entry/${post.data.slug}`,
      content: post.body,
    })),
    customData: "<language>ja</language>",
  });
}
