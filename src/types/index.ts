export type ProjectCategory = 'Full-Stack' | 'Systems & Core' | 'Frontend & UI' | 'Data & CLI';

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  stars?: number;
  image?: string;
  highlights?: string[];
  architectureNotes?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: string;
  isExternal: boolean;
}
