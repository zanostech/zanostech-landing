export default function StatsBar() {
  const stats = [
    { value: "50+", label: "Projects completed", suffix: "" },
    { value: "25+", label: "Experts", suffix: "" },
    { value: "9+", label: "Years experience", suffix: "" },
    { value: "12+", label: "Industries", suffix: "" },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-[1280px] mx-auto border-t border-b border-white/[0.08] py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-3xl md:text-4xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
