import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerCopyright}>
          © {new Date().getFullYear()} Munees Tariq
        </span>
        <div className={styles.footerSocials}>
          <a href="https://linkedin.com/in/munees-tariq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://github.com/mooojn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
