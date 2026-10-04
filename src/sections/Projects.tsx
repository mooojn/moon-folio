'use client';
import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import GitHubButton from 'react-github-btn';
import styles from '@/styles/projects.module.css';
import projects from '@/data/projects.json';

type ProjectMetric = { name: string; value: string };
type ProjectAction = { name: string; link: string };
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

const containerVariants: Record<string, any> = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionAmbient} />
      <div className={styles.inner}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.sectionLabel}>Portfolio</p>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDesc}>
            Production work across software, product, and growth — outcomes measured
            in speed, stability, and user impact.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <Card key={i} project={project as ProjectItem} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      className={styles.card}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={{ rotateX: 1, rotateY: 1.5 }}
      style={{ perspective: '1000px' }}
    >
      <div className={styles.cardGlow} />

      {/* Image */}
      <div className={styles.cardImage}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className={styles.cardImageOverlay} />
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
          <span className={styles.categoryBadge}>{project.category}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metrics}>
            {project.metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.name}</span>
              </div>
            ))}
          </div>
        )}

        <ul className={styles.features}>
          {project.features.map((f, i) => (
            <li key={i}>
              <span className={styles.featureDot} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className={styles.techs}>
          {project.technologies.map((t, i) => (
            <span key={i} className={styles.tech}>{t}</span>
          ))}
        </div>

        {project.actions && project.actions.length > 0 && (
          <div className={styles.actions}>
            {project.actions.map((action, i) => (
              <GitHubButton
                key={i}
                href={action.link}
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                data-size="large"
                aria-label={action.name}
              >
                {action.name}
              </GitHubButton>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
