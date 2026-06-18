"use client";

import React, { useState } from "react";
import styles from "./Skills.module.css";
import Icon from "./Icon";

const STACKS = [
  {
    icon: "code",
    title: "Languages",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "PHP", slug: "php" },
      { name: "Python", slug: "python" },
      { name: "HTML", slug: "html5" },
      {
        name: "CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    icon: "activity",
    title: "Runtimes & Build Tools",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Vite", slug: "vite" },
    ],
  },
  {
    icon: "package",
    title: "Frameworks & Libraries",
    items: [
      { name: "Express", slug: "express", mono: true },
      { name: "FastAPI", slug: "fastapi" },
      { name: "React", slug: "react" },
      { name: "Pydantic", slug: "pydantic" },
      { name: "Zod", slug: "zod" },
    ],
  },
  {
    icon: "database",
    title: "Databases & ORMs",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      {
        name: "MySQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      { name: "SQLite", slug: "sqlite" },
      { name: "Redis", slug: "redis" },
      { name: "Prisma", slug: "prisma", mono: true },
      { name: "SQLAlchemy", slug: "sqlalchemy" },
      { name: "Alembic", slug: null },
    ],
  },
  {
    icon: "terminal",
    title: "Tools",
    items: [
      {
        name: "VS Code",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      { name: "Remix IDE", slug: null },
      { name: "Postman", slug: "postman" },
      { name: "Bruno", slug: "bruno" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", mono: true },
      { name: "npm", slug: "npm" },
      { name: "Figma", slug: "figma" },
    ],
  },
  {
    icon: "server",
    title: "Platforms & DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Linux", slug: "linux" },
      { name: "Nginx", slug: "nginx" },
      { name: "PM2", slug: "pm2", mono: true },
      { name: "AWS EC2", slug: "amazonec2" },
      { name: "Vercel", slug: "vercel", mono: true },
    ],
  },
];

export default function Skills() {
  const [failed, setFailed] = useState({});

  return (
    <div className="section">
      <p className="sec-label reveal">Capabilities</p>
      <h2 className="sec-title reveal d1">Skills</h2>
      <p className="sec-sub reveal d2">The stack I build with</p>
      <ul className={styles.stack}>
        {STACKS.map((s, i) => (
          <li
            className={`${styles["stack-row"]} reveal`}
            key={s.title}
            style={{ animationDelay: `${0.16 + i * 0.08}s` }}
          >
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles["stack-head"]}>
              <span className={styles["stack-icon"]}>
                <Icon name={s.icon} size={18} />
              </span>
              <h3>{s.title}</h3>
            </div>
            <ul className={styles["stack-items"]}>
              {s.items.map((it) => {
                const hasLogo = (it.slug || it.url) && !failed[it.name];
                return (
                  <li
                    key={it.name}
                    className={hasLogo ? styles["with-logo"] : undefined}
                  >
                    {hasLogo && (
                      <span
                        className={`${styles["logo-wrap"]} ${it.wide ? styles["logo-wrap-wide"] : ""}`}
                      >
                        <img
                          src={it.url || `https://cdn.simpleicons.org/${it.slug}`}
                          alt=""
                          className={`${styles.logo} ${it.mono ? styles.mono : ""} ${it.wide ? styles["logo-wide"] : ""}`}
                          loading="lazy"
                          onError={() =>
                            setFailed((f) => ({ ...f, [it.name]: true }))
                          }
                        />
                      </span>
                    )}
                    <span>{it.name}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
