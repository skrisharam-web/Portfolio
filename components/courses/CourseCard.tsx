"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ChevronDown, ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { Course } from "@/content/types";
import { Tag } from "@/components/ui/Tag";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCompleted = course.status === "Completed";
  const hasExtraDetails =
    Boolean(course.description) ||
    Boolean(course.skillsLearned?.length) ||
    Boolean(course.verificationUrl);

  return (
    <div className="bg-[#16161A] border border-[#2A2A2F] hover:border-[#FFB454]/40 rounded-[4px] overflow-hidden flex flex-col justify-between transition-colors duration-300">
      <div className="p-6 flex flex-col gap-4">
        {/* Course Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 border rounded-[4px] ${
                isCompleted
                  ? "bg-[#202024] border-[#3A3A40] text-[#FFB454]"
                  : "bg-amber-500/10 border-amber-500/20 text-amber-400"
              }`}
            >
              {isCompleted ? (
                <Award className="w-5 h-5" />
              ) : (
                <Clock className="w-5 h-5" />
              )}
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-[#FAFAF8]">
                {course.name}
              </h4>
              <p className="font-mono text-xs text-[#B8B8BE]">
                {course.provider}
              </p>
            </div>
          </div>

          <span
            className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
              isCompleted
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-amber-500/10 text-amber-400 border-amber-500/30"
            }`}
          >
            {isCompleted ? "COMPLETED" : "IN PROGRESS"}
          </span>
        </div>

        {course.description && (
          <p className="font-body text-xs md:text-sm text-[#B8B8BE] leading-relaxed">
            {course.description}
          </p>
        )}

        {/* Expandable Skills & Certificate Detail */}
        {hasExtraDetails && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="pt-4 border-t border-[#2A2A2F] flex flex-col gap-4"
              >
                {/* Skills Learned */}
                {course.skillsLearned && course.skillsLearned.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] text-[#85858C] uppercase">
                      SKILLS LEARNED & PRACTICED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.skillsLearned.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 font-mono text-xs text-[#FAFAF8]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB454] shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Tech & Verification Link */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {course.relatedTechnologies?.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  {course.verificationUrl && (
                    <a
                      href={course.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#FFB454] hover:underline"
                    >
                      <span>VERIFY</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Expand/Collapse Trigger (only if extra details exist) */}
      {hasExtraDetails && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 px-6 bg-[#202024] border-t border-[#2A2A2F] hover:bg-[#2A2A2F] text-[#B8B8BE] hover:text-[#FAFAF8] font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <span>{isExpanded ? "COLLAPSE DETAILS" : "EXPAND DETAILS"}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180 text-[#FFB454]" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}
