import type { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { css,blockStyle, h2Style } from "./index.css";
import rehypeRaw from "rehype-raw";

type Props = {
	title: string;
	date?: string;
	markdown: string;
};
export const MarkdownRenderer: FC<Props> = ({ markdown, title, date = "" }) => (
	<div className={css}>
		<div className={blockStyle}>
			{date ? <small>{date}</small> : null}
			<h2 className={h2Style}>{title}</h2>
		</div>
    <div className={blockStyle}>
		<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
			{markdown}
		</Markdown>
    </div>
	</div>
);
