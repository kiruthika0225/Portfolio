import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar        from './components/Navbar';
import HeroSection   from './components/Hero/HeroSection';
import About         from './components/About';
import Skills        from './components/Skills';
import ToolsProductivity from './components/ToolsProductivity';
import Experience    from './components/Experience';
import Projects      from './components/Projects';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const SECTIONS = ['home', 'about', 'skills', 'tools', 'experience', 'projects', 'contact'];

export default function App() {
  const [loaded,          setLoaded]          = useState(false);
  const [activeSection,   setActiveSection]   = useState('home');
  const [scrollProgress,  setScrollProgress]  = useState(0);
  const [showScrollTop,   setShowScrollTop]   = useState(false);
  const cursorRef = useRef(null);

  // Activate scroll reveal after loading
  useScrollReveal();

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      setShowScrollTop(scrollTop > 400);

      // Active section detection
      const scrollPos = scrollTop + 220;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cursor glow
  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" />

      {/* Main content */}
      {loaded && (
        <>
          <Navbar activeSection={activeSection} />

          <main>
            <HeroSection />
            <About />
            <Skills />
            <ToolsProductivity />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <Footer />

          {/* Scroll to top (via Footer button or keyboard) */}
        </>
      )}
    </>
  );
}
