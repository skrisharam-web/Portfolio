"use client";

import { ImageIcon, ShieldCheck } from "lucide-react";
import { protectedImageProps } from "@/lib/image-protection";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "4/5" | "16/10" | "16/9" | "4/3" | "1/1" | "auto";
  className?: string;
  watermark?: boolean;
}

export function PlaceholderImage({
  label,
  aspectRatio = "16/10",
  className,
  watermark = true,
}: PlaceholderImageProps) {
  const aspectClasses = {
    "4/5": "aspect-[4/5]",
    "16/10": "aspect-[16/10]",
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    auto: "",
  };

  return (
    <div
      {...protectedImageProps}
      className={cn(
        "relative flex flex-col items-center justify-center p-6 bg-[#16161A] border border-dashed border-[#3A3A40] rounded-[4px] select-none overflow-hidden group hover:border-[#FFB454]/40 transition-colors duration-300",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2F_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2F_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      {/* Icon & Label */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <div className="p-3 rounded-full bg-[#202024] border border-[#3A3A40] text-[#FFB454] group-hover:border-[#FFB454]/40 transition-colors">
          <ImageIcon className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-[#B8B8BE] tracking-wider uppercase">
          {label}
        </span>
        <span className="font-mono text-[10px] text-[#85858C]">
          [ Asset Pending · §37 ]
        </span>
      </div>

      {/* Watermark Signature per §42 */}
      {watermark && (
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 bg-[#08080A]/80 backdrop-blur border border-[#3A3A40] rounded text-[9px] font-mono text-[#85858C]">
          <ShieldCheck className="w-3 h-3 text-[#FFB454]/70" />
          <span>KRISHA // SEC</span>
        </div>
      )}
    </div>
  );
}
