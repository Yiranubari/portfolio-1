import React from "react";
import Link from "next/link";
import styles from "./Home.module.css";
import Icon from "./Icon";

export default function Home() {
  return (
    <div className={styles['home-section']}>
      <div className={styles['avatar-wrap']} aria-hidden="true">
        <Icon name="code" size={44} style={{ color: "#1c1c22" }} />
      </div>
      <p className={styles['greeting']}>
        Hi, I'm Yiranubari{" "}
        <Icon
          name="hand-metal"
          size={18}
          style={{ verticalAlign: "-3px", marginLeft: "2px" }}
        />
      </p>
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
