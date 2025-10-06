import styles from "@/styles/navbar.module.css";

export default function Navbar() {
    const links = ["home", "projects"];

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
