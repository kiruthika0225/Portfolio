import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../utils/data';

export default function Experience() {
  const exp = EXPERIENCE[0];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Work History</span>
          <h2 className="section-title gradient-text">Professional Experience</h2>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-strong border border-white/[0.08] rounded-3xl p-8 md:p-10 hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  {/* Company icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <Building2 size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-white/50 flex items-center gap-1.5">
                        <MapPin size={13} className="text-blue-400" />
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                    {exp.type}
                  </span>
                  <span className="text-white/30 text-sm flex items-center gap-1.5">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.05] mb-7" />

              {/* Bullet points */}
              <ul className="space-y-4">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3.5 text-white/60 text-sm leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
