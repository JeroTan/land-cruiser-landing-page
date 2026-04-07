---
name: apple-landing-page-methodology
description: >
  Apple-style product landing page design system. Use when building any
  product landing page that aims for the cinematic, minimal, scroll-driven
  aesthetic of apple.com product pages (iPhone, Mac, etc.).
  Covers page architecture, design tokens, typography, section patterns,
  animation, layout rules, and copywriting tone.
version: 1.0.0
---

# Apple Product Landing Page Methodology

**Reference:** apple.com/ph/iphone-17-pro/
**Style:** Cinematic · Minimal · Scroll-driven storytelling

---

## 1. Page Architecture (Section Order)

Every Apple product page follows this exact section sequence:

| #   | Section                  | Purpose                                  |
| --- | ------------------------ | ---------------------------------------- |
| 1   | **Hero**                 | Full-bleed product reveal, price, 2 CTAs |
| 2   | **Quick-Highlights Nav** | Sticky anchor tabs to major sections     |
| 3   | **Design**               | Unibody / materials storytelling         |
| 4   | **Camera / Key Feature** | Deep dive into hero spec                 |
| 5   | **Performance**          | Chip / engine section with video         |
| 6   | **Battery**              | Stat callouts, endurance messaging       |
| 7   | **Ecosystem**            | "All in the family" feature grid         |
| 8   | **OS / Software**        | iOS / macOS highlights                   |
| 9   | **AI / Intelligence**    | AI feature showcase                      |
| 10  | **Utility Features**     | Secondary helpful features               |
| 11  | **Upgrade Comparison**   | Interactive competitor diff              |
| 12  | **Accessories**          | Paired product grid                      |
| 13  | **Why Buy Here**         | Trust signals (delivery, support)        |
| 14  | **Product Lineup**       | Full model comparison cards              |
| 15  | **Environment / Values** | Sustainability + brand values            |
| 16  | **Footer**               | Legal, links, footnotes                  |

---

## 2. Design Tokens

### 2.1 Backgrounds

| Token           | Value     | Usage                           |
| --------------- | --------- | ------------------------------- |
| `bg-dark`       | `#000000` | Hero, performance, pro sections |
| `bg-near-black` | `#1d1d1f` | Dark content sections           |
| `bg-light`      | `#ffffff` | Default content sections        |
| `bg-off-white`  | `#f5f5f7` | Alternate light sections        |
| `bg-softer`     | `#fbfbfd` | Cards, subtle section breaks    |

### 2.2 Text

| Token             | Value     | Usage                             |
| ----------------- | --------- | --------------------------------- |
| `text-on-dark`    | `#f5f5f7` | All text on dark backgrounds      |
| `text-primary`    | `#1d1d1f` | Primary text on light backgrounds |
| `text-secondary`  | `#6e6e73` | Subtitles, descriptions, captions |
| `text-stat-label` | `#6e6e73` | Labels beneath large stat numbers |

### 2.3 Interactive

| Token             | Value     | Usage                           |
| ----------------- | --------- | ------------------------------- |
| `cta-blue`        | `#0071e3` | Primary "Buy" button            |
| `cta-blue-hover`  | `#0077ed` | Hover state                     |
| `link-blue`       | `#2997ff` | Text links on dark backgrounds  |
| `link-blue-light` | `#0071e3` | Text links on light backgrounds |

### 2.4 Rules

- **NEVER** put a colored background behind product photography — let it breathe
- **NEVER** use drop shadows on product images — they clip naturally or use masks
- **NEVER** use more than 2 font weights in a single section (e.g., 700 + 400)
- Use black backgrounds for performance/pro sections, white for camera/software

---

## 3. Typography

**Font Stack:**

```css
font-family:
  -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial,
  sans-serif;
```

### 3.1 Type Scale

| Role               | Size (desktop) | Size (mobile) | Weight | Letter-spacing     |
| ------------------ | -------------- | ------------- | ------ | ------------------ |
| Hero Headline      | 80–96px        | 40–48px       | 700    | -0.5px             |
| Section Headline   | 48–64px        | 32–40px       | 700    | -0.3px             |
| Subheadline        | 28–32px        | 21–24px       | 600    | 0                  |
| Stat Number        | 56–72px        | 40–48px       | 700    | -0.5px             |
| Body               | 17–21px        | 15–17px       | 400    | 0                  |
| Section Eyebrow    | 12–14px        | 12px          | 600    | 0.08em (uppercase) |
| Caption / Footnote | 12px           | 12px          | 400    | 0                  |

### 3.2 Rules

- Section eyebrows are ALL CAPS, small, spaced — placed above the headline in `text-secondary`
- Headlines run 2–5 words on dark sections, up to 8 on light sections
- Body copy never exceeds 65–70 characters per line (use `max-width: 650px`)
- Line height: 1.1 for headlines, 1.6 for body

---

## 4. Section Patterns

### 4.1 HERO

```
[Full viewport height — dark background]
  <small eyebrow>  "iPhone 17 Pro"
  <h1> "Hello, Titanium."         ← bold, large, centered
  <p>  [tagline or feature intro]
  [Product image — fills 60–70% of viewport]
  <price>  From ₱79,990
  [CTA: "Buy"] [CTA: "Learn more →"]
```

- Background: `#000000`
- Text: `#f5f5f7`
- Image has no border, no shadow — floats on the dark bg
- CTA buttons: pill-shaped, blue fill (Buy) + ghost/text (Learn more)

---

### 4.2 QUICK-HIGHLIGHTS NAV

```
[Sticky bar — appears after hero scrolls out]
  Tab | Tab | Tab | Tab | Tab  (horizontal scroll on mobile)
  Active tab: underline or background pill indicator
```

- Background: `rgba(29,29,31,0.72)` with `backdrop-filter: blur(20px)`
- Smooth-scroll to section `id` on click
- Active state driven by `IntersectionObserver` per section
- Height: 44px (matches iOS nav bar)

---

### 4.3 FEATURE INTRO (repeated pattern for each major spec)

```
[Full-width section — alternates dark / light]
  <eyebrow>  "Design"
  <h2> "Unibody enclosure."
  <tagline> "Makes a strong case for itself."
  <p> [2–3 sentences of body copy, max 65 chars/line]

  [Autoplay muted loop video OR large product image — full bleed]

  [Optional: stat chips row]
    "Up to 8x zoom"  |  "All 48MP rear cameras"
```

- Video: `autoplay muted loop playsinline` — no controls shown
- Images: `loading="lazy"`, aspect ratio locked
- Stat chips: `rounded-full` pill style, border `1px solid rgba(255,255,255,0.2)` on dark

---

### 4.4 STATS ROW

```
[3–4 items in a single row, centered]
  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
  │   31        │ │   37        │ │   50%       │
  │   hours     │ │   hours     │ │   in 20 min │
  │   17 Pro    │ │   17 Pro Max│ │   charge    │
  └─────────────┘ └─────────────┘ └─────────────┘
```

- Stat number: 56–72px bold
- Unit inline with number (superscript or inline span)
- Label: 17px `text-secondary`
- Dividers: `1px solid rgba(0,0,0,0.1)` between items
- Count-up animation on scroll enter

---

### 4.5 FEATURE CARD GRID

```
[2×n or 3×n grid — image top, copy bottom]
  ┌──────────┐ ┌──────────┐
  │  [img]   │ │  [img]   │
  │ Feature  │ │ Feature  │
  │ name     │ │ name     │
  │ desc     │ │ desc     │
  └──────────┘ └──────────┘
```

- No card borders on dark sections — content floats
- Subtle `border: 1px solid #d2d2d7` on light sections
- Image fills top 50–60% of card
- Card padding: 24px
- Grid gap: 24px (col), 40px (row)

---

### 4.6 UPGRADE COMPARISON

```
[Interactive section]
  "Worth the upgrade? 100 percent."
  [Dropdown: "Select an iPhone to compare"]

  Feature A  [image]   ✓ / ✗
  Feature B  [badge]   ✓ / ✗
  Feature C            ✓ / ✗
```

- Comparison rows animate in when model is selected
- Use `transition: opacity 300ms, transform 300ms`
- Checkmarks: `#34c759` green; omit negative comparisons entirely

---

### 4.7 PRODUCT LINEUP CARDS

```
[Horizontal scroll or 2-col grid]
┌─────────────────────────┐
│  [Product image]        │
│  ○ ○ ● ○  (swatches)   │
│  iPhone 17 Pro          │
│  Tagline                │
│  From ₱79,990           │
│  ─────────────          │
│  Spec list (3–4 items)  │
│  [Buy] [Learn more]     │
└─────────────────────────┘
```

- Color swatches: 14px circles, selected has blue ring
- Spec list: 14px `text-secondary`, checkmark prefix icon
- Cards separated by `1px solid #d2d2d7`

---

### 4.8 VALUES / ENVIRONMENT FOOTER

```
[3-column grid on white bg]
  Icon
  Bold title
  1-2 sentence description
  [Learn more →]
```

- Icons: simple SF Symbols style (thin line, 40px)
- Column gap: 40px
- Section has generous top/bottom padding (120px)

---

## 5. Layout & Spacing Rules

| Rule                               | Value                                          |
| ---------------------------------- | ---------------------------------------------- |
| Max content width                  | `980px` (centered)                             |
| Section vertical padding (desktop) | `120px` top + bottom                           |
| Section vertical padding (mobile)  | `60px` top + bottom                            |
| Page horizontal gutter             | `20px`                                         |
| Full-bleed media                   | `width: 100vw; margin-left: calc(-50vw + 50%)` |
| Grid column gap                    | `24px`                                         |
| Grid row gap                       | `40px`                                         |

---

## 6. Animation System

### 6.1 Scroll-Triggered Entrance (every section heading + body)

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 600ms ease-out,
    transform 600ms ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    }),
  { threshold: 0.15 },
);
document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => observer.observe(el));
```

### 6.2 Staggered Children

- Apply `transition-delay: 100ms * index` to siblings in a grid
- Max delay: 400ms

### 6.3 Stat Count-Up

```js
function countUp(el, target, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}
```

Trigger via `IntersectionObserver` — fire once only.

### 6.4 Parallax Hero Image

```css
.hero-image {
  will-change: transform;
}
```

```js
window.addEventListener(
  "scroll",
  () => {
    heroImage.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  },
  { passive: true },
);
```

### 6.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .hero-image {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
```

---

## 7. Responsiveness

| Breakpoint | Width       | Key Changes                                      |
| ---------- | ----------- | ------------------------------------------------ |
| Mobile     | < 768px     | 1-col layout; stats 2×2 grid; hero portrait crop |
| Tablet     | 768–1024px  | 2-col grid; stats row stays 4 items              |
| Desktop    | 1024–1440px | Full layout                                      |
| Wide       | > 1440px    | Content capped at 980px; bg extends full width   |

- Hero image: serve portrait crop on mobile via `<picture>` + `<source media="(max-width: 767px)">`
- Stats row: `flex-wrap: wrap` with `min-width: 45%` on mobile → 2 per row
- Feature grid: `1fr` mobile → `repeat(2,1fr)` tablet → `repeat(3,1fr)` desktop

---

## 8. Copywriting Tone & Rules

| Rule                                                | Example                                               |
| --------------------------------------------------- | ----------------------------------------------------- |
| Hero headline: product name + bold claim (≤6 words) | "Unibody enclosure. Makes a strong case."             |
| Taglines use wordplay or alliteration               | "A big zoom forward."                                 |
| Lead with the number, then explain                  | "Up to 8x optical-quality zoom."                      |
| Feature name: short noun phrase (Title Case)        | "Center Stage front camera"                           |
| Body copy: max 40 words, no jargon                  | "Capture sharp, detailed images even when it's dark." |
| CTA text: verb + noun, no punctuation               | "Buy iPhone 17 Pro" / "Learn more"                    |
| Avoid superlatives without data                     | ✗ "Amazing" — ✓ "3x better scratch resistance"        |
| Section eyebrows: single word or short phrase       | "Design" / "Cameras" / "Performance"                  |

---

## 9. Component Checklist for a New Product Landing Page

- [ ] Full-bleed hero: dark bg, product image, price, 2 CTAs
- [ ] Sticky quick-nav with blur/glass effect, anchor scroll, IntersectionObserver active state
- [ ] At least one autoplay muted loop video per main section
- [ ] Stats row with count-up animation (3–4 items)
- [ ] Feature card grid (2×n or 3×n)
- [ ] All scroll-triggered entrance animations (fade + translateY)
- [ ] Responsive images with portrait/landscape source switching
- [ ] Comparison section with interactive model selector
- [ ] Product lineup cards with color swatches
- [ ] Values / environment section (3-column)
- [ ] Footer with legal footnotes
- [ ] `prefers-reduced-motion` disables all animations
