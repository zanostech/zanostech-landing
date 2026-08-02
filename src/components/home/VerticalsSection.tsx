export default function VerticalsSection() {
  const verticals = [
    "E-commerce", "Fintech", "HealthTech", "EdTech", "Real Estate", "SaaS", "Enterprise", "Web3", "Logistics"
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Shipping across <span className="text-[#22c55e]">nine</span><br />
          verticals.
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {verticals.map((v, i) => (
          <div key={i} className="px-4 py-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/[0.03] text-sm text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors cursor-pointer">
            {v}
          </div>
        ))}
      </div>
    </section>
  );
}
