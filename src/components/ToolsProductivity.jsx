import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Book, Code, Terminal, Cpu } from 'lucide-react';

const TOOLS = [
  {
    name: 'Microsoft Excel',
    desc: 'Data Analysis & Spreadsheets',
    color: '#217346',
    bg: 'bg-green-500/10',
    border: 'border-green-500/25',
    svg: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path fill="#4CAF50" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/>
        <path fill="#388E3C" d="M32,15H25v4h7V15z M32,22H25v4h7V22z M32,29H25v4h7V29z"/>
        <path fill="#2E7D32" d="M27,42L6,38.2V9.8L27,6V42z"/>
        <path fill="#FFFFFF" d="M19.129,24l4.947-8.527h-3.238l-3.155,5.923h-0.038l-3.136-5.923H11.27l4.986,8.514l-5.176,8.736h3.295l3.441-6.425h0.038l3.422,6.425h3.193L19.129,24z"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft PowerPoint',
    desc: 'Presentations & Slides',
    color: '#D24726',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
    svg: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path fill="#FF5722" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/>
        <path fill="#E64A19" d="M32,15H25v4h7V15z M32,22H25v4h7V22z M32,29H25v4h7V29z"/>
        <path fill="#D84315" d="M27,42L6,38.2V9.8L27,6V42z"/>
        <path fill="#FFFFFF" d="M12,15v17h3v-6h4.5c2.481,0,4.5-2.019,4.5-4.5S21.981,15,19.5,15H12z M15,17.5h4.5c0.827,0,1.5,0.673,1.5,1.5s-0.673,1.5-1.5,1.5H15V17.5z"/>
      </svg>
    ),
  },
  {
    name: 'Microsoft Power BI',
    desc: 'Data Visualization & Reports',
    color: '#F2C811',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/25',
    svg: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="28" width="8" height="14" rx="1.5" fill="#F2C811"/>
        <rect x="16" y="20" width="8" height="22" rx="1.5" fill="#E3B505"/>
        <rect x="26" y="12" width="8" height="30" rx="1.5" fill="#F2C811"/>
        <rect x="36" y="6" width="8" height="36" rx="1.5" fill="#E3B505"/>
        <circle cx="10" cy="25" r="3" fill="#ffffff" opacity="0.9"/>
        <circle cx="20" cy="17" r="3" fill="#ffffff" opacity="0.9"/>
        <circle cx="30" cy="9" r="3" fill="#ffffff" opacity="0.9"/>
        <circle cx="40" cy="3" r="3" fill="#ffffff" opacity="0.9"/>
        <polyline points="10,25 20,17 30,9 40,3" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7"/>
      </svg>
    ),
  }
];


export default function ToolsProductivity() {
  const containerRef = useRef(null);

  return (
    <section id="tools" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Workspace</span>
          <h2 className="section-title gradient-text">Tools & Productivity</h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm px-4">
            A showcase of the essential tools that power my daily workflow, research, and presentations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Tools Cards */}
          <div className="flex flex-col gap-6" ref={containerRef}>
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-5 glass-strong border ${tool.border} rounded-2xl p-6 transition-all duration-300 hover:shadow-glow group cursor-default relative overflow-hidden`}
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 100% 50%, ${tool.color}15, transparent 50%)` }}
                />

                <div className={`w-16 h-16 rounded-2xl ${tool.bg} border ${tool.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  {tool.svg}
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Animated Workspace Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[450px] flex items-center justify-center"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-[80px]" />
            
            {/* The Workspace Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-square">
              
              {/* Laptop Screen */}
              <div className="absolute top-[20%] left-[15%] w-[70%] h-[45%] bg-[#0f172a] rounded-t-xl border-4 border-[#1e293b] flex flex-col p-3 shadow-2xl z-10 overflow-hidden relative">
                {/* Code Lines Animation */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-2 bg-blue-500/60 rounded mb-2"
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-2 bg-purple-500/60 rounded mb-2"
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ duration: 1.2, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-2 bg-emerald-500/60 rounded mb-2"
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.8, delay: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-2 bg-pink-500/60 rounded"
                />
                
                {/* Code reflection glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Laptop Base */}
              <div className="absolute top-[65%] left-[5%] w-[90%] h-[5%] bg-[#334155] rounded-b-xl shadow-xl z-20 flex justify-center">
                <div className="w-[20%] h-[40%] bg-[#1e293b] rounded-b-md" />
              </div>

              {/* Coffee Cup */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[50%] right-[2%] sm:right-[5%] z-30 flex flex-col items-center"
              >
                <Coffee className="text-orange-300 w-7 h-7 sm:w-8 sm:h-8 opacity-80" />
                <motion.div 
                  animate={{ opacity: [0, 0.5, 0], y: [0, -15] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="w-1 h-3 bg-white/20 rounded-full blur-[1px] absolute -top-4"
                />
              </motion.div>

              {/* Notebook & Book */}
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[55%] -left-[5%] sm:left-[0%] z-20"
              >
                <div className="relative">
                  <Book className="text-blue-300 w-9 h-9 sm:w-10 sm:h-10 opacity-70 transform -rotate-12" />
                  <div className="absolute top-2 left-4 w-5 h-7 sm:w-6 sm:h-8 bg-purple-500/20 rounded-sm border border-purple-500/40 transform rotate-12 backdrop-blur-md" />
                </div>
              </motion.div>

              {/* Floating Element 1: Code */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[10%] glass border border-blue-500/30 p-2 rounded-xl z-0"
              >
                <Code className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>

              {/* Floating Element 2: CPU */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[5%] left-[20%] glass border border-purple-500/30 p-2 rounded-xl z-0"
              >
                <Cpu className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>

              {/* Floating Element 3: Terminal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[30%] -left-[5%] glass border border-green-500/30 p-2 rounded-xl z-30"
              >
                <Terminal className="text-green-400 w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
