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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles['nav']}>
      <Link href="/" className={styles['nav-left']} aria-label="Yiranubari Maamaa, home">
        <span className={styles['nav-name']}>Yiranubari Maamaa</span>
      </Link>
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
