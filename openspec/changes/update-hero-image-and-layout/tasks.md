## 1. Asset Update

- [x] 1.1 Update the image import in `src/components/Hero.astro` to use `2024_Toyota_Land_Cruiser_10_2000x1333.avif` instead of the previous image.

## 2. Layout & Styling Adjustments

- [x] 2.1 Update the image container in `src/components/Hero.astro` to use `absolute inset-0 w-full h-full` instead of percentage-based height, ensuring it fully covers the 100vh Hero section.
- [x] 2.2 Verify that the hero text content is properly layered (`z-10`) over the new full-bleed image so it remains visible.
- [x] 2.3 Add a subtle CSS gradient overlay (e.g., `bg-gradient-to-b from-black/60 via-transparent to-black/80`) if necessary to ensure text contrast and legibility against the new image.