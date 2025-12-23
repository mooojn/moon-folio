import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            I Build <span className={styles.gradientText}>Modern Web Apps</span> & Scalable Systems
          </h1>

          <p className={styles.subtitle}>
            High-performance apps, SaaS dashboards, APIs, automations, Shopify, WordPress, and custom full-stack solutions.
          </p>

          <div className={styles.actions}>
            <a href="mailto:moojntariq@gmail.com" className={styles.btnPrimary}>Hire Me</a>
            <a href="/about" className={styles.btnSecondary}>About Me</a>
          </div>
        </div>

        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
          <div className={styles.gradientOrb}></div>
        </div>
      </div>
    </div>
  );
}
