import { vars } from "@/style.css";
import { style } from '@vanilla-extract/css';

export const css = style({
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: 16,
  backgroundColor: vars.color.white,
  margin: 0,
  width: '100vw',
  minHeight: '100vh'
})

