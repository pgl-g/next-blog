import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { getFiles, getFileById, getRecommendations } from "@/lib/mdx";
import useInjectContentMeta from "@/hooks/useInjectContentMeta";

export default function SingleBlogPage({ code, frontmatter, recommendations }) {
  // const populatedRecommendations = useInjectContentMeta(
  //   "blog",
  //   recommendations
  // );
  console.log(frontmatter);

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
                  标题
                </span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  时间
                </p>

                <div className="flex items-center justify-start gap-2 my-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">xxxxx</div>
                </div>
              </article>
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
