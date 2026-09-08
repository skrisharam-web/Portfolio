import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ShieldAlert, Cpu, Layers, CheckCircle2, AlertTriangle, Trophy } from "lucide-react";
import { projectsData } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#08080A] text-[#FAFAF8] flex flex-col justify-between">
      <Nav />

      <main className="max-w-5xl mx-auto w-full pt-32 pb-24 px-6 md:px-12 flex-1">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#B8B8BE] hover:text-[#FFB454] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-12 border-b border-[#2A2A2F] pb-8">
          {project.featured && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 w-fit bg-[#FFB454]/20 border border-[#FFB454] text-[#FFB454] font-mono text-[10px] font-bold tracking-widest uppercase rounded-[4px]">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>FLAGSHIP ARCHITECTURE & RISK DEEP-DIVE</span>
            </div>
          )}

          <h1 className="font-display text-3xl md:text-5xl font-bold text-[#FAFAF8]">
            {project.title}
          </h1>

          <p className="font-body text-lg text-[#B8B8BE] leading-relaxed max-w-3xl">
            {project.oneLiner}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && (
              <MagneticButton variant="secondary" href={project.githubUrl}>
                <Github className="w-4 h-4" />
                <span>GITHUB REPOSITORY</span>
              </MagneticButton>
            )}
            {project.demoUrl && (
              <MagneticButton variant="primary" href={project.demoUrl}>
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO</span>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Hero Screenshot Banner */}
        <div className="mb-16">
          <PlaceholderImage
            label={`${project.title} Interface & Architecture`}
            aspectRatio="16/10"
            className="w-full rounded-[4px] border border-[#3A3A40]"
          />
        </div>

        {/* Technical Deep Dive Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Overview & Problem Statement */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold text-[#FAFAF8] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#FFB454]" />
                <span>Problem Space & Overview</span>
              </h2>
              <p className="font-body text-base text-[#B8B8BE] leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-3">
              <h3 className="font-mono text-xs text-[#FFB454] uppercase tracking-wider font-semibold">
                {"// WHY THIS MATTERS"}
              </h3>
              <p className="font-body text-sm text-[#FAFAF8] leading-relaxed">
                {project.whyItMatters}
              </p>
            </div>

            {/* Architecture Details if present */}
            {project.architecture && (
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-xl font-bold text-[#FAFAF8] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FFB454]" />
                  <span>System Architecture & Data Flows</span>
                </h2>
                <p className="font-body text-base text-[#B8B8BE] leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold text-[#FAFAF8] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FFB454]" />
                <span>Key Platform Capabilities</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] font-body text-sm text-[#FAFAF8] flex items-start gap-3"
                  >
                    <span className="font-mono text-xs text-[#FFB454] shrink-0 pt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Challenges & Outcome */}
            {project.challenges && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>ENGINEERING CHALLENGE</span>
                  </div>
                  <p className="font-body text-xs md:text-sm text-[#B8B8BE] leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                {project.outcome && (
                  <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase font-semibold">
                      <Trophy className="w-4 h-4" />
                      <span>BENCHMARK OUTCOME</span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-[#B8B8BE] leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex flex-col gap-6">
              <span className="font-mono text-xs text-[#FFB454] uppercase tracking-widest border-b border-[#2A2A2F] pb-3">
                {"// PROJECT METADATA"}
              </span>

              {/* Technologies */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-[#85858C] uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#FFB454]" />
                  <span>TECHNOLOGIES & TOOLS</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              {/* Contribution */}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#2A2A2F]">
                <span className="font-mono text-[11px] text-[#85858C] uppercase">
                  MY INDIVIDUAL CONTRIBUTION
                </span>
                <p className="font-body text-xs text-[#B8B8BE] leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
