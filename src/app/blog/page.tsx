import PageHero from "@/components/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";
import CTABanner from "@/components/CTABanner";
import { BookOpen, Bookmark, FileText } from "lucide-react";

export default function Blog() {
  return (
    <main>
      <PageHero
        tag="Case Studies & Field Notes"
        title={<>Deep dives on{" "}<span className="text-[#22c55e]">shipping product.</span></>}
        description="Case studies from real client work and field notes from our studio in Banasree."
        rightContent={
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-[80px] rounded-full z-0" />
            
            {/* Top Card (Bookmark) */}
            <div className="absolute top-[25%] left-[20%] w-12 h-12 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-xl flex items-center justify-center animate-float-reverse shadow-[0_0_20px_rgba(251,191,36,0.2)] z-20">
               <Bookmark size={20} className="text-amber-400" />
            </div>

            {/* Main Article Card */}
            <div className="relative w-64 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-5 flex flex-col gap-4 animate-float z-10 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                 <BookOpen size={20} className="text-white" />
               </div>
               
               <div className="space-y-2">
                 <div className="w-full h-2 rounded bg-gradient-to-r from-amber-400 to-orange-400" />
                 <div className="w-4/5 h-2 rounded bg-white/[0.15]" />
               </div>
               
               <div className="space-y-2 mt-2">
                 <div className="w-full h-1.5 rounded bg-gradient-to-r from-amber-500/80 to-orange-500/80" />
                 <div className="w-full h-1.5 rounded bg-gradient-to-r from-amber-500/60 to-orange-500/60" />
                 <div className="w-full h-1.5 rounded bg-gradient-to-r from-amber-500/40 to-orange-500/40" />
                 <div className="w-2/3 h-1.5 rounded bg-gradient-to-r from-amber-500/20 to-orange-500/20" />
               </div>
            </div>

            {/* Bottom Floating File */}
            <div className="absolute bottom-[20%] right-[15%] w-48 bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-xl p-4 animate-float-delayed shadow-[0_0_30px_rgba(59,130,246,0.15)] z-20 flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-sm">
                 <FileText size={16} className="text-white" />
               </div>
               <div className="w-full">
                 <div className="w-full h-1.5 rounded bg-gradient-to-r from-blue-500 to-cyan-400 mb-2" />
                 <div className="w-1/2 h-1.5 rounded bg-white/[0.15]" />
               </div>
            </div>
          </div>
        }
      />
      <BlogGrid />
      <CTABanner />
    </main>
  );
}
