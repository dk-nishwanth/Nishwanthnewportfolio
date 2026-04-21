import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-shift-black text-shift-gray p-6 lg:p-12" id="contact">
      <div className="border border-white/10 p-8 lg:p-16 rounded-sm">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block group">
              <div className="w-10 h-10 bg-shift-orange flex items-center justify-center rotate-45 mb-8 transition-transform group-hover:rotate-90">
                <div className="w-5 h-5 border-2 border-black"></div>
              </div>
              <h4 className="text-white font-bold text-xl tracking-tighter">DK NISHWANTH</h4>
            </Link>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 font-mono text-xs opacity-60">
              <li><Link to="/" className="hover:text-shift-orange transition-colors">↳ Home</Link></li>
              <li><Link to="/about" className="hover:text-shift-orange transition-colors">↳ About</Link></li>
              <li><Link to="/projects" className="hover:text-shift-orange transition-colors">↳ Projects</Link></li>
              <li><Link to="/designs" className="hover:text-shift-orange transition-colors">↳ Designs</Link></li>
              <li><Link to="/skills" className="hover:text-shift-orange transition-colors">↳ Skills</Link></li>
              <li><Link to="/education" className="hover:text-shift-orange transition-colors">↳ Education</Link></li>
              <li><Link to="/contact" className="hover:text-shift-orange transition-colors">↳ Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <ul className="space-y-3 font-mono text-xs opacity-60">
              <li><a href="https://www.linkedin.com/in/nishwanth-dk" target="_blank" rel="noopener noreferrer" className="hover:text-shift-orange transition-colors">↳ LinkedIn</a></li>
              <li><a href="https://www.behance.net/dknishwanth" target="_blank" rel="noopener noreferrer" className="hover:text-shift-orange transition-colors">↳ Behance</a></li>
              <li><a href="mailto:dknishwanth1718@gmail.com" className="hover:text-shift-orange transition-colors">↳ Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stats</h4>
            <ul className="space-y-3 font-mono text-xs opacity-60">
              <li className="flex justify-between"><span>Portfolio Views</span> <span className="text-shift-orange">1,247</span></li>
              <li className="flex justify-between"><span>Resume Downloads</span> <span className="text-shift-orange">89</span></li>
              <li className="flex justify-between"><span>Project Clicks</span> <span className="text-shift-orange">324</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="space-y-6 w-full lg:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-8 h-5 bg-white/10 flex items-center justify-center">
                <div className="w-4 h-3 bg-shift-orange/40"></div>
              </div>
              <span className="mono-label">Bridging creativity with technology.</span>
            </div>
            
            <div className="font-mono text-[10px] opacity-40 leading-relaxed">
              EMAIL: dknishwanth1718@gmail.com<br />
              LOCATION: Ooty, TAMIL NADU<br />
              AVAILABILITY: OPEN TO OPPORTUNITIES
            </div>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[14vw] lg:text-[18vw] font-extrabold leading-none tracking-tighter text-white/5 select-none w-full text-right lg:text-left"
          >
            NISHWANTH
          </motion.h2>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-6 font-mono text-[9px] uppercase tracking-widest opacity-40">
          <span>MADE BY NISHWANTH ♥</span>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Portfolio 2026</span>
            <span className="hover:text-white cursor-pointer transition-colors">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
