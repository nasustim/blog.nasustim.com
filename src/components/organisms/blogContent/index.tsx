import { FormattedDate } from "@/components/molecules/formattedDate";
import type { FC, ReactNode } from "react";
import "./style.css";

type Props = {
	children: ReactNode;
	title: string;
	date: Date;
};
export const BlogContent: FC<Props> = ({ children, title, date }) => (
	<article>
		<div className="prose">
			<div className="title">
				<div className="date">
					<FormattedDate date={date} />
				</div>
				<h1>{title}</h1>
				<hr />
			</div>
			{children}
		</div>
	</article>
);
