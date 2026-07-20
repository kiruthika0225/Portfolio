import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Tag } from 'lucide-react';
import { PROJECTS } from '../utils/data';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({ x: ((y - cy) / cy) * -8, y: ((x - cx) / cx) * 8 });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
      }}
      className="relative group flex flex-col"
    >
      {/* Mouse glow */}
      {hovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, rgba(59,130,246,0.12), transparent 70%)`,
          }}
        />
      )}

      <div className={`relative flex flex-col flex-1 glass-strong border border-white/[0.08] rounded-3xl overflow-hidden 
        transition-all duration-500 ${hovered ? 'border-blue-500/30 shadow-glow' : ''}`}>
        
        {/* Gradient top stripe */}
        <div className={`h-[3px] bg-gradient-to-r ${project.gradient} opacity-60`} />

        {/* Project Image */}
        {project.image && (
          <div className="w-full h-36 sm:h-44 overflow-hidden border-b border-white/[0.05]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        )}

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <Tag size={13} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              {project.tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.techs.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg glass border border-white/[0.07] text-white/50 hover:text-white/80 hover:border-blue-500/20 transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.target || '_self'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={link.href === '#' ? (e) => e.preventDefault() : undefined}
                className="inline-flex items-center gap-2 btn-primary text-xs py-2.5 px-5"
              >
                <ExternalLink size={14} />
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={project.github || '#'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={project.github ? undefined : (e) => e.preventDefault()}
              target={project.github ? '_blank' : '_self'}
              className="inline-flex items-center gap-2 btn-secondary text-xs py-2.5 px-5"
            >
              <Github size={14} />
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Work Showcase</span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto h-full">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
