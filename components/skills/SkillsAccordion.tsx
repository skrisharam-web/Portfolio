"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Code, Shield, Network, Cloud, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillsData } from "@/content/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  Cybersecurity: <Shield className="w-4 h-4 text-[#FFB454]" />,
  Networking: <Network className="w-4 h-4 text-[#FFB454]" />,
  Programming: <Code className="w-4 h-4 text-[#FFB454]" />,
  Cloud: <Cloud className="w-4 h-4 text-[#FFB454]" />,
  "Tools & Platforms": <Wrench className="w-4 h-4 text-[#FFB454]" />,
};

export function SkillsAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    skillsData[0].category
  );
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#08080A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          title="TECHNICAL SKILLS & CAPABILITIES"
          subtitle="Honest, tier-rated skill breakdowns. Zero fabricated percentage bars."
        />

        <div className="flex flex-col gap-4 max-w-4xl">
          {skillsData.map((cat) => {
            const isOpen = openCategory === cat.category;
            return (
              <div
                key={cat.category}
                className="border border-[#2A2A2F] bg-[#16161A] rounded-[4px] overflow-hidden transition-colors duration-200"
              >
                {/* Accordion Category Header */}
                <button
                  onClick={() => toggleCategory(cat.category)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-[#202024] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {categoryIcons[cat.category]}
                    <span className="font-display text-lg font-bold text-[#FAFAF8]">
                      {cat.category}
                    </span>
                    <span className="font-mono text-xs text-[#85858C]">
                      ({cat.skills.length} competencies)
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B8B8BE] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#FFB454]" : ""
                    }`}
                  />
                </button>

                {/* Accordion Category Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#2A2A2F] divide-y divide-[#2A2A2F]"
                    >
                      {cat.skills.map((skill) => {
                        const isSkillExpanded = expandedSkill === skill.name;
                        return (
                          <div
                            key={skill.name}
                            onClick={() => toggleSkill(skill.name)}
                            className="p-4 md:px-6 hover:bg-[#202024]/60 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-body text-sm font-semibold text-[#FAFAF8]">
                                {skill.name}
                              </span>
                              <Tag tier={skill.tier}>{skill.tier}</Tag>
                            </div>
                            {/* Skill Detail Description */}
                            <AnimatePresence>
                              {isSkillExpanded && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="mt-2 font-body text-xs md:text-sm text-[#B8B8BE] leading-relaxed pt-1"
                                >
                                  {skill.description}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
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
