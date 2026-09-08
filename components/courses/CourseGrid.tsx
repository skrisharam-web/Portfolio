"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "./CourseCard";
import { coursesData } from "@/content/courses";
import { CheckCircle2, Clock } from "lucide-react";

export function CourseGrid() {
  const completedCourses = coursesData.filter(
    (c) => c.status === "Completed"
  );
  const pursuingCourses = coursesData.filter(
    (c) => c.status === "Currently Pursuing"
  );

  return (
    <section id="courses" className="py-24 px-6 md:px-12 bg-[#08080A] border-t border-[#2A2A2F]">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          number="06"
          title="COURSES & CERTIFICATIONS"
          subtitle="Verified technical certifications, specialization courses, and active industry credential pathways."
        />

        {/* Subsection 1: Completed Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#2A2A2F] pb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="font-display text-xl font-bold text-[#FAFAF8] uppercase tracking-wider">
              Completed Certifications
            </h3>
            <span className="font-mono text-xs text-[#B8B8BE] bg-[#16161A] px-2.5 py-1 rounded border border-[#2A2A2F]">
              {completedCourses.length} EARNED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </div>

        {/* Subsection 2: Currently Pursuing */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-[#2A2A2F] pb-4">
            <Clock className="w-5 h-5 text-amber-400" />
            <h3 className="font-display text-xl font-bold text-[#FAFAF8] uppercase tracking-wider">
              Currently Pursuing
            </h3>
            <span className="font-mono text-xs text-[#B8B8BE] bg-[#16161A] px-2.5 py-1 rounded border border-[#2A2A2F]">
              {pursuingCourses.length} IN PROGRESS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pursuingCourses.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
