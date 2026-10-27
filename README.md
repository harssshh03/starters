# Starter's Snippets

Your next project, started faster. Starter's Snippets generates starter files and boilerplate so you can skip the repetitive setup.

## Stack

Next.js (App Router), Tailwind CSS v4, shadcn/ui (base-nova), next-themes, Motion, Geist, pnpm.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Command      | What it does              |
| ------------ | ------------------------- |
| `pnpm dev`   | Start the dev server      |
| `pnpm build` | Production build          |
| `pnpm start` | Serve the production build|
| `pnpm lint`  | Run ESLint                |

## Structure

```
app/            layout, page, global theme tokens (globals.css)
components/     header, hero, install box, preview, snippet browser, footer
components/ui/  shadcn button + the DarkSide toggle icon
lib/site.ts     name, tagline, links, install commands
lib/snippets.ts the snippet cheat sheet shown on the page
public/         extension.mp4 (the preview video)
```

Light and dark tokens live in `app/globals.css` (`:root` and `.dark`). next-themes switches the `.dark` class and follows the system setting by default.

`/extension` redirects to the VS Code Marketplace listing (see `next.config.ts`).
