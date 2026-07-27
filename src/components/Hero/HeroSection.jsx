import { motion } from 'framer-motion';
import { Mail, Download, ChevronDown, Zap } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import ThreeScene from './ThreeScene';
import TypewriterText from './TypewriterText';
import { PERSONAL } from '../../utils/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] },
});

const TYPING_ROLES = PERSONAL.roles;

export default function HeroSection() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Aurora + particles */}
      <AuroraBackground />

      {/* Three.js canvas */}
      <ThreeScene />

      {/* Content */}
      <div className="relative z-10 section-wrapper flex flex-col lg:flex-row items-center gap-16 lg:gap-8 pt-28 pb-16">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 flex flex-col items-start max-w-2xl">

          {/* Available badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-medium">{PERSONAL.tagline}</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-5"
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              {PERSONAL.name.split(' ')[0]}
            </span>{' '}
            <span className="text-white/80">{PERSONAL.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.35)} className="text-2xl sm:text-3xl font-heading font-semibold mb-7 h-10">
            <TypewriterText texts={TYPING_ROLES} />
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-white/55 text-lg leading-relaxed max-w-xl mb-10"
          >
            An aspiring software developer and frontend intern. I design interactive
            web applications with a focus on details, visual hierarchy, and modern
            designs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-4">
            <motion.a
              href="/Portfolio/KIRUTHIKA_S.pdf"
              download="Kiruthika_Saravanan_Resume.pdf"
              className="btn-primary flex items-center gap-2.5 text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            <motion.a
              href={`mailto:${PERSONAL.email}`}
              className="btn-secondary flex items-center gap-2.5 text-base"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            {...fadeUp(0.65)}
            className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/[0.07] w-full"
          >
            {[
              { label: 'Projects Built', value: '2+' },
              { label: 'Technologies', value: '5+' },
              { label: 'Internship', value: '1' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl font-heading font-black text-white">{value}</span>
                <span className="text-white/40 text-sm mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Visual card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="hidden lg:flex flex-1 justify-center items-center"
        >
          <div className="relative">
            {/* Profile card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full glass-strong border-2 border-blue-500/25 overflow-hidden shadow-glow-lg flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/10" />
              <div className="flex flex-col items-center gap-3 relative z-10">
                {/* Animated doll avatar in small square - same size as KS box */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] border border-blue-500/30 shadow-glow flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <style>{`
                        @keyframes blink2 { 0%,88%,100%{transform:scaleY(1)} 92%{transform:scaleY(0.08)} }
                        @keyframes typeL2 { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-15deg)} }
                        @keyframes typeR2 { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(15deg)} }
                        @keyframes flicker2 { 0%,100%{opacity:1} 50%{opacity:0.65} }
                        .el2 { transform-origin: 38px 44px; animation: blink2 3.2s ease-in-out infinite; }
                        .er2 { transform-origin: 62px 44px; animation: blink2 3.2s ease-in-out infinite; }
                        .al2 { transform-origin: 28px 72px; animation: typeL2 0.45s ease-in-out infinite; }
                        .ar2 { transform-origin: 72px 72px; animation: typeR2 0.45s ease-in-out infinite; }
                        .sc2 { animation: flicker2 2.2s ease-in-out infinite; }
                      `}</style>
                    </defs>

                    {/* Laptop base */}
                    <rect x="15" y="85" width="70" height="6" rx="2" fill="#1e293b" stroke="#3B82F6" strokeWidth="0.6"/>
                    {/* Laptop screen outer */}
                    <rect x="20" y="62" width="60" height="26" rx="2" fill="#0f172a" stroke="#3B82F6" strokeWidth="1"/>
                    {/* Screen content */}
                    <rect className="sc2" x="23" y="65" width="54" height="20" rx="1" fill="#0d2a6e" opacity="0.9"/>
                    <rect className="sc2" x="26" y="68" width="22" height="2" rx="1" fill="#60A5FA"/>
                    <rect className="sc2" x="26" y="72" width="34" height="2" rx="1" fill="#34d399"/>
                    <rect className="sc2" x="26" y="76" width="16" height="2" rx="1" fill="#f472b6"/>
                    <rect className="sc2" x="26" y="80" width="28" height="2" rx="1" fill="#60A5FA" opacity="0.7"/>

                    {/* Torso */}
                    <rect x="34" y="60" width="32" height="22" rx="8" fill="#1d4ed8"/>

                    {/* Neck */}
                    <rect x="44" y="54" width="12" height="9" rx="4" fill="#fcd9c0"/>

                    {/* Head */}
                    <ellipse cx="50" cy="38" rx="17" ry="17" fill="#fcd9c0"/>

                    {/* Hair top */}
                    <ellipse cx="50" cy="23" rx="17" ry="10" fill="#1e293b"/>
                    {/* Hair sides */}
                    <ellipse cx="33" cy="39" rx="5" ry="11" fill="#1e293b"/>
                    <ellipse cx="67" cy="39" rx="5" ry="11" fill="#1e293b"/>

                    {/* Eyes */}
                    <ellipse className="el2" cx="38" cy="40" rx="4" ry="4.5" fill="white"/>
                    <ellipse cx="38" cy="41" rx="2.2" ry="2.5" fill="#1d4ed8"/>
                    <circle cx="39" cy="39.5" r="0.8" fill="white"/>
                    <ellipse className="er2" cx="62" cy="40" rx="4" ry="4.5" fill="white"/>
                    <ellipse cx="62" cy="41" rx="2.2" ry="2.5" fill="#1d4ed8"/>
                    <circle cx="63" cy="39.5" r="0.8" fill="white"/>

                    {/* Nose */}
                    <ellipse cx="50" cy="46" rx="1.5" ry="1" fill="#f0b89a"/>
                    {/* Smile */}
                    <path d="M44 50 Q50 55 56 50" stroke="#c0714e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    {/* Cheeks */}
                    <ellipse cx="32" cy="47" rx="4.5" ry="3" fill="#fda4af" opacity="0.45"/>
                    <ellipse cx="68" cy="47" rx="4.5" ry="3" fill="#fda4af" opacity="0.45"/>

                    {/* Arms typing */}
                    <line className="al2" x1="36" y1="68" x2="24" y2="84" stroke="#fcd9c0" strokeWidth="6" strokeLinecap="round"/>
                    <line className="ar2" x1="64" y1="68" x2="76" y2="84" stroke="#fcd9c0" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="text-center px-8">
                  <p className="font-heading font-bold text-white text-xl">{PERSONAL.name}</p>
                  <p className="text-blue-400 text-sm mt-1 flex items-center gap-1 justify-center">
                    <Zap size={12} /> Java Developer
                  </p>
                  <div className="mt-4 flex gap-2 justify-center flex-wrap">
                    {['Java', 'JavaScript', 'CSS'].map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md glass border border-white/10 text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass border border-blue-500/20 rounded-xl px-3.5 py-2 shadow-card"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-medium">Available</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -8, 0], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-8 glass border border-blue-500/20 rounded-xl px-3.5 py-2 shadow-card"
            >
              <span className="text-blue-300 text-xs font-medium">Chennai, India 📍</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <button
          onClick={scrollToAbout}
          className="scroll-indicator w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center hover:border-blue-500/40 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={16} className="text-white/40" />
        </button>
      </div>
    </section>
  );
}
