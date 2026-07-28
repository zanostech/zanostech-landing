import Link from "next/link";
import { ArrowUpRight, Star, Zap, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle green glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase">
            Digital Studio · Banasree, Dhaka
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
          We design{" "}
          <span className="text-[#22c55e]">calm</span>, engineer{" "}
          <span className="text-[#22c55e]">clarity</span>, and ship products worth using.
        </h1>
        
        <p className="text-white/50 text-sm sm:text-base max-w-lg mb-8">
          ZanosTech is a small, senior team building websites, apps, CMS/CRM platforms, UI/UX systems and cinematic video for teams who care about the details.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Start a project
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            See recent work
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
            <Award size={12} className="text-[#22c55e]" />
            Awwwards nominee 2025
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
            <Star size={12} className="text-[#22c55e]" />
            5.0 avg client rating
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
            <Zap size={12} className="text-[#22c55e]" />
            Ships in 4–6 weeks
          </span>
        </div>
      </div>
    </section>
  );
}
