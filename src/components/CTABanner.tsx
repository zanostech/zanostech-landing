import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a project in mind?{" "}
              <span className="text-[#22c55e]">Let&apos;s talk.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-8">
              We take on a handful of new engagements each quarter. If you&apos;re serious about shipping, we&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0a0f0a] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Start a project
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/[0.08] transition-colors"
              >
                Explore services
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
