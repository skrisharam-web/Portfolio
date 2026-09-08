"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices per §28 & §39
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, [role='button'], .clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - (isHovered ? 20 : 12),
          y: position.y - (isHovered ? 20 : 12),
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.1 }}
        className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full border border-[#FFB454] ${
          isHovered
            ? "w-10 h-10 bg-[#FFB454]/10 border-[#FFB454]"
            : "w-6 h-6 border-[#FFB454]/60"
        }`}
      />
      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="fixed top-0 left-0 w-1 h-1 bg-[#FFB454] rounded-full pointer-events-none z-[99]"
      />
    </>
  );
}
