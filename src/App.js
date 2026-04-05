import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const PAGES = { Home, Works, Resume, Skills, Contact };

export default function App() {
  const [active, setActive] = useState("Home");
  const Page = PAGES[active];

  return (
    <div className="page">
      <Nav active={active} setActive={setActive} />
      <main>
        <Page setActive={setActive} />
      </main>
      <footer className="footer">
        © 2025 Yiranubari Promise · Full-Stack Developer
      </footer>
    </div>
  );
}
