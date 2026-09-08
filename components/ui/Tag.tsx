import { cn } from "@/lib/utils";
import { ProficiencyTier } from "@/content/types";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  tier?: ProficiencyTier;
  platform?: string;
}

export function Tag({ children, className, tier, platform }: TagProps) {
  const getTierDotColor = (t?: ProficiencyTier) => {
    switch (t) {
      case "Comfortable With":
        return "bg-[#FFB454]";
      case "Hands-on Experience":
        return "bg-[#FFB454]/80";
      case "Currently Learning":
        return "bg-[#FFB454]/50";
      case "Exploring":
        return "bg-[#85858C]";
      default:
        return "bg-[#FFB454]";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border border-[#3A3A40] rounded-[4px] text-[#B8B8BE] bg-transparent hover:border-[#FFB454]/40 transition-colors duration-200",
        className
      )}
    >
      {tier && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full inline-block",
            getTierDotColor(tier)
          )}
        />
      )}
      {children}
      {platform && (
        <span className="text-[#85858C] text-[9px] border-l border-[#3A3A40] pl-1.5 ml-1">
          {platform}
        </span>
      )}
    </span>
  );
}
