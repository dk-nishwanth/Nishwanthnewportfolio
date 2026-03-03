import { motion } from "motion/react";

export default function EducationPage() {
  const education = [
    {
      year: "Expected May 2026",
      title: "B.E. Computer Science and Engineering",
      inst: "K S Rangasamy College of Technology, Tiruchengode, Tamil Nadu",
      desc: "Computer Science undergraduate passionate about UI/UX design, game design, and automation. Focusing on software engineering, UI/UX design, and automation. Actively participating in hackathons and technical symposiums.",
      color: "bg-shift-orange"
    },
    {
      year: "Graduated May 2023",
      title: "Diploma in Architectural Assistantship",
      inst: "K S Rangasamy Polytechnic College, Tiruchengode, Tamil Nadu",
      desc: "Foundation in spatial design, structural engineering, and photorealistic visualization. Developed a strong eye for detail and aesthetics through architectural studies.",
      color: "bg-[#C5C5C5]"
    }
  ];

  const certs = [
    "Unity Game Development - Infosys (2024)",
    "Java Programming - Infosys (2024)",
    "AI Foundations - Infosys (2024)",
    "Prompt Engineering - Industry Certified (2024)",
    "JavaScript Fundamentals - Industry Certified (2023)",
    "UiPath Automation - Self-Certified (2023)"
  ];

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="p-8 lg:p-24 border-b border-shift-black bg-[#C5C5C5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="mono-label text-shift-black/60 mb-4">04 / ACADEMIC</p>
          <h1 className="text-5xl lg:text-[10vw] font-black tracking-tighter leading-none">
            EDUCATION.
          </h1>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto py-16 lg:py-24 px-6 lg:px-12">
        <div className="space-y-24 lg:space-y-32">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className={`inline-block px-4 lg:px-6 py-2 ${edu.color} text-shift-black font-mono text-xs lg:text-sm font-bold mb-6 lg:mb-8 rounded-sm`}>
                  {edu.year}
                </div>
                <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter mb-4 lg:mb-6 leading-none">
                  {edu.title}
                </h2>
                <p className="text-lg lg:text-xl font-mono text-shift-orange mb-6 lg:mb-8 uppercase tracking-widest">{edu.inst}</p>
                <p className="text-base lg:text-lg opacity-60 leading-relaxed max-w-2xl">
                  {edu.desc}
                </p>
              </div>
              <div className="w-full lg:w-1/3 aspect-square bg-shift-gray relative overflow-hidden group">
                <img 
                  src={i === 0 ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop&q=80" : "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop&q=80"} 
                  alt={edu.inst}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[10px] lg:border-[20px] border-white/10 group-hover:border-shift-orange/20 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="bg-shift-black text-white py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-12 lg:mb-16 flex items-center gap-4 lg:gap-6">
            <span className="text-shift-orange text-4xl lg:text-6xl leading-none">/</span>
            Certifications & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-8 lg:p-10 border border-white/10 hover:bg-white/5 transition-colors group"
              >
                <p className="font-mono text-[9px] lg:text-[10px] text-shift-orange mb-4">CERT_0{i + 1}</p>
                <h3 className="text-lg lg:text-xl font-bold tracking-tight group-hover:translate-x-2 transition-transform">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
