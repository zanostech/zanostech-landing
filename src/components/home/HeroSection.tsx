import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 container mx-auto w-full flex flex-col items-start mt-10">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-[900px] leading-[1.1]">
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
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
        >
          Let&apos;s Talk <ArrowRight size={18} />
        </Link>
        <Link
          href="/work"
          className="bg-transparent hover:bg-white/5 border border-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
        >
          See work
        </Link>
      </div>
    </section>
  );
}
