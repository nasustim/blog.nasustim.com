import { style } from "@vanilla-extract/css";
import { vars } from "@/style.css";

export const noStyle = style({
  color: "inherit",
  textDecoration: "inherit",
});

export const linkStyle = style({
  color: vars.color.primary,
  ":hover": {
    color: vars.color.secondary,
  },
});
