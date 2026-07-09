import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-zoom'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // stagger delay based on index among siblings
            const siblings = [...entry.target.parentElement.children];
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 80}ms`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
