import type { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { css, blockStyle, h2Style, articleRoot } from "./index.css";
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
		<article className={`${blockStyle} ${articleRoot}`}>
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{markdown}
			</Markdown>
		</article>
	</div>
);
