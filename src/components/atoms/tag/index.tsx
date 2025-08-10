import type { FC } from "react";
import { Link } from "@/components/atoms/link";
import { SITE_ORIGIN } from "@/config";
import { getTagPagePath } from "@/utils/tagUtils";
import { tagStyle } from "./index.css";

type Props = {
  tag: string;
  tagSlug: string;
  clickable?: boolean;
};

export const Tag: FC<Props> = ({ tag, tagSlug, clickable = true }) => {
  if (clickable) {
    return (
      <Link to={new URL(getTagPagePath(tagSlug), SITE_ORIGIN)} noStyle>
        <span className={tagStyle}>{tag}</span>
      </Link>
    );
  }

  return <span className={tagStyle}>{tag}</span>;
};
