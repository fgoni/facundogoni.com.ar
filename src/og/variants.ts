// Open Graph card templates rendered with satori (1200×630).
// Titles accept `*italic*` segments and `\n` for forced line breaks.

export interface OgCard {
  title: string;
  /** Small uppercase label, e.g. "Note · Dec 17, 2025". */
  label: string;
  /** Optional short line under the title. */
  subtitle?: string;
  /** Injected by the renderer for variants that use the profile photo. */
  portrait?: string;
}

export type VariantName = 'masthead' | 'ink' | 'portrait' | 'framed';

type Node = { type: string; props: Record<string, unknown> } | string;
type Style = Record<string, string | number>;

const h = (type: string, style: Style, ...children: (Node | Node[] | false | undefined)[]): Node => ({
  type,
  props: {
    style: { display: 'flex', ...style },
    children: children.flat().filter((child) => child !== false && child !== undefined),
  },
});

const img = (src: string, style: Style): Node => ({ type: 'img', props: { src, style } });

const colors = {
  paper: '#F5F1E8',
  ink: '#1A1814',
  muted: '#6B6357',
  inkMuted: '#A8A091',
  green: '#4F7A4A',
};

const serif = 'Fraunces';
const sans = 'Inter';

const smartQuotes = (value: string) => value
  .replace(/(^|[\s(\[{"‘“])'/g, '$1‘')
  .replace(/'/g, '’')
  .replace(/(^|[\s(\[{‘“])"/g, '$1“')
  .replace(/"/g, '”');

/** Font size that keeps the title within ~3 lines at the given measure. */
const titleSize = (title: string, sizes: [number, number, number, number]) => {
  const length = title.replace(/[*\n]/g, '').length;
  if (length <= 22) return sizes[0];
  if (length <= 36) return sizes[1];
  if (length <= 52) return sizes[2];
  return sizes[3];
};

/** Splits the title into word boxes so satori can wrap mixed roman/italic text. */
const titleWords = (title: string, style: Style, emStyle: Style = {}) => {
  const base: Style = {
    fontFamily: serif,
    fontWeight: 400,
    lineHeight: 1.04,
    letterSpacing: '-0.025em',
    ...style,
  };

  // Plain titles render as one text run so satori can balance the lines.
  // Fraunces' display cut has a very narrow space, so double it up.
  if (!/[*\n]/.test(title)) {
    return h('div', { ...base, textWrap: 'balance', whiteSpace: 'pre-wrap' }, smartQuotes(title).replace(/ /g, '  '));
  }

  const words: Node[] = [];
  const lines = smartQuotes(title).split('\n');

  lines.forEach((line, lineIndex) => {
    if (lineIndex > 0) words.push(h('div', { width: '100%', height: 0 }));
    let italic = false;
    for (const token of line.split(/(\*)/)) {
      if (token === '*') {
        italic = !italic;
        continue;
      }
      for (const word of token.split(/\s+/).filter(Boolean)) {
        words.push(h('span', italic ? { fontStyle: 'italic', ...emStyle } : {}, word));
      }
    }
  });

  return h('div', { flexWrap: 'wrap', columnGap: '0.24em', ...base }, words);
};

const eyebrow = (text: string, style: Style = {}) => h('div', {
  fontFamily: sans,
  fontSize: 19,
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: colors.muted,
  ...style,
}, text);

const DOMAIN = 'facundogoni.com.ar';
const NAME = 'Facundo Goñi';
const ROLE = 'Web & mobile developer';

/** A. Masthead — mirrors the site's own masthead and colophon. */
const masthead = (card: OgCard): Node => h('div', {
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  padding: '64px 80px 60px',
  backgroundColor: colors.paper,
  color: colors.ink,
},
  h('div', {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
    borderBottom: `2px solid ${colors.ink}`,
  },
    h('div', { fontFamily: serif, fontStyle: 'italic', fontSize: 34, letterSpacing: '-0.01em' }, NAME),
    eyebrow(card.label, { marginBottom: 4 }),
  ),
  h('div', { flex: 1, flexDirection: 'column', justifyContent: 'center' },
    titleWords(card.title, { fontSize: titleSize(card.title, [112, 100, 90, 80]) }),
    card.subtitle ? h('div', {
      marginTop: 28,
      fontFamily: sans,
      fontSize: 26,
      color: colors.muted,
      lineHeight: 1.4,
      maxWidth: 900,
    }, smartQuotes(card.subtitle)) : undefined,
  ),
  h('div', {
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTop: `1px solid ${colors.ink}`,
  },
    eyebrow(DOMAIN, { color: colors.ink }),
    eyebrow('Buenos Aires · UTC−3'),
  ),
);

/** B. Ink — inverted, high-contrast, stands out in a light feed. */
const ink = (card: OgCard): Node => h('div', {
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '72px 84px',
  backgroundColor: colors.ink,
  color: colors.paper,
},
  h('div', { alignItems: 'center', gap: 16 },
    h('div', { width: 14, height: 14, borderRadius: 7, backgroundColor: '#8FBF7F' }),
    eyebrow(card.label, { color: colors.inkMuted }),
  ),
  h('div', { flexDirection: 'column' },
    titleWords(card.title, { fontSize: titleSize(card.title, [116, 104, 92, 82]) }, { color: '#E9D9B8' }),
    card.subtitle ? h('div', {
      marginTop: 28,
      fontFamily: sans,
      fontSize: 26,
      color: colors.inkMuted,
      lineHeight: 1.4,
      maxWidth: 900,
    }, smartQuotes(card.subtitle)) : undefined,
  ),
  h('div', { justifyContent: 'space-between', alignItems: 'flex-end' },
    h('div', { fontFamily: serif, fontStyle: 'italic', fontSize: 34, letterSpacing: '-0.01em' }, NAME),
    eyebrow(DOMAIN, { color: colors.inkMuted }),
  ),
);

/** C. Portrait — photo column on the left, editorial type on the right. */
const portrait = (card: OgCard): Node => h('div', {
  width: '100%',
  height: '100%',
  backgroundColor: colors.paper,
  color: colors.ink,
},
  card.portrait
    ? img(card.portrait, { width: 400, height: 630, objectFit: 'cover' })
    : h('div', { width: 400, height: 630, backgroundColor: '#E4DDCF' }),
  h('div', {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '64px 72px 60px',
    borderLeft: `2px solid ${colors.ink}`,
  },
    eyebrow(card.label),
    titleWords(card.title, { fontSize: titleSize(card.title, [92, 82, 72, 64]) }),
    h('div', { flexDirection: 'column', gap: 10, paddingTop: 20, borderTop: `1px solid ${colors.ink}` },
      h('div', { fontFamily: serif, fontStyle: 'italic', fontSize: 32, letterSpacing: '-0.01em' }, NAME),
      eyebrow(`${ROLE} · ${DOMAIN}`, { fontSize: 16 }),
    ),
  ),
);

/** D. Framed — centered, letterpress-style card with a double rule. */
const framed = (card: OgCard): Node => h('div', {
  width: '100%',
  height: '100%',
  padding: 28,
  backgroundColor: colors.paper,
  color: colors.ink,
},
  h('div', { flex: 1, padding: 6, border: `2px solid ${colors.ink}` },
    h('div', {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '44px 72px 40px',
      border: `1px solid ${colors.ink}`,
    },
      eyebrow(card.label),
      titleWords(card.title, {
        fontSize: titleSize(card.title, [104, 92, 82, 72]),
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: 940,
      }),
      h('div', { flexDirection: 'column', alignItems: 'center', gap: 10 },
        h('div', { fontFamily: serif, fontStyle: 'italic', fontSize: 32, letterSpacing: '-0.01em' }, NAME),
        eyebrow(DOMAIN, { fontSize: 16 }),
      ),
    ),
  ),
);

export const variants: Record<VariantName, (card: OgCard) => Node> = {
  masthead,
  ink,
  portrait,
  framed,
};
