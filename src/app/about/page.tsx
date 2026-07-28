import Image from "next/image";

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

const team = [
  { initials: "ZR", name: "Zahin Rahman", role: "Founder · Design Director" },
  { initials: "NA", name: "Nazia Ahsan", role: "Head of Engineering" },
  { initials: "RI", name: "Rafid Islam", role: "Lead Product Designer" },
  { initials: "SK", name: "Sadia Karim", role: "UI/UX Designer" },
  { initials: "MC", name: "Mahin Chowdhury", role: "Full-stack Engineer" },
  { initials: "TH", name: "Tanvir Hasan", role: "Video Editor · Motion" },
  { initials: "AN", name: "Ayesha Noor", role: "Frontend Engineer" },
  { initials: "RH", name: "Rakib Hossain", role: "Backend Engineer" },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About the studio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            Small studio. <span className="text-[#22c55e]">Serious craft.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-lg">
            ZanosTech is a twelve-person digital studio in Banasree, Dhaka. Since 2019 we&apos;ve partnered with founders and product teams across Bangladesh, the Middle East and North America.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            Our Story
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We started in a two-room studio above a café in Banasree with one belief: most digital work is careless, and it doesn&apos;t have to be.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Six years later, we&apos;re still small on purpose. Every project runs with senior designers and engineers who care about the last 5% — the copy, the loading state, the tiny animation that makes the whole thing feel right.
              </p>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We work with founders who are shipping their first product and with brands that have been in the market for decades. The through-line is the same: we like people who ship, and we like doing the work.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Studio</p>
              <h3 className="text-white text-xl font-semibold mb-2">Banasree, Dhaka</h3>
              <p className="text-white/40 text-sm mb-8">
                House 14, Road 9, Block C<br />
                Banasree, Dhaka 1219<br />
                Bangladesh
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-white/40 text-sm">Founded</span>
                  <span className="text-white text-sm font-medium">2019</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-white/40 text-sm">Team</span>
                  <span className="text-white text-sm font-medium">12 in-house</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/[0.06]">
                  <span className="text-white/40 text-sm">Projects shipped</span>
                  <span className="text-white text-sm font-medium">80+</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/40 text-sm">Clients across</span>
                  <span className="text-white text-sm font-medium">9 countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            What we believe
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Four things we <span className="text-[#22c55e]">don&apos;t</span> compromise on.
          </h2>
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

      {/* Team */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-[#22c55e]" />
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            People who <span className="text-[#22c55e]">actually</span> do the work.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.initials}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white/20">{member.initials}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                  <p className="text-white/40 text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
