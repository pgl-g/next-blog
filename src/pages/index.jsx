import Layout from "@/layout";
// import Image from 'next/image'
import Link from 'next/link'
import Seo from "@/layout/Seo";
import { FcNook } from "react-icons/fc";


export default function Home() {
  return (
    <Layout>
      <Seo />
      <div className="max-w-[1200px] my-0 mx-auto">
        <div className="h-[70vh]">
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl">Welcome to my blog.</h1>

            <p className="text-xl">
              首先欢迎大家来看我写的博客，我是PGL，本本分分的前端打工人😜。
            </p>

            <div className="w-[140px] inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-gray-200 hover:bg-slate-700 dark:bg-slate-2,text-dark">
              <Link href="/blog" className="btn btn-primary flex items-center">
                <span>
                  开始学习
                  <span aria-hidden="true" class="ml-1 sm:inline">→</span>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout >
  );
}