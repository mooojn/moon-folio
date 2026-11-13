'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/hero.module.css';

const fadeUp = (delay = 0): Record<string, any> => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section className={styles.hero} ref={ref} aria-labelledby="hero-title">
      <motion.div className={styles.heroBg} style={{ y, opacity }} aria-hidden="true">
        <div className={styles.gridLines} />
        <div className={styles.glow} />
      </motion.div>

      <div className={styles.frame}>
        <motion.header className={styles.topline} {...fadeUp(0.05)}>
          <a className={styles.wordmark} href="#home" aria-label="Munees Tariq, home">MT<span>®</span></a>
          <span className={styles.toplineNote}>Independent product engineer · Lahore, PK</span>
          <a className={styles.contactLink} href="mailto:moojntariq@gmail.com">Let’s talk <span>↗</span></a>
        </motion.header>

        <div className={styles.stage}>
          <motion.div className={styles.availability} {...fadeUp(0.12)}>
            <span className={styles.eyebrowDot} /> Available for select projects
          </motion.div>

          <motion.h1 id="hero-title" className={styles.heroTitle} {...fadeUp(0.2)}>
            I BUILD<br />
            <span className={styles.titleLine}><span className={styles.accent}>DIGITAL</span> THINGS</span>
            <span className={styles.titleLast}>THAT <span className={styles.outline}>WORK.</span></span>
          </motion.h1>

          <motion.p className={styles.heroSubtitle} {...fadeUp(0.32)}>
            Thoughtful product engineering, from the first sketch to the final pixel.
          </motion.p>

          <motion.div className={styles.heroActions} {...fadeUp(0.4)}>
            <a href="#projects" className={styles.btnPrimary}>Explore my work <span>↘</span></a>
            <a href="mailto:moojntariq@gmail.com" className={styles.btnSecondary}>Get in touch <span>↗</span></a>
          </motion.div>

          <motion.div className={styles.sticker} {...fadeUp(0.5)} aria-label="Available to create something good">
            <span>GOOD<br />IDEAS<br /><b>→</b> LIVE<br />HERE</span>
          </motion.div>
          <motion.div className={styles.profileCard} {...fadeUp(0.55)}>
            <div className={styles.avatar}>M</div>
            <div><strong>Munees Tariq</strong><span>Product engineer</span></div>
            <span className={styles.cardArrow}>↗</span>
          </motion.div>

          <motion.div className={styles.sideNote} {...fadeUp(0.62)}>
            <span>01 / 04</span><i /> SCROLL TO EXPLORE
          </motion.div>
        </div>

        <motion.footer className={styles.bottomline} {...fadeUp(0.68)}>
          <span>DESIGN MINDED. ENGINEER BUILT.</span>
          <span>REACT&nbsp; · &nbsp;NEXT.JS&nbsp; · &nbsp;TYPESCRIPT</span>
          <a href="#about">MORE ABOUT ME <span>↓</span></a>
        </motion.footer>
      </div>
    </section>
  );
}
