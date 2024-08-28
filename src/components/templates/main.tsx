import '@acab/reset.css';

import type { FC, ReactNode } from "react";
import { containerCss, innerCss } from "./main.css";
import { Header } from "@/components/organisms/header";

export const MainTemplate: FC<{
	children: ReactNode;
}> = ({ children }) => (
	<>
		<div className={containerCss}>
			<div className={innerCss}>
				<Header />
				{children}
			</div>
		</div>
	</>
);
