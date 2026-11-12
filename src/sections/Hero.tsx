'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/hero.module.css';

const fadeUp = (delay = 0): Record<string, any> => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className={styles.hero} ref={ref}>
      {/* Background layer */}
      <motion.div className={styles.heroBg} style={{ y, opacity }}>
        <div className={styles.spotlight} />
        <div className={styles.spotlight2} />
      </motion.div>

      {/* Content */}
      <div className={styles.heroContent}>
        <motion.div className={styles.heroEyebrow} {...fadeUp(0.1)}>
          <span className={styles.eyebrowDot} />
          Available for work
        </motion.div>

        <motion.h1 className={styles.heroTitle} {...fadeUp(0.22)}>
          I make ideas<br />
          <em>work beautifully.</em>
        </motion.h1>

        <motion.p className={styles.heroSubtitle} {...fadeUp(0.34)}>
          Product engineer building considered digital experiences from first sketch to final release.
        </motion.p>

        <motion.div className={styles.heroActions} {...fadeUp(0.46)}>
          <a href="mailto:moojntariq@gmail.com" className={styles.btnPrimary}>
            Hire Me
          </a>
          <a href="#about" className={styles.btnSecondary}>
            About Me
          </a>
        </motion.div>

        <motion.div className={styles.scrollCue} {...fadeUp(0.62)}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </div>
    </div>
  );
}
