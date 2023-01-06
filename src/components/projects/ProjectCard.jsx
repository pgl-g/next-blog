import * as React from "react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none text-white">
      {project.child.map((prjectItem) => (
        <a
          key={prjectItem.title}
          href={prjectItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group h-full p-4 cursor-pointer hover:bg-gray-900 rounded-xl"
        >
          <section className="flex items-center gap-[24px]">
            <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
              {prjectItem.icon}
            </div>
            <div>
              <h4 className="text-[#555] group-hover:text-gray-200">
                {prjectItem.title}
              </h4>
              <p className="mb-auto text-sm text-gray-400 opacity-50">
                {prjectItem.description}
              </p>
            </div>
          </section>
        </a>
      ))}
    </ul>
  );
}
