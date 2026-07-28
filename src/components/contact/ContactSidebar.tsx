import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-4 space-y-4">
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Studio</p>
        <div className="flex items-start gap-2">
          <MapPin size={14} className="text-white/30 mt-0.5 shrink-0" />
          <p className="text-white/50 text-sm">
            House 14, Road 9, Block C<br />
            Banasree, Dhaka 1219<br />
            Bangladesh
          </p>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Email</p>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-white/30 shrink-0" />
          <a href="mailto:hello@zanostech.com" className="text-white/50 text-sm hover:text-white transition-colors">
            hello@zanostech.com
          </a>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Phone / WhatsApp</p>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-white/30 shrink-0" />
          <a href="tel:+8801700000000" className="text-white/50 text-sm hover:text-white transition-colors">
            +880 1700 000 000
          </a>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Hours</p>
        <div className="flex items-start gap-2">
          <Clock size={14} className="text-white/30 mt-0.5 shrink-0" />
          <p className="text-white/50 text-sm">
            Sunday – Thursday<br />
            10:00 – 19:00 (GMT+6)
          </p>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-[#22c55e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Careers</p>
        <a href="mailto:careers@zanostech.com" className="text-white/50 text-sm hover:text-white transition-colors">
          careers@zanostech.com
        </a>
      </div>
    </div>
  );
}
