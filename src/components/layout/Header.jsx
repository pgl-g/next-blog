import { useMemo } from "react";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';

const navVal = [
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent bg-gradient-to-r from-gray-700 to-gray-500 bg-opacity-10">
      <section className="layout">
        <div className="mx-8 flex h-[60px] items-center justify-between leading-[60px]">
          <div className="flex h-full w-auto flex-row items-center justify-center gap-[24px] mb:hidden">
            {navVal.map((item) => {
              return (
                <div key={item.name}>
                  <Link href={item.link}>
                    <span className="text-gray-100 hover:text-gray-400">
                      {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex gap-[24px] text-[22px]">
            <a
              href="https://github.com/pgl-g"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
