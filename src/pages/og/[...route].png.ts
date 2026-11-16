import type { APIContext } from 'astro';
import { formatDate, getWork, getWriting } from '../../lib/content';
import { renderCard, type Card } from '../../lib/og';
import { shippedFor, site } from '../../site.config';

// One share preview image per case study and post, plus a default for every other page.
export async function getStaticPaths() {
  const tagline = `${site.role} · ${site.location}`;

  const home: Card = {
    label: site.available ? site.availableLabel : site.role,
    dot: site.available,
    title: site.headline,
    footer: tagline,
    footerRight: shippedFor.join(' · '),
  };

  const work = (await getWork()).map((entry) => ({
    params: { route: `work/${entry.id}` },
    props: {
      label: `Case study · ${entry.data.year}`,
      title: entry.data.title,
      footer: tagline,
      highlight: entry.data.highlight,
    } satisfies Card,
  }));

  const writing = (await getWriting()).map((post) => ({
    params: { route: `writing/${post.id}` },
    props: {
      label: `Writing · ${formatDate(post.data.date)}`,
      title: post.data.title,
      footer: tagline,
    } satisfies Card,
  }));

  return [{ params: { route: 'home' }, props: home }, ...work, ...writing];
}

export async function GET({ props }: APIContext<Card>) {
  const png = await renderCard(props);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
