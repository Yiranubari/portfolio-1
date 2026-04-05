import React from 'react';
import styles from "./Resume.module.css";

const EXPERIENCE = [
  {
    year: '2025',
    title: 'Backend Developer',
    company: 'ArchSaint Nexus',
    desc: 'Built and scaled backend systems in Node.js, Express, and TypeScript. Designed database schemas with Prisma ORM + PostgreSQL. Contributed to MyOrderFellow — a PHP-based SaaS order tracking platform.',
  },
];

const EDUCATION = [
  {
    year: '2024 — Present',
    title: 'B.Eng. Electrical/Electronics Engineering',
    company: 'University of Uyo',
  },
  {
    year: 'Udemy',
    title: 'Frontend Web Development',
    company: 'HTML, CSS & JavaScript',
  },
  {
    year: 'Udemy',
    title: 'The Complete JavaScript Course',
    company: 'Jonas Schmedtmann',
  },
  {
    year: 'UNICEF Nigeria · May 2025',
    title: 'Design Thinking from a Business Perspective',
    company: 'FUCAP-LevelUp 2.0',
  },
  {
    year: 'Yoma · May 2025',
    title: 'Introduction to Blockchain Technology',
    company: '',
  },
];

function ExpItem({ year, title, company, desc }) {
  return (
    <div className={styles['exp-item']}>
      <div className={styles['exp-year']}>{year}</div>
      <div className={styles['exp-title']}>{title}</div>
      {company && <div className={styles['exp-company']}>{company}</div>}
      {desc && <div className={styles['exp-desc']}>{desc}</div>}
    </div>
  );
}

export default function Resume() {
  return (
    <div className='section'>
      <p className='sec-label'>Background</p>
      <h2 className='sec-title'>Resume</h2>
      <p className='sec-sub'>My experience and education at a glance.</p>
      <div className={styles['resume-grid']}>
        <div className={styles['exp-block']}>
          <div className={styles['exp-block-label']}>Experience</div>
          {EXPERIENCE.map((e) => (
            <ExpItem key={e.title} {...e} />
          ))}
        </div>
        <div className={styles['exp-block']}>
          <div className={styles['exp-block-label']}>Education & Certifications</div>
          {EDUCATION.map((e) => (
            <ExpItem key={e.title} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}
