"use client";

import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import Icon from "./Icon";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const toggle = (e) => {
    const next = theme === "light" ? "dark" : "light";
    const apply = () => {
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {}
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof document.startViewTransition !== "function" || reduce) {
      apply();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => flushSync(apply));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1200,
          easing: "cubic-bezier(0.22, 0.7, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label="Toggle color theme"
    >
      <Icon name={theme === "light" ? "moon" : "sun"} size={16} />
    </button>
  );
}
