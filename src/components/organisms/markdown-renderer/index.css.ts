import { vars } from "@/style.css";
import { style, globalStyle } from "@vanilla-extract/css";

const sectionMargin = "16px";

export const css = style({
  width: "100%",
});
export const blockStyle = style({
  margin: `${sectionMargin} 0`,
});
export const h2Style = style({
  fontSize: "24px",
  fontWeight: "400",
});

/**
 * belows are adjustments for whole html remark.js rendered
 */
export const articleRoot = style({});
globalStyle(`${articleRoot} > *`, {
  marginTop: "24px",
});
for (let i = 1; i <= 5; i++) {
  const tag = `${articleRoot} h${i}`;
  const fontWeight = 500 - (i / 2) * 100;
  const fontSize = 28 - (i - 1) * 3;
  globalStyle(tag, {
    fontWeight,
    fontSize,
  });
}

// Lists
globalStyle(`${articleRoot} ul`, {
  listStyleType: "disc",
  marginLeft: "24px",
});
globalStyle(`${articleRoot} ol`, {
  listStyleType: "decimal",
  marginLeft: "24px",
});
globalStyle(`${articleRoot} li`, {
  paddingTop: "8px",
});

// Links
globalStyle(`${articleRoot} a`, {
  color: vars.color.primary,
});
globalStyle(`${articleRoot} a:hover`, {
  color: vars.color.secondary,
});

// Images
globalStyle(`${articleRoot} img`, {
  maxWidth: "100%",
  height: "400px",
  margin: "8px auto",
});

// select code tags only child of ul tags and p tags
for (const selector of [`${articleRoot} ul code`, `${articleRoot} p code`]) {
  globalStyle(selector, {
    border: "1px solid #b6b6b6",
    borderRadius: "4px",
    padding: "1px 4px",
    margin: "0 4px",
    backgroundColor: "#efefef",
    fontFamily: "monospace",
  });
}
// code blocks
globalStyle(`${articleRoot} > code, ${articleRoot} > pre code`, {
  display: "block",
  width: "100%",
  overflowX: "scroll",
  overflowWrap: "normal",

  borderLeftColor: vars.color.bgSecondary,
  borderLeftStyle: "solid",
  borderLeftWidth: "1px",
  borderRadius: "4px",
  padding: "4px 12px",
  backgroundColor: "#efefef",
  fontFamily: "monospace",
});
// tables
globalStyle(`${articleRoot} > table`, {
  borderCollapse: "collapse",
  overflowX: "scroll",
});
globalStyle(`${articleRoot} > table > thead`, {
  backgroundColor: vars.color.bgSecondary,
});
globalStyle(`${articleRoot} > table > tbody tr:nth-child(2n)`, {
  backgroundColor: "#efefef",
});
globalStyle(`${articleRoot} > table td, ${articleRoot} > table tr`, {
  padding: 10,
});

// references of footnotes
globalStyle(`${articleRoot} sup > a`, {
  fontWeight: "bold",
});
globalStyle(`${articleRoot} sup > a::before`, {
  content: "[",
});
globalStyle(`${articleRoot} sup > a::after`, {
  content: "]",
});

// footnotes
globalStyle(`${articleRoot} .footnotes h2`, {
  display: "none", // to hide default title
});
globalStyle(`${articleRoot} .footnotes ol`, {
  paddingLeft: sectionMargin,
});
globalStyle(`${articleRoot} .footnotes ol li`, {
  listStyle: "auto",
});

// blockquotes
globalStyle(`${articleRoot} > blockquote`, {
  borderLeftWidth: "4px",
  borderLeftStyle: "solid",
  borderLeftColor: vars.color.bgSecondary,
  padding: "12px 16px",
  margin: "24px 0",
  backgroundColor: "#f9f9f9",
});
