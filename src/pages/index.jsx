import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import BlogCard from "@/components/blog/BlogCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Seo />
      <main>
        <section>
          <div className="layout">
            <ul className="mx-8 mt-12 grid gap-4 mb:mx-0" data-fade="1">
              <div>
                <span className="inline-block pb-2 text-[24px] text-[#aaa]">
                  2022
                </span>
                <BlogCard />
              </div>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
