import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Scroll Observer for Active Section Highlighting ---
  // Notice: Scroll lock (document.body.style.overflow = 'hidden') has been REMOVED 
  // so the screen keeps running/scrolling when the menu is open.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionIds = ['home', 'projects', 'skills', 'education', 'achievements', 'about', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // --- Animation Variants ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // --- Navigation Data ---
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
    { name: 'Education', href: '#education', id: 'education', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />},
    { name: 'About', href: '#about', id: 'about', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
  ];

  // --- Categorized Tech Stack ---
  const categorizedTech = {
    languages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    ],
    frontend: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
    ],
    database: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ]
  };

  const coreSkills = ['Prompt Engineering', 'OpenAI API', 'REST APIs', 'Git/GitHub', 'Agile Methodologies'];

  const achievements = [
    { title: "200+ DSA Problems", desc: "Consistently solving complex algorithmic challenges in Java to master data structures and logic.", stat: "LeetCode", color: "from-yellow-500 to-amber-500", glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]" },
    { title: "AI Integration", desc: "Successfully embedded advanced LLM capabilities directly into live MERN architectures.", stat: "Prompt Eng.", color: "from-emerald-400 to-teal-500", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans relative overflow-x-hidden selection:bg-indigo-500/30 scroll-smooth">
      
      {/* --- Advanced Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/30 blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/20 blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- Dedicated Top Navbar --- */}
      <header className="fixed top-0 left-0 w-full h-20 lg:h-24 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 z-[60] flex items-center justify-between px-6 lg:px-12 shadow-md">
        <a href="#home" className="text-2xl font-black text-white tracking-widest outline-none">
          AAMIR<span className="text-cyan-400">.</span>
        </a>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 transition-colors outline-none"
        >
          <span className={`w-5 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* --- Floating Dropdown Menu Overlay --- */}
      {/* Changed from fullscreen inset-0 to a sleek, non-blocking dropdown card */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { opacity: 1, scale: 1, pointerEvents: 'auto' } : { opacity: 0, scale: 0.95, pointerEvents: 'none' }}
        className="fixed top-24 lg:top-28 right-4 sm:right-6 lg:right-12 w-[calc(100vw-2rem)] sm:w-80 bg-[#111827]/95 backdrop-blur-3xl border border-white/10 rounded-3xl z-[50] flex flex-col p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-top-right transition-all duration-300"
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-lg font-bold transition-all duration-300 ${
                  isActive 
                    ? 'text-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {link.icon}
                </svg>
                {link.name}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* --- Main Content Wrapper --- */}
      {/* Added pt-32 lg:pt-40 so content clears the top navbar perfectly */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 lg:pt-40 pb-32 lg:pb-24">
        
        {/* --- Hero Section --- */}
        <motion.div 
          id="home"
          initial="hidden" 
          animate="visible" 
          variants={sectionVariants}
          className="flex flex-col-reverse xl:flex-row items-center justify-between gap-12 lg:gap-16 mb-24 lg:mb-32 w-full scroll-mt-40"
        >
          {/* REMOVED 'overflow-hidden' from this div so the View Resume button box-shadows don't clip! */}
          <motion.div variants={itemVariants} className="flex-1 text-center xl:text-left flex flex-col items-center xl:items-start z-20 w-full p-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">Available for Opportunities</span>
            </div>
            
            <p className="text-lg md:text-2xl text-slate-400 font-medium mb-2 w-full">
              Hello, I am
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 whitespace-nowrap flex flex-wrap justify-center xl:justify-start gap-2 sm:gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">SHAIKH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">AAMIR</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto xl:mx-0 leading-relaxed px-2 xl:px-0">
              Full-Stack Developer & Prompt Engineer architecting high-performance web applications and AI-driven workflows.
            </p>

            <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 w-full pt-2">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="/info_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                View Resume
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/shaikhaamir642" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 filter invert" />
                GitHub
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/shaikhaamir642" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative w-full xl:w-1/2 flex justify-center xl:justify-end mt-8 xl:mt-0 z-10">
            <div className="absolute top-1/2 left-1/2 xl:left-2/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="#" 
              alt="Shaikh Aamir" 
              className="relative z-10 w-64 sm:w-72 md:w-96 xl:w-[400px] h-auto object-contain filter contrast-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </motion.div>
        </motion.div>

        {/* --- Minimalist Image-First Projects Section --- */}
        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="mb-24 lg:mb-32 scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
            <motion.a 
              href="https://smart-code-analyzer-one.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block"
            >
              <div className="w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-500/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] relative bg-[#0f172a] transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0f1c]/80 backdrop-blur-md flex items-center px-4 gap-2 z-20 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <img src="/Smart-Code.png" alt="Smart Code Analyser" className="w-full h-full object-contain bg-[#0a0f1c] p-2 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-[#030712]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-6 py-3 rounded-full bg-cyan-500 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
                    Live Preview
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Smart Code Analyser</h3>
              <p className="text-slate-400 text-lg">smart-code-analyzer-one.vercel.app</p>
            </motion.a>

             <motion.a 
              href="https://taskflow-app-cyan.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block"
            >
              <div className="w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 border border-white/10 group-hover:border-indigo-500/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.3)] relative bg-[#0f172a] transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#0a0f1c]/80 backdrop-blur-md flex items-center px-4 gap-2 z-20 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <img src="/TaskFlow.png" alt="TaskFlow" className="w-full h-full object-contain bg-[#0a0f1c] p-2 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-[#030712]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-6 py-3 rounded-full bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-90 group-hover:scale-100 transition-transform duration-500 ease-out">
                    Live Preview
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">TaskFlow SaaS Platform</h3>
              <p className="text-slate-400 text-lg">taskflow-management.vercel.app</p>
            </motion.a>
  
          </div>
        </motion.div>

        {/* --- STRICT 4-COLUMN TECH STACK SECTION --- */}
        <motion.div
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="mb-24 lg:mb-32 scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-4">
              <span className="w-8 h-[3px] rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"></span>
              Technical Arsenal
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl">A comprehensive breakdown of the frameworks, languages, and tools I use to build scalable digital solutions.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            
            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:-translate-y-2 hover:border-cyan-500/30"
            >
              <h3 className="text-lg font-bold text-cyan-100 mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categorizedTech.languages.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -4, filter: "drop-shadow(0px 10px 15px rgba(6, 182, 212, 0.3))" }}
                    className="flex flex-col items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium group-hover:text-cyan-300 transition-colors text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] hover:-translate-y-2 hover:border-indigo-500/30"
            >
              <h3 className="text-lg font-bold text-indigo-100 mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                Frontend & UI
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categorizedTech.frontend.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -4, filter: "drop-shadow(0px 10px 15px rgba(99, 102, 241, 0.3))" }}
                    className="flex flex-col items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-all duration-300">
                      <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium group-hover:text-indigo-300 transition-colors text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:-translate-y-2 hover:border-cyan-500/30"
            >
              <h3 className="text-lg font-bold text-cyan-100 mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categorizedTech.backend.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -4, filter: "drop-shadow(0px 10px 15px rgba(6, 182, 212, 0.3))" }}
                    className="flex flex-col items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <img src={tech.icon} alt={tech.name} className={`w-7 h-7 ${tech.invert ? 'filter invert' : ''}`} />
                    </div>
                    <span className="text-slate-400 text-xs font-medium group-hover:text-cyan-300 transition-colors text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-2 hover:border-purple-500/30"
            >
              <h3 className="text-lg font-bold text-purple-100 mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                Database
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {categorizedTech.database.map((tech) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -4, filter: "drop-shadow(0px 10px 15px rgba(168, 85, 247, 0.3))" }}
                    className="flex flex-col items-center gap-2.5 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#111827] flex items-center justify-center border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300">
                      <img src={tech.icon} alt={tech.name} className="w-7 h-7" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium group-hover:text-purple-300 transition-colors text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
          
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 relative z-10">
            {coreSkills.map((skill) => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-indigo-400/50 hover:text-indigo-300 hover:bg-indigo-900/20 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Education Section --- */}
        <motion.div
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-24 lg:mb-32 scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-4">
              <span className="w-8 h-[3px] rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"></span>
              Academic Background
            </h2>
          </motion.div>

          <div className="bg-[#0a0f1c]/60 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             
             <motion.div variants={itemVariants} className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="hidden md:flex w-24 h-24 rounded-2xl bg-[#111827] border border-white/10 items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" /></svg>
                </div>
                <div>
                  <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-6 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">B.Tech in Computer Science (2022-26)</h3>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/20 w-max">
                      Final Year
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium text-purple-300 mb-4">ORIENTAL INSTITUTE OF SCIENCE AND TECHNOLOGY, BHOPAL (M.P)</h4>
                  <p className="text-slate-400 leading-relaxed text-base max-w-4xl">
                    Currently completing my final year of engineering, actively preparing for campus placements. Dedicated to mastering full-stack web development and applied AI while consistently building practical, real-world applications.
                  </p>
                </div>
             </motion.div>
          </div>
        </motion.div>

        {/* --- About Section --- */}
        <motion.div
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-24 lg:mb-32 scroll-mt-32"
        >
          <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-4">
              <span className="w-8 h-[3px] rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]"></span>
              About Me
            </h2>
          </motion.div>

          <div className="bg-[#0a0f1c]/60 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <motion.div variants={itemVariants} className="flex-1 text-slate-400 leading-relaxed text-base md:text-lg space-y-6">
                    <p>
                      Hello! I am <strong className="text-emerald-300 font-semibold">SHAIKH AAMIR</strong>, a passionate Full-Stack Developer and Prompt Engineer based in Khandwa (M.P), India. I specialize in the MERN stack and integrating Large Language Models (LLMs) like Gemini and OpenAI to build seamless, intelligent web applications.
                    </p>
                    <p>
                      Beyond writing code, I strongly believe in <span className="italic text-slate-300 border-b border-slate-600">"learning in public."</span> For me, software engineering is about more than just writing code—it is about building intelligent, scalable systems that solve complex problems efficiently. 
                    </p>
                    <p>
                    I thrive in environments where I can tackle challenging logic, write clean architecture, and push the boundaries of what modern web technologies can achieve. I am constantly pushing myself to learn, build, and grow.
                    </p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="w-full lg:w-1/3 grid grid-cols-2 gap-4">
                  <div className="bg-[#111827]/80 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-emerald-400 mb-2">20+</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Projects Built</span>
                  </div>
                  <div className="bg-[#111827]/80 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-cyan-400 mb-2">MERN</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Core Stack</span>
                  </div>
                  <div className="bg-[#111827]/80 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-purple-400 mb-2">AI</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Integration</span>
                  </div>
                  <div className="bg-[#111827]/80 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-indigo-400 mb-2">24/7</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Learning</span>
                  </div>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* --- Get In Touch / Contact Section --- */}
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-10 scroll-mt-32"
        >
          <div className="bg-gradient-to-br from-indigo-900/40 to-[#0a0f1c]/80 border border-indigo-500/20 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden text-center shadow-[0_0_50px_rgba(99,102,241,0.1)]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
             
             <motion.div variants={itemVariants} className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-bold uppercase tracking-widest border border-indigo-500/20 mb-6">
                  What's Next?
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get In Touch</h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-10">
                  I am currently preparing for campus placements and actively looking for full-time opportunities in Software Engineering and Full-Stack Development. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(99, 102, 241, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:shaikhaamir27765@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Me
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(37, 211, 102, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/6267112564" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-xl transition-all border border-[#25D366]/50"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.275-.883-.631-1.48-1.41-1.653-1.71-.173-.298-.018-.461.13-.611.134-.135.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </motion.a>
                </div>
             </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
