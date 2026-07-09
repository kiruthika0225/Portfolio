import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ChevronUp, Code2 } from 'lucide-react';
import { PERSONAL } from '../utils/data';

const SOCIAL = [
  { icon: Mail,     href: `mailto:${PERSONAL.email}`,      label: 'Email' },
  { icon: Phone,    href: `tel:${PERSONAL.phone.replace(/\s/g,'')}`, label: 'Phone' },
  { icon: Github,   href: '#',                              label: 'GitHub' },
  { icon: Linkedin, href: '#',                              label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.05] py-10">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={scrollTop}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-heading font-black text-white text-base">
              Kiruthika<span className="text-blue-400">.</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <p className="text-white/25 text-sm text-center">
            © {new Date().getFullYear()} Kiruthika Saravanan. All rights reserved.
          </p>

          {/* Social icons + Back to top */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={href === '#' ? (e) => e.preventDefault() : undefined}
                className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 hover:bg-blue-500/25 hover:shadow-glow transition-all duration-300"
            >
              <ChevronUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
