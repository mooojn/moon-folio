'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from '@/styles/cursor.module.css';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for organic fluid motion
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide custom cursor on touch screens / mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isCard = !!target.closest('[class*="card"], [class*="Card"], article, [data-cursor="card"]');
      const isClickable = !!target.closest('a, button, [role="button"], input, textarea');

      setIsHovered(isCard);
      setIsPointer(isClickable && !isCard);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Custom Cursor Element */}
      <motion.div
        className={`${styles.cursor} ${isHovered ? styles.cursorCard : ''} ${isPointer ? styles.cursorPointer : ''}`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <div className={styles.cursorDot} />
      </motion.div>

      {/* Trailing Outer Ring */}
      <motion.div
        className={`${styles.cursorRing} ${isHovered ? styles.ringCard : ''}`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />
    </>
  );
}
