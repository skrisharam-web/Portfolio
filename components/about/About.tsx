"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { profileData } from "@/content/profile";
import { educationData } from "@/content/education";
import { BookOpen, GraduationCap, MapPin, Target, Building2 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#08080A]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          title="ABOUT"
          subtitle="I tend to look beyond the obvious."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story Narrative (720px max measure) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {profileData.aboutStory.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={fadeIn}
                className="font-body text-base md:text-lg text-[#B8B8BE] leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Currently Learning Strip per §13 */}
            {profileData.currentlyLearning && profileData.currentlyLearning.length > 0 && (
              <motion.div
                variants={fadeIn}
                className="mt-6 p-6 bg-[#16161A] border border-[#3A3A40] rounded-[4px] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFB454] uppercase font-semibold">
                  <BookOpen className="w-4 h-4" />
                  <span>CURRENTLY LEARNING & EXPANDING</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profileData.currentlyLearning.map((item) => (
                    <Tag key={item} tier="Currently Learning">
                      {item}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Mono Facts Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-6">
              <span className="font-mono text-xs text-[#FFB454] tracking-widest uppercase border-b border-[#2A2A2F] pb-3">
                {"// SYSTEM FACTS & LOCATION"}
              </span>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#FFB454] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[11px] text-[#85858C] uppercase block">
                    CURRENTLY STUDYING
                  </span>
                  <span className="font-mono text-sm text-[#FAFAF8] font-medium">
                    {profileData.facts.currentlyStudying}
                  </span>
                </div>
              </div>

              {profileData.facts.college && (
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#FFB454] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] text-[#85858C] uppercase block">
                      COLLEGE / INSTITUTION
                    </span>
                    <span className="font-mono text-sm text-[#FAFAF8] font-medium">
                      {profileData.facts.college}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#FFB454] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[11px] text-[#85858C] uppercase block">
                    PRIMARY FOCUS
                  </span>
                  <span className="font-mono text-sm text-[#FAFAF8] font-medium">
                    {profileData.facts.focusAreas}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB454] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[11px] text-[#85858C] uppercase block">
                    LOCATION
                  </span>
                  <span className="font-mono text-sm text-[#FAFAF8] font-medium">
                    {profileData.facts.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Education Timeline Block */}
            <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-4">
              <span className="font-mono text-xs text-[#FFB454] tracking-widest uppercase border-b border-[#2A2A2F] pb-3">
                {"// EDUCATION TIMELINE"}
              </span>

              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l border-[#3A3A40] flex flex-col gap-2">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#FFB454]" />
                  <span className="font-mono text-[11px] text-[#85858C]">
                    {edu.timeframe}
                  </span>
                  <h4 className="font-display text-base font-bold text-[#FAFAF8]">
                    {edu.degree}
                  </h4>
                  <p className="font-mono text-xs text-[#B8B8BE]">
                    {edu.institution} ·{" "}
                    <span className="text-[#FFB454]">{edu.status}</span>
                  </p>
                  {edu.description && (
                    <p className="font-body text-xs text-[#85858C] mt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
