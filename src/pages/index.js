import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main>
        <section>
          <div className="mt-[120px]  text-left tablet:mt-[80px] mb:mt-[40px]">
            <article>开始你的表演</article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
