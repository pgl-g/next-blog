import React, { useMemo, useState, useEffect } from "react";
import useSWR from "swr";

const cleanBlogPrefix = (slug) => {
  if (slug.slice(0, 3) === "id-") {
    return slug.slice(3);
  } else {
    return slug;
  }
};

export function useInjectContentMeta(type, formatter) {
  const { data, error } = useSWR(
    process.env.NODE_ENV === "production" ? "/api/constants" : null
  );
  const isLoading = !error;
  const meta = useMemo(() => type, [type]);

  const [populatedContent, setPopulatedContent] = useState(() => [
    ...formatter,
  ]);

  useEffect(() => {
    if (meta) {
      const mapped = formatter.map((fm) => {
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
  }, [meta, isLoading, formatter]);

  return populatedContent;
}
