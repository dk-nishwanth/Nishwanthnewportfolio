import { motion } from "motion/react";
import { useState } from "react";

export default function ProjectsPage() {
  const [imageLoaded, setImageLoaded] = useState<{[key: number]: boolean}>({});

  const projects = [
    { 
      title: "SwitchStep", 
      cat: "Industrial Design / MSME", 
      desc: "Designed modular, eco-friendly footwear with retractable and detachable parts. Created 3D prototypes and refined the design based on user testing.",
      size: "lg",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&q=60",
      link: "https://www.linkedin.com/in/nishwanth-dk"
    },
    { 
      title: "Timesheet Validation", 
      cat: "Automation / RPA", 
      desc: "Built a bot to validate timesheets, detect missing hours, and generate error reports. Integrated Excel and Outlook to automate HR tasks.",
      size: "sm",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop&q=60",
      link: "https://www.linkedin.com/posts/nishwanth-dk_rpa-uipath-automation-activity-7334252189323825153-b3iz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbZioMB2keZd-ksw0VH3R-_N0GYu-HdMGU"
    },
    { 
      title: "Kolli Hills Spices", 
      cat: "UI/UX & Frontend", 
      desc: "Led UI/UX design and frontend development for a spice ecommerce site. Collaborated with local farmers and built the interface in Figma and React.",
      size: "sm",
      img: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400&q=60",
      link: "https://www.linkedin.com/posts/nishwanth-dk_uiux-webdesign-figma-activity-7319240001928474624-G8rk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbZioMB2keZd-ksw0VH3R-_N0GYu-HdMGU"
    },
    { 
      title: "Spaceship Game", 
      cat: "Game Dev / UE5", 
      desc: "Developed a space exploration game with interactive planets and custom UI. Used Blueprints to implement movement, environment design, and gameplay.",
      size: "md",
      img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&q=60",
      link: "https://www.linkedin.com/posts/nishwanth-dk_unrealengine-gamedevelopment-indiedev-activity-7315055371893514243-Z8oi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbZioMB2keZd-ksw0VH3R-_N0GYu-HdMGU"
    },
    { 
      title: "Aircraft Game", 
      cat: "Game Dev / UE5", 
      desc: "Developed a high-speed aircraft simulation with custom flight mechanics and environment design in Unreal Engine 5.",
      size: "md",
      img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&q=60",
      link: "https://www.linkedin.com/posts/nishwanth-dk_unrealengine-gamedevelopment-blueprint-activity-7350096066836320256-GOCY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbZioMB2keZd-ksw0VH3R-_N0GYu-HdMGU"
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="p-8 lg:p-24 border-b border-shift-black bg-shift-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mono-label text-shift-orange mb-4">02 / WORK</p>
          <h1 className="text-5xl lg:text-[10vw] font-black tracking-tighter leading-none">
            PROJECTS.
          </h1>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[300px] lg:auto-rows-[400px]">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden border-r border-b border-shift-black cursor-pointer ${
              p.size === 'lg' ? 'md:col-span-4 md:row-span-2' : 
              p.size === 'md' ? 'md:col-span-3' : 
              'md:col-span-2'
            }`}
          >
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-shift-black/20 to-shift-black/40" />
            
            {/* Image with lazy loading */}
            <img 
              src={p.img} 
              alt={p.title}
              loading="lazy"
              onLoad={() => setImageLoaded(prev => ({...prev, [i]: true}))}
              className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 ${
                imageLoaded[i] ? 'opacity-100' : 'opacity-0'
              }`}
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-shift-black/95 via-shift-black/40 to-transparent flex flex-col justify-end p-6 lg:p-12">
              <p className="font-mono text-[9px] lg:text-[10px] text-shift-orange uppercase tracking-widest mb-2">{p.cat}</p>
              <h3 className="text-2xl lg:text-5xl font-bold text-white tracking-tighter mb-4">{p.title}</h3>
              <p className="text-white/80 text-xs lg:text-sm max-w-sm leading-relaxed">{p.desc}</p>
            </div>
            
            {/* Corner Label */}
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 border border-white/20 rounded-full flex items-center justify-center text-white/40 font-mono text-[9px] lg:text-[10px] group-hover:border-shift-orange group-hover:text-shift-orange transition-colors">
              0{i + 1}
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
