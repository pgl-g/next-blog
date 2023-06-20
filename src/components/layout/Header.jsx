import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiMoon, FiSun } from "react-icons/fi";

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
  const { theme, setTheme } = useTheme();

  return (
    <header className="stick top-0 z-50 w-full bg-transparent 'dark:border-b  dark:border-black',">
      <section className="layout">
        <div className="mx-4 lg:mx-8 flex items-center justify-between gap-[24px]">
          <nav className="w=full flex justify-between py-4">
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
          </nav>

          <div className="flex items-center space-x-3 text-base">
            <a
              href="https://github.com/pgl-g"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub />
            </a>
            {/* 一键换肤 */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
