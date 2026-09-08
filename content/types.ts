export interface ImageRef {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
}

export type ProficiencyTier =
  | "Currently Learning"
  | "Hands-on Experience"
  | "Comfortable With"
  | "Exploring";

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  whyItMatters: string;
  technologies: string[];
  contribution: string;
  architecture?: string;
  keyFeatures: string[];
  images: ImageRef[];
  demoUrl?: string;
  githubUrl?: string;
  challenges?: string;
  outcome?: string;
  featured?: boolean; // true for Bastion
  isPlaceholder?: boolean;
}

export interface CybersecurityFocus {
  area: string;
  tier: ProficiencyTier;
  platform?: string;
  note?: string;
}

export interface SkillItem {
  name: string;
  description: string;
  tier: ProficiencyTier;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Course {
  name: string;
  provider: string;
  status: "Completed" | "Currently Pursuing";
  completionDate?: string;
  skillsLearned?: string[];
  description?: string;
  certificateImage?: ImageRef;
  verificationUrl?: string;
  relatedTechnologies?: string[];
  isPlaceholder?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  badge: string; // e.g. "Winner", "Finalist", "Vice Chair & Hackathon Organizer"
  category: "Achievements" | "Recognition";
  event?: string;
  date?: string;
  description?: string;
  recognition?: string;
  photo?: ImageRef;
  certificateUrl?: string;
  projectSlug?: string;
  isPlaceholder?: boolean;
}

export interface Hackathon {
  id: string;
  name: string;
  date: string;
  result: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  role: string;
  team: string;
  images?: ImageRef[];
  certificateUrl?: string;
  projectUrl?: string;
  isPlaceholder?: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  responsibilities: string[];
  whatWasLearned: string;
  impact: string;
  skillsUsed: string[];
  isPlaceholder?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  status: "In Progress" | "Completed";
  timeframe: string;
  focusAreas: string[];
  description?: string;
}

export interface Profile {
  name: string;
  title: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  aboutStory: string[];
  currentlyLearning: string[];
  facts: {
    currentlyStudying: string;
    college?: string;
    focusAreas: string;
    location: string;
    status: string;
  };
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  heroPortrait: ImageRef;
}
