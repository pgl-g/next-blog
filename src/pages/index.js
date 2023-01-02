import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import TitleHead from '../components/TitleHead'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <TitleHead />
      <main>
        <section>
          <div className="mt-[120px]  text-left tablet:mt-[80px] mb:mt-[40px]">
            <article>个人简历</article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
