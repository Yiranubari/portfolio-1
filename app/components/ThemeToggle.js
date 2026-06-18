"use client";

import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
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
