import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import TypeIt from "typeit-react";

export default function Home() {
  return (
    <Layout>
      <Seo />
      <div className="flex justify-center items-center text-white mx-8 mt-12 mb:mx-0 ">
        <TypeIt options={{ breakLines: true, html: true }}>
          <strong className="py-4 leading-tight  font-light font-mono">
            🤔 Hello, 我是PGL。很高兴与你相遇，一同学习知识。
            希望你能玩得开心！！
          </strong>
        </TypeIt>
      </div>
    </Layout>
  );
}
