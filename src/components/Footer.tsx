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
            href="https://wa.me/923264215366?text=Hi%20Munees%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="WhatsApp (+92 326 4215366)"
          >
            WhatsApp ↗
          </a>
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
