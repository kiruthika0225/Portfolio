import { useEffect, useRef } from 'react';

export function useMouseParallax(strength = 15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parent = el.closest('section') || el.parentElement;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * strength;
      const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
