
## SWFL Solutions — Professional Website

A polished, corporate-professional 4-page site for an Owner Representative firm in Southwest Florida (Englewood, FL), designed to build trust with homeowners, businesses/developers, and real estate investors.

### Design System
- **Palette:** Deep navy (primary), warm gold accent, ivory/off-white background, charcoal text — all HSL semantic tokens
- **Typography:** Serif headlines (Playfair Display) + clean sans-serif body (Inter)
- **Style:** Generous whitespace, large hero imagery, gold dividers and accents, refined cards with soft shadows, sticky transparent-to-solid nav, gradient gold/navy utilities
- All tokens defined in `src/index.css` + `tailwind.config.ts`

### Global Elements
- **Sticky Navigation (`Navbar.tsx`):** Brand "SWFL Solutions" with tagline "Owner Representative · Project Management" · Links: Home / Services / About / Contact · Gold "Free Consultation" CTA · Transparent on home hero, solid elsewhere · Mobile hamburger menu
- **Footer (`Footer.tsx`):** Brand block, Services list, Company links, Contact info (941-249-5750 · office@swflsolutions.com · Englewood, FL 34224)

### Page 1 — Home (`src/pages/Index.tsx`)
1. **Hero:** Full-bleed image with gradient overlay, eyebrow "Southwest Florida · Since Day One", headline "Working for You as Your Owner Representative", intro copy + two CTAs (Schedule Free Assessment / View Our Services)
2. **Services band:** Navy strip listing the 4 core services separated by gold diamonds
3. **Services grid — "Your Advocate from Vision to Completion":** 6 cards
   - Owner Representation
   - Project Management
   - Project Recovery
   - Construction Oversight
   - Pre-Construction Advisory
   - Project Assessment
4. **Process timeline — "How We Work" / "A Proven, Transparent Process":** 5 numbered steps
   - 01 Analysis · 02 Design · 03 Coordination · 04 Oversight · 05 Closeout
5. **Why SWFL Solutions — "The Advantage of True Owner Advocacy":** 6 value cards (Cost Savings, Expert Management, Direct Control, Rapid Completion, Stress Reduction, Transparent Communication)
6. **Final CTA banner** (shared `CTABanner` component)

### Page 2 — Services (`src/pages/Services.tsx`)
- PageHero: "Owner Representation & Project Management Services - Built Around You"
- Sticky in-page quick-nav linking the 4 service sections
- 4 detailed service sections with image, intro, body, and bulleted sub-services (alternating background, image side-swap):
  - Owner Representation
  - Project Management
  - Project Recovery
  - Construction Oversight
- Closing CTA: "Not Sure Where To Begin?"

### Page 3 — About (`src/pages/About.tsx`)
- PageHero: "Your Trusted Partner in Southwest Florida"
- **Our Journey — "Built in Florida. Built on Trust."** Two-column intro about founding in Englewood and the SWFL service area
- **Mission & Values — "What Drives Every Decision We Make":** 4 value cards (Loyalty, Integrity, Excellence, Vigilance)
- **Why Choose Us — "100% Loyalty. Zero Conflicts."** Three audience callouts with gold left border:
  - For Homeowners
  - For Businesses & Developers
  - For Real Estate Investors
- Closing CTA: "Let's Talk About Your Project"

### Page 4 — Contact (`src/pages/Contact.tsx`)
- PageHero: "Schedule Your Free Project Assessment"
- Three large contact cards: **Call** (941-249-5750), **Email** (office@swflsolutions.com), **Visit** (Englewood, FL 34224) — gold gradient icons, click-to-call/email/maps
- **Service Area** block: "Proudly Serving Southwest Florida" with city pill badges (Englewood, Venice, Sarasota, North Port, Port Charlotte, Punta Gorda) and county mentions.
- **Response Promise** card: same-day calls, 1-business-day email, free consultation, no-obligation assessment
- Final navy CTA section: "Ready to Get Started?" with prefilled mailto and tel buttons

### Imagery
- Per-page hero images (`hero-home.jpg`, `hero-services.jpg`, `hero-about.jpg`, `hero-contact.jpg`)
- Service section images (`service-owner-rep.jpg`, `service-pm.jpg`, `service-recovery.jpg`, `service-oversight.jpg`)
- All images optimized and lazy-loaded

### Out of Scope
- No projects/portfolio page
- No backend, contact form, or database — contact page surfaces phone, email, and location only
