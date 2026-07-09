import { useEffect, useRef } from 'react';

// Floating particle
function Particle({ style }) {
  return <div className="particle" style={style} />;
}

function generateParticles(count = 20) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    animationDuration: `${Math.random() * 15 + 10}s`,
    animationDelay: `${Math.random() * 12}s`,
    opacity: Math.random() * 0.5 + 0.1,
  }));
}

const PARTICLES = generateParticles(22);

export default function AuroraBackground() {
  return (
    <div className="aurora-bg pointer-events-none select-none" aria-hidden>
      {/* Gradient blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle
          key={p.id}
          style={{
            left: p.left,
            bottom: 0,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, #030712 100%)',
        }}
      />
    </div>
  );
}
