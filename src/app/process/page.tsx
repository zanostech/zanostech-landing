import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/process/ProcessSteps";
import PrinciplesGrid from "@/components/process/PrinciplesGrid";
import FAQAccordion from "@/components/process/FAQAccordion";
import { Search, PenTool, Rocket } from "lucide-react";

export default function Process() {
  return (
    <main>
      <PageHero
        tag="How we work"
        title={<>A process built for{" "}<span className="text-[#22c55e]">momentum.</span></>}
        description="Predictable, transparent, and designed to keep everyone shipping. Here's exactly how a project runs with us."
        rightContent={
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
            {/* Timeline Line */}
            <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-[#22c55e]/50 to-transparent z-0 rounded-full" />
            <div className="absolute top-[30%] bottom-[70%] left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#22c55e] to-emerald-400 shadow-[0_0_15px_#22c55e] animate-pulse z-0 rounded-full" />

            {/* Node 1 */}
            <div className="relative w-64 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 flex items-center gap-4 animate-float z-10 shadow-lg mr-20">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-md">
                 <Search size={16} className="text-white" />
               </div>
               <div>
                 <h4 className="text-white text-sm font-semibold">1. Discovery</h4>
                 <div className="w-20 h-1.5 rounded bg-gradient-to-r from-blue-500 to-cyan-400 mt-1.5" />
               </div>
            </div>

            {/* Node 2 */}
            <div className="relative w-64 bg-white/[0.05] backdrop-blur-2xl border-2 border-[#22c55e]/30 rounded-2xl p-4 flex items-center gap-4 animate-float-delayed z-10 shadow-[0_0_30px_rgba(34,197,94,0.2)] ml-20">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22c55e] to-emerald-500 flex items-center justify-center shrink-0 shadow-md">
                 <PenTool size={16} className="text-white" />
               </div>
               <div>
                 <h4 className="text-white text-sm font-semibold">2. Build</h4>
                 <div className="w-24 h-1.5 rounded bg-gradient-to-r from-[#22c55e] to-emerald-400 mt-1.5" />
               </div>
            </div>

            {/* Node 3 */}
            <div className="relative w-64 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 flex items-center gap-4 animate-float-reverse z-10 shadow-lg mr-12">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-md">
                 <Rocket size={16} className="text-white" />
               </div>
               <div>
                 <h4 className="text-white text-sm font-semibold">3. Launch</h4>
                 <div className="w-16 h-1.5 rounded bg-gradient-to-r from-purple-500 to-pink-400 mt-1.5" />
               </div>
            </div>
          </div>
        }
      />
      <ProcessSteps />
      <PrinciplesGrid />
      <FAQAccordion />
    </main>
  );
}
