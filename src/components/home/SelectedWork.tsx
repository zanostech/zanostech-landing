import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-[#22c55e]" />
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
          Projects we&apos;re proud <span className="text-[#22c55e]">to sign.</span>
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-lg mb-10">
          A snapshot of recent work across product, brand and platform.
        </p>
        
        <Link href="/work" className="group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] rounded-xl overflow-hidden transition-all duration-300">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#1a2e1a] to-[#0a1a0a] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#22c55e]/10 blur-3xl" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#22c55e]/5 to-transparent" />
          </div>
          <div className="p-6 sm:p-8 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#22c55e] text-xs font-semibold tracking-wider uppercase">WEB · UI/UX · CMS</span>
                <span className="text-white/30 text-xs">2025</span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">Nirvaan Wellness</h3>
              <p className="text-white/40 text-sm">Full brand & platform rebuild for Bangladesh&apos;s fastest growing wellness app.</p>
            </div>
            <span className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-300 shrink-0 ml-4">
              <ArrowUpRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
