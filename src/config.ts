const isProd = process.env.NODE_ENV === "production";

/**
 * Site configrations
 */
const SITE_SCHEMA = isProd ? "https" : "http";
const SITE_DOMAIN = isProd ? "blog.nasustim.com" : "localhost:8000";
export const SITE_ORIGIN = `${SITE_SCHEMA}://${SITE_DOMAIN}`;

export const ARTICLE_LIST_PAGE_LIMIT = 10;

/**
 * Google Tag Manager
 */
export const GTAG_TRACKING_ID = isProd
  ? "G-3YY246MS11"
  : "XXX-XXXXXXX-X" /* dummy tracking id */;

/**
 * Contents
 */
export const TITLE = "NASUSTIM";
export const SUB_TITLE = "Mitsuhiro HIBINO";
