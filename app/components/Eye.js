"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Eye.module.css";

export default function Eye() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;

    const aim = (ball) => {
      const iris = ball.firstChild;
      const r = ball.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      return (e) => {
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
        const max = r.width * 0.16;
        iris.style.transform = `translate(${Math.cos(angle) * max}px, ${Math.sin(angle) * max}px)`;
      };
    };

    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const left = leftRef.current;
        const right = rightRef.current;
        if (left) aim(left)(e);
        if (right) aim(right)(e);
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.eyes} aria-hidden="true">
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
