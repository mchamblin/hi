/**
 * Everything personal lives in this one file.
 * Edit it top to bottom and the whole site updates.
 * Lines marked TODO still need your input.
 */
export const site = {
  name: 'Matt Chamblin',
  initials: 'MC',
  role: 'Senior Software Engineer',
  location: 'Atlanta, GA', // TODO confirm
  // Shown in the hero. Wrap a phrase in <em> to give it the accent treatment.
  headline: 'I <em>design and ship</em> the platforms behind HBO.com, TCM.com, and NBA.com.',
  intro:
    'Two years at NPR, then twelve at Warner Bros. Discovery, where I designed the Kafka event bus its publishing platform runs on and replaced an 11-minute full-site rebuild with a one-page publish. Now looking for my next backend or platform role.',
  // The "at a glance" panel beside the intro on the home page.
  glance: [
    { label: 'Role', value: 'Senior Software Engineer' },
    { label: 'Based in', value: 'Atlanta, GA' },
    { label: 'Focus', value: 'Content APIs, event-driven systems, CDN and release engineering' },
    { label: 'Stack', value: 'Node.js · GraphQL · Kafka · Next.js · AWS' },
  ],
  description:
    'Matt Chamblin is a backend and platform engineer: Node.js, GraphQL, Kafka, Next.js, and CDN work behind HBO.com, TCM.com, and NBA.com, and earlier at NPR.',
  // Set to false once you have accepted an offer.
  available: true,
  availableLabel: 'Open to new roles',
  email: 'mchamblin@gmail.com',
  social: [
    { label: 'GitHub', href: 'https://github.com/mchamblin' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mchamb4324/' },
  ],
  nav: [
    // `match` lists the other paths that should light up this item.
    { label: 'Portfolio', href: '/portfolio/', match: ['/work/', '/writing/'] },
    { label: 'About', href: '/about/', match: [] },
    { label: 'Résumé', href: '/resume/', match: [] },
  ],
} as const;

// Organizations and brands shown in a strip on the home page.
export const shippedFor = ['HBO', 'Turner Classic Movies', 'NBA', 'DC', 'NPR'];

// Career totals shown on the home and about pages.
export const stats = [
  { value: '2,337', label: 'pull requests authored since 2018' },
  { value: '1,749', label: 'pull requests reviewed, from 56 engineers' },
  { value: '10', label: 'architecture decision records written' },
  { value: '14', label: 'years building for the web, from NPR to HBO' },
];

export interface Job {
  company: string;
  title: string;
  // Leave start and end out to hide the dates for a role.
  start?: string;
  end?: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

export const experience: Job[] = [
  {
    company: 'Warner Bros. Discovery',
    title: 'Senior Software Engineer, Global Entertainment Platform',
    start: '2021',
    end: '2026',
    location: 'Atlanta, GA',
    summary:
      'Backend and platform engineering on the multi-brand publishing platform behind HBO.com, TCM.com, DC.com, and other brand sites.',
    highlights: [
      'Designed and built manifest-driven publishing so a page publish writes one JSON manifest instead of recompiling a whole brand site (824 pages and about 11 minutes per publish before). Launched in production behind per-brand feature flags; the pre-launch pilot measured 5 to 15 seconds per publish.',
      'Designed and led the build of a Kafka event bus that replaced SQS, RabbitMQ, Redis queues, and SNS. Top contributor to the shared client library used by 13 services and Lambdas.',
      'Wrote 10 architecture decision records covering 9 decisions; 7 approved or accepted.',
      'Primary contributor to the GraphQL content API for all brand sites: two-tier memory and Redis response cache, search integrations, and the schedule API behind the HBO.com and TCM.com schedule pages.',
      'Tech lead for the backend, CDN, and search work that moved TCM.com onto the platform, including a redirect strategy for roughly 220,000 legacy URLs.',
      'Built the CDN services and page-by-page routing that moved HBO.com from its legacy CMS to the platform (cutover March 2022).',
      'Created the release automation repo: release-candidate tagging across repos, deploy notifications, and scheduled maintenance jobs. Rolled a shared error-monitoring Terraform module out to 12 repos in one week.',
      'Built a multi-agent AI pipeline that dedupes, triages, drafts fixes for, reviews, and verifies vulnerability tickets, stopping at human review.',
      'Rolled out Redis authentication and TLS across 12 production markets for a sister team’s international platform, with the runbook.',
    ],
  },
  {
    company: 'WarnerMedia · Turner Classic Movies',
    title: 'Senior Software Engineer, TCM.com',
    start: '2020',
    end: '2021',
    location: 'Atlanta, GA',
    summary: 'Site and API for TCM.com and its apps. Continued to maintain both through 2025.',
    highlights: [
      'Primary owner of the Node.js API behind the TCM site and apps: schedules, video on demand, and partner feeds.',
      'Hardened the API: input validation and parameterized queries across its routes, and token authentication on write routes.',
      'Rewrote the live “What’s On Now” feed and built a single-runner video ingest job using a database lock.',
      'Core Drupal 8 developer on TCM.com: CDN purge tied to cache-tag invalidation, schema.org schedule markup, and search autocomplete ranking.',
      'Lead front-end developer for the launch of the subscriber email preference center.',
    ],
  },
  {
    company: 'Turner Broadcasting System',
    title: 'Senior Web Developer, NBA.com',
    start: '2014',
    end: '2020',
    location: 'Atlanta, GA',
    summary: 'Fan-facing features on NBA.com and the NBA League Pass subscription storefront.',
    highlights: [
      'Primary front-end contributor and release driver on the Angular League Pass storefront: purchase flows, plan switching with end-to-end tests, and server-side rendered game pages. Raised the test coverage gate to 94%.',
      'Top contributor to the fan vote and sweepstakes module (Kia MVP vote, Rising Stars polls).',
      'Built schedule, scores, and standings pages for tentpole events: All-Star, Playoffs, Draft, and Summer League.',
      'Carried out the NBA.com HTTPS migration and built GDPR consent and CCPA “Do Not Sell” compliance features.',
    ],
  },
  {
    company: 'National Public Radio',
    title: 'Web and UX Developer',
    start: '2013',
    end: '2014',
    location: 'Washington, DC',
    highlights: [
      'Developed front-end user interfaces for NPR’s content distribution portal.',
      'Worked in an Agile Scrum development team.',
      'Built in a Java environment using CSS, HTML, and JavaScript.',
    ],
  },
  {
    company: 'Freelance',
    title: 'Web and UX Developer',
    start: '2012',
    end: 'Present', // TODO confirm this is still current
    highlights: ['Developed websites with Drupal, WordPress, HTML, CSS, and JavaScript.'],
  },
  {
    company: 'Washington Episcopal School',
    title: 'Technology and Spanish Teacher; Technology Administrator',
    start: '2006',
    end: '2012',
    location: 'Bethesda, MD',
    highlights: [
      'Taught middle school students web programming, including HTML and CSS, multimedia production, and Microsoft Office.',
      'Supported student and teacher technology needs school-wide.',
      'Taught Spanish and directed a two-week student exchange program in Granada, Spain.',
    ],
  },
  {
    company: 'Thornton Friends School',
    title: 'Technology and Spanish Teacher; Technology Director',
    start: '2002',
    end: '2006',
    location: 'Alexandria, VA',
    highlights: [
      'Taught a multitude of courses at a small Quaker school serving nontraditional high school students.',
      'Implemented and supported the school computer network, including a computer lab and classroom computers.',
      'Helped teachers use technology efficiently in their classes.',
    ],
  },
];

export const education = [
  { school: 'Guilford College', credential: 'B.A., English', year: '1993 – 1998' },
];

export const skills = [
  { group: 'Backend', items: ['Node.js', 'TypeScript', 'GraphQL (Apollo)', 'Fastify', 'PHP / Drupal'] },
  { group: 'Front end', items: ['Next.js', 'React', 'Angular', 'SCSS'] },
  {
    group: 'Data & messaging',
    items: ['Kafka', 'SQS', 'RabbitMQ', 'Elasticsearch / OpenSearch', 'Redis', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Cloud & delivery',
    items: ['AWS (Lambda, S3, CloudFront)', 'Terraform', 'Docker', 'Azure Pipelines', 'CDN edge logic (VCL)'],
  },
  {
    group: 'Practice',
    items: ['Architecture decision records', 'Incident response', 'Observability (Datadog, Sentry)', 'Load testing (k6)', 'AI-assisted engineering'],
  },
];
