# Devanshu Saini — Portfolio 2.0

> Premium, minimal, and engineering-focused personal developer portfolio for **Devanshu Saini**. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🌐 Live Deployments & Profiles

- **Production Portfolio:** [devanshu-dev-portfolio.vercel.app](https://devanshu-dev-portfolio.vercel.app)
- **GitHub Profile:** [github.com/Devanshu-Saini-07](https://github.com/Devanshu-Saini-07)
- **LinkedIn Profile:** [linkedin.com/in/devanshu-saini-193308381](https://www.linkedin.com/in/devanshu-saini-193308381/)
- **LeetCode Profile:** [leetcode.com/u/devanshusaini_](https://leetcode.com/u/devanshusaini_/)

---

## 🏛️ Design Identity & Philosophy

Portfolio 2.0 is designed as a thoughtfully crafted engineer's personal platform:
- **Design Direction:** Minimal, editorial, modern, confident, technical, and professional.
- **Dual Themes:** Both Light and Dark modes with zero theme-flashing on load, persistent `localStorage` synchronization, and system preference detection.
- **Typography:**
  - **Display Headings:** *Space Grotesk* for clean geometric character.
  - **Body Copy:** *Inter* for maximum legibility and rhythm.
  - **Code & Metadata:** *JetBrains Mono* for technical specifications and badges.
- **Color System:**
  - **Dark Mode:** Deep slate-charcoal `#101114`, surface `#181A1F`, crisp text `#F5F5F0`, and electric lime accent `#B8F36B`.
  - **Light Mode:** Warm paper `#F6F5F1`, card surface `#FFFFFF`, deep ink `#171816`, and forest olive accent `#557C2B`.
- **Authenticity First:** Only genuine projects from verified public GitHub repositories. No fabricated statistics, testimonials, or artificial proficiency bars.

---

## 🚀 Verified Featured Projects

1. **[Anime Recommendations & Tracker](https://github.com/Devanshu-Saini-07/Anime-Recommendations)**
   - *Stack:* Python, Flask, MySQL, REST API, Jinja2, Gemini AI
   - *Live Demo:* [anime-recommendations-r9zx.onrender.com](https://anime-recommendations-r9zx.onrender.com/)
   - Full CRUD media tracking with watchlist statuses and AI recommendation engine.

2. **[SocialMedia Platform](https://github.com/Devanshu-Saini-07/SocialMedia-app)**
   - *Stack:* Django, Django REST Framework, PostgreSQL, SQLite, WebSockets
   - *Live Demo:* [socialmedia-app-ebon.vercel.app](https://socialmedia-app-ebon.vercel.app/)
   - Full-stack social platform featuring authentication, posts, follow graph, comments, and direct messaging.

3. **[Campus Navigation GUI](https://github.com/Devanshu-Saini-07/Java-Project-Campus-Navigation-GUI)**
   - *Stack:* Pure Java AWT, Dijkstra & A* Graph Algorithms, OOP, JUnit
   - Zero-dependency desktop map and routing application with canvas rendering and turn-by-turn pathfinding.

4. **[Azadi — The Journey of India](https://github.com/Devanshu-Saini-07/Azadi-The-Journey-of-India)**
   - *Stack:* HTML5, CSS3, JavaScript, Web Audio API
   - *Live Demo:* [azadi-the-journey-of-india.vercel.app](https://azadi-the-journey-of-india.vercel.app)
   - Interactive historical tribute web experience with cinematic timelines and audio synchronization.

5. **[Student Portal UI](https://github.com/Devanshu-Saini-07/Student-Portal-figma-to-html-css)**
   - *Stack:* Figma, Semantic HTML5, CSS3, Responsive Design
   - High-fidelity conversion from Figma specifications into a multi-screen student management portal.

6. **[Car Selection & Comparison Tool](https://github.com/Devanshu-Saini-07/CAR-SELECTION-TOOL)**
   - *Stack:* Python, Matplotlib, CSV Processing, CLI
   - Vehicle specification evaluation tool with multi-criteria filtering and scatter plot visualization.

7. **[Hospital Management System](https://github.com/Devanshu-Saini-07/Hospital-Management-using-python)**
   - *Stack:* Core Python, MySQL Relational Database, CSV I/O
   - Healthcare administration tool managing doctor and patient workflows with relational persistence.

---

## 📁 Project Architecture

```
dev-portfolio/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── devanshu.png          # Authentic profile portrait
│   │   └── weblogo.jpg           # Monogram & favicon asset
│   └── projects/
│       ├── anime-bg.png          # Anime Tracker asset
│       └── student-portal/       # Verified Student Portal screenshots
├── src/
│   ├── app/
│   │   ├── globals.css           # CSS variables, typography, scrollbar
│   │   ├── layout.tsx            # Next.js RootLayout with fonts & metadata
│   │   └── page.tsx              # Single-page assembled portfolio
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx        # Sticky responsive navigation & mobile drawer
│   │   │   └── footer.tsx        # Minimal Swiss-inspired footer
│   │   ├── sections/
│   │   │   ├── hero.tsx          # Editorial hero section
│   │   │   ├── about.tsx         # Genuine engineering background
│   │   │   ├── projects.tsx      # Filterable project showcase & cards
│   │   │   ├── skills.tsx        # Categorized technical competencies
│   │   │   ├── github.tsx        # Verified GitHub statistics & repo grid
│   │   │   └── contact.tsx       # Validated form + mailto fallback
│   │   └── ui/
│   │       ├── badge.tsx         # Technology and category pill badges
│   │       ├── button.tsx        # Reusable button variants
│   │       ├── motion-wrapper.tsx# Accessible subtle Framer Motion wrappers
│   │       ├── section-heading.tsx# Editorial section titles
│   │       ├── theme-provider.tsx# Theme context (Light/Dark/System)
│   │       └── theme-toggle.tsx  # Interactive Sun/Moon toggle button
│   ├── data/
│   │   ├── projects.ts           # Verified project records & links
│   │   ├── skills.ts             # Verified skill categories
│   │   └── social-links.ts       # Social & contact links
│   ├── lib/
│   │   └── utils.ts              # cn() Tailwind class utility
│   └── types/
│       └── index.ts              # Core TypeScript interfaces
├── next.config.mjs               # Next.js configuration & image domains
├── package.json
├── postcss.config.js
├── tailwind.config.js            # Design tokens & color system
├── tsconfig.json
└── README.md
```

---

## 🛠️ Local Development

### Prerequisites

- Node.js `18.18+` or `20+` (tested on Node.js `24.x`)
- npm `9+` (or yarn / pnpm)

### Setup Instructions

1. **Clone the repository and checkout the `portfolio-2.0` branch:**
   ```bash
   git clone https://github.com/Devanshu-Saini-07/dev-portfolio.git
   cd dev-portfolio
   git checkout portfolio-2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Run production preview:**
   ```bash
   npm run start
   ```

---

## 🚢 Deployment to Vercel

1. Push the `portfolio-2.0` branch to GitHub:
   ```bash
   git push origin portfolio-2.0
   ```
2. Connect your GitHub repository to [Vercel](https://vercel.com).
3. Set the Framework Preset to **Next.js**.
4. The build command will automatically be `next build` with output directory `.next`.
5. Deploy!

---

## 📄 License

Created by **Devanshu Saini**. Released under the [MIT License](LICENSE).
