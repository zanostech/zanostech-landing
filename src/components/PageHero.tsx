import { ReactNode } from "react";

interface PageHeroProps {
  tag: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  rightContent?: ReactNode;
}

export default function PageHero({ tag, title, description, children, rightContent }: PageHeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-32 sm:pt-40 pb-20 sm:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_10%,transparent_100%)] pointer-events-none -z-10" />
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full relative z-10">
        <div className={`grid grid-cols-1 ${rightContent ? 'lg:grid-cols-12 gap-12 lg:gap-8' : ''} items-center w-full`}>
          <div className={`${rightContent ? 'lg:col-span-7' : ''} flex flex-col items-start animate-fade-up`}>
            <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {tag}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
              {title}
            </h1>
            <p className="text-white/50 text-sm sm:text-base max-w-lg">
              {description}
            </p>
            <div className="mt-8">
              {children}
            </div>
          </div>
          
          {rightContent && (
            <div className="hidden lg:flex lg:col-span-5 relative h-[400px] items-center justify-center pointer-events-none z-10">
              {rightContent}
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle z-10 hidden sm:flex">
        <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
