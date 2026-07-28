"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most projects kick off within 1–2 weeks of signing. If we're at capacity, we'll tell you upfront and give you a realistic timeline.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. About 40% of our clients are outside Bangladesh. We work async with clear overlap windows, and our written updates keep everyone aligned.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Absolutely. We often embed with product teams, either augmenting capacity or leading specific workstreams. We adapt to your workflow.",
  },
];

export default function FAQAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          tag="FAQ"
          title={<>Questions we get a lot.</>}
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                {openFaq === i ? (
                  <Minus size={18} className="text-[#22c55e] shrink-0 ml-4" />
                ) : (
                  <Plus size={18} className="text-[#22c55e] shrink-0 ml-4" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
