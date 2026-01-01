import type { FC, ReactNode } from "react";
import { TagList } from "@/components/organisms/tag-list";
import { blockStyle, css, h2Style } from "./index.css";

type Props = {
  title: string;
  date?: string;
  tags?: string[];
  children: ReactNode;
};

export const MdxRenderer: FC<Props> = ({
  title,
  date = "",
  tags = [],
  children,
}) => (
  <div className={css}>
    <div className={blockStyle}>
      {date ? <small>{date}</small> : null}
      <h2 className={h2Style}>{title}</h2>
      {tags.length > 0 && <TagList tags={tags} />}
    </div>
    <div className={blockStyle}>{children}</div>
  </div>
);
