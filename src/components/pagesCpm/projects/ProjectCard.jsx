import * as React from "react";
import UnstyledLink from "@/components/customCpm/UnstyledLink";

export default function ProjectCard({ project }) {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-6 mb:grid-cols-none">
      {project.child.map((projectItem) => (
        <UnstyledLink
          key={projectItem.title}
          href={projectItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full p-4 cursor-pointer hover:bg-[#88888808]"
        >
          <section className="flex items-center gap-[24px]">
            <div className="text-[38px] dark:text-white opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
              {projectItem.icon}
            </div>
            <div>
              <h4 className="text-[#555] dark:text-white dark:group-hover:text-white">
                {projectItem.title}
              </h4>
              <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">
                {projectItem.description}
              </p>
            </div>
          </section>
        </UnstyledLink>
      ))}
    </ul>
  );
}
