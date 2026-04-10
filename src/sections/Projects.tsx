import styles from "@/styles/projects.module.css";
import projects from '@/data/projects.json';
import GitHubButton from 'react-github-btn'
import { bullets } from "@/data/layout";

type ProjectMetric = {
  name: string;
  value: string;
};

type ProjectAction = {
  name: string;
  link: string;
};

type ProjectItem = {
  category: string;
  title: string;
  description: string;
  metrics?: ProjectMetric[];
  features: string[];
  technologies: string[];
  actions: ProjectAction[];
  image: string;
};

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionBackdrop} />
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionSubtitle}>Portfolio</h2>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <p className={styles.sectionDescription}>
          Production work across software, product, and growth, with outcomes measured in speed,
          stability, and user impact.
        </p>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) =>
          <Card key={id} project={project as ProjectItem} index={id} />
        )}
      </div>
    </section>
  );
}

function Card({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <article className={styles.project}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.categoryBadge}>{project.category}</span>
      </div>

      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
      </div>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {project.metrics && project.metrics.length > 0 && (
        <div className={styles.projectMetrics}>
          {project.metrics.map((metric, id) => (
            <div key={id} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.name}</span>
            </div>
          ))}
        </div>
      )}

      <ul className={styles.projectFeatures}>
        {project.features.map((feature, id) =>
          <li key={id}>
            <span className={styles.featureIcon}>{bullets[1]}</span>
            <span>{feature}</span>
          </li>
        )}
      </ul>

      <ul className={styles.projectTechnologies}>
        {project.technologies.map((technology, id) =>
          <li key={id}>{technology}</li>
        )}
      </ul>

      {project.actions && project.actions.length > 0 && (
        <div className={styles.projectActions}>
          {project.actions.map((action, id) =>
            <div key={id}>
              <GitHubButton
                href={action.link}
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                aria-label={action.name}
              >
                {action.name}
              </GitHubButton>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

