import React from "react";
import Icon from "./Icon";
import styles from "./GithubStats.module.css";

const USER = "Yiranubari";
const EXCLUDE = ["bitcoin", "OpenJarvis", "Forkify"].join(",");
const MUTED = "808890";

const CARDS = [
  {
    key: "stats",
    alt: "GitHub stats",
    url: `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=${MUTED}&text_color=${MUTED}&icon_color=${MUTED}`,
  },
  {
    key: "langs",
    alt: "Most used languages",
    url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&langs_count=8&hide_border=true&bg_color=00000000&title_color=${MUTED}&text_color=${MUTED}&exclude_repo=${EXCLUDE}`,
  },
  {
    key: "streak",
    alt: "GitHub contribution streak",
    url: `https://streak-stats.demolab.com?user=${USER}&hide_border=true&background=00000000&stroke=${MUTED}&ring=${MUTED}&fire=${MUTED}&currStreakNum=${MUTED}&sideNums=${MUTED}&currStreakLabel=${MUTED}&sideLabels=${MUTED}&dates=${MUTED}`,
  },
  {
    key: "graph",
    alt: "GitHub contribution graph",
    url: `https://ghchart.rshah.org/39d353/${USER}`,
  },
];

async function getSvg(url) {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) return null;
    const text = await res.text();
    return text.includes("<svg") ? text : null;
  } catch (e) {
    return null;
  }
}

export default async function GithubStats() {
  const svgs = await Promise.all(CARDS.map((c) => getSvg(c.url)));
  const byKey = {};
  CARDS.forEach((c, i) => {
    byKey[c.key] = svgs[i];
  });

  const renderCard = (key, extraClass) => {
    const card = CARDS.find((c) => c.key === key);
    const svg = byKey[key];
    const cls = `${styles.card} ${extraClass || ""}`.trim();
    if (svg) {
      return <div className={cls} dangerouslySetInnerHTML={{ __html: svg }} />;
    }
    return <img className={cls} src={card.url} alt={card.alt} loading="lazy" />;
  };

  return (
    <div className={styles.github}>
      <div className={styles.inner}>
        <h3 className={styles.label}>GitHub Activity</h3>
        <div className={styles.cards}>
          {renderCard("stats")}
          {renderCard("langs")}
          {renderCard("streak", styles.streak)}
        </div>
        {renderCard("graph", styles.graph)}
        <a
          className={styles.link}
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub profile
          <Icon name="arrow-up-right" size={14} />
        </a>
      </div>
    </div>
  );
}
