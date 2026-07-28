"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
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
  );
}
