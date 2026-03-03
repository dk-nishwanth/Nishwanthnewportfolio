import { motion } from "motion/react";

export default function DesignsPage() {
  const designs = [
    { 
      title: "Electric Go", 
      cat: "App UI/UX", 
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=1600&fit=crop&q=80", 
      span: "row-span-2",
      link: "https://www.behance.net/gallery/212573331/Electric-Go-%28-Electric-rental-vehicle-booking-app%29"
    },
    { 
      title: "Poster Designs", 
      cat: "Graphic Design", 
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80", 
      span: "col-span-2",
      link: "https://www.behance.net/gallery/212025573/Poster-Design"
    },
    { 
      title: "Mall Landing Page", 
      cat: "Web Design", 
      img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=1200&fit=crop&q=80", 
      span: "",
      link: "https://www.behance.net/gallery/211960287/Landing-Page-for-Mall"
    },
    { 
      title: "Resort Suggestion App", 
      cat: "Mobile UI", 
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1200&fit=crop&q=80", 
      span: "col-span-2",
      link: "https://www.behance.net/gallery/209151259/Resort-Suggestion-App"
    },
    { 
      title: "Food Website Landing", 
      cat: "Web Design", 
      img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=800&fit=crop&q=80", 
      span: "",
      link: "https://www.behance.net/gallery/208369221/Landing-page-for-Foodwebsite"
    },
    { 
      title: "Full Portfolio", 
      cat: "Behance", 
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80", 
      span: "col-span-2",
      link: "https://www.behance.net/dknishwanth"
    },
  ];

  return (
    <main className="pt-24 min-h-screen bg-shift-black text-white">
      {/* Header */}
      <div className="p-8 lg:p-24 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mono-label text-shift-orange mb-4">05 / VISUALS</p>
          <h1 className="text-5xl lg:text-[10vw] font-black tracking-tighter leading-none">
            DESIGNS.
          </h1>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] lg:auto-rows-[500px] gap-1 p-1">
        {designs.map((design, i) => (
          <motion.a 
            key={i}
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden cursor-pointer ${design.span}`}
          >
            <img 
              src={design.img} 
              alt={design.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-shift-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
              <div className="overflow-hidden">
                <motion.p 
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="font-mono text-[9px] lg:text-xs text-shift-orange uppercase tracking-widest mb-2"
                >
                  {design.cat}
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.h3 
                  initial={{ y: 40 }}
                  whileInView={{ y: 0 }}
                  className="text-2xl lg:text-4xl font-bold text-white tracking-tighter"
                >
                  {design.title}
                </motion.h3>
              </div>
            </div>

            {/* Corner Icon */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-2 h-2 bg-shift-orange rotate-45"></div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="py-24 lg:py-32 px-6 text-center border-t border-white/10">
        <p className="text-xl lg:text-4xl font-light italic opacity-40 max-w-4xl mx-auto leading-relaxed">
          "Design is not just what it looks like and feels like. Design is how it works."
        </p>
      </div>
    </main>
  );
}
