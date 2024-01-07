import Layout from "@/layout";
import Seo from "@/layout/Seo";
import BlogCard from "@/components/pagesCpm/blogCard/BlogCard";
// import TypeIt from "typeit-react";
import { getAllFilesFrontmatter } from "@/utils/mdx";
import TypeIt from "@/components/commonCpm/animationText/typeit";


const Blogs = ({ data }) => {
  const getYear = (a) => new Date(a).getFullYear();

  const isSameYear = (a, b) => a && b && getYear(a) === getYear(b);

  return (
    <Layout>
      <Seo templateTitle="Blog" description="Person Blog" />
      <main>
        <section>
          <div className="layout">
            <ul className="grid mx-4 mt-12" data-fade="1">
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

              <TypeIt>
                🤔 头好痒啊！要长脑袋了..
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
