# DevAsign Website

The marketing and documentation site for **DevAsign**, a multimodal, goal-aware AI code reviewer. It reviews every pull request against what was actually asked, and pays out bounties to the contributors who ship the work.

This repository contains the **public website only** (landing, pricing, docs, and bounty pages). The product apps live elsewhere:

- **Code review app** → https://devasign.ai
- **Bounty app** → https://app.devasign.com

## What is DevAsign?

Most reviewers only see the diff, the lint and the test status. Nobody ever showed them the ticket, the issue thread or the Loom the developer was working from. DevAsign gathers the full **goal** behind a change and reviews each PR against it. The site covers the two things the product does:

- **Goal-aware code review.** DevAsign reads the ticket, the linked issues, screenshots, PDFs and Loom walkthroughs, which is the same material the developer was given, then reviews every PR against that goal and posts structured feedback on how much of the work the change actually satisfies.
- **Automated bounty payouts.** Maintainers comment `bounty $150 1 week` on a GitHub issue and sign a transaction that locks USDC into a Soroban escrow. Once they delegate the work to a contributor, merging that contributor's PR releases the escrow, settling on **Stellar** in seconds with no human in the loop.

## Tech Stack

- **React 18** + **TypeScript**, built with **Vite** (SWC).
- **React Router 7** for client-side routing.
- **Tailwind CSS** for styling.
- **react-helmet-async** for per-page SEO and meta tags.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Vite serves the site at `http://localhost:3001` and opens it in your browser automatically. If port 3001 is already in use, Vite falls back to the next available port.

### 3. Build for production

```bash
npm run build
```

Outputs an optimized static build to the `build/` directory.

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing | Hero, "why AI code review isn't enough", how it works, and CTAs |
| `/terms`, `/privacy` | Legal | Terms of Use and Privacy Policy |
| `/pricing` | Pricing | Plans and pricing for the code reviewer |
| `/bounty-automation` | Bounty Automation | How automated, on-merge USDC bounty payouts work |
| `/docs` | Documentation | Full product docs, covering code review and bounty automation, with scrollspy sidebar navigation |
| `*` | 404 | Custom not-found page |

## Project Structure

```
src/
├── pages/        # Route-level pages (Landing, Pricing, Docs, Bounty…)
├── components/   # Reusable UI components
│   └── layout/   # Site-wide nav & footer
├── imports/      # Figma-exported components
├── assets/       # Images and static assets
└── styles/       # Global styles
```

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start the Vite dev server (port 3001) |
| Build | `npm run build` | Create a production build in `build/` |

## Notes

- The UI uses the **Geist Mono** font family, loaded from Google Fonts.
- Path alias `@/` (configured in `vite.config.ts`) points to the `src/` directory.
- Figma asset hashes are aliased in `vite.config.ts` so exported assets import cleanly.

## Troubleshooting

### Port already in use

The dev server defaults to port **3001** (set in `vite.config.ts`). To pin a different port, edit:

```typescript
server: {
  port: 3002, // any available port
  open: true,
}
```

© 2026 DevAsign, Inc.
