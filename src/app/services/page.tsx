import PageHero from "@/components/PageHero";
import ServicesList from "@/components/services/ServicesList";
import { MonitorSmartphone, Database, Code, Palette } from "lucide-react";

export default function Services() {
  return (
    <main>
      <PageHero
        tag="Services"
        title={<>Everything you need to design, ship and{" "}<span className="text-[#22c55e]">grow.</span></>}
        description="Six disciplines under one roof — so briefs don't get lost between agencies and freelancers."
        rightContent={
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Core Service Block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-3xl p-6 animate-float shadow-[0_0_40px_rgba(34,197,94,0.15)] z-20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22c55e] to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">Web Engineering</h3>
              <div className="w-full h-2 rounded bg-gradient-to-r from-[#22c55e] to-emerald-400 mb-2" />
              <div className="w-4/5 h-2 rounded bg-white/[0.1]" />
            </div>

            {/* Floating Orbit Blocks */}
            <div className="absolute top-[15%] left-[10%] w-32 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 animate-float-delayed shadow-[0_0_30px_rgba(59,130,246,0.15)] z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 shadow-md">
                <MonitorSmartphone size={20} className="text-white" />
              </div>
              <div className="w-full h-1.5 rounded bg-gradient-to-r from-blue-500 to-cyan-400 mb-1.5" />
              <div className="w-1/2 h-1.5 rounded bg-white/[0.1]" />
            </div>

            <div className="absolute bottom-[20%] right-[5%] w-32 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 animate-float-reverse shadow-[0_0_30px_rgba(245,158,11,0.15)] z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-md">
                <Database size={20} className="text-white" />
              </div>
              <div className="w-full h-1.5 rounded bg-gradient-to-r from-amber-400 to-orange-400 mb-1.5" />
              <div className="w-3/4 h-1.5 rounded bg-white/[0.1]" />
            </div>

            <div className="absolute top-[30%] right-[15%] w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-500/30 rounded-full flex items-center justify-center animate-bounce-subtle shadow-[0_0_20px_rgba(236,72,153,0.2)] z-30">
               <Palette size={24} className="text-pink-400" />
            </div>
            
            {/* Ambient Glows */}
            <div className="absolute top-[20%] left-[20%] w-40 h-40 rounded-full bg-blue-500/20 blur-3xl -z-10" />
            <div className="absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-[#22c55e]/20 blur-3xl -z-10" />
          </div>
        }
      />
      <ServicesList />
    </main>
  );
}
