import { clsx } from "clsx";
import type { FC, ReactNode } from "react";
import { css, noStyle as noStyleCss } from "./index.css";

type Props = {
	children: ReactNode;
	to: URL;

	// styling
	noStyle?: boolean;
};

export const Link: FC<Props> = ({ to, children, noStyle = false }) => (
	<a className={clsx(noStyle ? noStyleCss : css)} href={to.toString()}>
		{children}
	</a>
);
