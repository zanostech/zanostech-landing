"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 w-full pointer-events-none">
      <nav className="px-4 sm:px-6 lg:px-8 container mx-auto w-full flex items-center justify-between relative pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <img src="/zanostech-logo.png" alt="ZanosTech" className="h-8 w-auto" />
        </Link>

        {/* Center nav links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-all duration-200 whitespace-nowrap group ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#22c55e] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Start a project
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-4 px-4 pointer-events-auto">
          <div className="bg-[#0a0f0a]/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative w-fit py-1 text-base font-medium transition-all duration-200 group ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#22c55e] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center gap-2 text-white text-base font-medium transition-all duration-200 w-fit group relative py-1"
            >
              Start a project
              <ArrowUpRight size={16} strokeWidth={2.5} />
              <span className="absolute -bottom-1 left-0 h-[2px] bg-[#22c55e] transition-all duration-300 w-0 group-hover:w-full" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
