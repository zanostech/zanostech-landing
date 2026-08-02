import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import { Mail, MapPin, AtSign } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <PageHero
        tag="Contact"
        title={<>Tell us what <span className="text-[#22c55e]">you&apos;re building.</span></>}
        description="Fill in a few details and we'll get back within one business day. Prefer email? hello@zanostech.com works too."
        rightContent={
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Envelope Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/[0.05] backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-6 animate-float shadow-[0_0_40px_rgba(59,130,246,0.15)] z-20 flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                 <Mail size={32} className="text-white" />
               </div>
               <h3 className="text-white font-semibold text-lg">Get in touch</h3>
               <p className="text-blue-400 text-sm mt-1 mb-5 font-medium">We usually reply within 24 hours.</p>
               <div className="w-full flex gap-2">
                 <div className="flex-1 h-2 rounded bg-gradient-to-r from-blue-500 to-indigo-400" />
                 <div className="flex-1 h-2 rounded bg-white/[0.1]" />
                 <div className="flex-1 h-2 rounded bg-gradient-to-r from-[#22c55e] to-emerald-400" />
               </div>
            </div>

            {/* Floating Location Pin */}
            <div className="absolute top-[20%] left-[10%] w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-pink-500/30 rounded-full flex items-center justify-center animate-float-delayed shadow-[0_0_20px_rgba(236,72,153,0.2)] z-30">
               <MapPin size={24} className="text-pink-400" />
            </div>
            
            {/* Floating At Sign */}
            <div className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-[#22c55e]/20 to-emerald-600/20 backdrop-blur-xl border border-[#22c55e]/30 rounded-2xl flex items-center justify-center animate-float-reverse shadow-[0_0_20px_rgba(34,197,94,0.2)] z-30 rotate-12">
               <AtSign size={28} className="text-[#22c55e]" />
            </div>

            {/* Glowing Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-white/[0.05] rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-white/[0.02] rounded-full z-0" />
            
            {/* Background Light */}
            <div className="absolute top-[30%] left-[30%] w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full z-0" />
            <div className="absolute bottom-[30%] right-[30%] w-40 h-40 bg-pink-500/10 blur-[60px] rounded-full z-0" />
          </div>
        }
      />
      <section className="py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
