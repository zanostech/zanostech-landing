import PageHero from "@/components/PageHero";
import OurStory from "@/components/about/OurStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamGrid from "@/components/about/TeamGrid";
import { Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <main>
      <PageHero
        tag="About the studio"
        title={<>Small studio. <span className="text-[#22c55e]">Serious craft.</span></>}
        description="ZanosTech is a twelve-person digital studio in Banasree, Dhaka. Since 2019 we've partnered with founders and product teams across Bangladesh, the Middle East and North America."
        rightContent={
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Team Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/[0.05] backdrop-blur-2xl border border-white/[0.1] rounded-3xl p-6 animate-float shadow-2xl z-20">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#22c55e] to-emerald-600 flex items-center justify-center shadow-lg">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">ZanosTech Core</h3>
                  <p className="text-[#22c55e] text-xs mt-0.5 font-medium">12 Specialists</p>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[
                  "from-blue-500 to-cyan-400",
                  "from-purple-500 to-pink-500",
                  "from-amber-400 to-orange-500",
                  "from-[#22c55e] to-teal-400",
                  "from-indigo-500 to-blue-600"
                ].map((gradient, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-[#0a0f0a] shadow-lg flex items-center justify-center relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Est Card */}
            <div className="absolute top-[10%] right-[2%] md:right-[5%] w-48 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 animate-float-delayed shadow-[0_0_30px_rgba(251,191,36,0.15)] z-30">
               <div className="flex items-center justify-between mb-3">
                 <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                   <Sparkles size={16} className="text-amber-400" />
                 </div>
                 <span className="text-amber-400/50 text-xs font-mono font-bold">2019</span>
               </div>
               <p className="text-white text-sm font-semibold mb-3">Established</p>
               <div className="w-full h-2 rounded bg-gradient-to-r from-amber-400 to-orange-500" />
               <div className="w-2/3 h-2 rounded bg-white/[0.1] mt-2" />
            </div>

            {/* Decoration */}
            <div className="absolute bottom-[20%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 animate-float-reverse blur-md" />
          </div>
        }
      />
      <OurStory />
      <ValuesGrid />
      <TeamGrid />
    </main>
  );
}
