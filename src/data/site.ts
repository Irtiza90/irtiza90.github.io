import aboutImg from '../assets/images/about-pic.jpg';

// Site metadata
export const SITE = {
  title: 'Irtiza Babar - Portfolio | Full-Stack Developer',
  description: 'Full-Stack Developer Portfolio',
  url: 'https://irtiza90.github.io',
  author: 'Irtiza Babar',
  githubRepo: 'https://github.com/irtiza90/irtiza90.github.io',
  cv: '/CV-Irtiza Babar.pdf',
  image: aboutImg.src,
  defaultDescription: 'Full-Stack Developer with expertise in modern web technologies',
  keywords: 'Web Developer, Portfolio, Irtiza Babar, Front-End Developer, Web Designer, Back-End Developer, Full-Stack Developer'
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Contact', path: '/contact' },
] as const;

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/irtiza90',
    icon: '/assets/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/irtizababar90',
    icon: '/assets/icons/linkedin.svg',
  },
] as const;
