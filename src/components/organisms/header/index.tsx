import type { FC } from "react";
import { Link } from "@/components/atoms/link";
import { SITE_ORIGIN } from "@/config";
import {
  containerStyle,
  h1Style,
  h2Style,
  linkListStyle,
  linkStyle,
  titleStyle,
} from "./index.css";

type Props = {
  isTopPage?: boolean;
};
export const Header: FC<Props> = ({ isTopPage }) => (
  <header className={containerStyle}>
    <div className={titleStyle}>
      <Link to={new URL(!isTopPage ? "/" : "/#", SITE_ORIGIN)} noStyle={true}>
        <h1 className={h1Style}>Blog</h1>
        <h2 className={h2Style}>by Mitsuhiro Hibino</h2>
      </Link>
    </div>
    <div className={linkListStyle}>
      <Link to={new URL("/", "https://nasustim.com")} className={linkStyle}>
        About Me
      </Link>
    </div>
  </header>
);
