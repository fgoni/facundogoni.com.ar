import type { OgCard } from './variants';

// Social cards for top-level pages, served at /og/pages/<key>.png.
// Titles mirror each page's headline (`*italic*`, `\n` = line break).
export const pageCards = {
  home: { title: 'Building *high-quality*\nproducts, *fast.*', label: 'Web & mobile developer' },
  work: { title: "Things I've\n*shipped.*", label: 'Selected work' },
  notes: { title: 'Thinking\n*out loud.*', label: 'Notes' },
  services: { title: 'From rough idea\nto *shipped product.*', label: 'Services' },
  contact: { title: "Let's *talk.*", label: 'Get in touch' },
} satisfies Record<string, OgCard>;

export type PageCardKey = keyof typeof pageCards;

// Service detail pages, served at /og/services/<slug>.png.
export const serviceCards = {
  'web-development': { title: 'Web development', label: 'Service' },
  'rapid-prototyping': { title: 'Rapid prototyping', label: 'Service' },
  'ios-macos-development': { title: 'iOS & macOS development', label: 'Service' },
} satisfies Record<string, OgCard>;

export const ogImagePath = (kind: string, slug: string) => `/og/${kind}/${slug}.png`;
