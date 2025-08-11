import { z } from "zod";

export const ogpDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  siteName: z.string().optional(),
  url: z.string(),
  type: z.string().optional(),
});

export type OgpData = z.infer<typeof ogpDataSchema>;

const OGP_CACHE = new Map<string, OgpData | null>();
const OGP_PENDING = new Map<string, Promise<OgpData | null>>();

/**
 * Extract OGP metadata from HTML content
 */
function extractOgpFromHtml(html: string, url: string): OgpData {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const getMetaContent = (property: string): string | undefined => {
    const element = doc.querySelector(
      `meta[property="${property}"], meta[name="${property}"]`,
    );
    return element?.getAttribute("content") || undefined;
  };

  return {
    url,
    title: getMetaContent("og:title") || doc.title || undefined,
    description:
      getMetaContent("og:description") ||
      getMetaContent("description") ||
      undefined,
    image: getMetaContent("og:image") || undefined,
    siteName: getMetaContent("og:site_name") || undefined,
    type: getMetaContent("og:type") || undefined,
  };
}

/**
 * Fetch OGP metadata for a given URL
 * Note: This implementation may face CORS issues for many sites
 * In production, consider using a CORS proxy or server-side API
 */
export async function fetchOgpData(url: string): Promise<OgpData | null> {
  try {
    new URL(url);
  } catch {
    return null;
  }

  if (OGP_CACHE.has(url)) {
    return OGP_CACHE.get(url) ?? null;
  }

  if (OGP_PENDING.has(url)) {
    const pendingRequest = OGP_PENDING.get(url);
    if (pendingRequest) {
      return await pendingRequest;
    }
  }

  const fetchPromise = (async (): Promise<OgpData | null> => {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; OGP-Bot/1.0)",
        },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();
      const ogpData = extractOgpFromHtml(html, url);

      OGP_CACHE.set(url, ogpData);
      return ogpData;
    } catch (error) {
      console.warn(`Failed to fetch OGP data for ${url}:`, error);
      OGP_CACHE.set(url, null);
      return null;
    } finally {
      OGP_PENDING.delete(url);
    }
  })();

  OGP_PENDING.set(url, fetchPromise);
  return await fetchPromise;
}

/**
 * Check if a URL should be rendered as an OGP card
 * Only standalone URLs (not inline links) should become cards
 */
export function isStandaloneUrl(text: string, href: string): boolean {
  const trimmedText = text.trim();
  const trimmedHref = href.trim();

  return trimmedText === trimmedHref || trimmedText === href;
}

/**
 * Clear OGP cache (useful for development/testing)
 */
export function clearOgpCache(): void {
  OGP_CACHE.clear();
  OGP_PENDING.clear();
}
