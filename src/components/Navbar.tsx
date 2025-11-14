import styles from "@/styles/navbar.module.css";
import { links } from "@/data/layout";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    return (
        <div className={styles.navbarWrap}>
            <nav className={styles.navbar}>
                <ul>
                    {links.map(link => (
                        <li key={link}>
                            <a href={`#${link}`}>{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <ThemeToggle />
        </div >
    );
}
