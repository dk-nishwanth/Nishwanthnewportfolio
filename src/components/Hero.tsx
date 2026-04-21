import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative bg-shift-orange border-b border-shift-black pt-20">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm mb-4 bg-black/10 self-start px-3 py-1 rounded inline-block"
          >
            &gt; Hello, I'm DK Nishwanth_
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-extrabold leading-tight tracking-tighter mb-2"
          >
            DK
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl font-extrabold leading-tight tracking-tighter mb-6"
          >
            Nishwanth
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-bold text-sm leading-tight tracking-tight mb-6"
          >
            UI/UX Designer | Frontend Developer | Game Designer & Developer | Automation Specialist
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="font-medium text-xs opacity-80 leading-relaxed mb-6"
          >
            Computer Science undergraduate passionate about UI/UX design, game design, and automation. Skilled in Unreal Engine 5, front-end development, and process automation tools like UiPath.
          </motion.p>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            href="/Nishwanth-DK-Resume.pdf" 
            download="Nishwanth-DK-Resume.pdf"
            className="w-full px-6 py-3 bg-shift-black text-white rounded-full font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 text-center"
          >
            Download Resume
          </motion.a>
        </div>

        {/* About Me Section */}
        <div className="bg-[#C5C5C5] p-6 border-t border-shift-black">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mono-label mb-3"
          >
            About Me
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="space-y-3"
          >
            <div className="font-mono text-[10px] opacity-60 bg-black/5 p-3 rounded">
              <p className="text-shift-orange">// Personal philosophy</p>
              <p>const passion = <span className="text-shift-orange">"bridging creativity"</span>;</p>
              <p>const goal = <span className="text-shift-orange">"meaningful experiences"</span>;</p>
            </div>
            <p className="text-sm font-bold leading-tight tracking-tight">
              Multidisciplinary approach blending architectural design with computer science expertise.
            </p>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="bg-shift-black text-white p-6 border-t border-shift-black"
        >
          <h3 className="text-lg font-bold mb-4 tracking-tight">Expertise</h3>
          <div className="space-y-2">
            {[
              "UI/UX Design", "Frontend Development", "Game Design & Development", "Automation (UiPath)", "Architectural Design"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 + (i * 0.1) }}
                className="flex justify-between items-center border-b border-white/10 pb-2"
              >
                <span className="text-xs tracking-wider font-bold">{item}</span>
                <span className="text-shift-orange">●</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-[1fr_450px] border-b border-shift-black">
        {/* Left Side: Main Heading */}
        <div className="bg-shift-orange p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Background Pattern/Image */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 2 }}
              src="https://picsum.photos/seed/tech-grid/1920/1080?grayscale" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-2xl mb-8 bg-black/10 self-start px-4 py-2 rounded inline-block"
            >
              &gt; Hello, I'm DK Nishwanth_
            </motion.div>
            
            <div className="flex flex-row items-start gap-8 mb-4">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[10vw] font-extrabold leading-[0.75] tracking-tighter"
              >
                DK
              </motion.h1>
              
              <div className="flex flex-row items-center gap-6 mt-8">
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-8 h-32 bg-shift-black origin-bottom transform -skew-x-[25deg]"
                ></motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="max-w-[450px] font-bold text-2xl leading-[1.1] tracking-tight"
                >
                  | UI/UX Designer | Frontend Developer | Game Designer & Developer | Automation Specialist | Architect |
                </motion.p>
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[10vw] font-extrabold leading-[0.75] tracking-tighter"
            >
              Nishwanth
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-12 flex flex-row gap-8 items-center"
            >
              <p className="max-w-md font-medium text-lg opacity-80 leading-relaxed">
                Computer Science undergraduate passionate about UI/UX design, game design, and automation. Skilled in Unreal Engine 5, front-end development, and process automation tools like UiPath. Creative thinker with experience in architectural design.
              </p>
              <a 
                href="/Nishwanth-DK-Resume.pdf" 
                download="Nishwanth-DK-Resume.pdf"
                className="px-8 py-4 bg-shift-black text-white rounded-full font-mono text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 whitespace-nowrap"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Sidebar (Repurposed for About Me) */}
        <div className="flex flex-col border-l border-shift-black">
          {/* Top Block: Philosophy */}
          <div className="flex-1 p-14 flex flex-col justify-center bg-[#C5C5C5]">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mono-label mb-4"
            >
              About Me
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="font-mono text-sm opacity-60 bg-black/5 p-4 rounded">
                <p className="text-shift-orange">// Personal philosophy</p>
                <p>const passion = <span className="text-shift-orange">"bridging creativity with technology"</span>;</p>
                <p>const goal = <span className="text-shift-orange">"creating meaningful digital experiences"</span>;</p>
              </div>
              <p className="text-2xl font-bold leading-[1.2] tracking-tight">
                With a unique blend of architectural design and computer science expertise, I bring a multidisciplinary approach to every project I undertake.
              </p>
            </motion.div>
          </div>
          
          {/* Bottom Block: Expertise Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="h-[450px] bg-shift-black text-shift-gray p-12 font-mono text-[11px] flex flex-col"
          >
            <h3 className="text-2xl font-sans font-bold mb-8 text-white tracking-tight">Expertise</h3>
            <div className="flex-1 space-y-4 opacity-90">
              {[
                "UI/UX Design", "Frontend Development", "Game Design & Development", "Automation (UiPath)", "Architectural Design"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + (i * 0.1) }}
                  className="flex justify-between items-center border-b border-white/10 pb-4"
                >
                  <span className="text-lg tracking-wider font-sans font-bold">{item}</span>
                  <span className="text-shift-orange text-lg leading-none">●</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5 }}
              className="mt-8 text-[10px] leading-relaxed"
            >
              &gt; Passionate about crafting beautiful, functional user interfaces, developing engaging games, and exploring the intersection of design and technology.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
