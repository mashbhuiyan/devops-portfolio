export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  yearsExperience: number;
  linkedin: string;
  github: string;
  resumeUrl: string | null;
  avatarPath: string | null;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string[];
  outcomes: string[];
  metrics: { value: string; label: string }[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureDiagram?: string;
  category: "kubernetes" | "cicd" | "infrastructure" | "monitoring" | "portfolio";
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
