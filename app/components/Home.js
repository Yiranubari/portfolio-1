import React from "react";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles['home-section']}>
      <div className={styles['avatar-wrap']} aria-hidden="true">
        👨🏾‍💻
      </div>
      <p className={styles['greeting']}>Hi, I'm Yiranubari 🤘</p>
      <h1 className={styles['hero-heading']}>
        Building backends,
        <br />
        frontends, and
        <br />
        things that ship.
      </h1>
      <p className={styles['hero-sub']}>
        a <strong>Full-Stack Developer</strong> and{" "}
        <strong>Software Engineer</strong>
        <br />
        I specialize in Node.js, TypeScript, React, PHP
        <br />
        and production-grade backend systems.
      </p>
      <Link href="/contact" className='cta-btn'>
        Connect With Me
      </Link>
    </div>
  );
}
