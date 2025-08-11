import { vars } from "@/style.css";
import { style } from "@vanilla-extract/css";

export const ogpCardStyle = style({
  display: "flex",
  border: `1px solid ${vars.color.bgSecondary}`,
  borderRadius: "8px",
  textDecoration: "none",
  color: "inherit",
  overflow: "hidden",
  marginTop: "16px",
  marginBottom: "16px",
  transition: "box-shadow 0.2s ease",
  maxWidth: "100%",

  ":hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const ogpImageStyle = style({
  width: "120px",
  height: "90px",
  objectFit: "cover",
  flexShrink: 0,
  backgroundColor: vars.color.bgSecondary,

  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
      height: "150px",
    },
  },
});

export const ogpContentStyle = style({
  padding: "12px 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  minWidth: 0,
});

export const ogpTitleStyle = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.primary,
  marginBottom: "4px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  lineHeight: 1.4,
});

export const ogpDescriptionStyle = style({
  fontSize: "14px",
  color: "#666",
  marginBottom: "8px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  lineHeight: 1.4,
});

export const ogpSiteNameStyle = style({
  fontSize: "12px",
  color: vars.color.bgSecondary,
  fontWeight: 500,
  textTransform: "uppercase",
});

export const ogpLoadingStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  border: `1px solid ${vars.color.bgSecondary}`,
  borderRadius: "8px",
  marginTop: "16px",
  marginBottom: "16px",
  color: vars.color.bgSecondary,
  fontSize: "14px",
});

export const ogpErrorStyle = style({
  color: vars.color.primary,
  textDecoration: "none",
  borderBottom: `1px solid ${vars.color.primary}`,

  ":hover": {
    color: vars.color.secondary,
    borderBottomColor: vars.color.secondary,
  },
});
