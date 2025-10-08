import styles from "@/styles/experiences.module.css";
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
            <h2>{experience.company}</h2>
            <h3>{experience.period}</h3>
            <h1>{experience.role}</h1>
            <ul>
                {experience.points.map((point: any, id: any) =>
                    <li key={id}>{point}</li>
                )}
            </ul>
        </div>
    );
}