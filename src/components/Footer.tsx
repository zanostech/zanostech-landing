"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web design & development", href: "/services" },
    { label: "App design & development", href: "/services" },
    { label: "CMS solutions", href: "/services" },
    { label: "CRM systems", href: "/services" },
    { label: "UI/UX design", href: "/services" },
    { label: "Video editing", href: "/services" },
  ],

  resources: [
    { label: "Case studies", href: "/work" },
    { label: "Our process", href: "/process" },
    { label: "About the studio", href: "/about" },
    { label: "Start a project", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-0">
      {/* Links Section */}
      <section className="pb-12">
        <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center mb-6">
                <img src="/zanostech-logo.png" alt="ZanosTech" className="h-8 w-auto" />
              </Link>
              <p className="text-white/50 text-sm mb-4 max-w-xs">
                A senior digital studio designing and engineering brands, products and platforms out of Dhaka since 2019.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-white/50">ISO-AWARE</span>
                <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-white/50">NDA ON REQUEST</span>
                <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-white/50">GDPR READY</span>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <p className="text-[#22c55e] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Services</p>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>



            {/* Resources */}
            <div className="lg:col-span-2">
              <p className="text-[#22c55e] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Resources</p>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio */}
            <div className="lg:col-span-2">
              <p className="text-[#22c55e] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Studio</p>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#22c55e] mt-0.5 shrink-0" />
                  <p className="text-white/50 text-sm">
                    House 14, Road 9, Block-C<br />
                    Banasree, Dhaka 1219
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#22c55e] shrink-0" />
                  <a href="mailto:hello@zanostech.com" className="text-white/50 text-sm hover:text-white transition-colors">
                    hello@zanostech.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#22c55e] shrink-0" />
                  <a href="tel:+8801700000000" className="text-white/50 text-sm hover:text-white transition-colors">
                    +880 1700 000 000
                  </a>
                </div>
                <p className="text-white/40 text-xs pt-1">
                  SUN – THU · 10 – 19 GMT+6
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-t border-white/[0.06] py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 sm:gap-20 mx-6 sm:mx-10">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20">Websites</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#22c55e]">
                <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20">Mobile apps</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#22c55e]">
                <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20">CMS</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#22c55e]">
                <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="currentColor"/>
              </svg>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/20">CRM</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#22c55e]">
                <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="currentColor"/>
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] py-6">
        <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
            <span>&copy; 2026 ZanosTech Ltd. All rights reserved.</span>
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Cookies</Link>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
              Currently booking Q3 · 2026
            </span>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="hover:text-white/60 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
