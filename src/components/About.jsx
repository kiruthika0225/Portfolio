import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Languages, Globe2, Zap, GraduationCap, Star } from 'lucide-react';
import { PERSONAL, EDUCATION, STATS } from '../utils/data';

function StatCard({ value, suffix, label, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass border border-white/[0.07] rounded-2xl p-6 text-center hover:border-blue-500/25 transition-colors duration-300"
    >
      <div className="font-heading text-4xl font-black text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/40 text-sm">{label}</div>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      {/* Line */}
      {index < EDUCATION.length - 1 && (
        <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent" />
      )}

      {/* Dot */}
      <div className={`absolute left-0 top-1 w-[38px] h-[38px] rounded-xl flex items-center justify-center text-lg transition-all duration-300
        ${item.current
          ? 'bg-blue-500/20 border border-blue-500/50 shadow-glow'
          : 'glass border border-white/[0.08]'
        }`}>
        {item.icon}
      </div>

      <div className="glass border border-white/[0.07] rounded-2xl p-5 hover:border-blue-500/20 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h4 className="font-heading font-bold text-white text-base">{item.degree}</h4>
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
            {item.year}
          </span>
        </div>
        <p className="text-white/50 text-sm mb-2 flex items-center gap-1.5">
          <GraduationCap size={13} className="text-blue-400 flex-shrink-0" />
          {item.institution}
        </p>
        <p className="text-white/40 text-sm flex items-center gap-1.5">
          <Star size={12} className="text-yellow-400 flex-shrink-0" />
          {item.grade}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-tag">Biography</span>
          <h2 className="section-title gradient-text">About Me & Education</h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Bio + Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-5">
              Aspiring Software Developer
            </h3>
            <p className="text-white/55 leading-relaxed mb-4">{PERSONAL.bio1}</p>
            <p className="text-white/55 leading-relaxed mb-8">{PERSONAL.bio2}</p>

            {/* Personal details card */}
            <div className="glass border border-white/[0.07] rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-5 text-white/40">
                Personal Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin,     label: 'Location',    value: PERSONAL.location },
                  { icon: Languages,  label: 'Languages',   value: PERSONAL.languages },
                  { icon: Globe2,     label: 'Nationality', value: PERSONAL.nationality },
                  { icon: Zap,        label: 'Strength',    value: PERSONAL.strength },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-white/80 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-2xl font-bold text-white mb-8"
            >
              Education
            </motion.h3>
            <div>
              {EDUCATION.map((item, i) => (
                <TimelineItem key={item.degree} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
