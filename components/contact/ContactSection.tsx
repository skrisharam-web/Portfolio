"use client";

import { useState, FormEvent } from "react";
import { Copy, Check, Mail, FileText, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate static form service response per §22 & §38
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#08080A] border-t border-[#2A2A2F]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          title="GET IN TOUCH"
          subtitle="Open for cybersecurity internships, software roles, research collaborations, and CTFs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Status */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-[#FFB454] uppercase tracking-widest">
                {"// DIRECT COMMUNICATIONS"}
              </span>
              <h3 className="font-display text-3xl font-bold text-[#FAFAF8]">
                Let&apos;s discuss systems, security, or engineering opportunities.
              </h3>
              <p className="font-body text-base text-[#B8B8BE] leading-relaxed">
                Feel free to email me directly or download my résumé. I typically respond within 24 hours.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-5 bg-[#16161A] border border-[#2A2A2F] rounded-[4px] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-[#FFB454] shrink-0" />
                <span className="font-mono text-xs md:text-sm text-[#FAFAF8] truncate">
                  {profileData.email}
                </span>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="p-2 bg-[#202024] hover:bg-[#2A2A2F] border border-[#3A3A40] text-[#B8B8BE] hover:text-[#FAFAF8] rounded-[4px] transition-colors shrink-0 flex items-center gap-1.5 font-mono text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Résumé PDF Unrestricted Download (§22 & §42) */}
            <div className="p-5 bg-[#16161A] border border-[#3A3A40] rounded-[4px] flex flex-col gap-3">
              <span className="font-mono text-[11px] text-[#85858C] uppercase">
                {"// UNRESTRICTED RÉSUMÉ DOWNLOAD"}
              </span>
              <a
                href={profileData.resumeUrl}
                download={`${profileData.name.replace(/\s+/g, "_")}_Cybersecurity_Resume.pdf`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFB454] text-[#08080A] font-mono text-xs font-bold tracking-wider uppercase rounded-[4px] hover:bg-[#FFB454]/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
              </a>
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#16161A] border border-[#2A2A2F] rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-xs text-[#B8B8BE]">
                {profileData.facts.status}
              </span>
            </div>
          </div>

          {/* Right Column: Static Form Service Container */}
          <div className="lg:col-span-7 bg-[#16161A] border border-[#2A2A2F] p-8 rounded-[4px]">
            <span className="font-mono text-xs text-[#FFB454] uppercase tracking-widest block mb-6">
              {"// SEND A DIRECT MESSAGE"}
            </span>

            {formStatus === "success" ? (
              <div className="p-8 bg-[#202024] border border-emerald-500/40 rounded-[4px] flex flex-col items-center gap-3 text-center">
                <Check className="w-8 h-8 text-emerald-400" />
                <h4 className="font-display text-xl font-bold text-[#FAFAF8]">
                  Message Sent Successfully
                </h4>
                <p className="font-body text-sm text-[#B8B8BE]">
                  Thank you for reaching out. I will get back to you shortly!
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 px-4 py-2 bg-[#3A3A40] font-mono text-xs text-[#FAFAF8] rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#B8B8BE] uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="px-4 py-3 bg-[#08080A] border border-[#2A2A2F] focus:border-[#FFB454] rounded-[4px] font-body text-sm text-[#FAFAF8] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs text-[#B8B8BE] uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="px-4 py-3 bg-[#08080A] border border-[#2A2A2F] focus:border-[#FFB454] rounded-[4px] font-body text-sm text-[#FAFAF8] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#B8B8BE] uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Security Internship / Project Inquiry"
                    className="px-4 py-3 bg-[#08080A] border border-[#2A2A2F] focus:border-[#FFB454] rounded-[4px] font-body text-sm text-[#FAFAF8] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#B8B8BE] uppercase">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="px-4 py-3 bg-[#08080A] border border-[#2A2A2F] focus:border-[#FFB454] rounded-[4px] font-body text-sm text-[#FAFAF8] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-3 bg-[#FFB454] text-[#08080A] font-mono text-xs font-bold uppercase tracking-wider rounded-[4px] hover:bg-[#FFB454]/90 flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {formStatus === "submitting" ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <span>DISPATCH MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Fallback note per §38 */}
                <p className="font-mono text-[10px] text-[#85858C] text-center">
                  If the message dispatcher experiences network issues, feel free to{" "}
                  <a href={`mailto:${profileData.email}`} className="text-[#FFB454] underline">
                    email me directly
                  </a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
