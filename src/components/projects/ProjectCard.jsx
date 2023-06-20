import * as React from "react";

export default function ProjectCard({ project }) {
  return (
    <ul className="grid grid-cols-2 gap-4 mt-6 mb:grid-cols-none">
      {project.child.map((projectItem) => (
        <a
          key={projectItem.title}
          href={projectItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full p-4 cursor-pointer hover:bg-[#88888808]"
        >
          <section className=" flex items-center gap-[24px]">
            <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
              {projectItem.icon}
            </div>
            <div>
              <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">
                {projectItem.title}
              </h4>
              <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">
                {projectItem.description}
              </p>
            </div>
          </section>
        </a>
      ))}
    </ul>
  );
}
