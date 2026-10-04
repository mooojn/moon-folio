'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from '@/styles/projects.module.css';
import projectsData from '@/data/projects.json';

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
  featured?: boolean;
};

const CATEGORIES = ['All', 'FinTech', 'Banking', 'Database Systems', 'Events Services'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className={styles.projectsSection} ref={sectionRef}>
      <div className={styles.sectionAmbient} />

      <div className={styles.inner}>
        {/* Heading */}
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.headingTop}>
            <div>
              <p className={styles.sectionLabel}>Portfolio</p>
              <h2 className={styles.sectionTitle}>
                Featured Works <span className={styles.titleSpark}>&amp; Systems</span>
              </h2>
              <p className={styles.sectionDesc}>
                Production-grade software, SaaS tools, and desktop engines — architected for speed, reliability, and real-world results.
              </p>
            </div>
          </div>

          {/* Category Tabs Filter */}
          <div className={styles.filterTabs}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  className={`${styles.filterTab} ${isActive ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterGlow"
                      className={styles.activeTabBg}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className={styles.projectsGrid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Card key={project.title} project={project as ProjectItem} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight cursor position
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
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardGlow} />

      {/* Image Preview Container */}
      <div className={styles.cardImageContainer}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className={styles.cardImageOverlay} />

        <div className={styles.imageTopMeta}>
          <span className={styles.categoryBadge}>{project.category}</span>
          <span className={styles.cardIndex}>#{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metricsGrid}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className={styles.metricItem}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricName}>{m.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Feature List */}
        <ul className={styles.featureList}>
          {project.features.map((feat, idx) => (
            <li key={idx}>
              <span className={styles.featureIcon}>✦</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips */}
        <div className={styles.techList}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        {/* Custom Actions Links */}
        {project.actions && project.actions.length > 0 && (
          <div className={styles.cardActions}>
            {project.actions.map((act, idx) => (
              <a
                key={idx}
                href={act.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
              >
                <svg className={styles.gitIcon} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>{act.name}</span>
                <span className={styles.btnArrow}>↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
