## ADDED Requirements

### Requirement: Entrance Animations
The system MUST animate elements into view as the user scrolls down the page to create a cinematic narrative flow.

#### Scenario: Element enters viewport
- **WHEN** a feature heading, paragraph, or image enters the viewport (e.g., crossing a 15% threshold)
- **THEN** the element fades in (`opacity: 0` to `1`) and translates vertically (`translateY(20px)` to `0`) over 600ms.

### Requirement: Stat Count-Up
The system MUST animate large numerical statistics counting up from zero when they first appear on screen.

#### Scenario: Stat row becomes visible
- **WHEN** the user scrolls to a Stat Row component
- **THEN** the numerical values animate from 0 to their target value over approximately 1200ms, triggering only once.

### Requirement: Parallax Hero Image
The system MUST apply a subtle parallax scrolling effect to the main Hero image to provide a sense of depth.

#### Scenario: User scrolls the Hero section
- **WHEN** the user scrolls down from the top of the page
- **THEN** the Hero image translates vertically at a slower rate than the page scroll (e.g., `translateY(scrollY * 0.3)`).

### Requirement: Reduced Motion Accessibility
The system MUST respect the user's OS-level accessibility preferences regarding motion.

#### Scenario: User prefers reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled in their OS
- **THEN** the system disables all parallax effects, entrance transitions, and count-up animations, displaying elements immediately in their final state.