"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We start with a shared brief. Audits, stakeholder interviews, competitive scans, and a clear success metric.",
    duration: "1–2 weeks",
    items: [
      ["Kick-off workshop", "Discovery brief"],
      ["Success metrics", "Timeline & scope"],
    ],
  },
  {
    num: "02",
    title: "Design",
    desc: "Systems-first design. We prototype early, share often, and refine until it feels obviously right.",
    duration: "2–5 weeks",
    items: [
      ["Design system in Figma", "High-fidelity prototypes"],
      ["Motion specs", "Weekly design reviews"],
    ],
  },
  {
    num: "03",
    title: "Build",
    desc: "Engineered in tight sprints. Staging demos every week so you're never surprised at launch.",
    duration: "3–10 weeks",
    items: [
      ["Component library", "Staging environment"],
      ["QA & accessibility pass", "Launch runbook"],
    ],
  },
  {
    num: "04",
    title: "Grow",
    desc: "We don't disappear on launch day. Ongoing iteration, analytics, and creative to keep momentum.",
    duration: "Ongoing",
    items: [
      ["Analytics dashboards", "Monthly iteration cycle"],
      ["A/B testing", "Content & video updates"],
    ],
  },
];

const principles = [
  {
    title: "Weekly demos, always",
    desc: "Every Friday you see a working thing. No hidden work, no big-reveal moments.",
  },
  {
    title: "Senior team on the tools",
    desc: "The people who pitched the work do the work. No hand-off to juniors.",
  },
  {
    title: "One channel, one place",
    desc: "A shared Slack or WhatsApp + a Linear board. Not five threads across four tools.",
  },
  {
    title: "Words earn their pixels",
    desc: "Every label, empty state and button is written in-house alongside the UI — no placeholders, no lazy copy, no lorem ipsum.",
  },
  {
    title: "Ship, then iterate",
    desc: "We'd rather launch v1 and learn than polish v0.9 for another month.",
  },
  {
    title: "Your data is yours",
    desc: "All files, code, credentials and access are yours from day one — no lock-in.",
  },
];

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most projects kick off within 1–2 weeks of signing. If we're at capacity, we'll tell you upfront and give you a realistic timeline.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. About 40% of our clients are outside Bangladesh. We work async with clear overlap windows, and our written updates keep everyone aligned.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Absolutely. We often embed with product teams, either augmenting capacity or leading specific workstreams. We adapt to your workflow.",
  },
];

export default function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            How we work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            A process built for{" "}
            <span className="text-[#22c55e]">momentum.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-lg">
            Predictable, transparent, and designed to keep everyone shipping. Here&apos;s exactly how a project runs with us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <p className="text-[#22c55e] text-4xl sm:text-5xl font-bold">{step.num}</p>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm sm:text-base mb-6 leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.items.map((pair, i) => (
                      <div key={i} className="space-y-3">
                        {pair.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 shrink-0" />
                            <span className="text-white/60 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-1">Typical</p>
                  <p className="text-white text-sm font-medium">{step.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Principles
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Rules we <span className="text-[#22c55e]">actually</span> follow.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6"
              >
                <h3 className="text-white font-semibold text-base mb-2">{principle.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10">
            Questions we get a lot.
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                  {openFaq === i ? (
                    <Minus size={18} className="text-[#22c55e] shrink-0 ml-4" />
                  ) : (
                    <Plus size={18} className="text-[#22c55e] shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
