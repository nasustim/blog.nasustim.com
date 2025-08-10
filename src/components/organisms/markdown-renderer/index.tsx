import type { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { css, blockStyle, h2Style, articleRoot } from "./index.css";
import { TagList } from "@/components/organisms/tag-list";
import rehypeRaw from "rehype-raw";

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
      {tags.length > 0 && (
        <TagList tags={tags} />
      )}
    </div>
    <article className={`${blockStyle} ${articleRoot}`}>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown}
      </Markdown>
    </article>
  </div>
);
