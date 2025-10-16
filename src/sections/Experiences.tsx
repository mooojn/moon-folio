import styles from "@/styles/experiences.module.css";
import { bullets } from "@/data/layout";
import experiences from "@/data/experiences.json";

export default function Experiences() {
    return (
        <div className={styles.experiences}>
            {experiences.map((experience, id) =>
                <Experience key={id} experience={experience} />
            )}
        </div>
    );
}

function Experience({ experience }: { experience: any }) {
    return (
        <div className={styles.experience}>
            <h3>{experience.role} | {experience.period}</h3>
            <h2>{experience.company}</h2>
            <ul>
                {experience.points.map((point: any, id: any) =>
                    <li key={id}>{bullets[1]} {point}</li>
                )}
            </ul>
        </div>
    );
}