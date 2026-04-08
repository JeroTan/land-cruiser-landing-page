## ADDED Requirements

### Requirement: Hero Section
The system MUST render a full-bleed Hero section at the top of the page featuring the Land Cruiser, a primary headline, and clear Calls to Action (CTAs).

#### Scenario: User views the page initially
- **WHEN** the user loads the landing page
- **THEN** the system displays the Hero section filling the viewport height with a dark background, a large headline (Toyota Type Bold), the product image, price, and two CTAs ("Buy" and "Learn more").

### Requirement: Quick-Highlights Navigation
The system MUST display a sticky navigation bar once the Hero section scrolls out of view, allowing rapid jumps to key sections.

#### Scenario: User scrolls past the Hero section
- **WHEN** the user scrolls down and the Hero section leaves the viewport
- **THEN** the Quick-Highlights Navigation becomes sticky at the top of the screen with a blurred background, updating its active state based on the current visible section.

### Requirement: Feature Introduction Sections
The system MUST present alternating dark and light full-width sections detailing the Land Cruiser's key features (e.g., Design, Performance).

#### Scenario: User scrolls through features
- **WHEN** the user scrolls down the page
- **THEN** the system displays feature sections containing an eyebrow text, bold headline, short descriptive copy, and a large visual asset (image or video), styled with Toyota brand tokens.

### Requirement: Stat Row and Feature Grid
The system MUST display numerical statistics and feature comparisons using grid layouts.

#### Scenario: User views technical specifications
- **WHEN** the user reaches the Performance or Battery section
- **THEN** the system displays a row of 3-4 large statistics or a multi-column feature card grid, using the Toyota 4px spacing system and typography scale.