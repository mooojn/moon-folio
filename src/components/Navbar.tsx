'use client';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import styles from '@/styles/navbar.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experiences' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24));

  return (
    <header className={styles.navWrap}>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        aria-label="Main navigation"
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
      >
        <a className={styles.brand} href="#home" onClick={() => setMenuOpen(false)} aria-label="Munees Tariq home">
          <span className={styles.brandMark}>M<span>.</span></span>
          <span className={styles.brandName}>Munees Tariq<small>Product Engineer</small></span>
        </a>

        <div className={styles.desktopLinks}>
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
            >{item.label}</motion.a>
          ))}
        </div>

        <a href="mailto:moojntariq@gmail.com" className={styles.navCta}>Let&apos;s talk <span>↗</span></a>

        <button
          type="button"
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              {navItems.map((item, i) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  <span>0{i + 1}</span>{item.label}<b>↘</b>
                </a>
              ))}
              <a className={styles.mobileContact} href="mailto:moojntariq@gmail.com" onClick={() => setMenuOpen(false)}>
                Start a project <b>↗</b>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
