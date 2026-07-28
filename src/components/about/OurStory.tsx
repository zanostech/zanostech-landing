export default function OurStory() {
  return (
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
  );
}
