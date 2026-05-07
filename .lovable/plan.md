
# Clean Room Migration → `.astrov6/` (Astro 6 + Tailwind v4 + Cloudflare static)

## Scope & Principles

- New, isolated tree: **everything lives under `.astrov6/`**. The existing Vite/React app is untouched.
- **Static-first**: every section is a `.astro` component. **No React ships to the browser** unless an island is genuinely required.
- This site has no data fetching, no `react-query` calls, and no runtime `zod` usage in the existing code — so there is nothing to move into Astro frontmatter beyond plain TS constants. (Confirmed by reading `Index.tsx`, `Services.tsx`, `About.tsx`, `Contact.tsx`.)
- After review, **no React islands are actually needed**. The mobile drawer is a simple toggle (~10 lines of vanilla JS), forms are `mailto:`, no theme switcher, no `vaul`. We will NOT ship React to satisfy the brief — it would be dead weight. (See "Suggestions" below.)

---

## Target Directory Layout

```text
.astrov6/
├── astro.config.mjs
├── wrangler.jsonc
├── package.json
├── tsconfig.json
├── public/
│   ├── robots.txt
│   └── favicon.ico
└── src/
    ├── assets/                 # copied from src/assets/*.jpg
    ├── styles/
    │   └── global.css          # Tailwind v4 CSS-first + design tokens
    ├── layouts/
    │   └── BaseLayout.astro    # <html>, <head>, SEO, imports global.css
    ├── components/
    │   ├── Navbar.astro
    │   ├── Footer.astro
    │   ├── PageHero.astro
    │   ├── SectionHeading.astro
    │   ├── CTABanner.astro
    │   └── home/
    │       ├── HomeHero.astro
    │       ├── ServicesBand.astro
    │       ├── ServicesGrid.astro
    │       ├── ProcessTimeline.astro
    │       └── WhyUs.astro
    └── pages/
        ├── index.astro         # was pages/Index.tsx
        ├── services.astro
        ├── about.astro
        ├── contact.astro
        └── 404.astro           # was NotFound.tsx
```

---

## Routing Map

| React route                  | Astro file                          |
| ---------------------------- | ----------------------------------- |
| `/` (`pages/Index.tsx`)      | `src/pages/index.astro`             |
| `/services`                  | `src/pages/services.astro`          |
| `/about`                     | `src/pages/about.astro`             |
| `/contact`                   | `src/pages/contact.astro`           |
| `*` (NotFound)               | `src/pages/404.astro`               |

`react-router-dom`, `BrowserRouter`, `Layout.tsx`, and the scroll-to-top effect are dropped — Astro handles full-page navigation natively.

---

## Styling: Tailwind v4 (CSS-first)

`src/styles/global.css` will:

1. `@import "tailwindcss";`
2. `@import "tw-animate-css";` (replaces v3 `tailwindcss-animate`)
3. Port every CSS variable from `src/index.css` `:root` and `.dark` exactly as-is (HSL values for `--background`, `--primary`, `--accent`, `--gradient-*`, `--shadow-*`, etc.).
4. `@theme inline { ... }` block mapping all tokens for Tailwind v4 utilities (`--color-primary`, `--color-accent`, `--font-serif`, `--font-sans`, `--breakpoint-nav: 840px`, `--shadow-elegant`, `--background-image-gradient-hero`, etc.) — replaces `tailwind.config.ts` entirely.
5. Re-declare the existing `@layer utilities` helpers: `.container-prose`, `.gold-divider`, `.text-gradient-gold`, plus `@keyframes fade-in-up` + `.animate-fade-in-up`.
6. Self-host **Inter** + **Playfair Display** via `@font-face` from `/public/fonts/` (drop the Google Fonts `@import` for performance and Cloudflare friendliness).

`BaseLayout.astro` does `import "../styles/global.css";` once, so every page inherits it.

---

## Component Conversion

All conversions are mechanical: JSX → Astro template, `className` → `class`, `<Link to="/x">` → `<a href="/x">`, `lucide-react` → inline SVGs (or `astro-icon` — see Suggestions). The full Tailwind class strings are preserved verbatim.

| React source                              | Astro target                                | Notes                                                                                       |
| ----------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `components/site/Navbar.tsx`              | `components/Navbar.astro`                   | Active link via `Astro.url.pathname`. Mobile menu + scroll state = inline `<script>` (~15 lines). |
| `components/site/Footer.tsx`              | `components/Footer.astro`                   | Pure static.                                                                                |
| `components/site/PageHero.tsx`            | `components/PageHero.astro`                 | Props via `Astro.props`. `<Image />` from `astro:assets`.                                   |
| `components/site/SectionHeading.tsx`      | `components/SectionHeading.astro`           | Props-driven, identical markup.                                                             |
| `components/site/CTABanner.tsx`           | `components/CTABanner.astro`                | Pure static.                                                                                |
| `components/ui/button.tsx` (shadcn)       | **Removed** — replaced by a tiny `Button.astro` or class-only `<a>` tags using existing variant classes. shadcn Button only exists to handle `asChild` + variants for React; in Astro we just use `<a class="...">`. |
| `pages/Index.tsx` body                    | Split into `home/*.astro` partials, composed in `pages/index.astro`. |                                                                                             |
| `pages/Services.tsx`                      | `pages/services.astro` — `services` array stays in frontmatter, `.map()` becomes `{services.map(...)}` template loop. |                                                                                             |
| `pages/About.tsx`, `pages/Contact.tsx`    | Direct ports.                               |                                                                                             |
| `pages/NotFound.tsx`                      | `pages/404.astro` — drop `useLocation`, just static markup. |                                                                                             |

**Islands**: none planned (see Suggestions). If you later add a contact form or theme toggle, drop it in `src/components/islands/*.tsx` with `client:load` and add `@astrojs/react`.

---

## `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swflsolutions.com',
  output: 'static',
  adapter: cloudflare({ mode: 'static' }),
  integrations: [sitemap()],
  image: { domains: [] },
  vite: { css: { transformer: 'lightningcss' } },
});
```

Tailwind v4 is wired via the official Vite plugin (`@tailwindcss/vite`) inside `vite.plugins` — no separate Astro integration needed in v6.

## `wrangler.jsonc` (inside `.astrov6/`)

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "swfl-solutions",
  "compatibility_date": "2026-05-01",
  "assets": { "directory": "./dist" },
  "observability": { "enabled": true }
}
```

Static mode → Cloudflare just serves `./dist`; no Workers runtime needed.

## `package.json` (inside `.astrov6/`)

Minimal — only what's actually used:

```jsonc
{
  "name": "swfl-solutions-astro",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "wrangler deploy"
  },
  "dependencies": {
    "astro": "^6.0.0",
    "@astrojs/cloudflare": "^12.0.0",
    "@astrojs/sitemap": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "tw-animate-css": "^1.0.0"
  },
  "devDependencies": {
    "wrangler": "^4.0.0",
    "typescript": "^5.6.0"
  }
}
```

No React, no Radix, no `react-query`, no `zod`, no `lucide-react`, no `vaul`, no `tailwind-merge` / `clsx` (Astro doesn't need `cn`). If/when an island is added, install only the specific Radix package required.

---

## React-Query / Zod Refactor

A repo-wide check confirms neither library is actually used for data — `react-query` only wraps the app in a provider, and `zod` is imported only via shadcn `form.tsx` which the site never renders. **Action**: drop both. No frontmatter port required.

---

## Suggestions / Open Questions

1. **No React islands needed.** The brief lists `vaul` drawer, theme switcher, and forms — none exist in this site. I recommend shipping zero JS and skipping `@astrojs/react` entirely. Lighthouse will love you. Confirm OK, or tell me which island you want kept.
2. **Icons**: `lucide-react` is React-only. Recommend **`astro-icon` + `@iconify-json/lucide`** so we keep the same icon names (`<Icon name="lucide:phone" />`) without shipping React. Alternative: inline SVGs (smaller, more boilerplate).
3. **Self-hosted fonts**: I'll drop the Google Fonts `@import` and self-host Inter + Playfair under `/public/fonts/` for faster FCP and Cloudflare-cache friendliness. Say the word if you'd rather keep Google Fonts.
4. **shadcn Button**: redundant in pure Astro. I'll provide a tiny `Button.astro` wrapper with the same `bg-accent ... hover:bg-accent-glow` variants so existing class strings keep working.
5. **SEO upgrades for the migration**: add `@astrojs/sitemap`, per-page `<title>`/`<meta description>`, JSON-LD `LocalBusiness` block in `BaseLayout.astro`. The current React app sets these only in `index.html`.
6. **Cloudflare deployment**: with `output: 'static'` + `assets.directory`, you can also use **Cloudflare Pages** (no Worker) by pointing it at `.astrov6/dist`. `wrangler.jsonc` covers Workers Static Assets — happy to swap to a Pages-style setup if preferred.
7. **Should the existing Vite app stay?** The brief says "clean room" so I'll leave the current `src/` untouched. Once you've validated `.astrov6/`, we can delete the old tree in a follow-up.

Reply with answers (or "go") and I'll implement.
