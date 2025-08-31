import type { HeadFC, PageProps } from "gatsby";
import { Link } from "@/components/atoms/link";
import { CommonHead } from "@/components/organisms/meta/common-head";
import { Template } from "@/components/templates/";
import { SITE_ORIGIN } from "@/config";
import { getTagPagePath } from "@/utils/tagUtils";

const TagsIndexPage: React.FC<
  PageProps<Record<string, never>, TagIndexPageContext>
> = ({ pageContext, location }) => {
  const { tags } = pageContext;

  return (
    <Template pathname={location.pathname}>
      <main>
        <h1>Tags</h1>
        <p>All tags used in articles</p>
        <div>
          {tags.length === 0 ? (
            <p>No tags found.</p>
          ) : (
            <ul>
              {tags.map((tagData) => (
                <li key={tagData.tagSlug}>
                  <Link
                    to={new URL(getTagPagePath(tagData.tagSlug), SITE_ORIGIN)}
                  >
                    {tagData.tag} ({tagData.count})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </Template>
  );
};

export default TagsIndexPage;

export const Head: HeadFC = () => {
  return <CommonHead title="Tags" />;
};
