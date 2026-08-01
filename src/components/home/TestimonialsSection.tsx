export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Zanos delivered beyond our expectations. Their attention to detail and momentum-driven approach helped us launch 2 months ahead of schedule.",
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      initial: "S"
    },
    {
      quote: "The clarity they brought to our complex engineering problems was exactly what we needed. Highly recommended for any ambitious startup.",
      name: "Marcus Chen",
      role: "CTO at Innovate",
      initial: "M"
    },
    {
      quote: "Our conversion rates doubled after the redesign. They truly understand how to design calm and engineer clarity.",
      name: "Emily Watson",
      role: "VP Product at Scale",
      initial: "E"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-sm">
          Trusted by teams who <span className="text-[#22c55e]">ship.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 flex flex-col justify-between">
            <div className="mb-8 relative">
              <span className="absolute -top-4 -left-2 text-5xl text-[#22c55e]/20 font-serif">"</span>
              <p className="text-white/80 text-sm leading-relaxed relative z-10">{t.quote}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e] font-semibold">
                {t.initial}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/50">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
