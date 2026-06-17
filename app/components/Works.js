import React from 'react';
import styles from "./Works.module.css";
import Icon from "./Icon";

const WORKS = [
  {
    icon: 'message-square',
    title: 'Nebula',
    year: '2026',
    desc: 'Real-time team workspace built end to end: direct and channel messaging, a click-to-advance Kanban board, video huddles with screen sharing, and a live notification feed.',
    tags: ['React 19', 'Express 5', 'Socket.IO', 'WebRTC', 'Prisma'],
    live: 'https://nebula-tau-three.vercel.app',
    code: 'https://github.com/Yiranubari/Nebula',
  },
  {
    icon: 'bell',
    title: 'Flaretag',
    year: '2026',
    desc: 'Backend for a social badge platform: auth and JWT, database models and migrations, API routers, and tests, with Redis-backed rate limiting and a CI/CD pipeline.',
    tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Alembic'],
    live: 'https://flaretag.hng14.com',
    code: 'https://github.com/hngprojects/social-badge-api',
  },
  {
    icon: 'clock',
    title: 'Job Scheduler',
    year: '2026',
    desc: 'A background job scheduler built from scratch: a hand-built priority queue feeds worker processes that claim jobs atomically, with retries, backoff, a dead-letter queue, and DAG dependencies.',
    tags: ['Node.js', 'TypeScript', 'Postgres', 'Redis', 'AWS EC2'],
    live: 'https://yiranubari-scheduler.duckdns.org',
    code: 'https://github.com/Yiranubari/job-scheduler',
  },
  {
    icon: 'terminal',
    title: 'Insighta Labs+',
    year: '2026',
    desc: 'One backend serving both a CLI and a web portal: PKCE for the CLI, HTTP-only cookies for the web, role-based access, rotating refresh tokens, and streaming CSV ingestion up to 500k rows.',
    tags: ['PHP 8.2', 'Slim 4', 'SQLite', 'Redis', 'Docker'],
    code: 'https://github.com/Yiranubari/profile-intelligence',
  },
  {
    icon: 'shopping-cart',
    title: 'MyOrderFellow',
    year: '2025',
    desc: 'SaaS order-tracking platform giving e-commerce businesses real-time order tracking for their customers. Built the PHP backend at ArchSaint Nexus.',
    tags: ['PHP', 'SaaS', 'Vercel'],
    live: 'https://my-order-fellow.vercel.app',
  },
];

function CardLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['work-clink']}
    >
      {label}
      <Icon name="arrow-up-right" size={13} />
    </a>
  );
}

export default function Works() {
  return (
    <div className='section'>
      <p className='sec-label reveal'>Portfolio</p>
      <h2 className='sec-title reveal d1'>My Works</h2>
      <p className='sec-sub reveal d2'>
        A selection of projects I've built and shipped: live, real, and in production.
      </p>
      <div className={styles['works-grid']}>
        {WORKS.map((w) => (
          <article className={`${styles['work-card']} reveal`} key={w.title}>
            <div className={styles['work-card-top']}>
              <div className={styles['work-icon']}>
                <Icon name={w.icon} size={22} />
              </div>
              <span className={styles['work-year']}>{w.year}</span>
            </div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
            <div className={styles['work-tags']}>
              {w.tags.map((t) => (
                <span className={styles['wtag']} key={t}>{t}</span>
              ))}
            </div>
            <div className={styles['work-links']}>
              {w.live && <CardLink href={w.live} label="Live" />}
              {w.code && <CardLink href={w.code} label="Code" />}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
