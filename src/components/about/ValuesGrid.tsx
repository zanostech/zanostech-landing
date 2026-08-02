import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    num: "01",
    title: "Craft over volume",
    desc: "We take on fewer projects so each one gets our best.",
  },
  {
    num: "02",
    title: "Own the outcome",
    desc: "We think like operators, not vendors. Your goals are our metrics.",
  },
  {
    num: "03",
    title: "Small, senior team",
    desc: "You get the people who pitched the work. No juniors in disguise.",
  },
  {
    num: "04",
    title: "Ship, then iterate",
    desc: "We'd rather launch and learn than polish behind closed doors.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
        <SectionHeader
          tag="What we believe"
          title={<>Four things we <span className="text-[#22c55e]">don&apos;t</span> compromise on.</>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <div
              key={value.num}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 sm:p-8"
            >
              <p className="text-[#22c55e] text-xs font-semibold mb-3">{value.num}</p>
              <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-white/40 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
