import { style } from "@vanilla-extract/css";
import { minWidthForDesktop } from "@/components/templates/index.css";
export const listItemStyle = style({
  margin: "46px 0 0 0",
  borderRadius: "8px",
  transition: "background-color 0.2s ease-in-out, transform 0.1s ease-in-out",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    transform: "translateY(-2px)",
  },
});

export const linkContentStyle = style({
  display: "block",
  padding: "16px 2px",
  textDecoration: "none",
  color: "inherit",

  "@media": {
    // pc
    [`screen and (min-width: ${minWidthForDesktop}px)`]: {
      padding: "16px",
    },
  },
});

export const h2Style = style({
  fontSize: "24px",
  fontWeight: "400",
});
export const pStyle = style({
  fontSize: "14px",
  fontWeight: "400",
});

export const pagerStyle = style({
  marginTop: "24px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "8px",
});
export const tagListStyle = style({
  marginTop: "24px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "8px",
});
