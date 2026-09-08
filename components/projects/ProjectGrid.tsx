"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/content/projects";

export function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#08080A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          title="FEATURED PROJECTS & PROOF OF WORK"
          subtitle="Flagship security intelligence tools, zero-trust gateways, and high-throughput systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
