import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ClientMarquee from "@/components/home/ClientMarquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import SelectedWork from "@/components/home/SelectedWork";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <ClientMarquee />
      <ServicesGrid />
      <SelectedWork />
    </main>
  );
}
