import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const intervals = [
      setTimeout(() => setProgress(30), 200),
      setTimeout(() => setProgress(60), 600),
      setTimeout(() => setProgress(85), 1000),
      setTimeout(() => setProgress(100), 1400),
    ];
    const done = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2000);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="aurora-blob aurora-blob-1" />
            <div className="aurora-blob aurora-blob-2" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 rounded-2xl glass border border-blue-500/30 flex items-center justify-center shadow-glow">
                <span className="text-3xl font-heading font-black bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  KS
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white/50 text-sm font-body tracking-widest uppercase"
              >
                Portfolio Loading
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-56 flex flex-col gap-2"
            >
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <div className="text-right text-white/30 text-xs font-body">{progress}%</div>
            </motion.div>

            {/* Dot spinner */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
