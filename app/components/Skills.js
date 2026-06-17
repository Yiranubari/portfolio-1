import React from 'react';
import styles from "./Skills.module.css";
import Icon from "./Icon";

const SKILLS = [
  {
    icon: 'server',
    title: 'Backend',
    desc: 'FastAPI, Node.js, Express, Slim 4, across Python, TypeScript, and PHP. Reliable, scalable server-side systems.',
  },
  {
    icon: 'monitor',
    title: 'Frontend',
    desc: 'React and Vite with JavaScript, HTML, and CSS. Responsive, accessible, and performant interfaces.',
  },
  {
    icon: 'database',
    title: 'Data & ORM',
    desc: 'PostgreSQL, MySQL, SQLite, and Redis with Prisma, SQLAlchemy, and Alembic. Schema design and query optimization.',
  },
  {
    icon: 'package',
    title: 'Tools & Platforms',
    desc: 'Docker, Git, Linux, Nginx, and PM2, deploying to AWS EC2 and Vercel.',
  },
  {
    icon: 'users',
    title: 'Process',
    desc: 'Agile sprints, team collaboration, and fast iteration. Comfortable in a real engineering team.',
  },
  {
    icon: 'book-open',
    title: 'Always Learning',
    desc: 'Blockchain and Design Thinking, picking up whatever the next project demands.',
  },
];

export default function Skills() {
  return (
    <div className='section'>
      <p className='sec-label reveal'>Capabilities</p>
      <h2 className='sec-title reveal d1'>Skills</h2>
      <p className='sec-sub reveal d2'>What I bring to the table, across the full stack.</p>
      <div className={styles['skills-grid']}>
        {SKILLS.map((s) => (
          <div className={`${styles['skill-card']} reveal`} key={s.title}>
            <div className={styles['skill-icon']}>
              <Icon name={s.icon} size={28} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
