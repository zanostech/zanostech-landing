import PageHero from "@/components/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";
import CTABanner from "@/components/CTABanner";

export default function Blog() {
  return (
    <main>
      <PageHero
        tag="Case Studies & Field Notes"
        title={<>Deep dives on{" "}<span className="text-[#22c55e]">shipping product.</span></>}
        description="Case studies from real client work and field notes from our studio in Banasree."
      />
      <BlogGrid />
      <CTABanner />
    </main>
  );
}
