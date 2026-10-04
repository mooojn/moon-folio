'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from '@/styles/navbar.module.css';

const navItems = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experiences' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <div className={styles.navWrap}>
      <motion.div
        className={styles.navbar}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          boxShadow: scrolled
            ? '0 0 0 1px rgba(240,238,255,0.06) inset, 0 28px 60px rgba(0,0,0,0.7), 0 0 80px rgba(124, 92, 246, 0.12)'
            : undefined,
        }}
      >
        {navItems.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.href.startsWith('/') ? (
              <Link href={item.href} className={styles.navLink}>{item.label}</Link>
            ) : (
              <a href={item.href} className={styles.navLink}>{item.label}</a>
            )}
          </motion.div>
        ))}

        <div className={styles.navDivider} />

        <motion.a
          href="mailto:moojntariq@gmail.com"
          className={styles.navCta}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </div>
  );
}
