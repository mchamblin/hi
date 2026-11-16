/**
 * Share preview cards (the image shown when a link is pasted into LinkedIn,
 * Slack, iMessage and so on). One 1200×630 PNG per page, drawn at build time.
 */
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { site } from '../site.config';

export interface Card {
  /** Small uppercase line above the title. */
  label: string;
  /** Show the green "available" dot before the label. */
  dot?: boolean;
  /** Wrap a phrase in <em> to give it the accent treatment. */
  title: string;
  /** Bottom-left line. */
  footer: string;
  /** Bottom-right line, used when there is no highlight. */
  footerRight?: string;
  /** One headline result, shown bottom-right. */
  highlight?: { value: string; label: string };
}

export const CARD_WIDTH = 1200;
export const CARD_HEIGHT = 630;

// The light theme from src/styles/global.css, converted to hex.
const color = { bg: '#fcfaf6', fg: '#1a1512', muted: '#635c57', line: '#dad7d2', accent: '#c8331a' };

type Style = Record<string, string | number>;
type Child = Box | string | null | undefined | false;
interface Box {
  type: 'div';
  props: { style: Style; children: Child | Child[] };
}

// Satori lays out with flexbox only, so every box is a flex container.
function box(style: Style, ...children: Child[]): Box {
  const kept = children.filter(Boolean);
  return { type: 'div', props: { style: { display: 'flex', ...style }, children: kept.length === 1 ? kept[0] : kept } };
}

let fonts: Parameters<typeof satori>[1]['fonts'] | undefined;

function loadFonts() {
  const read = (family: string, file: string) =>
    fs.readFileSync(path.resolve('node_modules/@fontsource', family, 'files', file));
  fonts ??= [
    { name: 'Serif', weight: 400, style: 'normal', data: read('instrument-serif', 'instrument-serif-latin-400-normal.woff') },
    { name: 'Serif', weight: 400, style: 'italic', data: read('instrument-serif', 'instrument-serif-latin-400-italic.woff') },
    { name: 'Sans', weight: 400, style: 'normal', data: read('geist-sans', 'geist-sans-latin-400-normal.woff') },
    { name: 'Sans', weight: 500, style: 'normal', data: read('geist-sans', 'geist-sans-latin-500-normal.woff') },
    { name: 'Mono', weight: 500, style: 'normal', data: read('geist-mono', 'geist-mono-latin-500-normal.woff') },
  ];
  return fonts;
}

/** Split a title into words, remembering which ones sit inside <em>. */
function titleWords(title: string) {
  return title.split(/(<em>.*?<\/em>)/).flatMap((part) => {
    const accent = part.startsWith('<em>');
    const text = accent ? part.slice(4, -5) : part;
    return text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent }));
  });
}

export async function renderCard(card: Card) {
  const words = titleWords(card.title);
  const length = words.map(({ word }) => word).join(' ').length;
  const size = length > 56 ? 80 : length > 34 ? 92 : 108;
  const mono: Style = { fontFamily: 'Mono', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' };

  // Satori sizes `width` and `height` as content size, so padding is added on top.
  // The inner box is sized to leave room for the padding inside a 1200×630 card.
  const tree = box(
    {
      position: 'relative',
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      backgroundColor: color.bg,
      color: color.fg,
      fontFamily: 'Sans',
    },
    box(
      {
        width: CARD_WIDTH - 144,
        height: CARD_HEIGHT - 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '52px 72px 48px',
      },
      box(
      { alignItems: 'center', justifyContent: 'space-between' },
      box(
        { alignItems: 'center', gap: 16 },
        box(
          {
            width: 52,
            height: 52,
            borderRadius: 26,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color.fg,
            color: color.bg,
            fontFamily: 'Mono',
            fontWeight: 500,
            fontSize: 19,
          },
          site.initials,
        ),
        box({ fontSize: 27, fontWeight: 500 }, site.name),
      ),
      box({ ...mono, fontSize: 19, color: color.muted }, new URL(import.meta.env.SITE).host),
    ),
    box(
      { flexDirection: 'column', gap: 22 },
      box(
        { alignItems: 'center', gap: 12 },
        card.dot && box({ width: 12, height: 12, borderRadius: 6, backgroundColor: '#10b981' }),
        box({ ...mono, fontSize: 19, color: color.muted }, card.label),
      ),
      box(
        {
          flexWrap: 'wrap',
          columnGap: size * 0.23,
          fontFamily: 'Serif',
          fontSize: size,
          lineHeight: 1.03,
          letterSpacing: '-0.02em',
        },
        ...words.map(({ word, accent }) =>
          box(accent ? { fontStyle: 'italic', color: color.accent } : {}, word),
        ),
      ),
    ),
    box(
      {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 40,
        paddingTop: 22,
        borderTop: `1px solid ${color.line}`,
      },
      box({ fontSize: 24, color: color.muted }, card.footer),
      card.highlight
        ? box(
            { flexDirection: 'column', alignItems: 'flex-end' },
            box({ fontFamily: 'Serif', fontSize: 58, lineHeight: 1, color: color.accent }, card.highlight.value),
            box({ marginTop: 8, fontSize: 19, color: color.muted }, card.highlight.label),
          )
        : card.footerRight && box({ fontFamily: 'Serif', fontSize: 30 }, card.footerRight),
    ),
    ),
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    fonts: loadFonts(),
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}
