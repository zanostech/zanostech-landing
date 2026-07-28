import PageHero from "@/components/PageHero";
import ServicesList from "@/components/services/ServicesList";

export default function Services() {
  return (
    <main>
      <PageHero
        tag="Services"
        title={<>Everything you need to design, ship and{" "}<span className="text-[#22c55e]">grow.</span></>}
        description="Six disciplines under one roof — so briefs don't get lost between agencies and freelancers."
      />
      <ServicesList />
    </main>
  );
}
