import { ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
  const projects = [
    { name: "Headspace", type: "Health & Wellness", span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-[400px]" },
    { name: "Dribbble", type: "Design Platform", span: "col-span-1 h-[190px]" },
    { name: "Zero Security", type: "Cybersecurity", span: "col-span-1 h-[190px]" },
    { name: "Virtual Training", type: "EdTech", span: "col-span-1 md:col-span-2 lg:col-span-2 h-[190px]" },
    { name: "Data AI", type: "Enterprise", span: "col-span-1 md:col-span-3 h-[300px]" }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Projects we&apos;re proud <span className="text-[#22c55e]">to sign.</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-lg">
            A selection of our recent work across various industries.
          </p>
        </div>
        <button className="text-sm font-medium text-white/80 hover:text-white flex items-center gap-2 border-b border-[#22c55e] pb-1 transition-colors">
          View all work <ArrowUpRight size={16} className="text-[#22c55e]" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`group rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden relative cursor-pointer ${p.span}`}
          >
            {/* Placeholder for project image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/50">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0a] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-white/60">{p.type}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#22c55e] group-hover:text-black transition-all flex items-center justify-center text-white backdrop-blur-md">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
