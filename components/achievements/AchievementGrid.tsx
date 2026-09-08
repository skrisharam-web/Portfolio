"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementsData } from "@/content/achievements";
import { Achievement } from "@/content/types";
import { Lightbox } from "./Lightbox";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { protectedImageProps } from "@/lib/image-protection";
import { Trophy, Award, Sparkles, Star, Users, ImageIcon } from "lucide-react";

export function AchievementGrid() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const achievements = achievementsData.filter(
    (item) => item.category === "Achievements"
  );
  const recognitions = achievementsData.filter(
    (item) => item.category === "Recognition"
  );

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-[#08080A] border-t border-[#2A2A2F]">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          number="05"
          title="ACHIEVEMENTS & RECOGNITION"
          subtitle="Hackathon victories, competitive final standings, leadership roles, and event organizing."
        />

        {/* Section 1: Achievements */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#2A2A2F] pb-4">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="font-display text-xl font-bold text-[#FAFAF8] uppercase tracking-wider">
              Achievements
            </h3>
            <span className="font-mono text-xs text-[#B8B8BE] bg-[#16161A] px-2.5 py-1 rounded border border-[#2A2A2F]">
              {achievements.length} ENTRIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => {
              const isWinner = item.badge.toLowerCase().includes("winner");
              const isFinalist = item.badge.toLowerCase().includes("finalist");

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAchievement(item)}
                  className="group relative bg-[#16161A] border border-[#2A2A2F] hover:border-[#FFB454]/50 rounded-[4px] p-6 transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer"
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB454]/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-[#FFB454]/10 transition-colors" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1 rounded-full border ${
                          isWinner
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                            : isFinalist
                            ? "bg-[#FFB454]/10 text-[#FFB454] border-[#FFB454]/30"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        }`}
                      >
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </span>

                      <span className="font-mono text-[10px] text-[#B8B8BE] uppercase tracking-widest">
                        {"// "}ACHIEVEMENT 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-[#FAFAF8] group-hover:text-[#FFB454] transition-colors leading-tight">
                      {item.title}
                    </h4>

                    {/* Photo Container / Placeholder */}
                    <div className="relative overflow-hidden rounded-[4px] border border-[#3A3A40] group-hover:border-[#FFB454]/40 transition-colors">
                      {item.photo && !item.photo.isPlaceholder ? (
                        <div
                          {...protectedImageProps}
                          className="relative w-full aspect-[16/9] bg-[#08080A] overflow-hidden select-none p-1.5"
                        >
                          <Image
                            src={item.photo.src}
                            alt={item.photo.alt}
                            fill
                            className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <PlaceholderImage
                          label={`${item.title} Photo`}
                          aspectRatio="16/9"
                          className="w-full bg-[#08080A]/80"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2F]/60 text-xs font-mono text-[#B8B8BE] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFB454]" />
                      <span>Competitive Recognition</span>
                    </span>
                    <span className="text-[#FFB454] group-hover:underline flex items-center gap-1">
                      <span>View Photo</span>
                      <ImageIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Recognition */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#2A2A2F] pb-4">
            <Award className="w-5 h-5 text-[#FFB454]" />
            <h3 className="font-display text-xl font-bold text-[#FAFAF8] uppercase tracking-wider">
              Recognition & Leadership
            </h3>
            <span className="font-mono text-xs text-[#B8B8BE] bg-[#16161A] px-2.5 py-1 rounded border border-[#2A2A2F]">
              {recognitions.length} ENTRIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAchievement(item)}
                  className="group relative bg-[#16161A] border border-[#2A2A2F] hover:border-[#FFB454]/50 rounded-[4px] p-6 transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1 rounded-full border bg-[#FFB454]/10 text-[#FFB454] border-[#FFB454]/30">
                        <Users className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </span>

                      <span className="font-mono text-[10px] text-[#B8B8BE] uppercase tracking-widest">
                        {"// "}RECOGNITION 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-[#FAFAF8] group-hover:text-[#FFB454] transition-colors leading-tight">
                      {item.title}
                    </h4>

                    {/* Photo Container / Placeholder */}
                    <div className="relative overflow-hidden rounded-[4px] border border-[#3A3A40] group-hover:border-[#FFB454]/40 transition-colors">
                      {item.photo && !item.photo.isPlaceholder ? (
                        <div
                          {...protectedImageProps}
                          className="relative w-full aspect-[16/9] bg-[#08080A] overflow-hidden select-none p-1.5"
                        >
                          <Image
                            src={item.photo.src}
                            alt={item.photo.alt}
                            fill
                            className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <PlaceholderImage
                          label={`${item.title} Photo`}
                          aspectRatio="16/9"
                          className="w-full bg-[#08080A]/80"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2F]/60 text-xs font-mono text-[#B8B8BE] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>Community & Event Leadership</span>
                    </span>
                    <span className="text-[#FFB454] group-hover:underline flex items-center gap-1">
                      <span>View Photo</span>
                      <ImageIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Lightbox for photos if clicked */}
        {selectedAchievement && (
          <Lightbox
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </div>
    </section>
  );
}
