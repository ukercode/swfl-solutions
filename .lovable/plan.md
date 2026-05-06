## Astro Port: Header + Home Hero

I'll deliver Astro v6 + Tailwind v4 versions of the Navbar and the homepage Hero, using the `global.css` design tokens already shared. Components will be `.astro` files (static markup + scoped `<script>` for interactivity) so they work with zero client framework — no React needed.

### Files I'll provide

1. **`src/components/Navbar.astro`**
   - Same layout: logo (SWFL Solutions + tagline), centered phone number, mobile call button, hamburger toggle, desktop nav links, gold "Free Consultation" CTA.
   - Replaces `react-router-dom` `Link`/`NavLink` with native `<a href>`. Active-link styling computed at render time from `Astro.url.pathname`.
   - Replaces React `useState`/`useEffect` with a small inline `<script>`:
     - Toggles `scrolled` class on `<header>` via a scroll listener.
     - Toggles mobile menu open/close + swaps Menu/X icons.
   - Transparent-on-home behavior: server-renders transparent only when `Astro.url.pathname === "/"`, then the scroll script flips it on scroll.
   - Icons: inline SVGs for `Menu`, `X`, `Phone` (no `lucide-react` dependency). I'll note that `astro-icon` + `lucide` is an optional swap.
   - Uses the same Tailwind classes you have today (`container-prose`, `nav:` breakpoint, `bg-accent`, `shadow-card-soft`, etc.) — all resolved by the `global.css` `@theme inline` block.

2. **`src/components/Hero.astro`**
   - Port of the homepage hero section in `src/pages/Index.tsx` (lines 77–122): full-viewport image, gradient overlay, eyebrow, headline with gold accent span, subhead, two CTAs.
   - Accepts props: `image` (ImageMetadata), `eyebrow`, `title`, `accentTitle`, `subtitle`, plus optional `primaryCta` / `secondaryCta` `{ label, href }`.
   - Uses Astro's `<Image />` from `astro:assets` for the hero image (responsive + optimized).
   - Same animation classes (`animate-fade-in-up`) — these come from `global.css`.

3. **`src/pages/index.astro` (snippet)**
   - Minimal example showing how to import `Layout.astro`, `Navbar.astro`, and `Hero.astro` and pass the hero image from `src/assets/hero-home.jpg`.

### Notes / caveats I'll include

- **No React runtime** — these are pure Astro components. If you'd rather keep them as `.tsx` islands (`client:load`), say the word and I'll output that variant instead.
- **Routing**: Astro is file-based, so `/services` ⇒ `src/pages/services.astro`, etc. Active-link detection uses `Astro.url.pathname`.
- **Phone tap-to-call** and `translate="no"` attributes are preserved.
- **Fonts**: already loaded via `@font-face` in `global.css` from the previous step.
- **Icons**: inline SVGs by default. I'll add a short "swap to `astro-icon`" snippet at the end.

### Open question

Want the Hero to be **generic + reusable** (props-driven, as above) or a **one-off `HomeHero.astro`** with the exact homepage copy hardcoded? Default plan is generic + reusable — confirm or override when you hit Implement.