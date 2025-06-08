import { Link } from "@/components/atoms/link";
import {
  containerStyle,
  h1Style,
  h2Style,
  linkListStyle,
  linkStyle,
  titleStyle,
} from "./index.css";
import { SITE_ORIGIN, SUB_TITLE, TITLE } from "@/config";
import type { FC } from "react";

type Props = {
  isTopPage?: boolean;
};
export const Header: FC<Props> = ({ isTopPage }) => (
  <header className={containerStyle}>
    <div className={titleStyle}>
      <Link to={new URL(!isTopPage ? "/" : "/#", SITE_ORIGIN)} noStyle={true}>
        <h1 className={h1Style}>{TITLE}</h1>
        <h2 className={h2Style}>{SUB_TITLE}</h2>
      </Link>
    </div>
    <div className={linkListStyle}>
      <Link to={new URL("/", "https://nasustim.com")}>
        <span className={linkStyle}>[ABOUT ME]</span>
      </Link>
    </div>
  </header>
);
