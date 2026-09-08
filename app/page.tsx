import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { SkillsAccordion } from "@/components/skills/SkillsAccordion";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { AchievementGrid } from "@/components/achievements/AchievementGrid";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#FAFAF8]">
      {/* Custom Cursor Follower (§25) */}
      <CustomCursor />

      {/* Main Navigation (§23) */}
      <Nav />

      {/* Page Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <SkillsAccordion />
        <ProjectGrid />
        <ExperienceTimeline />
        <AchievementGrid />
        <CourseGrid />
        <ContactSection />
      </main>

      {/* Footer Shell (§22) */}
      <Footer />
    </div>
  );
}
