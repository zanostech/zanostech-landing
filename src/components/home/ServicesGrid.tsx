import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Strategy & direction",
      desc: "User research, market analysis, product strategy.",
    },
    {
      title: "Branding & identity",
      desc: "Visual identity, brand guidelines, messaging.",
    },
    {
      title: "UI/UX design",
      desc: "Wireframing, prototyping, user testing, design systems.",
    },
    {
      title: "Webflow",
      desc: "Custom development, CMS setup, animations.",
    },
    {
      title: "SEO & content",
      desc: "Technical SEO, content strategy, copywriting.",
    },
    {
      title: "Web3 & crypto",
      desc: "DApps, smart contracts, tokenomics.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Six disciplines. <span className="text-[#22c55e]">One team.</span>
        </h2>
        <p className="text-white/50 mt-3 max-w-lg">
          We bring together experts across design, engineering, and strategy to build holistic products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <div
            key={i}
            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all cursor-pointer flex flex-col justify-between aspect-[4/3]"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
            </div>
            <div className="flex justify-between items-end">
              <div className="text-xs text-[#22c55e] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
              </div>
              <div className="w-8 h-8 rounded-full bg-white/[0.05] group-hover:bg-[#22c55e] group-hover:text-black transition-all flex items-center justify-center text-white/50">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
