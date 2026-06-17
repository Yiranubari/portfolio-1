# Yiranubari Maamaa, Portfolio

Personal portfolio site for Yiranubari Maamaa, Full-Stack Developer.

Built with Next.js 14 (App Router), React 18, and CSS Modules. Plain JavaScript, no TypeScript. Dark glassmorphism theme.

## Getting Started

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

`next build` produces an optimized production build; `npm start` serves it.

## Deploy

Easiest path is Vercel (first-party Next.js host):

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel detects Next.js and deploys on every push.

Any Node host that runs `next build` then `next start` works too.

## Project Structure

```
app/
  layout.js              Root layout: nav, footer, fonts, metadata
  global.css             Design tokens, glass surfaces, reveal animations
  App.module.css         Page shell
  page.js                Home route (/)
  works/page.js          /works
  resume/page.js         /resume
  skills/page.js         /skills
  contact/page.js        /contact
  components/
    Nav.js               Sticky glass nav with monogram + name
    Home.js              Hero with profile image and intro
    Works.js             Projects (Live / Code links)
    Resume.js            Experience, education, resume download
    Skills.js            Capabilities across the stack
    Contact.js           Contact links
    Icon.js              Single SVG icon set (Lucide family)
    *.module.css         Scoped styles per component
public/
  1.jpg                          Profile image
  Yiranubari-Promise-Resume.pdf  Downloadable resume
```

## Notes

- Icons are a single SVG set (`Icon.js`), 24px grid with a consistent 2px stroke. No emoji.
- Entrance animations respect `prefers-reduced-motion`.
- The resume PDF and profile image live in `public/` and are referenced by absolute path (`/Yiranubari-Promise-Resume.pdf`, `/1.jpg`).
