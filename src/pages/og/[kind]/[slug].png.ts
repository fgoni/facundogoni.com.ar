import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';

interface ImageProps {
  title: string;
  label: string;
}

const escapeXML = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const wrapTitle = (title: string, maxLength = 27) => {
  const lines: string[] = [];
  let current = '';

  for (const word of title.split(/\s+/)) {
    if (current && `${current} ${word}`.length > maxLength) {
      lines.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }

  if (current) lines.push(current);
  if (lines.length <= 3) return lines;
  return [lines[0], lines[1], `${lines.slice(2).join(' ').slice(0, maxLength - 1)}…`];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const [posts, projects] = await Promise.all([
    getCollection('blog'),
    getCollection('projects'),
  ]);

  return [
    ...posts.map((post) => ({
      params: { kind: 'notes', slug: post.slug },
      props: { title: post.data.title, label: 'NOTE' },
    })),
    ...projects.map((project) => ({
      params: { kind: 'projects', slug: project.slug },
      props: { title: project.data.title, label: 'PROJECT' },
    })),
  ];
};

export const GET: APIRoute<ImageProps> = async ({ props }) => {
  const lines = wrapTitle(props.title);
  const fontSize = lines.length === 3 ? 70 : 84;
  const lineHeight = Math.round(fontSize * 1.08);
  const titleMarkup = lines
    .map((line, index) => `<tspan x="72" dy="${index === 0 ? 0 : lineHeight}">${escapeXML(line)}</tspan>`)
    .join('');

  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#F5F1E8"/>
      <text x="72" y="70" fill="#6B6357" font-family="Arial, sans-serif" font-size="23" letter-spacing="4">FACUNDO GOÑI · ${props.label}</text>
      <line x1="72" y1="92" x2="1128" y2="92" stroke="#1A1814" stroke-width="2"/>
      <text x="72" y="235" fill="#1A1814" font-family="Georgia, serif" font-size="${fontSize}" font-style="italic" letter-spacing="-2">${titleMarkup}</text>
      <text x="72" y="548" fill="#6B6357" font-family="Arial, sans-serif" font-size="27" letter-spacing="2">FACUNDOGONI.COM.AR</text>
    </svg>`;

  const image = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
