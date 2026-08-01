export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Plan", desc: "Discovery & Requirements" },
    { num: "02", title: "Build", desc: "Design & Development" },
    { num: "03", title: "Test", desc: "QA & Refinement" },
    { num: "04", title: "Launch", desc: "Deployment & Support" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          A process built for <span className="text-[#22c55e]">momentum.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 relative overflow-hidden group hover:border-white/[0.1] transition-colors">
            <div className="text-5xl font-bold text-[#22c55e]/20 mb-16 group-hover:text-[#22c55e]/40 transition-colors">
              {step.num}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/50 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
