import { Link } from "@/components/atoms/link";
import { SITE_ORIGIN } from "@/config";
import { Fragment, useMemo, type FC } from "react";
import { h2Style, listItemStyle, pStyle } from "./index.css";

type ListItem = {
	date: string;
	slug: string;
	title: string;
	body: string;
};

type Props = {
	list: Array<ListItem>;
};

export const ArticleList: FC<Props> = ({ list }) => {
	return (
		<div>
			<ul>
				{list.map((v) => (
					<Fragment key={`article-list-${v.slug}`}>
						<Item {...v} />
					</Fragment>
				))}
			</ul>
		</div>
	);
};

const Item: FC<ListItem> = (v) => {
	const body = useMemo(() => {
		let result = v.body.replace(/<[^>]*>?/gm, "");
		if (result.length > 100) {
			result = `${result.slice(0, 120)}...`;
		}
		return result;
	}, [v.body]);

	return (
		<Fragment>
			<li className={listItemStyle}>
				<Link to={new URL(`/entry${v.slug}`, SITE_ORIGIN)} noStyle>
					<small>{v.date}</small>
					<h2 className={h2Style}>{v.title}</h2>
					<p className={pStyle}>{body}...</p>
				</Link>
			</li>
		</Fragment>
	);
};
