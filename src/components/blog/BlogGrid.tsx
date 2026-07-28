import BlogPostCard from "./BlogPostCard";

const posts = [
  {
    tag: "CASE STUDY",
    date: "Jul 28, 2026",
    author: "ZANOSTECH",
    title: "Nirvaan — from a booking form to a wellness platform in 42 days",
    desc: "How we rebuilt Nirvaan's marketing site, therapist directory and booking flow — and tripled monthly bookings.",
  },
  {
    tag: "FIELD NOTES",
    date: "Jul 21, 2026",
    author: "ZANOSTECH",
    title: "What it takes to ship world-class product from Dhaka",
    desc: "Field notes on hiring, timezone overlap and the unfair advantages of building here.",
  },
  {
    tag: "DESIGN",
    date: "Jul 14, 2026",
    author: "ZANOSTECH",
    title: "Design systems that scale — without slowing you down",
    desc: "A pragmatic take on tokens, components and governance for startups.",
  },
];

export default function BlogGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogPostCard key={i} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
