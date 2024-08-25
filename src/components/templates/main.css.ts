import { vars } from "@/style.css";
import { style } from '@vanilla-extract/css';

const minWidthForDesktop = 960

export const containerCss = style({
  width: '100%',
  minHeight: '100vh',
  padding:0,
  margin:0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: vars.color.white,

  display: "flex",
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center'
})

export const innerCss = style({
  // spa
  width: `100%`,
  padding: 16,

  "@media": {
    // pc
   [`screen and (min-width: ${minWidthForDesktop}px)`]: {
      width: minWidthForDesktop,
    },
  },
})

