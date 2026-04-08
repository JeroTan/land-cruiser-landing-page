## Context

Toyota Mobility Solutions Philippines requires a new, high-impact landing page for the Land Cruiser. The goal is to build an immersive, cinematic experience inspired by Apple's product landing pages while strictly adhering to the official Toyota Motor Corporation Brand Design System. The project is an Astro application deployed to Cloudflare.

## Goals / Non-Goals

**Goals:**
- Deliver a fast, static-first landing page using Astro and Cloudflare.
- Implement a cinematic, scroll-driven user experience (Apple methodology) including full-bleed hero, sticky nav, alternating feature sections, and stat rows.
- Strictly adhere to Toyota's official brand colors, Toyota Type/Inter typography, and 4px spacing system.
- Ensure high performance and accessibility (respecting `prefers-reduced-motion`).

**Non-Goals:**
- Building a full e-commerce checkout flow.
- Modifying backend systems or CMS integrations (content will be static for the prototype).
- Creating complex 3D WebGL models (we will use static/video assets for parallax and animations).

## Decisions

- **Framework**: Astro (Static Site Generation) deployed to Cloudflare Workers/Pages. Rationale: Optimal performance, minimal JS payload, matches user's existing setup.
- **Styling**: Tailwind CSS extended with Toyota Brand Design tokens. Rationale: Rapid UI development while enforcing the 4px spacing scale and strict color palette (Toyota Red `#EB0A1E`, Black, White, Gray).
- **Animations**: Native `IntersectionObserver` and vanilla CSS transitions/JS. Rationale: Avoids heavy third-party animation libraries (like GSAP) to maintain maximum performance, aligning with Apple's minimal implementation strategy.
- **Typography Integration**: Use Inter as a fallback if Toyota Type web fonts are unavailable, strictly following the specified weights and sizes in the Toyota guidelines.

## Risks / Trade-offs

- **[Performance Impact]** High-res full-bleed images and scroll animations could degrade performance on lower-end devices.
  - *Mitigation*: Use responsive `<picture>` tags, WebP formats, lazy loading for off-screen media, and hardware-accelerated CSS properties (`transform`, `opacity`).
- **[Accessibility]** Extensive scroll-based animations can cause motion sickness.
  - *Mitigation*: Implement strict `prefers-reduced-motion` media queries to disable parallax and entrance animations when requested by the user's OS.
- **[Brand Collision]** Apple's typography guidelines (SF Pro) conflict with Toyota's (Toyota Type).
  - *Mitigation*: Toyota's typography guidelines (font family, sizes, weights, line heights) take absolute precedence. We will adopt Apple's *layout and structure*, but paint it with Toyota's *brand styling*.