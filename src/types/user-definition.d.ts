type IndexPageContext = {
  limit: number;
  skip: number;
  pagesCount: number;
  currentPageIndex: number;
};

type EntryPageContext = {
  id: string;
};

type TagPageContext = {
  tag: string;
  tagSlug: string;
  limit: number;
  skip: number;
  pagesCount: number;
  currentPageIndex: number;
};

type TagIndexPageContext = {
  tags: Array<{
    tag: string;
    tagSlug: string;
    count: number;
  }>;
};
