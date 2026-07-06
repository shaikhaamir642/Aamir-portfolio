import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  // General Framer Motion Animation Variants
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

  // Tech Stack (Express.js uses invert: true for dark backgrounds)
  const techStack = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        
        {/* --- Hero Section with Directional Animations --- */}
        {/* Removed max-w-6xl and reduced gap to expand the hero section width */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-32 w-full overflow-hidden">
          
          {/* Text Content (Slides in from the LEFT) */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Available for Opportunities</span>
            </div>
            
            {/* Added whitespace-nowrap and adjusted responsive text sizing to force a single line */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 whitespace-nowrap flex justify-center md:justify-start gap-3 md:gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">SHAIKH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">AAMIR</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Full-Stack Developer & Prompt Engineer architecting high-performance web applications and AI-driven workflows.
            </p>
          </motion.div>

          {/* Profile Photo (Seamless Cutout Style - Slides in from the RIGHT) */}
          <motion.div 
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10"
          >
            {/* Ambient Background Glow behind the person to match the sample image */}
            <div className="absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-600/40 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* The Photo itself, styled as a seamless cutout */}
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src=".png" 
              alt="Shaikh Aamir" 
              className="relative z-10 w-72 md:w-[450px] h-auto object-contain filter contrast-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              style={{
                // This fades out the bottom of the image so it blends perfectly into the background
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </motion.div>
        </div>

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
                  <ul className="text-slate-400 text-md list-disc list-outisde pl-6 pr-2 space-y-3 leading-relaxed max-w-md">
                    <li>Built an AI-powered code analysis pipeline that evaluates submissions across time complexity, space complexity, and algorithmic edge cases — turning passive code review into a structured, metric-driven feedback loop.</li>
                    <li>Engineered a client-side validation layer with a 3-second debounce mechanism that filters invalid requests before they reach the LLM, cutting unnecessary API calls by 40% and ensuring every token spent is one worth spending.</li>
                    <li>Designed a custom prompt engineering system on Node.js/Express that embeds evaluation criteria directly into the model’s reasoning — producing consistent, structured feedback rather than generic LLM output.</li>
                    <li>Integrated MongoDB session persistence to store and retrieve past code reviews, giving users a longitudinal record of their algorithmic improvement over time.</li>
                  </ul>      
                </div>
                <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">React.js</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">Gemini API</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">Express.js</span>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-semibold border border-indigo-500/20 backdrop-blur-md">MongoDB</span>
                </div>
              </div>
            </motion.div>

             <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8, boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.3)" }}
              className="md:col-span-1 lg:col-span-2 relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl blur-sm"></div>
              <div className="relative h-full w-full bg-[#0a0f1c] rounded-[1.4rem] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">MedConsult</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    MedConsult is a full-stack telemedicine platform designed to simplify remote medical consultations. Patients can upload medical reports, schedule consultations, communicate with doctors through real-time video calls and chat, and receive detailed medical report reviews. The platform is specifically designed for report interpretation and educational medical feedback, ensuring that doctors do not prescribe medicines or recommend treatments.
                  </p>
                </div>
                <div className="flex gap-2 mt-4 relative z-10">
                <span className="w-max px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20 mt-4">React.js</span>
                <span className="w-max px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20 mt-4">Node.js</span>
                <span className="w-max px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20 mt-4">Express.js</span>
                <span className="w-max px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20 mt-4">MongoDB</span>
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
                  <h3 className="text-2xl font-bold text-white mb-3">TaskFlow - SaaS Project Management Platform</h3>
                  <ul className="text-slate-400 text-sm list-disc leading-relaxed">
                  <li>
                    Developed a subscription-based SaaS platform enabling teams to collaborate on projects with features including
task management, file sharing, real-time updates, and team analytics dashboard.
                  </li> 
                  <li>Integrated Stripe payment gateway to handle subscription plans (Free, Pro, Enterprise) with recurring billing,
proration logic, webhook handling for payment events, and automated invoice generation.</li>
                  </ul>
                </div>
                <div className="flex gap-2 mt-4 relative z-10">
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">React.js</span>
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">Node.js</span>
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">Express.js</span>
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">MongoDB</span>
                  <span className="px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20">Stripe API</span>
                </div>
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
          className="mb-32"
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
                    <img src={tech.icon} alt={tech.name} className={`w-10 h-10 ${tech.invert ? 'filter invert' : ''}`} />
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

        {/* --- Education Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
            Education
          </motion.h2>

          <div className="bg-[#0a0f1c]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             <motion.div variants={itemVariants} className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">B.Tech in Computer Science Engineering(2022-26)</h3>
                  <span className="inline-block mt-3 md:mt-0 px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20 w-max">
                    Final Year Student
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
                  Currently completing my final year of engineering, actively preparing for campus placements. Dedicated to mastering full-stack web development and applied AI while consistently building practical, real-world applications.
                </p>
             </motion.div>
          </div>
        </motion.div>

        {/* --- About Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
            About Me
          </motion.h2>

          <div className="bg-[#0a0f1c]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
             <motion.div variants={itemVariants} className="relative z-10 text-slate-400 leading-relaxed text-lg space-y-6">
                <p>
                  Hello! I am <strong className="text-emerald-300 font-semibold">SHAIKH AAMIR</strong>, a passionate Full-Stack Developer and Prompt Engineer based in Khandwa(M.P), India. I specialize in the MERN stack and integrating Large Language Models (LLMs) like Gemini and OpenAI to build seamless, intelligent web applications.
                </p>
                <p>
                  Beyond writing code, I strongly believe in <span className="italic text-slate-300">"learning in public."</span> For me, software engineering is about more than just writing code—it is about building intelligent, scalable systems that solve complex problems efficiently. 
                </p>
                <p>
                 I thrive in environments where I can tackle challenging logic, write clean architecture, and push the boundaries of what modern web technologies can achieve or practicing spoken English with peers, I am constantly pushing myself to learn, build, and grow.
                </p>
             </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}