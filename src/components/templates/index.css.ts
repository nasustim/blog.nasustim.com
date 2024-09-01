import { vars } from "@/style.css";
import { style } from "@vanilla-extract/css";

const minWidthForDesktop = 960;

export const containerCss = style({
	width: "100svw",
	minHeight: "100svh",
	padding: 0,
	margin: 0,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
	backgroundColor: vars.color.white,

	display: "flex",
	flexDirection: "row",
	alignItems: "start",
	justifyContent: "center",
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
