"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { profileData } from "@/content/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { protectedImageProps } from "@/lib/image-protection";
import { fadeIn, staggerContainer } from "@/lib/animation";

export function Hero() {
  const hasPortrait =
    Boolean(profileData.heroPortrait?.src) &&
    !profileData.heroPortrait?.isPlaceholder;

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column (58% width approx) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          {/* Eyebrow Label */}
          {profileData.eyebrow && (
            <motion.div variants={fadeIn} className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFB454] animate-pulse" />
              <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#FFB454] uppercase">
                {profileData.eyebrow}
              </span>
            </motion.div>
          )}

          {/* Name Display - Bold Capital Letters */}
          <motion.h1
            variants={fadeIn}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#FAFAF8] uppercase leading-none"
          >
            SHREE KRISHA R
          </motion.h1>

          {/* Main Headline */}
          <motion.h2
            variants={fadeIn}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#B8B8BE] leading-[1.25]"
          >
            {profileData.headline}
          </motion.h2>

          {/* Subheadline */}
          {profileData.subheadline && (
            <motion.p
              variants={fadeIn}
              className="font-body text-base sm:text-lg text-[#B8B8BE] max-w-2xl leading-relaxed"
            >
              {profileData.subheadline}
            </motion.p>
          )}

          {/* Availability Status Pill */}
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#16161A] border border-[#3A3A40] rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-xs text-[#B8B8BE]">
              {profileData.facts.status}
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton variant="primary" href="#projects">
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="secondary" href="#contact">
              <span>GET IN TOUCH</span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column (42% width approx) - Hero Portrait Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm lg:max-w-none">
            {/* Ambient Accent Backlight */}
            <div className="absolute -inset-1 bg-[#FFB454]/20 rounded-lg blur-xl opacity-40 group-hover:opacity-75 transition duration-1000" />

            <div className="relative group">
              {hasPortrait ? (
                <div
                  {...protectedImageProps}
                  className="relative w-full aspect-[4/5] bg-[#16161A] border border-[#3A3A40] rounded-[4px] overflow-hidden shadow-2xl select-none"
                >
                  <Image
                    src={profileData.heroPortrait.src}
                    alt={profileData.heroPortrait.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Watermark Signature overlay per §42 */}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-[#08080A]/85 backdrop-blur-md border border-[#3A3A40] rounded text-[10px] font-mono text-[#FAFAF8]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFB454]" />
                    <span>KRISHA // SEC</span>
                  </div>
                </div>
              ) : (
                <PlaceholderImage
                  label="Replace with portrait"
                  aspectRatio="4/5"
                  className="w-full shadow-2xl"
                  watermark={true}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
