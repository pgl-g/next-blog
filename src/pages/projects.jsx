import * as React from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsConfig } from "@/mock/projects";

export default function Projects() {
  return (
    <Layout>
      <Seo
        templateTitle="Projects"
        description="Showcase of my projects on front-end development that I'm proud of."
      />
      <main>
        <section>
          <div className="layout">
            <div
              className="mx-8 mt-12 grid max-w-[820px] gap-4 mb:mx-0 text-white"
              data-fade="1"
            >
              <p className="text-[32px] ">Projects</p>
              <p className="mb-[32px] italic opacity-50">
                Showcase of my projects on front-end development that I'm proud
                of.
              </p>

              {projectsConfig.map((project, index) => (
                <div key={index}>
                  <h1 className="text-[18px] text-[#555] dark:text-[#aaa]">
                    {project.category}
                  </h1>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
