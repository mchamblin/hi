import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../site.config';
import { getWriting, url } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getWriting();
  return rss({
    title: `${site.name} · Writing`,
    description: site.description,
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`/writing/${post.id}/`),
    })),
  });
}
