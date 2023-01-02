import { useMemo } from "react";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs';

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
    <header className="sticky top-0 z-50 w-full bg-transparent bg-green-400 bg-opacity-[98] backdrop-blur-[40px]">
      <section className="layout">
        <div className="mx-8 flex h-[60px] items-center justify-between leading-[60px]">
          {/* 头部导航 */}
          <div className="flex h-full w-auto flex-row items-center justify-center gap-[24px] mb:hidden">
            {navVal.map((item) => {
              return (
                <div key={item.name}>
                  <Link href={item.link}>{item.name}</Link>
                </div>
              );
            })}
          </div>
          {/* 地址 */}
          <div className="flex gap-[24px] text-[22px]">
            <a
              href="https://github.com/pgl-g"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
