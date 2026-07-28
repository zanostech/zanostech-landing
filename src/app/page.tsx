import Link from "next/link";
import { ArrowUpRight, Star, Zap, Award } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "Marketing sites, product surfaces and commerce, engineered on modern stacks.",
    href: "/services",
  },
  {
    num: "02",
    title: "App Design & Development",
    desc: "Native and cross-platform apps that ship, from wireframe to app store.",
    href: "/services",
  },
  {
    num: "03",
    title: "CMS Solutions",
    desc: "Headless & traditional CMS builds that let your team publish without a developer.",
    href: "/services",
  },
  {
    num: "04",
    title: "CRM Systems",
    desc: "Custom CRMs and sales automations tailored to how your team actually works.",
    href: "/services",
  },
  {
    num: "05",
    title: "UI / UX Design",
    desc: "Interfaces designed around clarity, tension and delight — never templates.",
    href: "/services",
  },
  {
    num: "06",
    title: "Video Editing",
    desc: "Ads, brand films and social cutdowns edited with pace and taste.",
    href: "/services",
  },
];

const clients = ["Nirvaan", "Rickshaw", "Orbit", "Chalo", "Sundori", "Kori", "Meghna", "Boi", "Panth"];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        {/* Subtle green glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        
        <div className="mx-auto max-w-[1200px] relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase">
              Digital Studio · Banasree, Dhaka
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
            We design{" "}
            <span className="text-[#22c55e]">calm</span>, engineer{" "}
            <span className="text-[#22c55e]">clarity</span>, and ship products worth using.
          </h1>
          
          <p className="text-white/50 text-sm sm:text-base max-w-lg mb-8">
            ZanosTech is a small, senior team building websites, apps, CMS/CRM platforms, UI/UX systems and cinematic video for teams who care about the details.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Start a project
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              See recent work
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
              <Award size={12} className="text-[#22c55e]" />
              Awwwards nominee 2025
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
              <Star size={12} className="text-[#22c55e]" />
              5.0 avg client rating
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full text-xs text-white/40">
              <Zap size={12} className="text-[#22c55e]" />
              Ships in 4–6 weeks
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">80+</p>
            <p className="text-white/40 text-sm">Projects shipped</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">40+</p>
            <p className="text-white/40 text-sm">Happy clients</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">6</p>
            <p className="text-white/40 text-sm">Years crafting</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">12</p>
            <p className="text-white/40 text-sm">In-house team</p>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="border-t border-b border-white/[0.06] py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 sm:gap-12 mx-6">
              {clients.map((client) => (
                <span key={client} className="flex items-center gap-3">
                  <span className="text-sm sm:text-base font-medium text-white/30">{client}</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#22c55e]">
                    <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" fill="currentColor"/>
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Six disciplines. <span className="text-[#22c55e]">One team.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-lg mb-12">
            From the first sketch to the final deploy, we handle everything under one roof — so nothing gets lost between disciplines.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="group bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] rounded-xl p-6 sm:p-8 transition-all duration-300"
              >
                <p className="text-[#22c55e] text-xs font-semibold mb-3">{service.num}</p>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-white/40 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm group-hover:text-white transition-colors">Learn more</span>
                  <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white/50 group-hover:text-white transition-colors" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
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
    </main>
  );
}
