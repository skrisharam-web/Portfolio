"use client";

import { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldAlert, Cpu } from "lucide-react";
import { Project } from "@/content/types";
import { Tag } from "@/components/ui/Tag";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Subtle 3D Card Tilt per §25 (capped 2-3 degrees, damped)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "group relative bg-[#16161A] border border-[#2A2A2F] hover:border-[#FFB454]/50 rounded-[4px] overflow-hidden flex flex-col justify-between transition-all duration-300",
        project.featured ? "lg:col-span-2" : "col-span-1"
      )}
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* Top Image Banner */}
        <div className="relative overflow-hidden">
          <PlaceholderImage
            label={`${project.title} Screenshot`}
            aspectRatio={project.featured ? "16/9" : "16/10"}
            className="w-full group-hover:scale-105 transition-transform duration-500"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-[#FFB454] text-[#08080A] font-mono text-[10px] font-bold tracking-widest uppercase rounded-[4px]">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>FLAGSHIP FEATURED PROJECT</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col justify-between flex-1 gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#FAFAF8] group-hover:text-[#FFB454] transition-colors">
                {project.title}
              </h3>
              <div className="p-2 rounded-full border border-[#3A3A40] group-hover:border-[#FFB454] text-[#B8B8BE] group-hover:text-[#FFB454] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* One-Line Problem Statement (§17) */}
            <p className="font-body text-sm text-[#B8B8BE] leading-relaxed line-clamp-2">
              {project.oneLiner}
            </p>
          </div>

          {/* Tech Stack Tags (2-3 tags on card per §17) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Cpu className="w-3.5 h-3.5 text-[#FFB454]" />
            {project.technologies.slice(0, 4).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.technologies.length > 4 && (
              <span className="font-mono text-[10px] text-[#85858C]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
