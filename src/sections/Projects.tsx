import styles from "@/styles/projects.module.css";
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <div className={styles.projects}>
      {projects.map((project, id) =>
        <Card key={id} project={project} />
      )}
    </div>
  );
}

function Card({ project }: { project: any }) {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.image} />
      </div>
      <h2>{project.category}</h2>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <ul className={styles.projectFeatures}>
        {project.features.map((feature: any, id: any) =>
          <li key={id}>✅ {feature}</li>
        )}
      </ul>
      <ul className={styles.projectTechnologies}>
        {project.technologies.map((technology: any, id: any) =>
          <li key={id}>{technology}</li>
        )}
      </ul>

      {project.actions.map((action: any, id: any) =>
        <button key={id}><a href={action.link} target="_blank">{action.name}</a></button>
      )}

    </div>
  );
}

