## Why

The current hero section on the landing page leaves a lot of empty space and does not fully cover the page as intended for a cinematic, immersive experience. Additionally, the previously used image is not ideal, and the user specifically requested to use `2024_Toyota_Land_Cruiser_10_2000x1333.avif` instead to better showcase the vehicle.

## What Changes

- Replace the current hero image (`toyota-land-cruiser-prado-with-mountain-peak-background-1920x722.webp` or similar) with `2024_Toyota_Land_Cruiser_10_2000x1333.avif`.
- Update the CSS/styling in the `Hero.astro` component to ensure the image acts as a true full-bleed background that covers the entire viewport height without leaving empty space below or around it.

## Capabilities

### New Capabilities

### Modified Capabilities
- `landing-page-ui`: The hero section's layout, styling, and image asset requirements are changing to enforce a full-bleed, true 100vh coverage without gaps.

## Impact

- Modifies `src/components/Hero.astro` to update the layout and styling.
- Swaps the image asset reference in the hero component.