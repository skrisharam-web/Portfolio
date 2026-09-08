"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Trophy, ExternalLink, Github, Users, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { hackathonsData } from "@/content/hackathons";

export function HackathonAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(
    hackathonsData[0].id
  );

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="hackathons" className="py-24 px-6 md:px-12 bg-[#0A0A0B] border-t border-[#232326]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          title="HACKATHONS & COMPETITIONS"
          subtitle="Rapid prototyping, vulnerability tooling, and team engineering under 48-hour constraints."
        />

        <div className="flex flex-col gap-4 max-w-4xl">
          {hackathonsData.map((hack) => {
            const isOpen = expandedId === hack.id;
            return (
              <div
                key={hack.id}
                className="border border-[#232326] bg-[#141416] rounded-[4px] overflow-hidden transition-colors duration-200"
              >
                {/* Collapsed Header Bar */}
                <button
                  onClick={() => toggleAccordion(hack.id)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-[#1C1C1F] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#F2F2F0]">
                        {hack.name}
                      </h3>
                      <p className="font-mono text-xs text-[#5B7FFF]">
                        {hack.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#6B6B70] hidden sm:inline">
                      {hack.date}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A6A6AC] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#5B7FFF]" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#232326] p-6 flex flex-col gap-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Problem & Solution */}
                        <div className="flex flex-col gap-4">
                          <div>
                            <span className="font-mono text-[11px] text-[#6B6B70] uppercase block mb-1">
                              PROBLEM STATEMENT
                            </span>
                            <p className="font-body text-sm text-[#A6A6AC] leading-relaxed">
                              {hack.problemStatement}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[11px] text-[#5B7FFF] uppercase block mb-1 font-semibold">
                              PROTOTYPED SOLUTION
                            </span>
                            <p className="font-body text-sm text-[#F2F2F0] leading-relaxed">
                              {hack.solution}
                            </p>
                          </div>
                        </div>

                        {/* Image Placeholder & Details */}
                        <div className="flex flex-col gap-4">
                          <PlaceholderImage
                            label={`${hack.name} Event Photo`}
                            aspectRatio="16/10"
                            className="w-full"
                          />
                          <div className="flex items-center justify-between text-xs font-mono text-[#A6A6AC]">
                            <span className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-[#5B7FFF]" />
                              <span>{hack.role}</span>
                            </span>
                            <span>{hack.team}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack & Links */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#232326] pt-4">
                        <div className="flex flex-wrap gap-2">
                          <Wrench className="w-4 h-4 text-[#5B7FFF] self-center" />
                          {hack.techStack.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          {hack.projectUrl && (
                            <a
                              href={hack.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs text-[#5B7FFF] hover:underline"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>CODE REPO</span>
                            </a>
                          )}
                          {hack.certificateUrl && (
                            <a
                              href={hack.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs text-[#A6A6AC] hover:text-[#F2F2F0]"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>VERIFY RESULT</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
