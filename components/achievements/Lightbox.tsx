"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { Achievement } from "@/content/types";
import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { protectedImageProps } from "@/lib/image-protection";
import { Tag } from "@/components/ui/Tag";

interface LightboxProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function Lightbox({ achievement, onClose }: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (achievement) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08080A]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={achievement.title}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-3xl bg-[#16161A] border border-[#3A3A40] rounded-[4px] shadow-2xl overflow-hidden flex flex-col focus:outline-none max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox Modal"
            className="absolute top-4 right-4 z-20 p-2.5 bg-[#08080A]/80 text-[#FAFAF8] hover:text-[#FFB454] border border-[#3A3A40] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo Container */}
          <div className="relative bg-[#08080A] w-full min-h-[300px] sm:min-h-[420px] max-h-[55vh] flex items-center justify-center overflow-hidden border-b border-[#2A2A2F]">
            {achievement.photo && !achievement.photo.isPlaceholder ? (
              <div
                {...protectedImageProps}
                className="relative w-full h-full min-h-[300px] sm:min-h-[420px] max-h-[55vh] select-none flex items-center justify-center p-3"
              >
                <Image
                  src={achievement.photo.src}
                  alt={achievement.photo.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <PlaceholderImage
                label={`${achievement.title} Photo`}
                aspectRatio="16/10"
                className="w-full border-none rounded-none"
              />
            )}
          </div>

          {/* Modal Details */}
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2A2A2F] pb-4">
              <div>
                <span className="font-mono text-xs text-[#FFB454] uppercase font-semibold">
                  {achievement.event} · {achievement.date}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mt-1">
                  {achievement.title}
                </h3>
              </div>
              <Tag tier="Comfortable With">{achievement.recognition}</Tag>
            </div>

            <p className="font-body text-sm text-[#B8B8BE] leading-relaxed">
              {achievement.description}
            </p>

            {/* Links */}
            {achievement.certificateUrl && (
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#FFB454] text-[#FFB454] hover:bg-[#FFB454]/10 font-mono text-xs font-semibold rounded-[4px] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFY CERTIFICATE / AWARD</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
