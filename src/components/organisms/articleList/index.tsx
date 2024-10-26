import { Link } from "@/components/atoms/link";
import { SITE_ORIGIN } from "@/config";
import { Fragment, useMemo, type FC } from "react";
import { h2Style, listItemStyle, pagerStyle, pStyle } from "./index.css";
import { toPlainText } from "@/utils/markdownUtils";
import { getIndexPagePath } from "@/utils/paginationUtils";

type ListItem = {
  date: string;
  slug: string;
  title: string;
  body: string;
};

type Props = {
  list: Array<ListItem>;
  pagesCount: number;
  currentPageIndex: number;
};

export const ArticleList: FC<Props> = ({
  list,
  pagesCount,
  currentPageIndex,
}) => {
  return (
    <div>
      <ul>
        {list.map((v) => (
          <Fragment key={`article-list-${v.slug}`}>
            <Item {...v} />
          </Fragment>
        ))}
      </ul>
      <div className={pagerStyle}>
        {Array.from({ length: pagesCount }).map((_, i) => {
          const to = new URL(getIndexPagePath(i), SITE_ORIGIN);

          if (i === currentPageIndex) {
            return <div>{i + 1}</div>;
          }
          return (
            <Link key={`pager-${to.toString()}`} to={to}>
              {i + 1}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Item: FC<ListItem> = (v) => {
  const bodyText = useMemo(() => {
    let result = toPlainText(v.body);
    if (result.length > 120) {
      result = `${result.slice(0, 120)}...`;
    }
    return result;
  }, [v.body]);

  return (
    <Fragment>
      <li className={listItemStyle}>
        <Link to={new URL(`/entry/${v.slug}`, SITE_ORIGIN)} noStyle>
          <small>{v.date}</small>
          <h2 className={h2Style}>{v.title}</h2>
          <p className={pStyle}>{bodyText}</p>
        </Link>
      </li>
    </Fragment>
  );
};
