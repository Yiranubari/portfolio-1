'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./Nav.module.css";

const NAV_ITEMS = ['Home', 'Works', 'Resume', 'Skills', 'Contact'];
const PATHMAP = {
  Home: '/',
  Works: '/works',
  Resume: '/resume',
  Skills: '/skills',
  Contact: '/contact'
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles['nav']}>
      <div className={styles['nav-left']}>
        <div className={styles['mail-circle']}>
          <MailIcon />
        </div>
        <span className={styles['nav-email']}>yiranubari4@gmail.com</span>
      </div>
      <ul className={styles['nav-links']}>
        {NAV_ITEMS.map((item) => {
          const path = PATHMAP[item];
          const isActive = pathname === path;
          return (
            <li key={item}>
              <Link
                href={path}
                className={isActive ? styles['active'] : ''}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
