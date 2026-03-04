import { motion } from "motion/react";

export default function NewsSection() {
  return (
    <section className="border-b border-shift-black grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Featured Certification */}
      <div className="flex flex-col border-r border-shift-black">
        <div className="h-[60vh] relative overflow-hidden bg-shift-dark-gray border-b border-shift-black">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            src="https://picsum.photos/seed/unity-engine-cert/1920/1080?grayscale" 
            alt="Unity Certification"
            className="w-full h-full object-cover mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 text-white/80"
             >
                <div className="w-6 h-6 bg-shift-orange flex items-center justify-center rotate-45">
                  <div className="w-3 h-3 border border-white"></div>
                </div>
                <span className="font-extrabold text-xl tracking-tighter">CERTIFIED</span>
              </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-shift-black text-white p-12 lg:p-16 flex flex-col justify-between min-h-[400px]"
        >
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] tracking-tighter mb-8 max-w-xl">
              Unity Game Development (Infosys)
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-4">ISSUED BY INFOSYS</p>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 max-w-xs">
              PROFESSIONAL CERTIFICATION COVERING GAME MECHANICS, 3D RENDERING, AND PERFORMANCE OPTIMIZATION.
            </p>
          </div>
          
          <a href="/education" className="self-start mt-12 px-10 py-4 rounded-full border border-white/20 font-mono text-[10px] uppercase tracking-widest hover:bg-shift-orange hover:text-black transition-colors inline-block">
            View Certificate
          </a>
        </motion.div>
      </div>

      {/* Right: Education & Other Certs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#C5C5C5]">
        {[
          {
            title: "Bachelor of Computer Science and Engineering",
            date: "Expected May 2026",
            desc: "K S RANGASAMY COLLEGE OF TECHNOLOGY - TIRUCHENGODE, TAMIL NADU."
          },
          {
            title: "Diploma in Architectural Assistantship",
            date: "May 2023",
            desc: "K S RANGASAMY POLYTECHNIC COLLEGE - TIRUCHENGODE, TAMIL NADU."
          },
          {
            title: "Technical Certifications",
            date: "2023 - 2024",
            desc: "UNITY GAME DEVELOPMENT (INFOSYS) || JAVA (INFOSYS) || AI INTRODUCTION (INFOSYS) || JAVASCRIPT || PROMPT ENGINEERING (INFOSYS) || UNREAL ENGINE 5 || AUTOCAD || UI/PATH"
          },
          {
            title: "Design Certifications",
            date: "2023 - 2024",
            desc: "GOOGLE SKETCHUP || REVIT ARCHITECTURE || UI/UX DESIGN PRINCIPLES."
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 lg:p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[400px] border-b border-shift-black hover:bg-shift-black hover:text-white transition-colors duration-300 ${i % 2 === 0 ? 'md:border-r' : ''}`}
          >
            <div>
              <h3 className="text-xl lg:text-3xl font-bold leading-tight tracking-tight mb-6">{item.title}</h3>
              <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest opacity-40 mb-4">{item.date}</p>
            </div>
            <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest opacity-60 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
