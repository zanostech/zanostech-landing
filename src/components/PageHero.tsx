import { ReactNode } from "react";

interface PageHeroProps {
  tag: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ tag, title, description, children }: PageHeroProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          {tag}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
          {title}
        </h1>
        <p className="text-white/50 text-sm sm:text-base max-w-lg">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
