/**
 * Everything personal lives in this one file.
 * Edit it top to bottom and the whole site updates.
 * Lines marked TODO are placeholders.
 */
export const site = {
  name: 'Matt Chamblin', // TODO confirm spelling
  initials: 'MC',
  role: 'Software Engineer', // TODO your target title
  location: 'Atlanta, GA', // TODO
  // Shown in the hero. Wrap a phrase in <em> to give it the accent treatment.
  headline: 'I build software that makes <em>complicated things</em> feel simple.', // TODO
  intro:
    'A short, specific paragraph about what you do best and the kind of problems you like. Two or three sentences. Say what you want next.', // TODO
  description:
    'Portfolio of Matt Chamblin: selected work, writing, and résumé.', // used for SEO
  // Set to false once you have accepted an offer.
  available: true,
  availableLabel: 'Open to new roles',
  email: 'hello@example.com', // TODO
  social: [
    { label: 'GitHub', href: 'https://github.com/mchamblin' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' }, // TODO
  ],
  nav: [
    { label: 'Work', href: '/work/' },
    { label: 'Writing', href: '/writing/' },
    { label: 'About', href: '/about/' },
    { label: 'Résumé', href: '/resume/' },
  ],
} as const;

export interface Job {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

// TODO replace with your real history. Lead each bullet with a result.
export const experience: Job[] = [
  {
    company: 'Most Recent Company',
    title: 'Senior Title',
    start: '2019',
    end: '2026',
    location: 'Atlanta, GA',
    summary: 'One line on the team, the product, and your scope.',
    highlights: [
      'Cut X by 40% by doing Y, which unlocked Z for the business.',
      'Led a team of N through a migration that shipped on time with zero downtime.',
      'Mentored N engineers; two were promoted within a year.',
    ],
  },
  {
    company: 'Previous Company',
    title: 'Title',
    start: '2014',
    end: '2019',
    location: 'Atlanta, GA',
    highlights: [
      'Built the first version of X, now used by N customers.',
      'Reduced page load time from 4s to 900ms.',
    ],
  },
  {
    company: 'Earlier Company',
    title: 'Title',
    start: '2010',
    end: '2014',
    highlights: ['One strong, quantified result is enough for older roles.'],
  },
];

export const education = [
  { school: 'University Name', credential: 'B.S., Field of Study', year: '2010' }, // TODO
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'SQL'] }, // TODO
  { group: 'Platforms', items: ['AWS', 'PostgreSQL', 'Kubernetes'] },
  { group: 'Practice', items: ['System design', 'Mentoring', 'Technical writing'] },
];
