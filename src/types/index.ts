export interface PersonalInfo {
  name: string;
  headline: string;
  roles: string[];
  currentRole: string;
  company: string;
  location: string;
  availability: {
    status: string;
    text: string;
    freelance: boolean;
  };
  emails: {
    primary: string;
    secondary?: string;
  };
  socials: {
    linkedin: string;
    github?: string;
    twitter?: string;
    email: string;
  };
  stats: {
    followers: string;
    connections: string;
    experience: string;
    certifications: string;
    projectsCompleted: string;
  };
  summary: {
    intro: string;
    narrative: string[];
    mission: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  iconName: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  period: string;
  location: string;
  locationType: 'On-site' | 'Hybrid' | 'Remote';
  description?: string;
  accomplishments: string[];
  skills: string[];
  current?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & LLMs' | 'Automation & MCP' | 'Full-Stack & Systems';
  description: string;
  highlights: string[];
  architecture?: string;
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    featured?: boolean;
    tag?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerIcon?: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  suffix?: string;
  sublabel: string;
  iconName: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}
