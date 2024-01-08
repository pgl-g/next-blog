import Layout from "@/layout";
import Seo from "@/layout/Seo";
import BlogCard from "@/components/pagesCpm/blogCard/BlogCard";
import { getAllFilesFrontmatter } from "@/utils/mdx";
import TypeIt from "@/components/commonCpm/animationText/typeit";


const Blogs = ({ data }) => {

  return (
    <Layout>
      <Seo templateTitle="Blog" description="Person Blog" />
      <main>
        <section>
          <div className="layout grid mx-4 mt-12">
            <BlogCard data={data} />
            <TypeIt>
              🤔 头好痒啊！要长脑袋了..
            </TypeIt>
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
      new Date(b.time ?? b.time).valueOf() -
      new Date(a.time ?? a.time).valueOf()
  );
  return { props: { data: filesSort } };
}

export default Blogs;
