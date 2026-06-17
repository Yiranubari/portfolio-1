"use client";

import React, { useEffect, useState } from "react";
import styles from "./NowPlaying.module.css";
import Icon from "./Icon";

// Endpoint served by the Netlify Function (netlify/functions/now-playing.js).
const ENDPOINT = "/.netlify/functions/now-playing";

export default function NowPlaying() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error("bad status");
        const json = await res.json();
        if (alive) setData(json);
      } catch {
        // Function unavailable (e.g. plain `next dev`) or network error:
        // stay hidden rather than showing a broken widget.
        if (alive) setData(null);
      }
    };

    load();
    // Refresh while the page is open so the track stays current.
    const id = setInterval(load, 30000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  if (!data) return null;

  if (!data.isPlaying) {
    return (
      <div className={`${styles.np} ${styles.idle} reveal d5`}>
        <Icon name="volume-2" size={15} />
        <span className={styles.label}>Not playing right now</span>
      </div>
    );
  }

  return (
    <a
      className={`${styles.np} reveal d5`}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${data.title} — ${data.artist}`}
    >
      {data.albumArt ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.art} src={data.albumArt} alt="" />
      ) : (
        <span className={styles.artFallback}>
          <Icon name="volume-2" size={16} />
        </span>
      )}
      <span className={styles.bars} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className={styles.meta}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.artist}>{data.artist}</span>
      </span>
      <span className={styles.tag}>Now playing</span>
    </a>
  );
}
