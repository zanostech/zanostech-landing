import Link from "next/link";
import { ArrowRight, Code2, Layout, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[calc(100vh-80px)] pt-24 lg:pt-32 pb-12 lg:pb-24 px-4 sm:px-6 lg:px-8 container mx-auto w-full flex flex-col justify-center">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white max-w-[900px] leading-[1.1]">
            We design <span className="text-[#22c55e]">calm</span>,<br />
            engineer <span className="text-[#22c55e]">clarity</span>, and<br />
            ship products worth<br />
            using.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-[600px] font-light leading-relaxed">
            We&apos;re a digital product agency that builds for momentum. From MVP to market leader, we design and engineer with purpose.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2 group"
            >
              Let&apos;s Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="bg-transparent hover:bg-white/5 border border-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
            >
              See work
            </Link>
          </div>
        </div>

        {/* Right Content - Glassmorphic Composition */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[500px] items-center justify-center pointer-events-none z-10">
          {/* Ambient Glows */}
          <div className="absolute top-[20%] right-[20%] w-48 h-48 bg-[#22c55e]/20 blur-[80px] rounded-full z-0" />
          <div className="absolute bottom-[20%] left-[20%] w-48 h-48 bg-blue-500/20 blur-[80px] rounded-full z-0" />

          {/* Main Floating Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-6 animate-float shadow-[0_0_50px_rgba(34,197,94,0.15)] z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22c55e] to-emerald-600 flex items-center justify-center shadow-lg">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Clean Codebase</h3>
                <p className="text-[#22c55e] text-sm font-medium">Scalable architecture</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#22c55e] to-emerald-400 w-[85%] shadow-[0_0_10px_#22c55e]" />
              </div>
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#22c55e]/80 to-emerald-400/80 w-[60%]" />
              </div>
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#22c55e]/50 to-emerald-400/50 w-[40%]" />
              </div>
            </div>
          </div>

          {/* Secondary Floating Card */}
          <div className="absolute top-[15%] right-[0%] w-48 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 animate-float-delayed shadow-[0_0_30px_rgba(59,130,246,0.15)] z-30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <Layout size={16} className="text-white" />
              </div>
              <p className="text-white text-sm font-semibold">UI / UX</p>
            </div>
            <div className="flex gap-2">
              {/* Mock UI Component 1 */}
              <div className="w-full h-20 rounded-lg bg-white/[0.03] border border-white/[0.08] p-2 flex flex-col gap-1.5">
                <div className="w-8 h-2 rounded bg-gradient-to-r from-blue-400 to-cyan-400" />
                <div className="w-full h-8 rounded bg-gradient-to-br from-blue-500/30 to-cyan-400/10 border border-blue-500/20 mt-0.5" />
                <div className="w-12 h-1.5 rounded bg-white/[0.1] mt-auto" />
              </div>
              {/* Mock UI Component 2 */}
              <div className="w-full h-20 rounded-lg bg-white/[0.03] border border-white/[0.08] p-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_5px_#ec4899]" />
                  <div className="w-10 h-1.5 rounded bg-gradient-to-r from-pink-400 to-rose-400" />
                </div>
                <div className="w-full h-1.5 rounded bg-white/[0.1]" />
                <div className="w-4/5 h-1.5 rounded bg-white/[0.1]" />
                <div className="w-full h-3 rounded bg-gradient-to-r from-purple-500 to-indigo-500 mt-auto shadow-sm" />
              </div>
            </div>
          </div>

          {/* Third Floating Card */}
          <div className="absolute bottom-[20%] left-[0%] w-56 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 animate-float-reverse shadow-[0_0_30px_rgba(251,191,36,0.15)] z-30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                   <Zap size={14} className="text-white" />
                </div>
                <span className="text-white text-sm font-semibold">Performance</span>
              </div>
              <span className="text-amber-400 text-xs font-mono font-bold drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">99.9%</span>
            </div>
            <div className="flex items-end gap-1.5 h-12 mt-4">
              {[40, 70, 45, 90, 60, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-amber-500/20 to-orange-500/20 rounded-t-sm relative overflow-hidden" style={{ height: `${h}%` }}>
                  <div className="absolute top-0 w-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-t-sm shadow-[0_0_8px_#fbbf24]" style={{ height: '3px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle z-10 hidden sm:flex">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

    </section>
  );
}
