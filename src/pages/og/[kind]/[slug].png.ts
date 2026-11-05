import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage, type OgCard } from '../../../og/render';
import { pageCards, serviceCards } from '../../../og/pages';

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const [posts, projects] = await Promise.all([
    getCollection('blog'),
    getCollection('projects'),
  ]);

  return [
    ...Object.entries(pageCards).map(([slug, card]) => ({
      params: { kind: 'pages', slug },
      props: card,
    })),
    ...Object.entries(serviceCards).map(([slug, card]) => ({
      params: { kind: 'services', slug },
      props: card,
    })),
    ...posts.map((post) => ({
      params: { kind: 'notes', slug: post.slug },
      props: { title: post.data.title, label: `Note · ${formatDate(post.data.date)}` },
    })),
    ...projects.map((project) => ({
      params: { kind: 'projects', slug: project.slug },
      props: {
        title: project.data.title,
        label: project.data.status ? `Work · ${project.data.status}` : 'Work',
        subtitle: project.data.description,
      },
    })),
  ];
};

export const GET: APIRoute<OgCard> = async ({ props }) => {
  const image = await renderOgImage(props);

  return new Response(new Uint8Array(image), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
