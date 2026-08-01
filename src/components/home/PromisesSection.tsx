import { CheckCircle2 } from "lucide-react";

export default function PromisesSection() {
  const promises = [
    { title: "Weekly updates", desc: "No guessing games. You'll get a detailed update every Friday." },
    { title: "Direct access", desc: "A private Slack channel with your dedicated team." },
    { title: "Transparent billing", desc: "No surprise invoices. Everything is agreed upon upfront." },
    { title: "On-time delivery", desc: "We commit to deadlines and structure our sprints to hit them." },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Four promises we put <span className="text-[#22c55e]">in writing.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {promises.map((p, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
            <CheckCircle2 className="text-[#22c55e] mb-4" size={24} />
            <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
