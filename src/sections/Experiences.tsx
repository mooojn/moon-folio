'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '@/styles/experiences.module.css';
import experiences from '@/data/experiences.json';

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  points: string[];
};

const containerVariants: Record<string, any> = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const cardVariants: Record<string, any> = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.experiencesSection}>
      <div className={styles.sectionAmbient} />
      <div className={styles.inner}>
        <motion.div
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.sectionLabel}>Career</p>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.sectionDesc}>
            Hands-on roles where I shipped measurable improvements — from product
            performance and SEO growth to scalable delivery across teams.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              experience={exp as ExperienceItem}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  return (
    <motion.article className={styles.card} variants={cardVariants}>
      <span className={styles.dot} />

      <div className={styles.cardHeader}>
        <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
        <div className={styles.badges}>
          <span className={styles.roleBadge}>{experience.role}</span>
          <span className={styles.periodBadge}>{experience.period}</span>
        </div>
      </div>

      <h3 className={styles.company}>{experience.company}</h3>

      <ul className={styles.points}>
        {experience.points.map((point, i) => (
          <li key={i}>
            <span className={styles.pointDot} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
