import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/process/ProcessSteps";
import PrinciplesGrid from "@/components/process/PrinciplesGrid";
import FAQAccordion from "@/components/process/FAQAccordion";

export default function Process() {
  return (
    <main>
      <PageHero
        tag="How we work"
        title={<>A process built for{" "}<span className="text-[#22c55e]">momentum.</span></>}
        description="Predictable, transparent, and designed to keep everyone shipping. Here's exactly how a project runs with us."
      />
      <ProcessSteps />
      <PrinciplesGrid />
      <FAQAccordion />
    </main>
  );
}
