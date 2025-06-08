import { minWidthForDesktop } from "@/components/templates/index.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  maxWidth: minWidthForDesktop,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const titleStyle = style({
  flexShrink: 1,
});

export const h1Style = style({
  fontSize: "32px",
  fontWeight: "400",
});

export const h2Style = style({
  fontSize: "16px",
  fontWeight: "300",
});
export const linkListStyle = style({
  flexShrink: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px",
});
export const linkStyle = style({
  fontSize: 14,
  fontWeight: "bold",
  textDecorationLine: "none",

  "@media": {
    // pc
    [`screen and (min-width: ${minWidthForDesktop}px)`]: {
      fontSize: 18,
    },
  },
});
