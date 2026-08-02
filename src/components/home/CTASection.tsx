import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full relative z-10">
      <div className="rounded-3xl bg-gradient-to-br from-[#16a34a]/20 to-transparent border border-[#22c55e]/30 p-10 md:p-16 relative overflow-hidden backdrop-blur-md">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#22c55e]/20 rounded-full blur-[100px] -z-10" />
        
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Have a project in mind?<br />
            <span className="text-[#22c55e]">Let&apos;s Talk.</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-sm">
            Whether you&apos;re an early-stage startup or a market leader, we&apos;d love to hear about what you&apos;re building.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-white font-semibold px-6 py-3 rounded-full transition-all flex items-center gap-2 hover:bg-white/90"
              style={{ color: "#0a0f0a" }}
            >
              Start a project
            </Link>
            <Link
              href="/contact"
              className="text-white font-medium px-6 py-3 flex items-center gap-2 hover:text-[#22c55e] transition-colors"
            >
              Book a call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
