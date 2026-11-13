/**
 * Everything personal lives in this one file.
 * Edit it top to bottom and the whole site updates.
 * Lines marked TODO still need your input.
 */
export const site = {
  name: 'Matt Chamblin',
  initials: 'MC',
  role: 'Software Engineer', // TODO your target title
  location: 'Atlanta, GA', // TODO confirm
  // Shown in the hero. Wrap a phrase in <em> to give it the accent treatment.
  headline: 'I build the <em>platforms</em> behind big media sites.',
  intro:
    'For more than ten years I have shipped the backend and platform work behind HBO.com, TCM.com, and NBA.com: content APIs, event-driven publishing, CDN routing, and the release tooling around them. I am looking for my next platform or backend role.',
  description:
    'Matt Chamblin is a backend and platform engineer: Node.js, GraphQL, Kafka, Next.js, and CDN work behind HBO.com, TCM.com, and NBA.com.',
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

// Career totals shown on the home and about pages.
export const stats = [
  { value: '2,337', label: 'pull requests authored since 2018' },
  { value: '1,749', label: 'pull requests reviewed, from 56 engineers' },
  { value: '10', label: 'architecture decision records written' },
  { value: '10+', label: 'years shipping for HBO, TCM, and the NBA' },
];

export interface Job {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  summary?: string;
  highlights: string[];
}

// TODO confirm official job titles and employer names for each period.
export const experience: Job[] = [
  {
    company: 'Warner Bros. Discovery',
    title: 'Software Engineer, Publishing Platform',
    start: '2021',
    end: '2026',
    location: 'Atlanta, GA',
    summary:
      'Backend and platform engineering on the internal multi-brand publishing platform behind HBO.com, TCM.com, DC.com, and other brand sites.',
    highlights: [
      'Designed and built manifest-driven publishing so a page publish writes one JSON manifest instead of recompiling a whole brand site (824 pages and about 11 minutes per publish before). Shipped dark to production behind per-brand flags; a dev pilot measured 5 to 15 seconds per publish.',
      'Co-architected and led the build of a Kafka event bus that replaced SQS, RabbitMQ, Redis queues, and SNS. Top contributor to the shared client library used by 13 services and Lambdas.',
      'Wrote 10 architecture decision records covering 9 decisions; 7 approved or accepted.',
      'Primary contributor to the GraphQL content API for all brand sites: two-tier memory and Redis response cache, search integrations, and the schedule API behind the HBO.com and TCM.com schedule pages.',
      'Tech lead for the backend, CDN, and search work that moved TCM.com onto the platform, including a redirect strategy for roughly 220,000 legacy URLs.',
      'Built the CDN services and page-by-page routing that moved HBO.com from its legacy CMS to the platform (cutover March 2022).',
      'Created the release automation repo: release-candidate tagging across repos, deploy notifications, and scheduled maintenance jobs. Rolled a shared error-monitoring Terraform module out to 12 repos in one week.',
      'Built the working proof of concept for a multi-agent AI pipeline that dedupes, triages, drafts fixes for, reviews, and verifies vulnerability tickets, stopping at human review.',
      'Rolled out Redis authentication and TLS across 12 production markets for a sister team’s international platform, with the runbook.',
    ],
  },
  {
    company: 'WarnerMedia · Turner Classic Movies',
    title: 'Software Engineer, TCM.com',
    start: '2020',
    end: '2021',
    location: 'Atlanta, GA',
    summary: 'Site and API for TCM.com and its apps. Continued to maintain both through 2025.',
    highlights: [
      'Primary owner of the Node.js API behind the TCM site and apps: schedules, video on demand, and partner feeds.',
      'Hardened the API:input validation and parameterized queries across its routes, and token authentication on write routes.',
      'Rewrote the live “What’s On Now” feed and built a single-runner video ingest job using a database lock.',
      'Core Drupal 8 developer on TCM.com: CDN purge tied to cache-tag invalidation, schema.org schedule markup, and search autocomplete ranking.',
      'Lead front-end developer for the launch of the subscriber email preference center.',
    ],
  },
  {
    company: 'Turner · NBA Digital',
    title: 'Software Engineer, NBA.com',
    start: '2016',
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
];

export const education = [
  { school: 'University Name', credential: 'B.S., Field of Study', year: '2010' }, // TODO
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
