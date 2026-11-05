import { readFile } from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { variants, type OgCard, type VariantName } from './variants';

export type { OgCard, VariantName };

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
export const DEFAULT_VARIANT: VariantName = 'ink';

const fontDir = path.resolve(process.cwd(), 'src/og/fonts');

const fontFiles = [
  { name: 'Fraunces', file: 'Fraunces-400.woff', weight: 400, style: 'normal' },
  { name: 'Fraunces', file: 'Fraunces-500.woff', weight: 500, style: 'normal' },
  { name: 'Fraunces', file: 'Fraunces-400-italic.woff', weight: 400, style: 'italic' },
  { name: 'Fraunces', file: 'Fraunces-500-italic.woff', weight: 500, style: 'italic' },
  { name: 'Inter', file: 'Inter-400.woff', weight: 400, style: 'normal' },
  { name: 'Inter', file: 'Inter-500.woff', weight: 500, style: 'normal' },
  { name: 'Inter', file: 'Inter-600.woff', weight: 600, style: 'normal' },
] as const;

let fontsPromise: Promise<Parameters<typeof satori>[1]['fonts']> | undefined;

const loadFonts = () => {
  fontsPromise ??= Promise.all(
    fontFiles.map(async ({ file, ...font }) => ({
      ...font,
      data: await readFile(path.join(fontDir, file)),
    })),
  );
  return fontsPromise;
};

let portraitPromise: Promise<string> | undefined;

// Warm, desaturated crop of the profile photo, used by the "portrait" variant.
const loadPortrait = () => {
  portraitPromise ??= sharp(path.resolve(process.cwd(), 'public/assets/img/8738638.jpg'))
    .resize(400, 630, { fit: 'cover', position: 'top' })
    .modulate({ saturation: 0.15 })
    .tint({ r: 245, g: 236, b: 220 })
    .jpeg({ quality: 88 })
    .toBuffer()
    .then((buffer) => `data:image/jpeg;base64,${buffer.toString('base64')}`);
  return portraitPromise;
};

export async function renderOgImage(card: OgCard, variant: VariantName = DEFAULT_VARIANT) {
  const [fonts, portrait] = await Promise.all([
    loadFonts(),
    variant === 'portrait' ? loadPortrait() : undefined,
  ]);

  const svg = await satori(variants[variant]({ ...card, portrait }) as any, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts,
  });

  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
