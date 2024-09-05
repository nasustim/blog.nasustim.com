import { vars } from "@/style.css";
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: 'white',
});

export const minWidthForDesktop = 860;

export const containerCss = style({
	width: "100svw",
	minHeight: "100svh",
	padding: 0,
	margin: 0,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "start",

	color: vars.color.primary,
});

export const innerCss = style({
	// common
	height: "100%",
	padding: 16,

	// sp
	width: "100%",

	"@media": {
		// pc
		[`screen and (min-width: ${minWidthForDesktop}px)`]: {
			width: minWidthForDesktop,
		},
	},
});

export const headerStyle = style({
	width: "100%",
	backgroundColor: vars.color.white,

	display: "flex",
	justifyContent: "center",
});
