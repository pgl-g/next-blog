import * as React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

import Layout from "@/components/layout/Layout";
import CustomLink from "@/components/links/CustomLink";
import Seo from "@/components/layout/Seo";

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle="Not Found" />

      <main>
        <section>
          <div className="layout flex  flex-col items-center justify-center text-center text-black">
            <BsFillXCircleFill
              size={60}
              className="drop-shadow-glow animate-flicker text-red-500"
            />
            <h1 className="md:text-6xl mt-8 text-4xl dark:text-neutral-200">
              404 Not Found
            </h1>
            <CustomLink href="/">← Back to blog</CustomLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
