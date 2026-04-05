import React from "react";
import "./Home.css";

export default function Home({ setActive }) {
  return (
    <div className="home-section">
      <div className="avatar-wrap" aria-hidden="true">
        👨🏾‍💻
      </div>
      <p className="greeting">Hi, I'm Yiranubari 🤘</p>
      <h1 className="hero-heading">
        Building backends,
        <br />
        frontends, and
        <br />
        things that ship.
      </h1>
      <p className="hero-sub">
        a <strong>Full-Stack Developer</strong> and{" "}
        <strong>Software Engineer</strong>
        <br />
        I specialize in Node.js, TypeScript, React, PHP
        <br />
        and production-grade backend systems.
      </p>
      <button className="cta-btn" onClick={() => setActive("Contact")}>
        Connect With Me
      </button>
    </div>
  );
}
