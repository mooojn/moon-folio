import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>Hello, I'm</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>Full-Stack Developer</span>
          </h1>
          <p className={styles.heroDescription}>
            I can develop full-stack apps, WordPress, Shopify, and more.
          </p>
        </div>
        <div className={styles.heroActions}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=moojntariq@gmail.com" target="_blank" className={styles.btnPrimary}>Contact Now</a>
          <a href="#projects" className={styles.btnSecondary}>View Work</a>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb}></div>
      </div>
    </div>
  );
}
