import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "CASE STUDY",
    date: "Jul 28, 2026",
    author: "ZANOSTECH",
    title: "Nirvaan — from a booking form to a wellness platform in 42 days",
    desc: "How we rebuilt Nirvaan's marketing site, therapist directory and booking flow — and tripled monthly bookings.",
  },
  {
    tag: "FIELD NOTES",
    date: "Jul 21, 2026",
    author: "ZANOSTECH",
    title: "What it takes to ship world-class product from Dhaka",
    desc: "Field notes on hiring, timezone overlap and the unfair advantages of building here.",
  },
  {
    tag: "DESIGN",
    date: "Jul 14, 2026",
    author: "ZANOSTECH",
    title: "Design systems that scale — without slowing you down",
    desc: "A pragmatic take on tokens, components and governance for startups.",
  },
];

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Case Studies & Field Notes
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            Deep dives on{" "}
            <span className="text-[#22c55e]">shipping product.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-lg">
            Case studies from real client work and field notes from our studio in Banasree.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={i}
                href="#"
                className="group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[#1a2e1a] to-[#0a1a0a] relative overflow-hidden">
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/[0.08] border border-white/[0.1] rounded-md text-[10px] font-semibold text-white/70 tracking-wider uppercase">
                      {post.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#22c55e]/5 blur-2xl" />
                  </div>
                  {/* Decorative elements per card */}
                  {i === 0 && (
                    <div className="absolute bottom-0 right-0 w-24 h-24 border border-[#22c55e]/10 rounded-tl-3xl" />
                  )}
                  {i === 1 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/[0.06] rotate-45" />
                  )}
                  {i === 2 && (
                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#22c55e]/10 rounded-full" />
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/30 text-xs">{post.date}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/30 text-xs">{post.author}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-2 leading-snug group-hover:text-[#22c55e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm mb-4 line-clamp-2">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-sm group-hover:text-white transition-colors">Read the story</span>
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-300">
                      <ArrowUpRight size={14} className="text-white/50 group-hover:text-white transition-colors" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1200px]">
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
    </main>
  );
}
