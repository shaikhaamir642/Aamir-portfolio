import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const techStack = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* --- Advanced Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/30 blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/20 blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* --- Hero Section with Profile Photo --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-32 max-w-6xl mx-auto"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
            </motion.div>
            
            {/* NAME ON A SINGLE LINE */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">SHAIKH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">AAMIR</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Developer & Prompt Engineer architecting high-performance web applications and AI-driven workflows.
            </motion.p>
          </div>

          {/* Profile Photo with Brilliant Animation */}
          <motion.div 
            variants={itemVariants}
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 blur-2xl opacity-40 mix-blend-screen scale-110"
              ></motion.div>
              
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden group">
                <img 
                  src="assets/image.png" 
                  alt="Shaikh Aamir" 
                  className="w-full h-full object-cover rounded-full filter contrast-110 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500/30 ring-inset"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- Bento Grid Projects Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            Featured Engineering
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.3)" }}
              className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 opacity-0 hover:opacity-60 transition-opacity duration-500 rounded-3xl blur-md"></div>
              
              <div className="relative h-full w-full bg-[#0a0f1c] rounded-[1.4rem] p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-4">Smart Code Analyser</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    A sophisticated MERN-stack application leveraging the Gemini API to provide deep, automated analysis of code complexity, edge cases, and runtime optimizations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">React.js</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">Gemini API</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">Express.js</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 30px 60px -15px rgba(6, 182, 212, 0.3)" }}
              className="md:col-span-1 lg:col-span-2 relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl blur-sm"></div>
              <div className="relative h-full w-full bg-[#0a0f1c] rounded-[1.4rem] p-8 flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">CricScore Architecture</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A comprehensive digital tool for managing tournaments, engineered with real-time scorecard logic and robust PostgreSQL schemas.
                  </p>
                </div>
                <div className="flex gap-2 mt-4 relative z-10">
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">PostgreSQL</span>
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">API Design</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.3)" }}
              className="md:col-span-1 lg:col-span-1 relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl blur-sm"></div>
              <div className="relative h-full w-full bg-[#0a0f1c] rounded-[1.4rem] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">The Dev.Student OS</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A professional-grade system architected for CS students to track academics and technical interview prep.
                  </p>
                </div>
                <span className="w-max px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20 mt-4">Systems Design</span>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 30px 60px -15px rgba(249, 115, 22, 0.3)" }}
              className="md:col-span-1 lg:col-span-1 relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-500 to-red-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl blur-sm"></div>
              <div className="relative h-full w-full bg-[#0a0f1c] rounded-[1.4rem] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">DSA & DEV MASTER</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Educational platform delivering high-value technical content on Data Structures and Web Development.
                  </p>
                </div>
                <span className="w-max px-3 py-1.5 rounded-md bg-orange-500/10 text-orange-300 text-xs font-semibold border border-orange-500/20 mt-4">Content Creation</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* --- Unified Tech Stack Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
            Technical Arsenal
          </motion.h2>
          
          <div className="bg-[#0a0f1c]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {techStack.map((tech) => (
                <motion.div 
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    filter: "drop-shadow(0px 10px 20px rgba(99, 102, 241, 0.4))" 
                  }}
                  className="flex flex-col items-center justify-center gap-4 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#111827] flex items-center justify-center border border-white/10 transition-colors duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <span className="text-slate-300 font-medium text-sm tracking-wide">{tech.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-10 relative z-10"></div>
            
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {['Prompt Engineering', 'OpenAI API', 'REST APIs', 'Git/GitHub', 'Agile Methodologies'].map((skill) => (
                <motion.span 
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                    borderColor: "rgba(99, 102, 241, 0.5)",
                    color: "#a5b4fc"
                  }}
                  className="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium transition-colors cursor-default shadow-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}