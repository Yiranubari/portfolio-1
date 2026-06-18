'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Eye from './Eye';
import ThemeToggle from './ThemeToggle';
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
  const isHome = pathname === '/';
  const [shown, setShown] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setShown(true);
      return;
    }
    setShown(false);
    const onReveal = () => setShown(true);
    window.addEventListener('hero-revealed', onReveal);
    return () => window.removeEventListener('hero-revealed', onReveal);
  }, [isHome]);

  return (
    <nav
      className={`${styles['nav']} ${shown ? styles['nav-show'] : styles['nav-pre']}`}
    >
      <Link href="/" className={styles['nav-left']} aria-label="Yiranubari Maamaa, home">
        <span className={styles['nav-name']}>Yiranubari Maamaa</span>
      </Link>
      <Eye />
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
        <li className={styles['nav-toggle']}>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
