interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16" id={id}>
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#FFB454]">
          {number} /
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[#FAFAF8]">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-[#B8B8BE] font-body text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-[1px] bg-[#FFB454]/40" />
    </div>
  );
}
