import type { FC } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { TagList } from "@/components/organisms/tag-list";
import { articleRoot, blockStyle, css, h2Style } from "./index.css";

type Props = {
  title: string;
  date?: string;
  markdown: string;
  tags?: string[];
};
export const MarkdownRenderer: FC<Props> = ({
  markdown,
  title,
  date = "",
  tags = [],
}) => (
  <div className={css}>
    <div className={blockStyle}>
      {date ? <small>{date}</small> : null}
      <h2 className={h2Style}>{title}</h2>
      {tags.length > 0 && <TagList tags={tags} />}
    </div>
    <article className={`${blockStyle} ${articleRoot}`}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown}
      </Markdown>
    </article>
  </div>
);
