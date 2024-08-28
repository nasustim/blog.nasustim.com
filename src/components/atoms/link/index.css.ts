import { vars } from "@/style.css";
import { style } from "@vanilla-extract/css";

export const noStyle = style({
	color: "inherit",
	textDecoration: "inherit",
});

export const css = style({
	color: vars.color.primary,
});
