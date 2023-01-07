import * as React from "react";
import useSWR from "swr";

// import { pickContentMeta } from "@/lib/contentMeta";

const cleanBlogPrefix = (slug) => {
  if (slug.slice(0, 3) === 'id-') {
    return slug.slice(3);
  } else {
    return slug;
  }
};

export default function useInjectContentMeta(type, frontmatter) {
  const { data, error } = useSWR(
    process.env.NODE_ENV === 'production' ? "/api/constants" : null
  );
  const isLoading = !error;
  const meta = React.useMemo(
    () => type,
    [type]
  );

  const [populatedContent, setPopulatedContent] =
    React.useState(
      () => [...frontmatter]
    );

  React.useEffect(() => {
    if (meta) {
      const mapped = frontmatter.map((fm) => {
        const views = meta.find(
          (meta) => meta.slug === cleanBlogPrefix(fm.slug)
        )?.views;
        const likes = meta.find(
          (meta) => meta.slug === cleanBlogPrefix(fm.slug)
        )?.likes;
        return { ...fm, views, likes };
      });

      setPopulatedContent(mapped);
    }
  }, [meta, isLoading, frontmatter]);

  return populatedContent;
}
