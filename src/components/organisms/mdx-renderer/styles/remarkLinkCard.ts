import type { GlobalStyleRule } from "@vanilla-extract/css";
import { vars } from "@/style.css";

export const remarkLinkCardStyles: {
  selector: string;
  rule: GlobalStyleRule;
}[] = [
  {
    selector: ".remark-link-card-plus__container",
    rule: {
      border: `1px solid ${vars.color.bgSecondary}`,
      padding: "12px",

      width: "100%",
      maxWidth: "600px",
      height: "140px",
    },
  },
  {
    selector: ".remark-link-card-plus__card",
    rule: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  },

  {
    selector: ".remark-link-card-plus__main",
    rule: {
      margin: 0,

      flex: "6",
    },
  },
  {
    selector: ".remark-link-card-plus__title",
    rule: {
      fontSize: "22px",
      fontWeight: 700,
      textDecoration: "none",
    },
  },
  {
    selector: ".remark-link-card-plus__url",
    rule: {
      fontSize: "12px",
      color: vars.color.secondary,
      textDecoration: "none",
    },
  },
  {
    selector: ".remark-link-card-plus__main .remark-link-card-plus__meta",
    rule: {
      display: "flex",
      flexDirection: "row",
    },
  },
  {
    selector: ".remark-link-card-plus__main .remark-link-card-plus__meta img",
    rule: {
      margin: 0,
    },
  },

  {
    selector: ".remark-link-card-plus__thumbnail",
    rule: {
      margin: 0,
      maxWidth: "40%",
    },
  },
];
