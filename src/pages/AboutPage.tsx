import ExperienceSection from "../components/ExperienceSection";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-shift-gray">
      {/* Editorial Header - Full Viewport Height */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-shift-black h-screen lg:h-screen">
        <div className="bg-shift-orange flex flex-col justify-center p-4 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mono-label mb-1 lg:mb-2 text-white text-xs lg:text-sm">01 / PROFILE</p>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
              UI/UX<br />DESIGNER.<br />DEVELOPER.
            </h1>
          </motion.div>
        </div>
        <div className="relative overflow-hidden bg-shift-black">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="https://picsum.photos/seed/profile/1200/1600" 
            alt="Profile"
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 right-3 lg:right-6">
            <p className="text-white font-mono text-[8px] lg:text-xs uppercase tracking-widest leading-tight max-w-xs">
              Bridging the gap between physical space and digital interfaces through code and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-shift-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-shift-black bg-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-3 lg:mb-4">The Journey</h2>
          <p className="text-sm lg:text-base leading-relaxed opacity-70">
            My journey began in architecture, where I developed a keen eye for design, spatial relationships, and user experience. This foundation naturally evolved into digital design and development, where I now create innovative solutions blending architectural principles with cutting-edge technology.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-shift-black bg-[#C5C5C5]"
        >
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-3 lg:mb-4">The Vision</h2>
          <p className="text-sm lg:text-base leading-relaxed opacity-70">
            My goal is creating meaningful digital experiences that bridge creativity with technology. I'm passionate about crafting beautiful, functional user interfaces, developing engaging games, and exploring the intersection of design and technology.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 lg:p-12 bg-shift-orange"
        >
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-3 lg:mb-4">The Tools</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Unreal Engine 5", "UiPath", "Figma", "AutoCAD", "SketchUp","Revit architecture","Adobe Photoshop","Adobe After Effects"," Unity","AI Tools "].map((tool, i) => (
              <motion.span 
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="px-2 py-1 bg-shift-black text-white font-mono text-[8px] lg:text-[9px] uppercase tracking-wider rounded-full"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <ExperienceSection />
    </main>
  );
}
