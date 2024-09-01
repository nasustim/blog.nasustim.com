import "@acab/reset.css";

import type { FC, ReactNode } from "react";
import { containerCss, innerCss } from "./index.css";
import { Header } from "@/components/organisms/header";
import { themeClass } from "@/style.css";
import { clsx } from "clsx";

export const Template: FC<{
	children: ReactNode;
}> = ({ children }) => (
	<div className={clsx(themeClass, containerCss)}>
		<div className={innerCss}>
			<Header />
			{children}
		</div>
	</div>
);
