## 1. Setup & Configuration

- [x] 1.1 Configure Tailwind CSS with the official Toyota Motor Corporation Brand Design tokens (Toyota Red `#EB0A1E`, Black `#000000`, White `#FFFFFF`, Gray `#58595B`, and the 4px base spacing scale).
- [x] 1.2 Import and configure the Toyota Type font (or Inter fallback) globally in the Astro project.

## 2. Core Components

- [x] 2.1 Build the Hero section component (full viewport height, dark background, Toyota Type Bold headline, primary CTAs using Toyota Red).
- [x] 2.2 Create the Sticky Quick-Highlights Navigation component (glassmorphism/blur effect, anchor links to sections).
- [x] 2.3 Develop the Feature Introduction sections (alternating dark/light backgrounds, specific 4px-grid-based spacing, image/video placeholders).
- [x] 2.4 Construct the Stat Row component (3-4 items, large numbers, descriptive labels).
- [x] 2.5 Implement the Feature Card Grid responsive component.

## 3. Scroll Animations & Interactivity

- [x] 3.1 Implement an `IntersectionObserver` utility to handle scroll-triggered entrance animations (`opacity: 0` to `1`, `translateY(20px)` to `0`).
- [x] 3.2 Add the count-up JavaScript logic for the Stat Row component, triggered by intersection.
- [x] 3.3 Implement the subtle parallax scroll effect for the Hero image (`translateY(scrollY * 0.3)`).
- [x] 3.4 Integrate `prefers-reduced-motion: reduce` CSS rules to disable parallax, entrance animations, and count-ups for accessibility.

## 4. Page Assembly & Finalization

- [x] 4.1 Assemble all created components on the main Land Cruiser route in Astro.
- [x] 4.2 Validate responsive layouts across mobile, tablet, and desktop breakpoints.
- [x] 4.3 Verify strict adherence to the Toyota Motor Corporation Brand guidelines (no gradients on Toyota Red, correct contrast ratios, 4px spacing).