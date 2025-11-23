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

- **Frontend**: Pure HTML5
- **Styling**: Tailwind CSS (via CDN)
- **Hosting**: Appears to use Cloudflare (based on email protection script)
- **Assets**: Profile images stored in `/assets/img/`

## Project Structure

```
facundogoni.com.ar/
├── index.html          # Main landing page
├── assets/
│   └── img/            # Image assets (profile photo)
├── .git/               # Git repository
└── .idea/              # IDE configuration (likely JetBrains)
```

## Key Features

1. **Responsive Design**: Mobile-first approach with Tailwind's responsive classes
2. **Dark Theme**: Uses neutral-900 background with clean, modern aesthetic
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
2. **No Build Process**: Direct HTML with CDN resources - no package.json, no build tools
3. **Responsive First**: Always test changes work on mobile (uses Tailwind's md: breakpoint)
4. **Brand Colors**: Dark theme with neutral tones (neutral-900, neutral-800, neutral-100)
5. **Performance**: Keep it lightweight - currently uses CDN for Tailwind and Cloudflare for optimization

## Common Tasks

### Making Content Changes
Edit `index.html` directly - no build step required.

### Adding Images
Place in `/assets/img/` directory and reference with `/assets/img/filename.ext`

### Styling Updates
The site uses Tailwind CSS classes. Reference the Tailwind documentation for utility classes.

### Testing
Open `index.html` in a browser or use a local server. Test responsive behavior at different breakpoints.

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
