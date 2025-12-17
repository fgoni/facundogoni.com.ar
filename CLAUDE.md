# Project Documentation for AI Agents

## Project Overview

This is the personal portfolio website for **Facundo Goñi** (facundogoni.com.ar), a web and mobile developer.

## Purpose

The website serves as a professional landing page and portfolio, showcasing:
- Personal introduction and professional background
- Skills focus: rapid application development, fast prototyping, and quality UI/UX
- Contact information and social media presence
- Call to action for potential project collaborations

## Technical Stack

- **Framework**: Astro (see `src/pages/`, `src/layouts/`)
- **Content**: Astro Content Collections / MDX (`src/content/`, `@astrojs/mdx`)
- **Styling**: Plain CSS (`src/styles/`)
- **Hosting**: Appears to use Cloudflare (based on email protection script)
- **Assets**: Static assets live in `public/` (e.g. `public/assets/img/`)

## Project Structure

```
facundogoni.com.ar/
├── src/
│   ├── pages/          # Route pages (e.g. `index.astro`, `ramblings.astro`)
│   ├── layouts/        # Shared layouts
│   └── content/        # Content collections
├── public/             # Static assets served as-is
├── .git/               # Git repository
└── .idea/              # IDE configuration (likely JetBrains)
```

## Key Features

1. **Astro Site**: Pages and layouts built with Astro
2. **Responsive Design**: Mobile-first approach with simple, readable CSS
3. **Social Links**: Twitter, LinkedIn, GitHub, and Email contact
4. **Single Page**: Simple, focused landing page design

## Development Information

- **Repository**: Git-based version control
- **Branches**: Development work happens on branches prefixed with `claude/`
- **Recent Changes**: Focus on visual redesign ("New look", "Responsive", favicon updates)

## Contact Information Present on Site

- Email: Available via Cloudflare protected email
- Twitter: @gonifacundo
- LinkedIn: linkedin.com/in/facundogoni/
- GitHub: github.com/fgoni

## Important Notes for Future Agents

1. **Simplicity is Key**: This is intentionally a minimal, single-page site. Avoid over-engineering.
2. **Follow Astro Conventions**: Prefer editing `src/pages/`, `src/layouts/`, and `src/content/` over generated output.
3. **Responsive First**: Always sanity-check mobile and desktop layouts.
4. **Generated Output**: Avoid editing `dist/` directly (build output).
5. **Performance**: Keep it lightweight (Astro-first; avoid unnecessary client JS).

## Common Tasks

### Making Content Changes
Edit Astro source files in `src/` (typically `src/pages/` and/or `src/content/`), then run `npm run dev` or `npm run build`.

### Adding Images
Place in `public/assets/img/` and reference with `/assets/img/filename.ext`

### Styling Updates
Prefer updating shared styles in `src/styles/` and component/page styles in `.astro` files.

### Testing
Run `npm run dev` (local), or `npm run build` + `npm run preview` to verify output.

## Design Philosophy

The site embodies the owner's professional values:
- Clean, minimal design
- Fast loading (no heavy frameworks)
- Professional yet approachable tone
- Focus on action (encouraging visitors to make contact)

## Git Workflow

- Main branch: Used for production
- Feature branches: Prefixed with `claude/` followed by task description and session ID
- Always commit with clear, descriptive messages
- Push to designated branch only
