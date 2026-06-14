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

export type SkillLevel = "expert" | "advanced" | "intermediate" | "familiar";

export interface Skill {
  name: string;
  iconName: string;
  level: SkillLevel;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
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
