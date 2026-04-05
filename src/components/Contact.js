import React from 'react';
import './Contact.css';

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
    <div className="section contact-center">
      <p className="sec-label">Get in touch</p>
      <h2 className="sec-title">Let's work together.</h2>
      <p className="sec-sub">
        Open to full-time roles, contracts, and interesting collabs.
        <br />
        If you're building something, reach out.
      </p>
      <div className="contact-links">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="contact-row"
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <div>
              <div className="cr-label">{l.label}</div>
              <div className="cr-value">{l.value}</div>
            </div>
            <div className="cr-arrow">↗</div>
          </a>
        ))}
      </div>
      <button
        className="cta-btn"
        onClick={() => window.open('mailto:yiranubari4@gmail.com')}
      >
        Send a Message
      </button>
    </div>
  );
}
