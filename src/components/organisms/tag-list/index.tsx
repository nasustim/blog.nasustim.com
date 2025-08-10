import { type FC } from "react";
import { Tag } from "@/components/atoms/tag";
import { createTagSlug } from "@/utils/tagUtils";
import { containerStyle } from "./index.css";

type Props = {
  tags: string[];
  clickable?: boolean;
  title?: string;
};

export const TagList: FC<Props> = ({ tags, clickable = true, title }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={containerStyle}>
      {title && <span>{title}</span>}
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          tagSlug={createTagSlug(tag)}
          clickable={clickable}
        />
      ))}
    </div>
  );
};