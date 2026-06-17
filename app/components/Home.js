import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import Icon from "./Icon";

export default function Home() {
  return (
    <div className={styles['home-section']}>
      <div className={`${styles['avatar-wrap']} reveal`}>
        <div className={styles['avatar-inner']}>
          <Image
            src="/1.jpg"
            alt="Yiranubari Maamaa"
            width={260}
            height={260}
            priority
            className={styles['avatar-img']}
          />
        </div>
      </div>
      <p className={`${styles['greeting']} reveal d1`}>
        Hi, I'm Yiranubari{" "}
        <Icon
          name="hand-metal"
          size={18}
          style={{ verticalAlign: "-3px", marginLeft: "2px" }}
        />
      </p>
      <h1 className={`${styles['hero-heading']} reveal d2`}>
        Building backends,
        <br />
        frontends, and
        <br />
        things that ship.
      </h1>
      <p className={`${styles['hero-sub']} reveal d3`}>
        a <strong>Full-Stack Developer</strong> and{" "}
        <strong>Software Engineer</strong>
        <br />
        I specialize in Node.js, TypeScript, PHP, Python, React
        <br />
        and production-grade backend systems.
      </p>
      <div className={`${styles['hero-actions']} reveal d4`}>
        <Link href="/contact" className='cta-btn'>
          Connect With Me
        </Link>
        <a
          href="/Yiranubari-Promise-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='ghost-btn'
        >
          <Icon name="arrow-up-right" size={15} />
          Résumé
        </a>
      </div>
    </div>
  );
}
