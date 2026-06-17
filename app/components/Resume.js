import React from 'react';
import styles from "./Resume.module.css";
import Icon from "./Icon";

const RESUME_URL = "/Yiranubari-Promise-Resume.pdf";

const EXPERIENCE = [
  {
    year: 'Apr 2026 - Jun 2026',
    title: 'Backend Developer Intern',
    company: 'HNG Tech',
    desc: 'Built production systems in Python (FastAPI), Node.js, TypeScript, and PHP, covering auth, queues, caching, retries, and crash recovery. Defended architecture and design decisions in mentor-led engineering reviews.',
  },
  {
    year: 'Dec 2025 - Mar 2026',
    title: 'Backend Developer',
    company: 'ArchSaint Nexus',
    desc: 'Built and scaled backend systems with Node.js, Express, and TypeScript. Designed and optimized database schemas and queries with Prisma on PostgreSQL, and built the PHP backend for MyOrderFellow, a SaaS order-tracking platform.',
  },
];

const EDUCATION = [
  {
    year: '2024 - Present',
    title: 'B.Eng. Electrical / Electronics Engineering',
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
    year: 'Udemy',
    title: 'Mastering PHP for Absolute Beginners',
    company: '',
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
      <p className='sec-label reveal'>Background</p>
      <h2 className='sec-title reveal d1'>Resume</h2>
      <p className='sec-sub reveal d2'>My experience and education at a glance.</p>
      <div className={`${styles['resume-actions']} reveal d2`}>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className='ghost-btn'
        >
          <Icon name="download" size={15} />
          Download Résumé
        </a>
      </div>
      <div className={styles['resume-grid']}>
        <div className={`${styles['exp-block']} reveal d3`}>
          <div className={styles['exp-block-label']}>Experience</div>
          {EXPERIENCE.map((e) => (
            <ExpItem key={e.title} {...e} />
          ))}
        </div>
        <div className={`${styles['exp-block']} reveal d4`}>
          <div className={styles['exp-block-label']}>Education & Certifications</div>
          {EDUCATION.map((e) => (
            <ExpItem key={e.title} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
}
