import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

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
  return (
    <header className="stick top-0 z-50 w-full bg-transparent">
      <section className="layout">
        <div className="mx-4 lg:mx-8 flex items-center justify-between gap-[24px]">
          <nav className="w=full flex justify-between py-4">
            <ul className="flex justify-between space-x-4">
              {navVal.map((item) => {
                return (
                  <span key={item.name}>
                    <Link href={item.link}>
                      <span className="text-black hover:text-gray-400">
                        {item.name}
                      </span>
                    </Link>
                  </span>
                );
              })}
            </ul>
          </nav>

          <a
            href="https://github.com/pgl-g"
            rel="noreferrer"
            target="_blank"
            className="text-black text-[22px]"
          >
            <BsGithub />
          </a>
        </div>
      </section>
    </header>
  );
}
