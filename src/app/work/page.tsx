import PageHero from "@/components/PageHero";
import WorkContent from "@/components/work/WorkContent";

export default function Work() {
  return (
    <main>
      <PageHero
        tag="Selected Work"
        title={<>Projects, case studies,{" "}<span className="text-[#22c55e]">receipts.</span></>}
        description="A cross-section of client work from the last three years. Deeper case studies available on request."
      />
      <WorkContent />
    </main>
  );
}
