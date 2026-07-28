import SectionHeader from "@/components/SectionHeader";

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

export default function PrinciplesGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          tag="Principles"
          title={<>Rules we <span className="text-[#22c55e]">actually</span> follow.</>}
        />
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
  );
}
