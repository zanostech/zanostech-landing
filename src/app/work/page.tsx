import PageHero from "@/components/PageHero";
import WorkContent from "@/components/work/WorkContent";
import { Maximize, LayoutTemplate, Layers } from "lucide-react";

export default function Work() {
  return (
    <main>
      <PageHero
        tag="Selected Work"
        title={<>Projects, case studies,{" "}<span className="text-[#22c55e]">receipts.</span></>}
        description="A cross-section of client work from the last three years. Deeper case studies available on request."
        rightContent={
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Mock Frame */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[220px] bg-white/[0.04] backdrop-blur-3xl border border-white/[0.1] rounded-xl p-2 animate-float shadow-[0_0_50px_rgba(34,197,94,0.15)] z-20 overflow-hidden group">
              <div className="w-full h-full bg-[#0a0f0a] rounded-lg border border-white/[0.08] relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-6 bg-white/[0.08] flex items-center px-3 gap-1.5 border-b border-white/[0.05]">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                    <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                 </div>
                 <div className="pt-10 px-4 w-full h-full flex items-end justify-center">
                   <div className="w-3/4 h-[80%] bg-gradient-to-t from-[#22c55e] to-emerald-400 rounded-t-lg border-t-2 border-x-2 border-white/20 shadow-[0_0_30px_rgba(34,197,94,0.4)] relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                   </div>
                 </div>
                 <Maximize size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/0 group-hover:text-white transition-colors drop-shadow-md" />
              </div>
            </div>

            {/* Back Frame Left */}
            <div className="absolute top-[65%] left-[10%] w-[180px] h-[240px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] rounded-xl p-2 animate-float-delayed shadow-[0_0_40px_rgba(59,130,246,0.15)] z-10 rotate-[-8deg]">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg border-2 border-white/20 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                 <LayoutTemplate size={48} className="text-white drop-shadow-lg z-10" />
              </div>
            </div>
            
            {/* Back Frame Right */}
            <div className="absolute top-[30%] right-[5%] w-[160px] h-[160px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] rounded-xl p-2 animate-float-reverse shadow-[0_0_40px_rgba(168,85,247,0.15)] z-10 rotate-[12deg]">
              <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg border-2 border-white/20 flex flex-col items-center justify-center gap-3 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                 <Layers size={32} className="text-white drop-shadow-lg z-10" />
                 <div className="w-16 h-1.5 rounded-full bg-white/40 z-10" />
                 <div className="w-10 h-1.5 rounded-full bg-white/40 z-10" />
              </div>
            </div>
            
            <div className="absolute top-[10%] left-[20%] w-3 h-3 rounded-full bg-[#22c55e] shadow-[0_0_15px_#22c55e] animate-pulse" />
            <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-pulse animation-delay-400" />
            <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899] animate-pulse animation-delay-200" />
          </div>
        }
      />
      <WorkContent />
    </main>
  );
}
