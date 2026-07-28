import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export default function ServicesGrid() {
  return (
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
  );
}
