import type { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { css } from "./index.css";
import rehypeRaw from "rehype-raw";

type Props = {
	markdown: string;
};
export const MarkdownRenderer: FC<Props> = ({ markdown }) => (
	<div className={css}>
		<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
			{markdown}
		</Markdown>
	</div>
);
