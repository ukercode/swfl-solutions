# SWFL Solutions — Astro 6 Clean-Room Build

Static Astro 6 + Tailwind v4 site, deployable to Cloudflare (Workers Static Assets or Pages).

## Setup

```sh
cd .astrov6
pnpm install   # or npm / bun
pnpm dev       # http://localhost:4321
pnpm build     # outputs to ./dist
pnpm preview
```

## Deploy (Cloudflare)

**Workers Static Assets** (this repo is configured for it):

```sh
pnpm build
pnpm wrangler deploy
```

**Cloudflare Pages**: connect the repo, set build command `pnpm build`, output dir `.astrov6/dist`.

## Structure

- `src/pages/*.astro` — file-based routes (`/`, `/services`, `/about`, `/contact`, `/404`).
- `src/layouts/BaseLayout.astro` — `<head>`, SEO, JSON-LD, imports `global.css`.
- `src/components/*.astro` — static components.
- `src/components/home/*.astro` — homepage sections.
- `src/styles/global.css` — Tailwind v4 with `@theme inline` design tokens (no `tailwind.config`).

## Notes

- **Zero React shipped.** Mobile menu + scroll state are vanilla `<script>` in `Navbar.astro`.
- Icons via `astro-icon` + `@iconify-json/lucide` (same names as `lucide-react`).
- To add a React island later: `pnpm add @astrojs/react react react-dom`, register in `astro.config.mjs`, then place `.tsx` in `src/components/islands/` and use `client:load`.
