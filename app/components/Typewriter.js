"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Typewriter({
  lines,
  speed = 65,
  startDelay = 350,
  caretClassName = "",
  caretSolidClassName = "",
  onDone,
}) {
  const full = lines.join("\n");
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const finish = () => {
      setDone(true);
      if (onDoneRef.current) onDoneRef.current();
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setCount(full.length);
      finish();
      return;
    }

    let i = 0;
    let timer;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i >= full.length) {
        finish();
        return;
      }
      const ch = full[i - 1];
      let delay = speed;
      if (ch === "\n") delay = speed * 4;
      else if (ch === ",") delay = speed * 3;
      timer = setTimeout(tick, delay);
    };

    const startId = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(startId);
      clearTimeout(timer);
    };
  }, [full, speed, startDelay]);

  return (
    <span aria-hidden="true" style={{ whiteSpace: "pre-wrap" }}>
      {full.slice(0, count)}
      <span className={`${caretClassName} ${done ? "" : caretSolidClassName}`} />
    </span>
  );
}
