import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SOFT_SKILLS } from '../utils/data';

const CATEGORY_COLORS = {
  'Programming Languages': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-400' },
  Frontend: { bg: 'bg-blue-500/10', border: 'border-blue-500/25', text: 'text-blue-400' },
  Backend:  { bg: 'bg-purple-500/10', border: 'border-purple-500/25', text: 'text-purple-400' },
  Database: { bg: 'bg-orange-500/10', border: 'border-orange-500/25', text: 'text-orange-400' },
  Tools:    { bg: 'bg-cyan-500/10', border: 'border-cyan-500/25', text: 'text-cyan-400' },
};

function SkillBar({ skill, visible }) {
  return (
    <div className="glass border border-white/[0.07] rounded-2xl p-5 hover:border-blue-500/25 transition-all duration-300 group hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{skill.icon}</div>
          <div>
            <p className="font-heading font-semibold text-white text-sm">{skill.name}</p>
            <p className="text-white/35 text-xs">{skill.level}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[skill.category]?.bg || 'bg-white/5'} ${CATEGORY_COLORS[skill.category]?.border || 'border-white/10'} ${CATEGORY_COLORS[skill.category]?.text || 'text-white/40'}`}>
            {skill.category}
          </span>
          <span className="font-heading font-bold text-white text-sm">{skill.pct}%</span>
        </div>
      </div>

      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${skill.pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* bg accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Expertise</span>
          <h2 className="section-title gradient-text">My Technical Toolkit</h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SkillBar skill={skill} visible={visible} />
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="font-heading font-bold text-white/40 text-sm uppercase tracking-widest mb-6">
            Core Attributes
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SOFT_SKILLS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass border border-white/[0.07] rounded-full text-sm font-medium text-white/70 hover:text-white hover:border-blue-500/30 transition-all duration-300 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
