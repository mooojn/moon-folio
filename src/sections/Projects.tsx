import styles from "@/styles/projects.module.css";
import projects from '@/data/projects.json';
import GitHubButton from 'react-github-btn'
import { bullets } from "@/data/layout";

export default function Projects() {
  return (
    <div className={styles.projectsSection}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionSubtitle}>Portfolio</h2>
        <h1 className={styles.sectionTitle}>Projects</h1>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) =>
          <Card key={id} project={project} />
        )}
      </div>
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
          <li key={id}>{bullets[1]}{feature}</li>
        )}
      </ul>
      
        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.projectMetrics}>
            {project.metrics.map((metric: any, id: any) => (
              <div key={id} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.name}</span>
              </div>
            ))}
          </div>
        )}

      <ul className={styles.projectTechnologies}>
        {project.technologies.map((technology: any, id: any) =>
          <li key={id}>{technology}</li>
        )}
      </ul>

      <div className="action">

        {project.actions.map((action: any, id: any) =>
        <div>

          <GitHubButton href={action.link} data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Github">Github</GitHubButton>
        </div>
        )}
      </div>
    </div>
  );
}

