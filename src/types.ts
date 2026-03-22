// Project Types
export interface Projects {
  total_count: number;
  items: ProjectItem[];
}

export interface ProjectItem {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  image_url?: string;
  description: null | string;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
}

type Language = "C#" | "HTML" | "C++" | "TypeScript";

// CV Types
export interface Cv {
  picture: Picture;
  basics: Basics;
  summary: Summary;
  sections: Sections;
}

export interface Basics {
  name: string;
  headline: string;
  email: string;
}

export interface Picture {
  hidden: boolean;
  url: string;
  size: number;
  rotation: number;
  aspectRatio: number;
  borderRadius: number;
  borderColor: string;
  borderWidth: number;
  shadowColor: string;
  shadowWidth: number;
}

export interface Sections {
  profiles: Profiles;
  experience: Experience;
  education: Summary;
  projects: CvProjects;
  skills: Skills;
  languages: Languages;
  interests: Interests;
  references: References;
}

export interface Summary {
  title: string;
  columns: number;
  hidden: boolean;
  items?: SummaryItem[];
  content?: string;
}

export interface SummaryItem {
  id: string;
  hidden: boolean;
  school: string;
  degree: string;
  area: string;
  grade: string;
  location: string;
  period: string;
  website: Website;
  description: string;
}

export interface Website {
  url: string;
  label: string;
}

export interface Experience {
  title: string;
  columns: number;
  hidden: boolean;
  items: ExperienceItem[];
}

export interface ExperienceItem {
  id: string;
  hidden: boolean;
  company: string;
  position: string;
  location: string;
  period: string;
  website: Website;
  description: string;
}

export interface Interests {
  title: string;
  columns: number;
  hidden: boolean;
  items: InterestsItem[];
}

export interface InterestsItem {
  id: string;
  hidden: boolean;
  icon: string;
  name: string;
  keywords: string[];
}

export interface Languages {
  title: string;
  columns: number;
  hidden: boolean;
  items: LanguagesItem[];
}

export interface LanguagesItem {
  id: string;
  hidden: boolean;
  language: string;
  fluency: string;
  level: number;
}

export interface Profiles {
  title: string;
  columns: number;
  hidden: boolean;
  items: ProfilesItem[];
}

export interface ProfilesItem {
  id: string;
  hidden: boolean;
  icon: string;
  network: string;
  username: string;
  website: Website;
}

export interface CvProjects {
  title: string;
  columns: number;
  hidden: boolean;
  items: ProjectsItem[];
}

export interface ProjectsItem {
  id: string;
  hidden: boolean;
  name: string;
  period: string;
  website: Website;
  description: string;
}

export interface References {
  title: string;
  columns: number;
  hidden: boolean;
  items: ReferencesItem[];
}

export interface ReferencesItem {
  id: string;
  hidden: boolean;
  name: string;
  position: string;
  website: Website;
  phone: string;
  description: string;
}

export interface Skills {
  title: string;
  columns: number;
  hidden: boolean;
  items: SkillsItem[];
}

export interface SkillsItem {
  id: string;
  hidden: boolean;
  icon: string;
  name: string;
  proficiency: string;
  level: number;
  keywords: string[];
}
