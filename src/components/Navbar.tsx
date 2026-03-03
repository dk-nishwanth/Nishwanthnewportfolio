import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();

      // Get the element at the navbar position
      const elementAtNavbar = document.elementFromPoint(window.innerWidth / 2, navbarRect.height / 2);
      
      if (elementAtNavbar) {
        const bgColor = window.getComputedStyle(elementAtNavbar).backgroundColor;
        const classList = elementAtNavbar.className;

        // Check for light backgrounds by class or computed color
        if (classList.includes("bg-shift-orange") || 
            classList.includes("bg-white") || 
            classList.includes("bg-[#C5C5C5]") ||
            classList.includes("bg-shift-gray") ||
            bgColor === "rgb(255, 255, 255)" ||
            bgColor.includes("rgb(197, 197, 197)")) {
          setTextColor("text-shift-black");
        } else {
          // Default to white for dark backgrounds
          setTextColor("text-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", sup: "" },
    { name: "About", path: "/about", sup: "2" },
    { name: "Projects", path: "/projects", sup: "4" },
    { name: "Designs", path: "/designs", sup: "" },
    { name: "Skills", path: "/skills", sup: "8" },
    { name: "Education", path: "/education", sup: "" },
    { name: "Contact", path: "/contact", sup: "" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 lg:px-6 py-4 lg:py-6 bg-white/80 backdrop-blur-sm border-b border-shift-black/10">
        <Link to="/" className={`flex items-center gap-2 group text-shift-black`}>
          <div className={`w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rotate-45 transition-transform group-hover:rotate-90 bg-shift-black`}>
            <div className={`w-3 h-3 lg:w-4 lg:h-4 border-2 border-white`}></div>
          </div>
          <span className="font-extrabold text-sm lg:text-2xl tracking-tighter uppercase">DK NISHWANTH</span>
        </Link>
        
        <button 
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2 group transition-colors text-shift-black`}
        >
          <div className="flex flex-col gap-1 items-end">
            <div className={`h-[1px] w-8 transition-all group-hover:w-12 bg-shift-black`}></div>
            <div className={`h-[1px] w-6 transition-all group-hover:w-12 bg-shift-black`}></div>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest">Menu</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-[320px] lg:max-w-[450px] z-[100] bg-[#C5C5C5]/95 backdrop-blur-md p-8 lg:p-16 flex flex-col shadow-2xl border-l border-black/10"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-16">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 group text-shift-black"
                >
                  <X size={16} strokeWidth={2.5} />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Close</span>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  {menuItems.map((item, i) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      <Link 
                        to={item.path}
                        className="group cursor-pointer flex items-start gap-1" 
                        onClick={() => setIsOpen(false)}
                      >
                        <h2 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tighter text-shift-black hover:translate-x-2 transition-transform duration-300">
                          {item.name}
                        </h2>
                        {item.sup && (
                          <span className="text-lg font-bold mt-1 text-shift-black/30">{item.sup}</span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Info in Menu */}
              <div className="mt-auto pt-12 border-t border-black/10">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-2">Portfolio 2026</p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">DK Nishwanth_</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
