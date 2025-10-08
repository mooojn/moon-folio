import styles from "@/styles/navbar.module.css";
import { links } from "@/data/layout";

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
        </div >
    );
}
