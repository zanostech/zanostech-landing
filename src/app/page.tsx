import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import SelectedWork from "@/components/home/SelectedWork";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MetricsSection from "@/components/home/MetricsSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import PromisesSection from "@/components/home/PromisesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import HomeFooter from "@/components/home/HomeFooter";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24 overflow-hidden relative">
      {/* Background glow effects can go here if needed globally for the home page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15)_0%,rgba(10,15,10,0)_70%)] pointer-events-none -z-10" />
      
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <SelectedWork />
      <ProcessSection />
      <TestimonialsSection />
      <FeaturesSection />
      <MetricsSection />
      <VerticalsSection />
      <PromisesSection />
      <FAQSection />
      <CTASection />
      <HomeFooter />
    </main>
  );
}
