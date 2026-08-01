export default function FeaturesSection() {
  const features = [
    { title: "Direct communication", desc: "No project managers in the middle. Talk directly with the designers and engineers building your product." },
    { title: "No hidden costs", desc: "Transparent pricing from day one. You'll always know exactly what you're paying for." },
    { title: "Quality over quantity", desc: "We take on fewer projects to ensure yours gets the attention and resources it deserves." },
    { title: "Security as standard", desc: "Enterprise-grade security practices baked into every line of code we ship." },
    { title: "Fast-paced delivery", desc: "We work in rapid sprints to deliver value fast without compromising on quality." },
    { title: "Long-term partnership", desc: "We don't just ship and run. We're here to support and scale your product post-launch." },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Built to be the <span className="text-[#22c55e]">last agency</span><br />
          you hire.
        </h2>
        <p className="text-white/50 mt-3 max-w-lg">
          We operate as an extension of your team, bringing senior-level expertise to every aspect of the project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="text-sm font-semibold text-[#22c55e] mb-2">{f.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
