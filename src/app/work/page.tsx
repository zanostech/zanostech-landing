"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Web", "Mobile", "CMS", "CRM", "UI/UX", "Video"];

const projects = [
  {
    id: 1,
    title: "Nirvaan Wellness",
    tags: ["WEB", "UI/UX", "CMS"],
    year: "2025",
    desc: "Full brand & platform rebuild for Bangladesh's fastest growing wellness app.",
    category: "Web",
    size: "large",
  },
  {
    id: 2,
    title: "Rickshaw Mobility",
    tags: ["iOS", "ANDROID"],
    year: "2025",
    desc: "Ride-hailing MVP shipped in 10 weeks with a custom design system.",
    category: "Mobile",
    size: "medium",
  },
  {
    id: 3,
    title: "Orbit CRM",
    tags: ["SAAS", "CRM"],
    year: "2024",
    desc: "A CRM built for D2C brands — pipeline, WhatsApp and Meta ads in one.",
    category: "CRM",
    size: "medium",
  },
  {
    id: 4,
    title: "Chalo Films",
    tags: ["VIDEO", "MOTION"],
    year: "2024",
    desc: "Brand film series and campaign cutdowns for a Dhaka fashion label.",
    category: "Video",
    size: "medium",
  },
  {
    id: 5,
    title: "Sundori Beauty",
    tags: ["WEB", "UI/UX"],
    year: "2024",
    desc: "E-commerce experience for a growing beauty brand with AR try-on.",
    category: "Web",
    size: "large",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Selected Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            Projects, case studies,{" "}
            <span className="text-[#22c55e]">receipts.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-lg">
            A cross-section of client work from the last three years. Deeper case studies available on request.
          </p>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#22c55e] text-white"
                    : "bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {filtered.map((project, index) => (
              <Link
                key={project.id}
                href="#"
                className={`group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] rounded-xl overflow-hidden transition-all duration-300 ${
                  project.size === "large" ? "" : ""
                }`}
              >
                <div className={`bg-gradient-to-br from-[#1a2e1a] to-[#0a1a0a] relative overflow-hidden ${
                  project.size === "large" ? "aspect-[16/9]" : "aspect-[16/10]"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`rounded-full bg-[#22c55e]/10 blur-3xl ${
                      project.size === "large" ? "w-64 h-64" : "w-48 h-48"
                    }`} />
                  </div>
                  {/* Project visual placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.id === 1 && (
                      <div className="w-48 h-32 sm:w-72 sm:h-48 bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-lg border border-white/[0.06] shadow-2xl" />
                    )}
                    {project.id === 2 && (
                      <div className="flex gap-3">
                        <div className="w-16 h-28 sm:w-20 sm:h-36 bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 rounded-2xl border border-white/[0.08]" />
                        <div className="w-16 h-28 sm:w-20 sm:h-36 bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl border border-white/[0.08] mt-4" />
                      </div>
                    )}
                    {project.id === 3 && (
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-20 h-14 sm:w-28 sm:h-20 bg-gradient-to-br from-[#22c55e]/10 to-transparent rounded-lg border border-white/[0.06] flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full border-2 border-[#22c55e]/50" />
                        </div>
                        <div className="w-20 h-14 sm:w-28 sm:h-20 bg-gradient-to-br from-white/[0.04] to-transparent rounded-lg border border-white/[0.06]" />
                      </div>
                    )}
                    {project.id === 4 && (
                      <div className="w-full h-full bg-gradient-to-br from-[#1a0a0a] to-[#0a0f0a] flex items-center justify-center">
                        <div className="w-32 h-20 sm:w-48 sm:h-28 bg-white/[0.03] rounded border border-white/[0.06] flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-[#22c55e]/20" />
                        </div>
                      </div>
                    )}
                    {project.id === 5 && (
                      <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#22c55e]/10 to-transparent border border-white/[0.06] flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#22c55e] text-xs font-semibold tracking-wider uppercase">
                        {project.tags.join(" · ")}
                      </span>
                      <span className="text-white/30 text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-white/40 text-sm">{project.desc}</p>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-300 shrink-0 ml-4">
                    <ArrowUpRight size={15} className="text-white/50 group-hover:text-white transition-colors" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
