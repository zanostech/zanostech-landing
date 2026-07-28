"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";

const serviceOptions = [
  "Web design & development",
  "App design & development",
  "CMS solutions",
  "CRM systems",
  "UI/UX design",
  "Video editing",
  "Not sure yet",
];

const budgetOptions = ["< ৳1L", "৳1L – 5L", "৳5L – 15L", "৳15L+", "Let's discuss"];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="mx-auto max-w-[1200px] relative z-10">
          <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-2xl">
            Tell us what <span className="text-[#22c55e]">you&apos;re building.</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-lg">
            Fill in a few details and we&apos;ll get back within one business day. Prefer email? hello@zanostech.com works too.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <form className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      placeholder="Zahin Rahman"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Website (optional)
                    </label>
                    <input
                      type="url"
                      placeholder="acme.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                    What do you need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                          selectedServices.includes(s)
                            ? "bg-[#22c55e] text-white"
                            : "bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                    Budget range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                          selectedBudget === b
                            ? "bg-[#22c55e] text-white"
                            : "bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                    Tell us more
                  </label>
                  <textarea
                    rows={5}
                    placeholder="A few lines about the project, timeline and anything else we should know..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Send message
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Studio</p>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-white/30 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-sm">
                    House 14, Road 9, Block C<br />
                    Banasree, Dhaka 1219<br />
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Email</p>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-white/30 shrink-0" />
                  <a href="mailto:hello@zanostech.com" className="text-white/50 text-sm hover:text-white transition-colors">
                    hello@zanostech.com
                  </a>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Phone / WhatsApp</p>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-white/30 shrink-0" />
                  <a href="tel:+8801700000000" className="text-white/50 text-sm hover:text-white transition-colors">
                    +880 1700 000 000
                  </a>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Hours</p>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-white/30 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-sm">
                    Sunday – Thursday<br />
                    10:00 – 19:00 (GMT+6)
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Careers</p>
                <a href="mailto:careers@zanostech.com" className="text-white/50 text-sm hover:text-white transition-colors">
                  careers@zanostech.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
