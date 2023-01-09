import React, { useMemo, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { getFiles, getFileById, getRecommendations } from "@/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import format from "@/lib/format";
import useInjectContentMeta from "@/hooks/useInjectContentMeta";
import TableContents from "@/components/TableContents";
import MDXComponents from "@/components/MDXComponents";
import useScrollSpy from "@/hooks/useScrollspy";
import Link from "next/link";

export default function SingleBlogPage({ code, frontmatter, recommendations }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const [toc, setToc] = useState();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;
  const activeSection = useScrollSpy();
  useEffect(() => {
    const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3");
    const headingArr = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  return (
    <Layout>
      <Seo
        templateTitle="Blog"
        description="Showcase of my projects on front-end development that I'm proud of."
      />
      <main>
        <section>
          <div className="pt-8 layout">
            <section className="grid grid-cols-[auto,334px] gap-8  mid:grid-cols-none">
              <article className="mdx prose mx-auto mt-4 w-full rounded-[8px] border border-white bg-black px-8 py-6 shadow transition-colors mb:px-4 mb:pt-0">
                <span className="mt-0 block  border-b-[1px] border-solid border-b-[#eee] pb-[0.2em] text-3xl font-normal leading-normal text-[#fff] 	">
                  {frontmatter.title}
                </span>
                <p className="mt-2 text-sm text-gray-300">
                  {format(frontmatter.publishedAt, "LL")}
                </p>
                <Component
                  components={{
                    ...MDXComponents,
                  }}
                />
              </article>

              <aside className="py-4 mid:hidden">
                <div className="sticky top-[84px] rounded-[8px] px-4 py-5 shadow">
                  <TableContents
                    toc={toc}
                    minLevel={minLevel}
                    activeSection={decodeURI(activeSection)}
                  />
                </div>
              </aside>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const posts = await getFiles("blog");
  return {
    paths: posts.map((p) => {
      return {
        params: {
          slug: p.replace(/\.mdx/, ""),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileById("blog", params?.slug);
  const recommendations = await getRecommendations(params?.slug);
  return {
    props: { ...post, recommendations },
  };
};
