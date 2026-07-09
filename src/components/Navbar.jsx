import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed z-[100] transition-all duration-500 ${
          scrolled
            ? 'top-0 left-0 right-0 rounded-none border-b border-white/[0.06] bg-[#030712]/90 backdrop-blur-2xl'
            : 'top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl rounded-2xl glass border border-white/[0.08] bg-[#030712]/60 backdrop-blur-2xl'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-heading font-black text-white text-lg tracking-tight">
              Kiruthika<span className="text-blue-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.07]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:kiruthikasaravanan08@gmail.com"
            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2 px-5"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-[99] glass-strong border border-white/10 rounded-2xl p-5 shadow-card"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSection === id
                        ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="mailto:kiruthikasaravanan08@gmail.com"
                  className="block text-center btn-primary text-sm py-2.5"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
