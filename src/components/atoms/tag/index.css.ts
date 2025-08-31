import { style } from "@vanilla-extract/css";
import { vars } from "@/style.css";

export const tagStyle = style({
  display: "inline-block",
  padding: "0.2em 0.6em",
  margin: "0.1em",
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  fontSize: "0.8em",
  borderRadius: "4px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.color.secondary,
  },
});
