import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function FeatureSection() {
  const projects = [
    {
      id: 1,
      title: "SwitchStep",
      category: "Modular Footwear Innovation / MSME Hackathon",
      image: "https://picsum.photos/seed/modular-footwear/1920/1080?grayscale",
      desc: "Designed modular, eco-friendly footwear with retractable and detachable parts. Created 3D prototypes and refined the design based on user testing."
    },
    {
      id: 2,
      title: "Timesheet Validator",
      category: "Automation / RPA",
      image: "https://picsum.photos/seed/automation-code/1920/1080?grayscale",
      desc: "Built a bot to validate timesheets, detect missing hours, and generate error reports. Integrated Excel and Outlook to automate HR tasks."
    },
    {
      id: 3,
      title: "Kolli Hills Spices",
      category: "UI/UX & Frontend",
      image: "https://picsum.photos/seed/organic-spices/1920/1080?grayscale",
      desc: "Led UI/UX design and frontend development for a spice ecommerce site. Collaborated with local farmers and built the interface in Figma and React."
    },
    {
      id: 4,
      title: "Spaceship Game",
      category: "Game Dev / UE5",
      image: "https://picsum.photos/seed/spaceship-ue5/1920/1080?grayscale",
      desc: "Developed a space exploration game with interactive planets and custom UI. Used Blueprints to implement movement, environment design, and gameplay."
    },
    {
      id: 5,
      title: "Aircraft Game",
      category: "Game Dev / UE5",
      image: "https://picsum.photos/seed/aircraft-game/1920/1080?grayscale",
      desc: "Developed a high-speed aircraft simulation with custom flight mechanics and environment design in Unreal Engine 5."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setAutoPlay(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="border-b border-shift-black" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px]">
        {/* Left Side: Featured Project Image Slideshow */}
        <div className="relative h-[70vh] lg:h-auto overflow-hidden bg-shift-dark-gray border-r border-shift-black group">
          <motion.img 
            key={currentProject.id}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.5 }}
            src={currentProject.image} 
            alt={currentProject.title}
            className="w-full h-full object-cover mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          
          {/* Project Counter */}
          <div className="absolute top-8 left-8">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               key={currentProject.id}
               className="flex items-center gap-2 text-white/80"
             >
                <div className="w-6 h-6 bg-white/20 flex items-center justify-center rotate-45">
                  <div className="w-3 h-3 border border-white"></div>
                </div>
                <span className="font-extrabold text-xl tracking-tighter">PROJECT {String(currentIndex + 1).padStart(2, '0')}</span>
              </motion.div>
          </div>
          
          {/* Project Title */}
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
            <motion.h2 
              key={`title-${currentProject.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-7xl font-bold text-white tracking-tighter"
            >
              {currentProject.title}
            </motion.h2>
            <motion.p 
              key={`cat-${currentProject.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-mono text-[10px] lg:text-xs text-white/60 mt-4 uppercase tracking-widest"
            >
              {currentProject.category}
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={goToPrevious}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={goToNext}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Project Details & CTA */}
        <div className="flex flex-col">
          {/* Project Description Block */}
          <div className="flex-1 bg-shift-black text-shift-gray p-8 lg:p-12 font-mono text-[11px] border-b border-shift-black">
             <h3 className="text-xl lg:text-2xl font-sans font-bold mb-6 lg:mb-8 text-white tracking-tight">Featured Projects</h3>
             <motion.p 
               key={`desc-${currentProject.id}`}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="text-base lg:text-lg font-sans mb-8 lg:mb-12 opacity-80 leading-relaxed"
             >
               {currentProject.desc}
             </motion.p>
             
             <div className="space-y-3 lg:space-y-4 opacity-90">
                {projects.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      setAutoPlay(false);
                    }}
                    className={`w-full text-left flex justify-between items-center border-b pb-3 transition-colors ${
                      i === currentIndex 
                        ? 'border-shift-orange text-shift-orange' 
                        : 'border-white/10 hover:text-shift-orange'
                    }`}
                  >
                    <span className="text-xs lg:text-sm tracking-wider font-bold">{item.title}</span>
                    <ArrowUpRight size={14} className={i === currentIndex ? 'opacity-100' : 'opacity-0'} />
                  </button>
                ))}
              </div>
          </div>

          {/* Portfolio CTA Block */}
          <a href="/designs" className="h-[250px] lg:h-[350px] bg-shift-orange p-8 lg:p-16 flex flex-col justify-end group cursor-pointer overflow-hidden relative hover:opacity-90 transition-opacity">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute top-8 right-8 lg:top-12 lg:right-12"
            >
              <ArrowUpRight strokeWidth={1.5} className="w-20 h-20 lg:w-32 lg:h-32" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] tracking-tighter relative z-10 max-w-[200px] lg:max-w-[250px]">
              Design Portfolio.
            </h2>
            <p className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest mt-4 opacity-80">Creative designs and UI/UX projects</p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-shift-black bg-[#C5C5C5]">
        {projects.slice(0, 3).map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-8 lg:p-14 flex flex-col justify-between min-h-[300px] lg:min-h-[350px] hover:bg-shift-black hover:text-white transition-colors duration-300 cursor-pointer ${i !== 2 ? 'border-b md:border-b-0 md:border-r border-shift-black' : ''}`}
            onClick={() => {
              setCurrentIndex(i);
              setAutoPlay(false);
            }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-4">{item.category}</p>
              <h3 className="text-2xl lg:text-4xl font-bold leading-tight tracking-tighter mb-6">{item.title}</h3>
            </div>
            <p className="font-mono text-[10px] lg:text-[11px] leading-relaxed opacity-80">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
