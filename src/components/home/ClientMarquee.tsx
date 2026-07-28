const clients = ["Nirvaan", "Rickshaw", "Orbit", "Chalo", "Sundori", "Kori", "Meghna", "Boi", "Panth"];

export default function ClientMarquee() {
  return (
    <section className="border-t border-b border-white/[0.06] py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-12 mx-6">
            {clients.map((client) => (
              <span key={client} className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-medium text-white/30">{client}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#22c55e]">
                  <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" fill="currentColor"/>
                </svg>
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
