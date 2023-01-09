import * as React from "react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <ul className="grid grid-cols-2 gap-4 mt-6 text-white mb:grid-cols-none">
      {project.child.map((prjectItem) => (
        <a
          key={prjectItem.title}
          href={prjectItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full p-4 cursor-pointer group hover:bg-gray-900 rounded-xl"
        >
          <section className="flex items-center gap-[24px]">
            <div className="text-[38px] opacity-50 group-hover:opacity-70">
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
