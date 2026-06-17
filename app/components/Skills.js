import React from 'react';
import styles from "./Skills.module.css";
import Icon from "./Icon";

const SKILLS = [
  {
    icon: 'server',
    title: 'Backend',
    desc: 'Node.js, Express.js, TypeScript, PHP — building reliable, scalable server-side systems.',
  },
  {
    icon: 'monitor',
    title: 'Frontend',
    desc: 'React, JavaScript, HTML, CSS — responsive, accessible, and performant interfaces.',
  },
  {
    icon: 'database',
    title: 'Databases',
    desc: 'PostgreSQL, MySQL, Prisma ORM — schema design, query optimization, and data reliability.',
  },
  {
    icon: 'package',
    title: 'DevOps',
    desc: 'Docker, Git, Linux, Vercel — shipping and maintaining production environments.',
  },
  {
    icon: 'users',
    title: 'Process',
    desc: 'Agile sprints, team collaboration, fast iteration — comfortable in a real engineering team.',
  },
  {
    icon: 'book-open',
    title: 'Always Learning',
    desc: 'Blockchain, Design Thinking — always picking up what the next project demands.',
  },
];

export default function Skills() {
  return (
    <div className='section'>
      <p className='sec-label'>Capabilities</p>
      <h2 className='sec-title'>Skills</h2>
      <p className='sec-sub'>What I bring to the table — across the full stack.</p>
      <div className={styles['skills-grid']}>
        {SKILLS.map((s) => (
          <div className={styles['skill-card']} key={s.title}>
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
