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

function Timeline({ items }) {
  return (
    <ul className={styles['timeline']}>
      {items.map((e) => (
        <li className={styles['item']} key={e.title}>
          <span className={styles['dot']} aria-hidden="true" />
          <span className={styles['year']}>{e.year}</span>
          <h3 className={styles['title']}>{e.title}</h3>
          {e.company && <p className={styles['company']}>{e.company}</p>}
          {e.desc && <p className={styles['desc']}>{e.desc}</p>}
        </li>
      ))}
    </ul>
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

      <div className={`${styles['block']} reveal d3`}>
        <h3 className={styles['block-label']}>Experience</h3>
        <Timeline items={EXPERIENCE} />
      </div>

      <div className={`${styles['block']} reveal d4`}>
        <h3 className={styles['block-label']}>Education &amp; Certifications</h3>
        <Timeline items={EDUCATION} />
      </div>
    </div>
  );
}
