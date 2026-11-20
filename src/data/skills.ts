import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages used for algorithms, web backends, and systems programming',
    skills: [
      { name: 'Python', description: 'Web backends, automation scripts, algorithms' },
      { name: 'Java', description: 'Object-oriented systems, desktop GUI, data structures' },
      { name: 'C', description: 'Systems fundamentals, memory management' },
      { name: 'C++', description: 'Competitive programming, LeetCode problem solving' },
      { name: 'JavaScript', description: 'Modern ES6+, DOM manipulation, web interactivity' },
      { name: 'TypeScript', description: 'Type-safe scalable application development' },
      { name: 'SQL', description: 'Relational querying, schema design, joins, normalization' },
    ],
  },
  {
    category: 'Backend & Frameworks',
    description: 'Server-side engineering, RESTful APIs, and application frameworks',
    skills: [
      { name: 'Django', description: 'MVC architecture, ORM, authentication, admin portal' },
      { name: 'Django REST Framework', description: 'API serialization, viewsets, authentication' },
      { name: 'Flask', description: 'Lightweight microservices, route handling, Jinja templates' },
      { name: 'Node.js', description: 'Runtime server environments and tooling' },
      { name: 'RESTful API Design', description: 'Resource modeling, status codes, query endpoints' },
    ],
  },
  {
    category: 'Frontend & UI Engineering',
    description: 'Component architecture, semantic interfaces, and modern styling',
    skills: [
      { name: 'React', description: 'State management, hooks, component reusability' },
      { name: 'Next.js', description: 'App Router, SSR, static generation, metadata' },
      { name: 'Tailwind CSS', description: 'Design systems, responsive utilities, dark mode' },
      { name: 'HTML5 & Semantic Web', description: 'Accessible markup and document hierarchy' },
      { name: 'CSS3 / Modern Layouts', description: 'Flexbox, CSS Grid, custom properties, animations' },
      { name: 'Figma', description: 'UI mockups, design tokens, component spec conversion' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Persistent storage, relational models, and query optimization',
    skills: [
      { name: 'MySQL', description: 'Relational tables, foreign keys, stored queries' },
      { name: 'PostgreSQL', description: 'Structured enterprise relational database' },
      { name: 'SQLite', description: 'Embedded file databases for testing and lightweight apps' },
      { name: 'Database Schema Design', description: 'Entity relationships, 3NF normalization' },
    ],
  },
  {
    category: 'Tools & Development Ecosystem',
    description: 'Version control, developer environments, and deployment platforms',
    skills: [
      { name: 'Git & GitHub', description: 'Branch management, pull requests, semantic commits' },
      { name: 'Linux / Bash', description: 'Command line operations, script execution, permissions' },
      { name: 'VS Code', description: 'Primary IDE, debugging, workspace configurations' },
      { name: 'Postman', description: 'API endpoint inspection and contract verification' },
      { name: 'Vercel & Render', description: 'Continuous deployment pipelines for web services' },
    ],
  },
];
