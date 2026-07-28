const stats = [
  { value: "80+", label: "Projects shipped" },
  { value: "40+", label: "Happy clients" },
  { value: "6", label: "Years crafting" },
  { value: "12", label: "In-house team" },
];

export default function StatsBar() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-white/40 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
