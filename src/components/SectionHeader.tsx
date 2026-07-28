import { ReactNode } from "react";

interface SectionHeaderProps {
  tag: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <>
      <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
        <span className="w-6 h-px bg-[#22c55e]" />
        {tag}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
        {title}
      </h2>
      {description && (
        <p className="text-white/50 text-sm sm:text-base max-w-lg mb-12 -mt-8">
          {description}
        </p>
      )}
    </>
  );
}
