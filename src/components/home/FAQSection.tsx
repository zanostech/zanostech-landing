import FAQList from "./FAQList";
import { getFaqs } from "@/lib/api";

const fallbackFaqs = [
  { q: "How much does a website cost?", a: "Project costs vary depending on scope, but our engagements typically start at $10k. We provide transparent pricing after our initial discovery call." },
  { q: "How long does a project take?", a: "Most webflow and marketing sites take 4-6 weeks. Complex web apps and platforms can take 2-4 months depending on requirements." },
  { q: "Do you offer ongoing support?", a: "Yes, we offer retainer packages for ongoing design, development, and maintenance to ensure your product continues to perform." },
  { q: "What's your typical process?", a: "We start with discovery and strategy, move into UX/UI design, followed by development, QA testing, and finally launch and handover." }
];

export default async function FAQSection() {
  const dynamicData = await getFaqs();
  
  let faqs = fallbackFaqs;
  if (dynamicData && dynamicData.length > 0) {
    faqs = dynamicData.map((d: any) => ({
      q: d.question,
      a: d.answer,
    }));
  }

  return <FAQList faqs={faqs} />;
}
