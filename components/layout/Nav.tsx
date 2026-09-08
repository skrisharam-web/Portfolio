"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";
import { profileData } from "@/content/profile";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Detection
      const sections = ["projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#16161A]/90 backdrop-blur-md border-b border-[#2A2A2F] py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Active Section Indicator */}
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-sm tracking-wider font-semibold text-[#FAFAF8] hover:text-[#FFB454] transition-colors"
          >
            <span className="w-2.5 h-2.5 bg-[#FFB454] rounded-full group-hover:scale-125 transition-transform" />
            <span>{profileData.name.toUpperCase()}</span>
            {isScrolled && activeSection && (
              <span className="hidden sm:inline-block font-mono text-[10px] text-[#B8B8BE] border-l border-[#3A3A40] pl-3 ml-1 uppercase">
                {`// ${activeSection}`}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-[#B8B8BE] hover:text-[#FAFAF8] tracking-wider uppercase transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFB454] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-[#FFB454] border border-[#FFB454]/40 hover:border-[#FFB454] hover:bg-[#FFB454]/10 rounded-[4px] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RÉSUMÉ</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#FAFAF8] hover:text-[#FFB454] border border-[#3A3A40] rounded-[4px]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#08080A]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-[#FFB454] tracking-widest uppercase">
                {"// NAVIGATION"}
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="font-display text-3xl font-bold text-[#FAFAF8] hover:text-[#FFB454] transition-colors py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="flex flex-col gap-4 border-t border-[#2A2A2F] pt-6">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#FFB454] text-[#FFB454] font-mono text-xs font-semibold rounded-[4px]"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFB454] text-[#08080A] font-mono text-xs font-semibold rounded-[4px]"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
