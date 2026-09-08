import { profileData } from "@/content/profile";
import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2F] bg-[#08080A] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FAFAF8] font-semibold tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#FFB454]" />
            <span>{profileData.name.toUpperCase()}{" // SEC & SYSTEMS"}</span>
          </div>
          <p className="font-mono text-[11px] text-[#85858C]">
            © {new Date().getFullYear()} {profileData.name}. Built with Next.js, TypeScript & Motion. Zero CMS / No Database.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[#B8B8BE] hover:text-[#FFB454] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[#B8B8BE] hover:text-[#FFB454] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send Email"
            className="text-[#B8B8BE] hover:text-[#FFB454] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
