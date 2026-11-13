import { getCollection } from 'astro:content';

/** Prefix an internal path with the configured base, so links work at any URL. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;

// Drafts are visible in `npm run dev` and hidden in production builds.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getWork() {
  const entries = await getCollection('work', visible);
  return entries.sort((a, b) => a.data.order - b.data.order || b.data.year.localeCompare(a.data.year));
}

export async function getWriting() {
  const entries = await getCollection('writing', visible);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
