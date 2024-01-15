import Layout from "../layout";
// import Image from 'next/image'
import Link from 'next/link'
import Seo from "../layout/Seo";
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
              First of all, welcome everyone to take a look at my blog. I am PGL, a frontend worker for not go beyond moral bounds😜。
            </p>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link href="/blog" className="btn btn-primary flex items-center">
                Our blog <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout >
  );
}