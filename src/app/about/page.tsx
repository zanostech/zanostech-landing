import PageHero from "@/components/PageHero";
import OurStory from "@/components/about/OurStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamGrid from "@/components/about/TeamGrid";

export default function About() {
  return (
    <main>
      <PageHero
        tag="About the studio"
        title={<>Small studio. <span className="text-[#22c55e]">Serious craft.</span></>}
        description="ZanosTech is a twelve-person digital studio in Banasree, Dhaka. Since 2019 we've partnered with founders and product teams across Bangladesh, the Middle East and North America."
      />
      <OurStory />
      <ValuesGrid />
      <TeamGrid />
    </main>
  );
}
