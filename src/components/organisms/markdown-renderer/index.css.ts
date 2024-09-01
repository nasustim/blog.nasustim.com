import { vars } from "@/style.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const css = style({
	width: "100%",
});

/**
 * belows are adjustments for whole html remark.js rendered
 */
globalStyle("*", {
 color: vars.color.primary,
});
globalStyle("p img", {
	maxWidth: "100%",
});
