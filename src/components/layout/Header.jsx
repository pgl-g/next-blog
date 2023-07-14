import React from "react";
import Link from "next/link";
import Icon from "./Icon";

import { useScroll } from "@/hooks";

import clsx from "clsx";

const navVal = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export default function Header() {
  const isDocHover = useScroll();
  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full bg-transparent transition",
        "dark:border-b  dark:border-black",
        isDocHover &&
          "solid border-b border-black border-opacity-[0.12] bg-opacity-[98] backdrop-blur-md dark:bg-neutral-800"
      )}
    >
      <section className="layout">
        <div className="mx-4 flex items-center justify-between gap-[24px]">
          <div className="w=full flex justify-between py-4">
            <ul className="flex justify-between space-x-4">
              {navVal.map((item) => {
                return (
                  <span key={item.name}>
                    <Link href={item.link}>
                      <span className="text-black hover:text-gray-400 dark:text-white">
                        {item.name}
                      </span>
                    </Link>
                  </span>
                );
              })}
            </ul>
          </div>
          <Icon />
        </div>
      </section>
    </header>
  );
}
