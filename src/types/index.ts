export interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
  viewBtnText?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  twitter: string;
  twitterHandle: string;
  github: string;
  githubRepo: string;
  linkedin: string;
  cv: string;
  image: string;
  defaultDescription: string;
  keywords: string;
}
