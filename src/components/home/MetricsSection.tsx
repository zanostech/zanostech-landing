export default function MetricsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="bg-[#22c55e]/[0.03] border border-[#22c55e]/10 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            Teams leaving months,<br />
            webflow sprint in <span className="font-bold">14 days</span>.
          </h2>
          <p className="text-white/50 text-sm mt-4">
            We streamline the design and development lifecycle, cutting down time-to-market while maintaining enterprise-level quality.
          </p>
          <button className="mt-6 text-[#22c55e] text-sm font-medium hover:text-[#16a34a] transition-colors flex items-center gap-2">
            Talk to sales
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full lg:w-auto">
          <div>
            <div className="text-[#22c55e] text-4xl font-semibold">$2.5M</div>
            <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">Revenue Gen</div>
          </div>
          <div>
            <div className="text-[#22c55e] text-4xl font-semibold">40%+</div>
            <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">Conversion</div>
          </div>
          <div>
            <div className="text-[#22c55e] text-4xl font-semibold">10x</div>
            <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">Faster Deploy</div>
          </div>
          <div>
            <div className="text-[#22c55e] text-4xl font-semibold">$2.5M</div>
            <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">Saved Costs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
