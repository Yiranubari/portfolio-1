"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import Icon from "./Icon";
import NowPlaying from "./NowPlaying";
import Typewriter from "./Typewriter";

const HEADING_LINES = [
  "Building backends,",
  "frontends, and",
  "everything in between.",
];

export default function Home() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;

    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        section.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
        section.style.setProperty("--my", `${(y / rect.height) * 100}%`);
        section.style.setProperty("--glow", "1");

        const avatar = avatarRef.current;
        if (avatar) {
          const ar = avatar.getBoundingClientRect();
          const cx = ar.left + ar.width / 2;
          const cy = ar.top + ar.height / 2;
          const dx = (e.clientX - cx) / (ar.width / 2);
          const dy = (e.clientY - cy) / (ar.height / 2);
          const max = 7;
          avatar.style.transform = `perspective(700px) rotateY(${clamp(dx, -1, 1) * max}deg) rotateX(${clamp(-dy, -1, 1) * max}deg)`;
        }
      });
    };

    const onLeave = () => {
      section.style.setProperty("--glow", "0");
      const avatar = avatarRef.current;
      if (avatar) avatar.style.transform = "";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles["home-section"]} ref={sectionRef}>
      <div className={styles["hero-glow"]} aria-hidden="true" />
      <div
        className={`${styles["avatar-wrap"]} ${revealed ? styles["fade-down"] : styles.pre}`}
        style={revealed ? { animationDelay: "0s" } : undefined}
      >
        <div className={styles["avatar-inner"]} ref={avatarRef}>
          <Image
            src="/1.jpg"
            alt="Yiranubari Maamaa"
            width={260}
            height={260}
            priority
            className={styles["avatar-img"]}
          />
        </div>
      </div>
      <p
        className={`${styles["greeting"]} ${revealed ? styles["fade-down"] : styles.pre}`}
        style={revealed ? { animationDelay: "0.15s" } : undefined}
      >
        Hi, I'm Yiranubari{" "}
        <Icon
          name="hand-metal"
          size={18}
          className={revealed ? styles.wave : undefined}
          style={{ verticalAlign: "-3px", marginLeft: "2px" }}
        />
      </p>
      <h1
        className={styles["hero-heading"]}
        aria-label={HEADING_LINES.join(" ")}
      >
        <Typewriter
          lines={HEADING_LINES}
          caretClassName={styles.caret}
          caretSolidClassName={styles["caret-solid"]}
          onDone={() => setRevealed(true)}
        />
      </h1>
      <p
        className={`${styles["hero-sub"]} ${revealed ? styles["fade-up"] : styles.pre}`}
        style={revealed ? { animationDelay: "0.45s" } : undefined}
      >
        a <strong>Full-Stack Developer</strong> and{" "}
        <strong>Software Engineer</strong>
        <br />
        I specialize in Node.js, TypeScript, PHP, Python, React
        <br />
        and production-grade backend systems.
      </p>
      <div
        className={`${styles["hero-actions"]} ${revealed ? styles["fade-up"] : styles.pre}`}
        style={revealed ? { animationDelay: "0.6s" } : undefined}
      >
        <Link href="/contact" className="cta-btn">
          Connect With Me
        </Link>
        <a
          href="/Yiranubari-Promise-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-btn"
        >
          <Icon name="arrow-up-right" size={15} />
          Résumé
        </a>
      </div>
      {revealed && <NowPlaying />}
    </div>
  );
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}
