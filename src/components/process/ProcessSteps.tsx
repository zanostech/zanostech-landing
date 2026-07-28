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

export default function ProcessSteps() {
  return (
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
  );
}
