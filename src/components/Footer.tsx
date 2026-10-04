import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerAmbient} />
      <div className={styles.footerLine} />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Munees Tariq</span>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} — Full-Stack Developer
          </span>
        </div>

        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/munees-tariq"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/mooojn"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
