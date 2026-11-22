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

## 🏛️ Design Identity & Architecture

Portfolio 2.0 is designed as a thoughtfully crafted engineer's personal platform:
- **Design Direction:** Editorial, modern, technical, and confident.
- **Dynamic Multicolor Ambient Background:** GPU-accelerated floating mesh gradients (Warm Champagne Gold, Electric Violet, Radiant Cyan, Sunset Rose, and Deep Sapphire) with fine dot matrix and blueprint grid overlays.
- **Dual Themes & Circular Transition:** Native View Transition API circular reveal centered on the toggle button with persistent `localStorage` synchronization and zero theme flash on load.
- **Typography:**
  - **Headlines & Display:** *Bebas Neue* & *Space Grotesk* for clean geometric character.
  - **Body Copy:** *Manrope* for maximum legibility and rhythm.
  - **Technical Labels & Badges:** *IBM Plex Mono* for engineering specifications and metadata.
- **Color System:**
  - **Dark Mode:** Deep canvas `#0A0A0C`, surface `#111217`, elevated `#181920`, text `#F0EFF5`, and champagne gold accent `#DFC17B`.
  - **Light Mode:** Warm ivory `#F7F5F2`, card surface `#FFFFFF`, elevated `#EFEDE8`, charcoal text `#12131A`, and refined gold accent `#C29A38`.
- **Authenticity First:** Only genuine projects from verified public GitHub repositories. No fabricated statistics, testimonials, or artificial proficiency bars.

---

## 🚀 Verified Featured Projects

1. **[Anime Recommendations & Tracker](https://github.com/Devanshu-Saini-07/Anime-Recommendations)**
   - *Stack:* Python, Flask, MySQL, REST API, Jinja2, Gemini AI
   - *Live Demo:* [anime-recommendations-r9zx.onrender.com](https://anime-recommendations-r9zx.onrender.com/)
   - Full CRUD media tracking with watchlist statuses and context-aware AI recommendation pipeline.

2. **[SocialMedia Platform](https://github.com/Devanshu-Saini-07/SocialMedia-app)**
   - *Stack:* Django, Python, Django REST Framework, PostgreSQL, SQLite, WebSockets
   - *Live Demo:* [socialmedia-app-ebon.vercel.app](https://socialmedia-app-ebon.vercel.app/)
   - Full-stack social platform featuring authentication, posts, follow graph, comments, and direct messaging.

3. **[Campus Navigation GUI](https://github.com/Devanshu-Saini-07/Java-Project-Campus-Navigation-GUI)**
   - *Stack:* Pure Java AWT, Dijkstra & A* Graph Algorithms, OOP, JUnit
   - Zero-dependency desktop map and routing application with canvas rendering and turn-by-turn pathfinding.

4. **[Azadi — The Journey of India](https://github.com/Devanshu-Saini-07/Azadi-The-Journey-of-India)**
   - *Stack:* HTML5, CSS3, JavaScript, Web Audio API, Responsive Design
   - *Live Demo:* [azadi-the-journey-of-india.vercel.app](https://azadi-the-journey-of-india.vercel.app)
   - Interactive historical tribute web experience with cinematic timelines and audio synchronization.

5. **[Hospital Management System](https://github.com/Devanshu-Saini-07/Hospital-Management-using-python)**
   - *Stack:* Core Python, MySQL Relational Database, CSV I/O
   - Healthcare administration tool managing doctor and patient workflows with relational persistence.

6. **[Inventory Management System](https://github.com/Devanshu-Saini-07/Inventory-Management-using-python)**
   - *Stack:* Core Python, MySQL Database, Parameterized Queries
   - Relational stock balance management and inventory tracking tool.

---

## 📁 Clean Repository Structure

```
dev-portfolio/
├── public/
│   ├── favicon.ico               # Root favicon asset
│   ├── images/
│   │   ├── devanshu-hero.png     # Tailored hero portrait
│   │   ├── devanshu.png          # High-res OpenGraph metadata image
│   │   └── weblogo.jpg           # Monogram & brand mark
│   └── projects/
│       └── anime-bg.png          # Anime Recommendations preview asset
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, keyframe animations & utilities
│   │   ├── layout.tsx            # Root layout with fonts, metadata & theme init script
│   │   └── page.tsx              # Single-page assembled portfolio
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx        # Responsive header with mobile drawer & brand mark
│   │   │   └── footer.tsx        # Glassmorphic footer with verified handles
│   │   ├── sections/
│   │   │   ├── hero.tsx          # Split-screen editorial hero section
│   │   │   ├── about.tsx         # Academic background & foundational engineering pillars
│   │   │   ├── github.tsx        # Verified public codebase & repository cards
│   │   │   ├── projects.tsx      # Curated projects with live filter pills & demo links
│   │   │   ├── skills.tsx        # Technical toolkit categorized with verified badges
│   │   │   ├── learning-journey.tsx # Chronological evolution with gradient timeline
│   │   │   └── contact.tsx       # 1-click email copy & direct message dispatch
│   │   └── ui/
│   │       ├── ambient-background.tsx # Dynamic multicolor floating mesh gradient
│   │       ├── badge.tsx         # Pill badge variants
│   │       ├── button.tsx        # Accessible button component
│   │       ├── custom-cursor.tsx # Fluid spring cursor follower
│   │       ├── marquee-ticker.tsx # Seamless tech stack ticker
│   │       ├── scroll-progress.tsx# Viewport scroll progress bar
│   │       ├── section-heading.tsx# Condensed Bebas Neue section headers
│   │       ├── theme-provider.tsx# View Transition API circular reveal provider
│   │       └── theme-toggle.tsx  # Interactive Sun/Moon toggle button
│   ├── data/
│   │   ├── projects.ts           # Verified project records & links
│   │   ├── skills.ts             # Verified skill categories & competencies
│   │   └── social-links.ts       # Social & contact links
│   ├── lib/
│   │   └── utils.ts              # cn() Tailwind class utility
│   └── types/
│       └── index.ts              # Core TypeScript interfaces
├── next.config.mjs               # Next.js image optimization configuration
├── package.json
├── postcss.config.js
├── tailwind.config.js            # Tailwind theme tokens & font variables
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

## 📄 License

Created by **Devanshu Saini**. Released under the [MIT License](LICENSE).
