import React from 'react';
import styles from "./Contact.module.css";

const LINKS = [
  {
    label: 'Email',
    value: 'yiranubari4@gmail.com',
    href: 'mailto:yiranubari4@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Yiranubari Maamaa',
    href: 'https://www.linkedin.com/in/yiranubari-maamaa-6958b3369',
  },
  {
    label: 'GitHub',
    value: 'github.com/Yiranubari',
    href: 'https://github.com/Yiranubari',
  },
];

export default function Contact() {
  return (
    <div className={`section ${styles['contact-center']}`}>
      <p className='sec-label'>Get in touch</p>
      <h2 className='sec-title'>Let's work together.</h2>
      <p className='sec-sub'>
        Open to full-time roles, contracts, and interesting collabs.
        <br />
        If you're building something, reach out.
      </p>
      <div className={styles['contact-links']}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={styles['contact-row']}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <div>
              <div className={styles['cr-label']}>{l.label}</div>
              <div className={styles['cr-value']}>{l.value}</div>
            </div>
            <div className={styles['cr-arrow']}>↗</div>
          </a>
        ))}
      </div>
      <a
        className='cta-btn'
        href="mailto:yiranubari4@gmail.com"
      >
        Send a Message
      </a>
    </div>
  );
}
