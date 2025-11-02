import { type FC, Fragment, useMemo } from "react";
import { Link } from "@/components/atoms/link";
import { Tag } from "@/components/atoms/tag";
import { SITE_ORIGIN } from "@/config";
import { toPlainText } from "@/utils/markdownUtils";
import { getIndexPagePath } from "@/utils/paginationUtils";
import {
  h2Style,
  linkContentStyle,
  listItemStyle,
  pagerStyle,
  pStyle,
  tagListStyle,
} from "./index.css";

type ListItem = {
  date: string;
  slug: string;
  title: string;
  body: string;
  tags?: string[];
};

type TagData = {
  tag: string;
  tagSlug: string;
  count: number;
};

type Props = {
  list: Array<ListItem>;
  pagesCount: number;
  currentPageIndex: number;
  allTags?: TagData[];
};

export const ArticleList: FC<Props> = ({
  list,
  pagesCount,
  currentPageIndex,
  allTags = [],
}) => {
  const needsPagination = pagesCount > 1;

  return (
    <div>
      <ul>
        {list.map((v) => (
          <Fragment key={`article-list-${v.slug}`}>
            <Item {...v} />
          </Fragment>
        ))}
      </ul>
      {needsPagination ? (
        <Pager currentPageIndex={currentPageIndex} pagesCount={pagesCount} />
      ) : null}
      <TagsDisplay allTags={allTags} />
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
    <li className={listItemStyle}>
      <Link to={new URL(`/entry/${v.slug}`, SITE_ORIGIN)} noStyle>
        <div className={linkContentStyle}>
          <small>{v.date}</small>
          <h2 className={h2Style}>{v.title}</h2>
          <p className={pStyle}>{bodyText}</p>
        </div>
      </Link>
    </li>
  );
};

const Pager: FC<{
  pagesCount: number;
  currentPageIndex: number;
}> = ({ pagesCount, currentPageIndex }) => (
  <div>
    <div className={pagerStyle}>
      {Array.from({ length: pagesCount }).map((_, i) => {
        const to = new URL(getIndexPagePath(i), SITE_ORIGIN);

        if (i === currentPageIndex) {
          return <div key={`pager-current-${i + 1}`}>{i + 1}</div>;
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

const TagsDisplay: FC<{ allTags: TagData[] }> = ({ allTags }) =>
  allTags.length !== 0 && (
    <div className={tagListStyle}>
      {allTags.map((tagData) => (
        <Tag
          key={tagData.tagSlug}
          tag={`${tagData.tag} (${tagData.count})`}
          tagSlug={tagData.tagSlug}
          clickable
        />
      ))}
    </div>
  );
