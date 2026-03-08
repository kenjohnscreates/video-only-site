# Kenny Johns — Personal Website PRD

## 1. Overview

A single-page portfolio website for **Kenny Johns**, a creative professional. The site showcases a video reel, visual work samples, client roster, service offerings, and contact information. The tone is bold, playful, and confident — drawing creative direction from the Dopple Press aesthetic: textured backgrounds, vibrant color blocking, strong typography, and personality-driven design.

---

## 2. Creative Direction (from reference screenshots)

| Element           | Direction                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Typography**    | Bold, oversized display headings (condensed sans-serif or display face). Clean sans-serif for body. Mix of weights for hierarchy.                              |
| **Color palette** | Vibrant primaries — hot pink, electric blue, bold red, bright yellow — set against warm off-white/paper textures and occasional dark sections.                 |
| **Textures**      | Subtle paper/grain texture on backgrounds. Risograph-inspired noise. Nothing perfectly clean — tactile and printed feel.                                       |
| **Layout**        | Full-bleed color-blocked sections. Asymmetric compositions. Playful element placement (rotated labels, floating shapes). Generous whitespace between sections. |
| **Personality**   | Fun, approachable, slightly irreverent. The site should feel like a person, not a template. Micro-interactions and motion add life.                            |
| **Navigation**    | Circular/pill-shaped nav items with a hand-drawn or rounded feel. Sticky or floating menu.                                                                     |

---

## 3. Site Structure (Single Page)

### 3.1 Header / Navigation

- **Brand name**: "Kenny Johns" as the primary logo/wordmark — large, bold, personality-driven type.
- **Nav items**: Reel · Clients · Services · Contact
- **Behavior**: Fixed/sticky header. On scroll, it can compact. Mobile: hamburger menu or slide-out drawer.
- **Style**: Circular pill-shaped links (inspired by the Dopple sidebar nav). Consider a floating side-nav on desktop.

### 3.2 Hero / Intro

- **One intro paragraph** — a short, punchy personal statement. Large type, possibly with key words **bolded** or highlighted in accent color.
- **Background**: Textured off-white or a bold color block.
- **Optional**: Subtle animated shapes or floating elements for visual interest.

### 3.3 Video Reel Section

- **Content**: Single 90-second MP4 (high bitrate).
- **Player**: Custom-styled video player (no default browser chrome). Large play button overlay on a poster frame. Plays inline.
- **Hosting**: YouTube embed (unlisted or public). Lite-youtube-embed or facade pattern to avoid loading the heavy YouTube iframe until the user clicks play — critical for mobile performance.
- **Style**: Full-width or near-full-width with a color-blocked background section.

### 3.4 Auto-Scrolling Work Gallery

- **Content**: 10–20 visuals — GIFs, memes, ad creatives, social content.
- **Behavior**: Infinite horizontal auto-scroll (marquee-style). Pauses on hover. Can optionally be dragged.
- **Layout**: A single horizontal strip or two rows scrolling in opposite directions.
- **Style**: Images at consistent height, variable width. Slight rounded corners. Possible tilt/rotation for playfulness.

### 3.5 Client Logo Section

- **Content**: 20–30 client logos.
- **Layout**: Grid of logos (4–6 per row on desktop, 2–3 on mobile). OR a second auto-scroll marquee strip.
- **Style**: Logos in monochrome/grayscale by default, color on hover. Consistent sizing in a grid.
- **Heading**: Bold section title — "Clients" or a more playful variation.

### 3.6 Services Section

- **Content**: List of service offerings (to be defined by Kenny).
- **Layout**: Card-based grid or bold typographic list. Could use tabbed navigation (inspired by the Dopple "How / What / Where" tabs).
- **Style**: Each service as a color-blocked card or large text item with hover interaction. Icons or small illustrations optional.

### 3.7 Contact / Footer

- **Email form**: Simple form — Name, Email, Message, Submit. Submissions go to Kenny's email.
- **Social links**: Icons linking to X (Twitter) and LinkedIn.
- **Style**: Bold background color (pink, dark, or contrasting). Large "Let's Work Together" heading.
- **Legal**: Small copyright line at the bottom.

---

## 4. Technical Requirements

### 4.1 Performance

- Lighthouse score ≥ 90 on all metrics.
- Lazy-load images and video poster.
- Optimize all GIFs (consider converting to WebM/MP4 for the gallery for smaller file sizes).
- Video streams from external host (no large files in the build).

### 4.2 Responsive Design

- Fully responsive: desktop (1440px+), laptop (1024px), tablet (768px), mobile (375px).
- Touch-friendly gallery scrolling on mobile.
- Mobile nav: hamburger → drawer or overlay.

### 4.3 Accessibility

- Semantic HTML (header, nav, main, section, footer).
- Alt text on all images.
- Keyboard-navigable.
- Sufficient color contrast on text.
- Video captions if available.

### 4.4 SEO

- Meta title, description, Open Graph tags.
- Structured data (Person schema).
- Fast load times.
- Canonical URL.

### 4.5 Analytics

- Basic analytics integration (Plausible, Fathom, or Google Analytics).

---

## 5. Interactions & Motion

| Element           | Animation                                             |
| ----------------- | ----------------------------------------------------- |
| **Page load**     | Staggered fade-in of hero text and elements           |
| **Scroll**        | Sections fade/slide in as they enter viewport         |
| **Gallery**       | Continuous auto-scroll, pause on hover, drag to scrub |
| **Client logos**  | Grayscale → color on hover (CSS filter transition)    |
| **Nav links**     | Scale/color transition on hover                       |
| **Video**         | Play button pulse or subtle float animation           |
| **Service cards** | Lift/shadow on hover                                  |
| **Form submit**   | Button state change + success message                 |

---

## 6. Content Checklist (Kenny to provide)

- [ ] Brand wordmark or preferred font for "Kenny Johns"
- [ ] Intro paragraph text
- [ ] 90-second video reel MP4 + poster frame image
- [ ] 10–20 gallery visuals (GIF/PNG/JPG)
- [ ] 20–30 client logos (SVG or high-res PNG, transparent backgrounds preferred)
- [ ] List of services with short descriptions
- [ ] Social media profile URLs
- [ ] Receiving email address for the contact form
- [ ] Preferred domain name
- [ ] Any legal/copyright text

---

## 7. Recommended Services & Stack

### 7.1 What You'll Need (Services)

| Service                      | Purpose                                 | Choice                                       | Est. Cost |
| ---------------------------- | --------------------------------------- | -------------------------------------------- | --------- |
| **Domain name**              | Your web address (e.g., kennyjohns.com) | TBD (Namecheap or Cloudflare Registrar)      | ~$12/year |
| **Static hosting**           | Serves the website files                | **Vercel** (existing account, free tier)     | Free      |
| **Video hosting**            | Streams the 90s reel                    | **YouTube** (existing account)               | Free      |
| **Form backend**             | Receives contact form submissions       | **Formspree** (free tier: 50 submissions/mo) | Free      |
| **Analytics**                | Track visitors                          | **Vercel Analytics** (bundled with hosting)  | Free      |
| **CDN / Image optimization** | Fast global delivery + optimized images | Built into Vercel                            | Free      |

**Total monthly cost: $0/mo** + ~$12/year for a domain name.

### 7.2 Tech Stack (final decision: Option A)

| Layer            | Tool                                                  | Why                                                                                                          |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Framework**    | **Astro**                                             | Static-first, ships zero JS by default, fast. Auto image optimization. Perfect for a mobile-first portfolio. |
| **Styling**      | **Tailwind CSS** + custom CSS for textures/animations | Rapid styling with utility classes. Custom CSS for the unique personality. Auto-purges unused styles.        |
| **Animations**   | **CSS animations** + **Intersection Observer**        | Scroll-triggered reveals, auto-scroll gallery, hover states. No heavy animation library needed.              |
| **Gallery**      | **CSS marquee animation**                             | Zero-dependency infinite scroll. Touch-friendly. Lightweight.                                                |
| **Video**        | **YouTube embed with lite-youtube facade**            | Loads ~800KB YouTube iframe only on play tap. Critical for mobile.                                           |
| **Contact form** | **Formspree** (free tier)                             | No backend needed. 50 submissions/mo free.                                                                   |
| **Deployment**   | **Vercel** (existing account)                         | One-click deploy from Git, preview URLs, fast CDN, free.                                                     |

---

## 8. Timeline Estimate

| Phase                                        | Duration              |
| -------------------------------------------- | --------------------- |
| Design system (colors, type, spacing tokens) | 1 day                 |
| Layout & structure (HTML/components)         | 1–2 days              |
| Styling & textures                           | 1–2 days              |
| Video integration                            | 0.5 day               |
| Gallery (auto-scroll)                        | 0.5–1 day             |
| Client logos section                         | 0.5 day               |
| Services section                             | 0.5 day               |
| Contact form                                 | 0.5 day               |
| Animations & polish                          | 1 day                 |
| Responsive & testing                         | 1 day                 |
| **Total**                                    | **~7–9 working days** |

---

## 9. Out of Scope (for now)

- Blog / CMS
- E-commerce / payments
- User accounts / authentication
- Multi-page routing (everything is single-page)
- Backend server

---

## 10. Decisions Made

1. **Wordmark**: We will design a custom wordmark/type treatment for "Kenny Johns."
2. **Gallery links**: No — visuals are display only, no click-through.
3. **Services**: To be defined collaboratively during build.
4. **Video hosting**: YouTube (Kenny has an existing account). Embed via YouTube iframe, styled to blend with the site.
5. **Social links**: X (Twitter) and LinkedIn only.
6. **Domain**: Not yet purchased. Needs to be acquired before launch.
7. **Hosting**: Vercel (Kenny has an existing account).
8. **Analytics**: Vercel Analytics (free tier, already bundled with hosting).
9. **Mobile-first priority**: Majority of traffic expected on mobile. Mobile performance and UX are the primary design constraint.
