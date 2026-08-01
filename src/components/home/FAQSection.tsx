"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How much does a website cost?", a: "Project costs vary depending on scope, but our engagements typically start at $10k. We provide transparent pricing after our initial discovery call." },
    { q: "How long does a project take?", a: "Most webflow and marketing sites take 4-6 weeks. Complex web apps and platforms can take 2-4 months depending on requirements." },
    { q: "Do you offer ongoing support?", a: "Yes, we offer retainer packages for ongoing design, development, and maintenance to ensure your product continues to perform." },
    { q: "What&apos;s your typical process?", a: "We start with discovery and strategy, move into UX/UI design, followed by development, QA testing, and finally launch and handover." }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Things founders <span className="text-[#22c55e]">ask first.</span>
        </h2>
        <p className="text-white/50 mt-3 max-w-sm">
          Everything you need to know about our process, pricing, and how we work.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div 
              key={i} 
              className="bg-white/[0.02] border border-white/[0.05] rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-sm md:text-base font-medium text-white">{faq.q}</span>
                <ChevronDown className={clsx("text-[#22c55e] transition-transform duration-300", isOpen && "rotate-180")} size={20} />
              </button>
              <div 
                className={clsx(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-sm text-white/60 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
