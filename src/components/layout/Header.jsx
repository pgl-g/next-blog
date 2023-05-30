import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const navVal = [
  {
    name: "",
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
    <header className="fixed top-0 z-50 w-full bg-transparent bg-gradient-to-r from-gray-800 to-gray-700 bg-opacity-10">
      <section className="layout leading-[60px]">
        <div className="mx-8 flex gap-[24px] items-center justify-between ">
          <div className="flex h-full items-center gap-[10px] text-gray-100">
            <Image
              src="https://s.xinc818.com/files/webcili9q6kh172h7t9/P (1).png"
              width={20}
              height={20}
              alt=""
            />

            <Link href={"/"} className="hover:text-gray-400">
              Pgl-g's Blog
            </Link>
          </div>

          <div className="flex h-full w-auto items-center justify-center gap-[24px] mb:hidden">
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

            <a
              href="https://github.com/pgl-g"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 text-[22px]"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
