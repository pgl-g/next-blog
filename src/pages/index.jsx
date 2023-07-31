import Layout from "@/layout";
import Seo from "@/layout/Seo";
import TypeIt from "typeit-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <div className="max-w-[600px] text-black mx-8 mt-12 mb:mx-0 dark:text-[#bbb]">
        <TypeIt
          className="flex items-end  flex-col"
          options={{ breakLines: true, html: true }}
        >
          <strong className="py-4 leading-tight  font-light font-mono">
            🤔 Hello, 我是PGL。很高兴与你相遇，一同学习知识。
            希望你能玩得开心！！
          </strong>
          <Link href="/blog">
            <button className="block px-2 text-lg transition-colors border border-gray-600 rounded hover:bg-gray-700">
              TO BLOG
            </button>
          </Link>
        </TypeIt>
      </div>
    </Layout>
  );
}
