import { useState, useEffect, useRef } from 'react';

const CURSOR = '|';

export default function TypewriterText({ texts, typingSpeed = 75, deletingSpeed = 35, pauseDuration = 2200 }) {
  const [displayed, setDisplayed]   = useState('');
  const [textIndex, setTextIndex]   = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef(null);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typing logic
  useEffect(() => {
    const currentText = texts[textIndex];

    const tick = () => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayed(currentText.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentText.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
          timeoutRef.current = setTimeout(tick, 300);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-heading font-bold">
        {displayed}
      </span>
      <span
        className="text-blue-400 font-bold select-none transition-opacity duration-100"
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        {CURSOR}
      </span>
    </span>
  );
}
