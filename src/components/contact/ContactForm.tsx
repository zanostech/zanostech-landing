"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { submitInquiry } from "@/lib/api";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
      services: selectedServices,
      budget: selectedBudget,
      message: formData.get("message") as string,
    };

    if (!data.name || !data.email || !data.message) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const success = await submitInquiry(data);
    if (success) {
      setIsSuccess(true);
      e.currentTarget.reset();
      setSelectedServices([]);
      setSelectedBudget("");
    } else {
      setError("Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="lg:col-span-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 flex flex-col items-center justify-center text-center space-y-4">
        <CheckCircle2 size={48} className="text-[#22c55e]" />
        <h3 className="text-2xl font-semibold text-white">Message received!</h3>
        <p className="text-white/60 max-w-md">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours to discuss your project.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 px-6 py-2 bg-white/[0.05] hover:bg-white/[0.1] rounded-full text-sm text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8">
      <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
              Your name *
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Zahin Rahman"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-white/40 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
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
              name="company"
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
              name="website"
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
            Tell us more *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="A few lines about the project, timeline and anything else we should know..."
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          {isSubmitting ? (
            <>
              Sending <Loader2 size={14} className="animate-spin" />
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
