import React from 'react';
import './Nav.css';

const NAV_ITEMS = ['Home', 'Works', 'Resume', 'Skills', 'Contact'];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function Nav({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="mail-circle">
          <MailIcon />
        </div>
        <span className="nav-email">yiranubari4@gmail.com</span>
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <button
              className={active === item ? 'active' : ''}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
