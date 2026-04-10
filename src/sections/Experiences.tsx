import styles from "@/styles/experiences.module.css";
import { bullets } from "@/data/layout";
import experiences from "@/data/experiences.json";

type ExperienceItem = {
    company: string;
    period: string;
    role: string;
    points: string[];
};

export default function Experiences() {
    return (
        <section className={styles.experiencesSection}>
            <div className={styles.sectionBackdrop} />
            <div className={styles.sectionHeading}>
                <h2 className={styles.sectionSubtitle}>Career</h2>
                <h1 className={styles.sectionTitle}>Experiences</h1>
                <p className={styles.sectionDescription}>
                    Hands-on roles where I shipped measurable improvements, from product performance
                    and SEO growth to scalable delivery across teams.
                </p>
            </div>
            <div className={styles.experiences}>
                {experiences.map((experience, id) =>
                    <Experience
                        key={id}
                        experience={experience as ExperienceItem}
                        index={id}
                    />
                )}
            </div>
        </section>
    );
}

function Experience({ experience, index }: { experience: ExperienceItem; index: number }) {
    return (
        <article className={styles.experience}>
            <span className={styles.timelineDot} />
            <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.badges}>
                    <span className={styles.roleBadge}>{experience.role}</span>
                    <span className={styles.periodBadge}>{experience.period}</span>
                </div>
            </div>
            <h2>{experience.company}</h2>
            <ul className={styles.points}>
                {experience.points.map((point, id) =>
                    <li key={id}>
                        <span className={styles.pointIcon}>{bullets[1]}</span>
                        <span>{point}</span>
                    </li>
                )}
            </ul>
        </article>
    );
}
