const isProd = process.env.NODE_ENV === "production";

/**
 * Site configrations
 */
const SITE_SCHEMA = isProd ? "https" : "http";
const SITE_DOMAIN = isProd ? "blog.nasustim.com" : "localhost:8000";
export const SITE_ORIGIN = `${SITE_SCHEMA}://${SITE_DOMAIN}`;

/**
 * Google Tag Manager
 */
export const GTAG_TRACKING_ID = isProd ? "G-3YY246MS11" : "";

/**
 * Contents
 */
export const TITLE = "おみつ雑記";
