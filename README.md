# Starter's Snippets

Your next project, started faster.

Starter's Snippets generates starter files and boilerplate for your projects, so you can skip the repetitive setup and get straight to building.

This repo is the website. The VS Code extension lives on the Marketplace.

[Website](https://starters.harssh.xyz) · [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=harshchalwadi.harshchalwadi)

## The extension

Starter's Snippets is a free VS Code extension. Open a file, type a snippet prefix, and press Tab.

Install it from the terminal:

```bash
code --install-extension harshchalwadi.harshchalwadi
```

Or open Quick Open (`Ctrl+P` / `Cmd+P`), paste the command below, and press Enter:

```
ext install harshchalwadi.harshchalwadi
```

Snippets are available for C++, JavaScript, PHP, Python, Go, Rust, Ruby, Java and Hono. A few examples:

| Prefix       | What you get                    |
| ------------ | ------------------------------- |
| `js-react`   | React component boilerplate     |
| `py-flask`   | Flask route setup               |
| `go-web`     | Go HTTP server boilerplate      |
| `hono-web`   | Hono app with GET & POST routes |

The full list is on the [website](https://starters.harssh.xyz/#snippets) and the Marketplace page.

## About this site

- Light and dark theme, following the system setting by default
- Install box with copy buttons for both install methods
- Snippet browser with a language filter, click a row to copy its prefix
- `/extension` redirects to the Marketplace listing

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [shadcn/ui](https://ui.shadcn.com)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Motion](https://motion.dev)
- [Geist](https://vercel.com/font)
- [pnpm](https://pnpm.io)

## Getting started

You need Node.js 20 or newer and pnpm.

```bash
git clone <repo-url>
cd starters
pnpm install
pnpm dev
```

Open http://localhost:3000.

### Scripts

| Command      | What it does               |
| ------------ | -------------------------- |
| `pnpm dev`   | Start the dev server       |
| `pnpm build` | Create a production build  |
| `pnpm start` | Serve the production build |
| `pnpm lint`  | Run ESLint                 |

## Project structure

```
app/              layout, page, theme tokens (globals.css)
components/       header, hero, install box, preview, snippet browser, footer
components/ui/    shadcn button and the theme toggle icon
lib/site.ts       name, tagline, links, install commands
lib/snippets.ts   the snippet list shown on the site
public/           extension.mp4, the preview video
```

## Customizing

- **Copy and links:** edit `lib/site.ts`.
- **Snippet list:** edit `lib/snippets.ts`. It mirrors the cheat sheet on the Marketplace listing, so update both when the extension changes.
- **Colors:** edit the `:root` (light) and `.dark` (dark) tokens in `app/globals.css`.
- **Preview video:** replace `public/extension.mp4`.

## Deploying

The easiest way is [Vercel](https://vercel.com/new). Import the repo and deploy with the default Next.js settings.

## Author

Built by [@harshdev03](https://github.com/harshdev03).
