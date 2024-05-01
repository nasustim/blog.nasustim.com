import { type FC } from "react";

type Props = {
	date: Date;
};
export const FormattedDate: FC<Props> = ({ date }) => (
	<time dateTime={date.toISOString()}>
		{date.toLocaleDateString("ja-jp", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})}
	</time>
);
