const services = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "From marketing sites to complex product surfaces — designed with taste, engineered on modern stacks (Next.js, TanStack, Astro).",
    price: "Starts at ৳80,000",
    included: [
      "Marketing & brand websites",
      "E-commerce (Shopify, custom)",
      "Landing pages & campaigns",
      "Web apps & dashboards",
      "Performance & SEO audits",
    ],
  },
  {
    num: "02",
    title: "App Design & Development",
    desc: "Native and cross-platform mobile apps — from first sketch to App Store & Play Store launch, with post-launch support baked in.",
    price: "Starts at ৳2,50,000",
    included: [
      "iOS & Android (React Native, Flutter)",
      "MVP builds in 8–12 weeks",
      "Design systems for mobile",
      "App store optimization",
      "Analytics & release cycles",
    ],
  },
  {
    num: "03",
    title: "CMS Solutions",
    desc: "Headless and traditional CMS builds tuned to how your editorial team actually works — WordPress, Sanity, Payload, Strapi.",
    price: "Starts at ৳60,000",
    included: [
      "Custom WordPress themes",
      "Headless CMS (Sanity, Payload)",
      "Editorial workflows",
      "Migrations & re-platforming",
      "Multi-language content",
    ],
  },
  {
    num: "04",
    title: "CRM Systems",
    desc: "Custom CRM builds and automations that fit your sales motion — instead of forcing your team to fit a generic tool.",
    price: "Starts at ৳1,50,000",
    included: [
      "Custom CRM builds",
      "HubSpot & Zoho customisation",
      "Sales pipeline automation",
      "Integrations (email, WhatsApp, Meta)",
      "Dashboards & reporting",
    ],
  },
  {
    num: "05",
    title: "UI / UX Design",
    desc: "Product design that goes past mockups — flows, systems, prototypes and hand-off files engineers actually love.",
    price: "Starts at ৳50,000",
    included: [
      "Product & app UI design",
      "Design systems in Figma",
      "UX research & testing",
      "Wireframes & prototypes",
      "Motion & micro-interactions",
    ],
  },
  {
    num: "06",
    title: "Video Editing",
    desc: "Ads, brand films, product demos and social cutdowns — edited with pace, sound design and colour that actually works.",
    price: "Starts at ৳25,000",
    included: [
      "Brand films & docs",
      "Product & explainer videos",
      "Social cutdowns (Reels, Shorts)",
      "Motion graphics & titles",
      "Colour grading & sound",
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full space-y-6">
        {services.map((service) => (
          <div
            key={service.num}
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="text-[#22c55e] text-3xl sm:text-4xl font-bold mb-4">{service.num}</p>
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm sm:text-base mb-6 leading-relaxed">{service.desc}</p>
                <span className="inline-block px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm text-white/50">
                  {service.price}
                </span>
              </div>
              <div>
                <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-2 shrink-0" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
