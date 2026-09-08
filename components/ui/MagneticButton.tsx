"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  download,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Capture radius ~40px
    if (Math.abs(distanceX) < 40 && Math.abs(distanceY) < 40) {
      setPosition({ x: distanceX * 0.25, y: distanceY * 0.25 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-mono font-medium tracking-wide uppercase rounded-[4px] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FFB454] focus-visible:outline-offset-2";

  const variantStyles = {
    primary:
      "bg-[#FFB454] text-[#08080A] hover:bg-[#FFB454]/90 hover:shadow-[0_0_20px_rgba(255,180,84,0.3)] font-semibold",
    secondary:
      "border border-[#3A3A40] bg-transparent text-[#FAFAF8] hover:border-[#FFB454]/50 hover:bg-[#FFB454]/10",
    ghost:
      "bg-transparent text-[#B8B8BE] hover:text-[#FAFAF8] hover:bg-[#16161A]",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        download={download}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
      </Component>
    </motion.div>
  );
}
