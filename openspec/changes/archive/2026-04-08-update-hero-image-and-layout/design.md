## Context

The initial hero layout for the Land Cruiser landing page left significant empty space beneath the vehicle image and did not create a proper full-bleed cinematic effect. Furthermore, the chosen image asset was changed per user request to `2024_Toyota_Land_Cruiser_10_2000x1333.avif`.

## Goals / Non-Goals

**Goals:**
- Replace the image asset in the Hero section.
- Adjust the Hero section layout and styling so that the image is a true full-bleed background, ensuring 100vh coverage.

**Non-Goals:**
- Altering other sections (like the sticky nav or feature layouts).
- Changing scroll animations or brand theme details.

## Decisions

- **Layout Update**: Remove the restricted container or percentage-based height (like `h-[60%]`) for the hero image container. Make the image absolutely positioned, covering the entire 100vh height (`inset-0`, `w-full`, `h-full`, `object-cover`), while maintaining the parallax scrolling effect. 
- **Z-Index Management**: Keep text content layered on top (`z-10`) so it stays readable over the full-bleed image. We might add a subtle dark gradient overlay at the bottom/top if contrast becomes an issue with the new image, but primary goal is fixing the blank space.

## Risks / Trade-offs

- **[Contrast Risk]** A full-bleed image might make text harder to read if the image background is bright.
  - *Mitigation*: We may need to add a subtle CSS gradient overlay (`bg-gradient-to-b`) to the hero section to ensure the Toyota Type headline remains legible.