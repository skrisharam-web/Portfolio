"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/content/experience";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#08080A] border-t border-[#2A2A2F]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          title="EXPERIENCE"
          subtitle="Industry internships and practical security roles."
        />

        <div className="flex flex-col gap-8 max-w-4xl">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 bg-[#16161A] border border-[#2A2A2F] hover:border-[#FFB454]/40 rounded-[4px] flex flex-col gap-6 transition-colors duration-300"
            >
              {/* Header: Organization & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2A2A2F] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#202024] border border-[#3A3A40] rounded-[4px] text-[#FFB454]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#FAFAF8]">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-[#B8B8BE]">
                      {exp.organization}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#FFB454] bg-[#FFB454]/10 border border-[#FFB454]/30 px-3 py-1 rounded-full w-fit">
                  {exp.duration}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-[#85858C] uppercase tracking-wider">
                  RESPONSIBILITIES
                </span>
                <ul className="list-disc list-inside flex flex-col gap-2 font-body text-sm text-[#B8B8BE] leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
