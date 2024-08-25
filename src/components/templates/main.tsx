import { type FC, type ReactNode } from "react";
import { css } from "./main.css";
import { Header } from "@/components/organisms/header";

export const MainTemplate: FC<{
  children: ReactNode
}> = ({ children }) => <>
  <div className={css}>
    <Header />
    {children}
  </div>
</>