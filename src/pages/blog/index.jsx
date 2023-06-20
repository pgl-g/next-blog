import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import BlogCard from "@/components/blog/BlogCard";
import TypeIt from "typeit-react";
import { getAllFilesFrontmatter } from "@/lib/mdx";

const Blogs = ({ data }) => {
  const getYear = (a) => new Date(a).getFullYear();

  const isSameYear = (a, b) => a && b && getYear(a) === getYear(b);

  return (
    <Layout>
      <Seo />
      <main>
        <section>
          <div className="layout">
            <ul className="grid gap-4 mx-4 mt-12" data-fade="1">
              {data.map((item, index) => (
                <div key={item.slug}>
                  {!isSameYear(
                    item.publishedAt,
                    data[index - 1]?.publishedAt
                  ) && (
                    <span className="inline-block pb-2 text-[24px] text-[#aaa]">
                      {getYear(item.publishedAt)}
                    </span>
                  )}
                  <BlogCard data={item} key={item.slug} />
                </div>
              ))}

              <TypeIt
                options={{ breakLines: true, loop: true, loopDelay: 3000 }}
              >
                <strong className="py-4 leading-tight text-black font-light font-mono">
                  🤔 头好痒啊！要长脑袋了..
                </strong>
              </TypeIt>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter("blog");

  const filesSort = files.sort(
    (a, b) =>
      new Date(b.lastUpdated ?? b.publishedAt).valueOf() -
      new Date(a.lastUpdated ?? a.publishedAt).valueOf()
  );
  return { props: { data: filesSort } };
}

export default Blogs;
