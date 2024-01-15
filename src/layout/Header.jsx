import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import { useScroll } from "../hooks";
import { DiLaravel } from "../components/iconCpm";
import UnstyledLink from "../components/customCpm/UnstyledLink";

import clsx from "clsx";

const navVal = [
  {
    name: "Interview",
    link: "/interview",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  // {
  //   name: 'Demo',
  //   link: '/demo'
  // }
];

export default function Header() {
  const isDocHover = useScroll();
  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full bg-transparent transition overflow-hidden",
        "dark:border-b  dark:border-black",
        isDocHover &&
        "border-b border-black border-opacity-[0.12] bg-opacity-[98] backdrop-blur-md"
      )}
    >
      <section>
        <nav className="mx-8 w=full flex justify-between py-4 gap-[24px]">
          <UnstyledLink
            href="/"
            className="text-4xl text-dark dark:text-white"
          >
            <DiLaravel />
          </UnstyledLink>

          <ul className="flex items-center space-x-4">
            {navVal.map((item) => {
              return (
                <span key={item.name}>
                  <Link href={item.link}>
                    <span className="font-sans text-dark hover:text-gray-400 dark:text-white">
                      {item.name}
                    </span>
                  </Link>
                </span>
              );
            })}
            <Icon className="text-dark dark:text-white" />
          </ul>
        </nav>
      </section>
    </header>
  );
}
