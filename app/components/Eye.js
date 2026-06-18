"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Eye.module.css";

export default function Eye() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [shown, setShown] = useState(!isHome);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (!isHome) {
      setShown(true);
      return;
    }
    setShown(false);
    const onReveal = () => setShown(true);
    window.addEventListener("hero-revealed", onReveal);
    return () => window.removeEventListener("hero-revealed", onReveal);
  }, [isHome]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;

    const aim = (ball, e) => {
      const iris = ball.firstChild;
      const r = ball.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const max = r.width * 0.16;
      iris.style.transform = `translate(${Math.cos(angle) * max}px, ${Math.sin(angle) * max}px)`;
    };

    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const left = leftRef.current;
        const right = rightRef.current;
        if (left) aim(left, e);
        if (right) aim(right, e);
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`${styles.eyes} ${shown ? styles.show : styles.pre}`}
      aria-hidden="true"
    >
      <span className={styles.ball} ref={leftRef}>
        <span className={styles.iris}>
          <span className={styles.pupil} />
          <span className={styles.shine} />
        </span>
      </span>
      <span className={styles.ball} ref={rightRef}>
        <span className={styles.iris}>
          <span className={styles.pupil} />
          <span className={styles.shine} />
        </span>
      </span>
    </div>
  );
}
