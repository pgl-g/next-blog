import Layout from "@/layout";
import Seo from "@/layout/Seo";
import TypeIt from "typeit-react";
import { getFiles, getFileById, getRecommendations } from "@/utils/mdx";

export default function Home({ recommendations }) {
  return (
    <Layout>
      <Seo />
      <div className="max-w-[1200px] my-0 mx-auto">
        <ul className="grid gap-4 grid-cols-3">
          {recommendations.map((item, index) => (
            <li
              className="w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark scale-100 
            hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow"
              key={item.slug}
            >
              <a
                href={`/blog/${item.slug}`}
                className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
              >
                <div>
                  <figure className="pointer-events-none overflow-hidden rounded-t-md">
                    <div className="w-full h-[155px]">
                      <img src={item.img} alt={`${item.img} + ${index}`} />
                    </div>
                  </figure>
                </div>
                <div className="p-4">
                  <h4 className="text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h4>
                  <p className="mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-bold text-gray-800 dark:text-gray-100">
                      {item.lastUpdated}
                    </span>
                  </p>

                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <TypeIt options={{ breakLines: true, loop: true, loopDelay: 3000 }}>
          <strong className="py-4 leading-tight text-black font-light font-mono dark:text-[#bbb]">
            🤔 持续优化中..
          </strong>
        </TypeIt>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const dir = await getFiles("blog");
  const dirPost = dir.map((p) => ({
    slug: p.replace(/\.mdx/, ""),
  }));
  let post, recommendations;
  for (const params of dirPost) {
    post = await getFileById("blog", params?.slug);

    recommendations = await getRecommendations(params?.slug);
  }
  return {
    props: { ...post, recommendations },
  };
};
