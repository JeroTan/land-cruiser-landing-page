## ADDED Requirements

### Requirement: Toyota Color System Integration
The system MUST strictly utilize the official Toyota Motor Corporation Brand Design colors for all UI elements.

#### Scenario: Rendering primary CTAs and text
- **WHEN** rendering buttons, text, and backgrounds
- **THEN** primary CTAs use Toyota Red (`#EB0A1E`) at 100% opacity without gradients, dark backgrounds use Black (`#000000`), text on dark uses White (`#FFFFFF`), and secondary elements use Gray (`#58595B`).

### Requirement: Typography Scale
The system MUST apply the Toyota Type typography scale (or Inter fallback) with specific weights, line heights, and alignments.

#### Scenario: Rendering text content
- **WHEN** rendering headlines, body copy, and labels
- **THEN** the text uses Toyota Type (or Inter), with H1s at 48px/Bold, Body text at 16px/Regular, and all text is either flush left or centered (never flush right).

### Requirement: Spacing System
The system MUST utilize a 4px base spacing grid for all margins, paddings, and layout dimensions.

#### Scenario: Component layout and spacing
- **WHEN** applying padding to a card or margins between sections
- **THEN** the spacing value is a strict multiple of 4px (e.g., 8px, 16px, 24px, 48px) as defined by the brand guidelines.