import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <div id="home" className={styles.hero}>
      <h1>Develop full-stack apps, RESTful APIs.</h1>

      <a href="#projects" className={styles.btn}>View My Work</a>
    </div>
  );
}
