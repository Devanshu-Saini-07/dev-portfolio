import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'anime-recommendations',
    title: 'Anime Recommendations & Tracker',
    eyebrow: 'Full-Stack Web Application • Python & MySQL',
    description:
      'A full-featured Flask and MySQL web application for tracking anime watchlists with full CRUD functionality, custom status filtering, and an AI-powered recommendation engine.',
    longDescription:
      'Engineered a complete media tracking platform featuring relational MySQL persistence, structured database schemas, REST endpoints, and an integrated Gemini recommendation pipeline. Built with defensive SQL querying, parameterized statements, and automated test suites for route resilience.',
    category: 'Full-Stack',
    technologies: ['Python', 'Flask', 'MySQL', 'REST API', 'Jinja2', 'Gemini AI', 'Render'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Anime-Recommendations',
    liveUrl: 'https://anime-recommendations-r9zx.onrender.com/',
    featured: true,
    stars: 48,
    image: '/projects/anime-bg.png',
    highlights: [
      'Comprehensive CRUD: add, edit, delete, status toggle (Completed, Watching, Plan to Watch)',
      'Relational schema design with normalized tables and user preference migrations',
      'Integration with Gemini API for dynamic, context-aware anime recommendations',
      'Deployed on Render with cloud database provisioning',
    ],
    architectureNotes: 'Flask backend • MySQL DB • Jinja template engine • REST endpoints • Automated API tests',
  },
  {
    id: 'socialmedia-app',
    title: 'SocialMedia Web Platform',
    eyebrow: 'Django Full-Stack Application • Django & PostgreSQL',
    description:
      'A full-featured social platform built with Django, featuring user authentication, post feeds with multimedia uploads, follower mechanics, interactive likes & comments, and real-time private messaging.',
    longDescription:
      'Architected an end-to-end social media ecosystem implementing Django ORM with relational integrity. Features fine-grained permission models, profile management, thread-based direct messaging, and robust security controls against CSRF and injection attacks.',
    category: 'Full-Stack',
    technologies: ['Django', 'Python', 'Django REST Framework', 'PostgreSQL', 'SQLite', 'WebSockets', 'HTML/CSS'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/SocialMedia-app',
    liveUrl: 'https://socialmedia-app-ebon.vercel.app/',
    featured: true,
    stars: 3,
    highlights: [
      'Secure authentication flow with user registration, session management, and password hashing',
      'Social graph features: bidirectional follow systems, user activity feeds, and follower metrics',
      'Interactive post interactions with media attachment storage and threaded comment trees',
      'Direct messaging system designed for real-time peer communications',
    ],
    architectureNotes: 'Django MVC • Relational schema • Class-based views • Media management • Session auth',
  },
  {
    id: 'campus-navigation-gui',
    title: 'Campus Navigation GUI',
    eyebrow: 'Desktop Engineering • Pure Java AWT & Graph Algorithms',
    description:
      'A comprehensive campus navigation desktop application built in pure Java AWT without external UI frameworks, implementing Dijkstra and A* pathfinding graph algorithms for turn-by-turn routing.',
    longDescription:
      'Constructed a zero-dependency Java desktop system from scratch. Implements graph theory algorithms (A* and Dijkstra) on custom spatial graphs, interactive canvas-based coordinate mapping, atomic file persistence for user history, and automated unit testing for pathfinding correctness.',
    category: 'Systems & Core',
    technologies: ['Java', 'Java AWT', 'Graph Algorithms', 'Dijkstra', 'A* Search', 'OOP', 'JUnit'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Java-Project-Campus-Navigation-GUI',
    featured: true,
    stars: 3,
    highlights: [
      'Pure Java AWT implementation with zero external UI dependencies for high portability',
      'Graph algorithms: Dijkstra and A* heuristics for shortest-path route computation',
      'Interactive Canvas map with zoom, panning, waypoint visualization, and route highlighting',
      'Multi-role authentication system with atomic file persistence for navigation history',
    ],
    architectureNotes: 'Pure Java AWT • Object-Oriented architecture • Custom Graph & Adjacency structures • Zero-dep desktop runtime',
  },
  {
    id: 'azadi-journey-of-india',
    title: 'Azadi — The Journey of India',
    eyebrow: 'Interactive Web Experience • Audio-Visual Storytelling',
    description:
      'An interactive, cinematic tribute web experience celebrating India\'s historical journey from independence to modern achievements, featuring rich animations, sound design, and responsive typography.',
    longDescription:
      'Designed and built a storytelling web application combining timeline interactions, cinematic transitions, dynamic audio synchronization, and responsive layouts. Built with pure semantic web standards to ensure high performance and accessibility.',
    category: 'Frontend & UI',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'Responsive Design', 'Vercel'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Azadi-The-Journey-of-India',
    liveUrl: 'https://azadi-the-journey-of-india.vercel.app',
    featured: true,
    stars: 9,
    highlights: [
      'Cinematic chronological timeline with smooth step-by-step interactive milestones',
      'Synchronized web audio integration with user controls and graceful fallback',
      'Polished CSS transitions and keyframe animations tuned for high FPS performance',
      'Production deployment on Vercel with responsive mobile and desktop adaptations',
    ],
    architectureNotes: 'Vanilla JS architecture • Web Audio API • Modern CSS Keyframes • Vercel Edge Hosting',
  },
  {
    id: 'student-portal-ui',
    title: 'Student Portal UI',
    eyebrow: 'Design to Implementation • Figma to Responsive HTML/CSS',
    description:
      'A multi-screen student management portal translated from detailed Figma design specifications into accessible, semantic, and pixel-precise responsive HTML & CSS.',
    longDescription:
      'Converted comprehensive Figma UI designs into clean production-ready web interfaces. Covers student workflows including attendance tracking, examination timetables, complaint registration, and institutional notices across desktop and mobile form factors.',
    category: 'Frontend & UI',
    technologies: ['Figma', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Student-Portal-figma-to-html-css',
    featured: false,
    stars: 12,
    image: '/projects/student-portal/screen-1.png',
    highlights: [
      'High-fidelity Figma translation preserving grid alignment, typography scales, and color schemes',
      'Modular screens: Dashboard, Attendance, Calendar, Events, Complaints, and Profile',
      'Pure CSS layout strategies with custom variables and responsive media queries',
    ],
    architectureNotes: 'Figma component conversion • Semantic HTML5 • CSS Flex/Grid architecture',
  },
  {
    id: 'car-selection-tool',
    title: 'Car Selection & Comparison Tool',
    eyebrow: 'Data Analysis & Filtering • Python & Matplotlib',
    description:
      'A preference-driven automotive decision tool that processes vehicle datasets based on budget, segment, and fuel economy, providing CLI filtering and scatter-plot data visualization.',
    longDescription:
      'Created a data-driven CLI utility that ingests CSV automobile datasets, applies multi-criteria filtering based on user constraints, and generates interactive scatter plots using Matplotlib to visualize price versus performance trade-offs.',
    category: 'Data & CLI',
    technologies: ['Python', 'Matplotlib', 'CSV Processing', 'CLI', 'Data Analysis'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/CAR-SELECTION-TOOL',
    featured: false,
    stars: 13,
    highlights: [
      'Multi-parameter filtering engine: price ranges, vehicle body segment, and fuel types',
      'Visual analytics: scatter-plot generation mapping vehicle specs against budget boundaries',
      'Structured terminal UI with tabular data presentation and error handling',
    ],
    architectureNotes: 'Python data processing • Matplotlib charting • CSV dataset parser',
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    eyebrow: 'Database Administration • Core Python & MySQL',
    description:
      'A menu-driven healthcare administration system managing patient records, doctor allocations, appointments, and billing with relational MySQL storage and CSV backup/restore.',
    longDescription:
      'Engineered an administrative management system with relational database schemas in MySQL. Supports complete lifecycle management for healthcare facilities: patient onboarding, doctor schedules, treatment logging, and automated CSV import/export data migration.',
    category: 'Systems & Core',
    technologies: ['Python', 'MySQL', 'Relational Schema', 'CSV I/O', 'Database Management'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Hospital-Management-using-python',
    featured: false,
    stars: 13,
    highlights: [
      'Complete relational database schema handling patients, doctors, appointments, and billing',
      'CSV backup and restore engine for data export, archiving, and migration',
      'Interactive console interface with menu routing and input validation',
    ],
    architectureNotes: 'Python runner • MySQL relational backend • CSV export/import modules',
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    eyebrow: 'Database Management • Python & MySQL Integration',
    description:
      'A lightweight inventory tracking system managing stock levels, item modifications, and inventory audits backed by a persistent MySQL relational database.',
    longDescription:
      'Developed a reliable stock and inventory tracking tool utilizing Python and MySQL. Features real-time stock balance updates, transactional integrity for additions and removals, and clean modular code organization.',
    category: 'Systems & Core',
    technologies: ['Python', 'MySQL', 'Database Design', 'Inventory Logic'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Inventory-Management-using-python',
    featured: false,
    stars: 9,
    highlights: [
      'Relational inventory schema with stock quantity constraints and item metadata',
      'CRUD operations for stock balance, item additions, updates, and removals',
      'Structured modular Python code with clean database connection handling',
    ],
    architectureNotes: 'Python SQL integration • Parameterized queries • CLI management',
  },
  {
    id: 'bank-application',
    title: 'CLI Banking Application',
    eyebrow: 'Financial Core Logic • Python Systems',
    description:
      'A command-line banking application implementing core financial transactions: account creation, deposits, withdrawals, and balance inquiries with data validation.',
    longDescription:
      'Built a clean simulation of core banking operations enforcing transactional validation rules (sufficient balance checks, input verification) and modular account state management.',
    category: 'Systems & Core',
    technologies: ['Python', 'OOP', 'CLI', 'State Management'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/Bank-Application',
    featured: false,
    stars: 13,
    highlights: [
      'Transactional safety checking for withdrawal limits and positive balances',
      'Account lifecycle: creation, unique identifier mapping, transaction logs',
      'Modular object-oriented architecture in Python',
    ],
    architectureNotes: 'Python OOP • Command-line interface • In-memory validation logic',
  },
  {
    id: 'leetcode-solutions',
    title: 'LeetCode Problem Solving Repository',
    eyebrow: 'Data Structures & Algorithms • C++ & Problem Solving',
    description:
      'A structured collection of LeetCode algorithmic solutions categorized by data structure, difficulty level, and time/space complexity analysis.',
    longDescription:
      'Documented problem-solving journey covering fundamental algorithms: binary search, two pointers, sliding window, tree traversals, dynamic programming, and graph theory in C++.',
    category: 'Systems & Core',
    technologies: ['C++', 'Data Structures', 'Algorithms', 'LeetCode', 'Competitive Programming'],
    githubUrl: 'https://github.com/Devanshu-Saini-07/leetcode',
    featured: false,
    stars: 11,
    highlights: [
      'Curated solutions with optimized time and space complexity annotations',
      'Coverage across arrays, hash maps, linked lists, binary trees, and graphs',
      'Reinforces solid foundations in computer science theory and coding efficiency',
    ],
    architectureNotes: 'C++17 • Algorithmic patterns • Systematic difficulty categorization',
  },
];
