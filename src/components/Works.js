import React from 'react';
import './Works.css';

const WORKS = [
  {
    icon: '🛒',
    title: 'MyOrderFellow',
    url: 'https://my-order-fellow.vercel.app',
    desc: 'SaaS platform enabling e-commerce businesses to deliver real-time order tracking to customers. Built at ArchSaint Nexus with a PHP backend.',
    tags: ['PHP', 'SaaS', 'Vercel'],
  },
  {
    icon: '🔊',
    title: 'Resona',
    url: 'https://resona-weld.vercel.app',
    desc: 'Accessible text-to-speech web app that converts written input into fluid audio output using browser Speech APIs.',
    tags: ['JavaScript', 'Web Speech API', 'Vercel'],
  },
  {
    icon: '🏃',
    title: 'Stride',
    url: 'https://stride-psi-nine.vercel.app',
    desc: 'Responsive workout tracker that logs running and cycling on an interactive map using real-time geolocation and Leaflet.js.',
    tags: ['JavaScript', 'Leaflet.js', 'Geolocation API'],
  },
];

export default function Works() {
  return (
    <div className="section">
      <p className="sec-label">Portfolio</p>
      <h2 className="sec-title">My Works</h2>
      <p className="sec-sub">
        A selection of projects I've built and shipped — live, real, and in production.
      </p>
      <div className="works-grid">
        {WORKS.map((w) => (
          <div className="work-card" key={w.title}>
            <div className="work-card-top">
              <div className="work-icon">{w.icon}</div>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
                aria-label={`Visit ${w.title}`}
              >
                ↗
              </a>
            </div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
            <div className="work-tags">
              {w.tags.map((t) => (
                <span className="wtag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
