import "@acab/reset.css";

import { clsx } from "clsx";
import type { FC, ReactNode } from "react";
import { Header } from "@/components/organisms/header";
import { themeClass } from "@/style.css";
import {
  containerCss,
  footerStyle,
  headerStyle,
  innerCss,
  mainStyle,
} from "./index.css";

export const Template: FC<{
  children: ReactNode;
  pathname: string;
}> = ({ children, pathname }) => (
  <div className={clsx(themeClass, containerCss)}>
    <div className={headerStyle}>
      <div className={innerCss}>
        <Header isTopPage={pathname === "/"} />
      </div>
    </div>
    <div className={`${innerCss} ${mainStyle}`}>{children}</div>
    <footer className={footerStyle}>
      <p>© nasustim, 2010-</p>
    </footer>
  </div>
);
