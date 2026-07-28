import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  tag: string;
  date: string;
  author: string;
  title: string;
  desc: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <Link
      href="#"
      className="group block bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] rounded-xl overflow-hidden transition-all duration-300"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-[#1a2e1a] to-[#0a1a0a] relative overflow-hidden">
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/[0.08] border border-white/[0.1] rounded-md text-[10px] font-semibold text-white/70 tracking-wider uppercase">
            {post.tag}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#22c55e]/5 blur-2xl" />
        </div>
        {/* Decorative elements per card */}
        {index === 0 && (
          <div className="absolute bottom-0 right-0 w-24 h-24 border border-[#22c55e]/10 rounded-tl-3xl" />
        )}
        {index === 1 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/[0.06] rotate-45" />
        )}
        {index === 2 && (
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#22c55e]/10 rounded-full" />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/30 text-xs">{post.date}</span>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-white/30 text-xs">{post.author}</span>
        </div>
        <h3 className="text-white font-semibold text-base sm:text-lg mb-2 leading-snug group-hover:text-[#22c55e] transition-colors">
          {post.title}
        </h3>
        <p className="text-white/40 text-sm mb-4 line-clamp-2">{post.desc}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/50 text-sm group-hover:text-white transition-colors">Read the story</span>
          <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-300">
            <ArrowUpRight size={14} className="text-white/50 group-hover:text-white transition-colors" />
          </span>
        </div>
      </div>
    </Link>
  );
}
