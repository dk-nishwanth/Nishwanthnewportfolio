import { motion } from "motion/react";

export default function SolutionsSection() {
  const skills = [
    {
      title: "Programming",
      description: "HTML/CSS, Blueprint (Unreal Engine 5), AI Developer (Any Language)",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M35 40 L45 50 L35 60" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="55" y1="40" x2="50" y2="60" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "Designing",
      description: "UI/UX, Unity, Unreal Engine 5, AutoCAD, Revit Architecture, Google Sketchup",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "Technologies",
      description: "VS Code, Figma, Cursor AI, Unreal Engine, Adobe Tools",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="30" x2="80" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="30" x2="20" y2="70" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      ),
      highlight: true
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-shift-black" id="skills">
      {skills.map((skill, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`p-10 lg:p-16 flex flex-col min-h-[500px] lg:min-h-[600px] transition-all duration-500 ${
            skill.highlight ? 'bg-shift-orange text-shift-black' : 'bg-shift-gray text-shift-black border-b md:border-b-0 md:border-r border-shift-black'
          }`}
        >
          <div className="flex-1 flex items-center justify-center">
            <motion.div 
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 lg:w-64 lg:h-64 opacity-80"
            >
              {skill.icon}
            </motion.div>
          </div>
          
          <div className="mt-8 lg:mt-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 tracking-tighter">{skill.title}</h3>
            <p className="font-mono text-[10px] lg:text-[11px] leading-relaxed opacity-80 max-w-xs uppercase tracking-widest">
              {skill.description}
            </p>
            
            <a href="/skills" className={`mt-8 lg:mt-10 px-8 py-3 rounded-full border border-shift-black font-mono text-[10px] uppercase tracking-widest hover:bg-shift-black hover:text-white transition-colors inline-block ${skill.highlight ? 'bg-shift-black text-white' : ''}`}>
              View Details
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
