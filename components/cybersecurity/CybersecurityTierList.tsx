"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { cybersecurityData } from "@/content/cybersecurity";
import { ShieldCheck, Info } from "lucide-react";

export function CybersecurityTierList() {
  const tiers = [
    {
      label: "Comfortable With",
      description: "Solid working knowledge, applied repeatedly in projects.",
    },
    {
      label: "Hands-on Experience",
      description: "Applied in labs, CTFs, or research environments.",
    },
    {
      label: "Currently Learning",
      description: "Actively studying, building initial practical depth.",
    },
    {
      label: "Exploring",
      description: "Early interest, studying foundational concepts.",
    },
  ] as const;

  return (
    <section id="cybersecurity" className="py-20 px-6 md:px-12 bg-[#0A0A0B] border-t border-[#232326]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          title="CYBERSECURITY FOCUS & TIERS"
          subtitle="Specialized domain areas ranked by honest, lab-verified proficiency tiers."
        />

        {/* Tier Legend Banner */}
        <div className="mb-10 p-5 bg-[#141416] border border-[#232326] rounded-[4px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div key={t.label} className="flex flex-col gap-1">
              <Tag tier={t.label}>{t.label}</Tag>
              <span className="font-mono text-[11px] text-[#6B6B70] mt-1">
                {t.description}
              </span>
            </div>
          ))}
        </div>

        {/* Focus Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cybersecurityData.map((item) => (
            <div
              key={item.area}
              className="p-6 bg-[#141416] border border-[#232326] hover:border-[#5B7FFF]/40 rounded-[4px] flex flex-col justify-between gap-4 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#5B7FFF] shrink-0" />
                  <Tag tier={item.tier} platform={item.platform}>
                    {item.tier}
                  </Tag>
                </div>
                <h3 className="font-display text-lg font-bold text-[#F2F2F0] group-hover:text-[#5B7FFF] transition-colors">
                  {item.area}
                </h3>
              </div>

              {item.note && (
                <div className="flex items-start gap-2 pt-3 border-t border-[#232326]">
                  <Info className="w-3.5 h-3.5 text-[#6B6B70] shrink-0 mt-0.5" />
                  <p className="font-mono text-xs text-[#A6A6AC] leading-relaxed">
                    {item.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
