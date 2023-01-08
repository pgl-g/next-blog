import * as React from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { getFiles, getFileById, getRecommendations } from "@/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import format from "@/lib/format";
import useInjectContentMeta from "@/hooks/useInjectContentMeta";

export default function SingleBlogPage({ code, frontmatter, recommendations }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const [toc, setToc] = React.useState();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;
  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');
    const headingArr = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

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
              <article className="mdx prose dark:prose-invert mx-auto mt-4 w-full rounded-[8px] border border-white bg-white px-8 py-6 shadow transition-colors dark:border-gray-600 dark:bg-[#121212] mb:px-4 mb:pt-0">
                <span className="mt-0 block  border-b-[1px] border-solid border-b-[#eee] pb-[0.2em] text-3xl font-normal leading-normal text-[#1f2d3d] dark:border-b-gray-600	dark:text-[#fff]	dark:opacity-90">
                  {frontmatter.title}
                </span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {format(frontmatter.publishedAt, "LL")}
                </p>
                <Component />
              </article>

              <aside className="py-4 mid:hidden">
                <div className="sticky top-[84px] rounded-[8px] bg-white px-4 py-5 shadow dark:bg-[#121212]">
                  {/* 执行列表 */}
                  <div
                    id="toc-container"
                    className="block max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4"
                  >
                    <h3 className="text-xl text-gray-900 dark:text-gray-100 dark:opacity-90">
                      目录
                    </h3>
                    <div className="flex flex-col mt-4 space-y-2 text-sm">
                      {toc
                        ? toc.map(({ id, level, text }) => (
                            // <TOCLink
                            //   id={id}
                            //   key={id}
                            //   activeSection={activeSection}
                            //   level={level}
                            //   minLevel={minLevel}
                            //   text={text}
                            // />
                            <span>{level} {text}</span>
                          ))
                        : null}
                    </div>
                  </div>
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
