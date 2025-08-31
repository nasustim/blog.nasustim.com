import { clsx } from "clsx";
import { type FC, type ReactNode, useMemo } from "react";
import { SITE_ORIGIN } from "@/config";
import { linkStyle, noStyle as noStyleCss } from "./index.css";

type Props = {
  children: ReactNode;
  to: URL;

  // styling
  noStyle?: boolean;
};

export const Link: FC<Props> = ({ to, children, noStyle = false }) => {
  const props = useMemo(() => {
    const isExternalLink = to.origin !== SITE_ORIGIN;
    return isExternalLink ? { target: "_blank", rel: "noreferrer" } : {};
  }, [to]);

  return (
    <a
      className={clsx(noStyle ? noStyleCss : linkStyle)}
      href={to.toString()}
      {...props}
    >
      {children}
    </a>
  );
};
