'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from '@/styles/projects.module.css';
import projectsData from '@/data/projects.json';
import otherProjects from '@/data/otherProjects.json';

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

type OtherProject = {
  title: string;
  type: string;
  built: string;
  learned: string[];
  technologies: string[];
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
                Selected <span className={styles.titleSpark}>work</span>
              </h2>
              <p className={styles.sectionDesc}>
                A selection of products and experiences built with care, clarity and respect for the details.
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

        <section className={styles.otherProjects} aria-labelledby="other-projects-title">
          <div className={styles.otherHeading}>
            <div>
              <p className={styles.sectionLabel}>More work</p>
              <h3 className={styles.otherTitle} id="other-projects-title">Projects &amp; collaborations</h3>
            </div>
            <p className={styles.otherIntro}>A few more things I’ve built, explored and learned along the way.</p>
          </div>

          <div className={styles.otherList}>
            {(otherProjects as OtherProject[]).map((project, index) => (
              <article className={styles.otherCard} key={project.title}>
                <div className={styles.otherCardTop}>
                  <span className={styles.otherIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.otherType}>{project.type}</span>
                </div>
                <h4 className={styles.otherCardTitle}>{project.title}</h4>
                <div className={styles.otherNotes}>
                  <div className={styles.builtNote}>
                    <span className={styles.noteLabel}>Built</span>
                    <p>{project.built}</p>
                  </div>
                  <div className={styles.learnedNote}>
                    <span className={styles.noteLabel}>Learned</span>
                    <ul>{project.learned.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
                <ul className={styles.otherTechs} aria-label="Technologies used">
                  {project.technologies.map((technology) => <li key={technology}><TechIcon name={technology} /><span>{technology}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function TechIcon({ name }: { name: string }) {
  const iconPaths: Record<string, string> = {
    'Next.js': 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 5h2v6l4 5h-2.5L11 13.5Zm-3 0h2v11H8Z',
    FastAPI: 'M13 2 4 13h6l-1 9 11-13h-7Z',
    Supabase: 'm13 2-9 12h8l-1 8 9-12h-8Z',
    PostgreSQL: 'M12 3a7 7 0 0 0-7 7v4a4 4 0 0 0 8 0v-2h-2v2a2 2 0 0 1-4 0v-4a5 5 0 0 1 10 0v6a2 2 0 0 1-4 0v-2h-2v2a4 4 0 0 0 8 0v-6a7 7 0 0 0-7-7Z',
    Python: 'M12 2c-5 0-5 2-5 5v2h6v1H5c-3 0-4 2-4 5s1 5 4 5h2v-3c0-2 2-4 4-4h5c2 0 3-1 3-3V7c0-3-2-5-7-5Zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 6v3c0 2-2 4-4 4H9c-2 0-3 1-3 3v2c0 3 2 5 6 5s5-2 5-5v-2h-6v-1h8c3 0 4-2 4-5s-1-4-4-4Zm-2 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
    'YOLOv8-Pose': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-4 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-4 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
    MediaPipe: 'M12 2 3 7v10l9 5 9-5V7Zm0 3 6 3.3v7.4L12 19l-6-3.3V8.3Z',
    WebSockets: 'M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z',
    'C#': 'M9 4 7 20h2l2-16Zm6 0-2 16h2l2-16ZM4 9h16v2H4Zm-1 5h16v2H3Z',
    'React': 'M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-8c-1.3 0-2.3 4-2.3 9s1 9 2.3 9 2.3-4 2.3-9-1-9-2.3-9Zm0 0c-4.5 0-8.5 2.3-8.5 4s4 4 8.5 4 8.5-2.3 8.5-4-4-4-8.5-4Zm-7.4 4c-2.3 3.9-3.1 8.5-1.7 9.3s5.4-1.5 7.7-5.4 3.1-8.5 1.7-9.3S6.9 3.1 4.6 7Z',
  };
  const path = iconPaths[name] || 'M4 4h16v16H4zm3 3v10h2V7zm4 0v10h2V7zm4 0v10h2V7z';
  return <svg className={styles.techIcon} viewBox="0 0 24 24" aria-hidden="true"><path d={path} fill="currentColor" /></svg>;
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
