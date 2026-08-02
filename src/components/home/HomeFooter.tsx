import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="w-full mt-20 pt-16 pb-8 border-t border-white/[0.05] relative z-10">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Let&apos;s build <span className="text-[#22c55e]">something</span><br />
              worth shipping.
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Join 1,000+ founders receiving our weekly insights on design, engineering, and shipping products that scale.
            </p>
            <form className="flex items-center gap-2 max-w-sm">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#22c55e]/50 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="flex flex-wrap gap-12 lg:justify-end">
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                {['Work', 'Services', 'Process', 'Studio', 'Careers'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Socials</h4>
              <ul className="flex flex-col gap-3">
                {['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Location</h4>
              <p className="text-sm text-white/50 max-w-[150px]">
                Banasree, Block E<br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ZanosTech. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
