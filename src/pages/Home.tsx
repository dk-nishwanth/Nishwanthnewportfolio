import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import SolutionsSection from "../components/SolutionsSection";
import NewsSection from "../components/NewsSection";
import ExperienceSection from "../components/ExperienceSection";
import { motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <main>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-shift-black/10 origin-left z-20"
        />
        <FeatureSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative"
      >
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-shift-black/10 origin-left z-20"
        />
        <SolutionsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative"
      >
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-shift-black/10 origin-left z-20"
        />
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative"
      >
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-shift-black/10 origin-left z-20"
        />
        <NewsSection />
      </motion.div>

      {/* Call to Action Section */}
      <section className="bg-shift-orange py-32 lg:py-64 px-6 text-center border-b border-shift-black overflow-hidden relative">
        {/* Decorative Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <h2 className="text-[40vw] font-black leading-none">COLLAB</h2>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl lg:text-[10vw] font-extrabold tracking-tighter mb-16 lg:mb-24 leading-[0.85] relative z-10"
        >
          Ready to collaborate on your<br />
          next project?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <div className="text-2xl lg:text-6xl font-light mb-12 lg:mb-16 flex items-center justify-center gap-2 lg:gap-4">
            <span className="text-5xl lg:text-[10rem] font-thin opacity-30">(</span>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none text-center focus:ring-0 placeholder:text-shift-black/30 w-full text-xl lg:text-5xl font-medium"
            />
            <span className="text-5xl lg:text-[10rem] font-thin opacity-30">)</span>
          </div>
          
          <a href="/contact" className="w-full lg:w-auto px-12 lg:px-16 py-5 lg:py-6 bg-shift-black text-white rounded-full font-mono text-xs lg:text-sm uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl inline-block text-center">
            Send Message
          </a>
        </motion.div>
        
        <div className="mt-24 lg:mt-48 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left max-w-7xl mx-auto border-t border-shift-black/20 pt-12 lg:pt-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[200px]"
          >
            <p className="mono-label mb-2">I'm always excited to discuss new opportunities, creative projects, and innovative ideas.</p>
          </motion.div>
          <motion.a
            href="https://www.linkedin.com/in/nishwanth-dk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block group"
          >
            <p className="mono-label mb-2">LinkedIn</p>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-white transition-colors">Connect with me professionally</p>
          </motion.a>
          <motion.a
            href="mailto:dknishwanth1718@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block group"
          >
            <p className="mono-label mb-2">Email</p>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight mb-8 group-hover:text-white transition-colors">dknishwanth1718@gmail.com</p>
          </motion.a>
        </div>
      </section>
    </main>
    </>
  );
}
