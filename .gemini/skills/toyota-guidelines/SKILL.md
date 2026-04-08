---
name: toyota-guidelines
description: Toyota Brand design guidelines for any Toyota-branded project. Use when building UI screens, components, theme tokens, or making styling decisions on any Toyota project. Covers official brand colors, Toyota Type typography, spacing system, component specs, dark mode patterns, and semantic color usage. Based on brand.toyota.com.
version: 1.0.0
license: MIT
---

# Toyota Brand Design System

**Based on:** Toyota Brand Guidelines — [brand.toyota.com](https://brand.toyota.com/guidelines/visual)

---

## 1. Brand Values

- **Excitement** — energy and confidence in every interaction
- **Clarity** — clear, legible communication at a glance
- **Trust** — approachable yet professional
- **Reliability** — zero-confusion UX in high-stakes contexts

---

## 2. Color System

### 2.1 Primary Brand Colors

| Name       | HEX       | RGB           | Usage                                      |
| ---------- | --------- | ------------- | ------------------------------------------ |
| Toyota Red | `#EB0A1E` | 235, 10, 30   | Primary CTAs, brand accent, key indicators |
| Black      | `#000000` | 0, 0, 0       | Primary text, dark backgrounds             |
| White      | `#FFFFFF` | 255, 255, 255 | Backgrounds, text on dark                  |
| Gray       | `#58595B` | 88, 89, 91    | Secondary text, borders, dividers          |

### 2.2 Semantic Status Colors

| Name          | HEX       | Usage                                            |
| ------------- | --------- | ------------------------------------------------ |
| Critical Red  | `#DC2626` | Errors, critical alerts, life-threatening status |
| Warning Amber | `#F59E0B` | Moderate urgency, caution states                 |
| Success Green | `#10B981` | Resolved, confirmed, safe status                 |
| Info Blue     | `#3B82F6` | Informational, neutral status                    |

### 2.3 Color Rules

- **NEVER** render Toyota Red at less than full opacity
- **NEVER** apply gradients to Toyota Red (`#EB0A1E`)
- Reserve Toyota Red for primary CTAs and the most critical touchpoints — not decoration
- Use semantic colors for status indicators — never use Toyota Red as a generic "danger" color when a semantic color applies

---

## 3. Typography

### 3.1 Primary Font: Toyota Type

**Toyota Type** is the official brand typeface. Available weights: Light, Book, Regular, Semibold, Bold, Black.

> For web projects where Toyota Type is not licensed, substitute **Inter** at the same weights.

**RULE for React Native:** Use `StyleSheet` / inline styles for `fontFamily`, not utility class strings — this is more reliable with custom OTF fonts.

```ts
// React Native — preferred
style={{ fontFamily: 'ToyotaType-Bold', fontSize: 16 }}

// Available family names (when Toyota Type OTF files are loaded)
'ToyotaType'           // Regular
'ToyotaType-Bold'
'ToyotaType-Light'
'ToyotaType-Semibold'
'ToyotaType-Italic'
```

### 3.2 Type Scale

| Element         | Size | Weight       | Line Height |
| --------------- | ---- | ------------ | ----------- |
| H1 (Page Title) | 48px | Bold 700     | 1.1         |
| H2 (Section)    | 36px | Semibold 600 | 1.2         |
| H3 (Subsection) | 24px | Semibold 600 | 1.3         |
| H4 (Card Title) | 20px | Semibold 600 | 1.4         |
| Body Large      | 18px | Regular 400  | 1.6         |
| Body            | 16px | Regular 400  | 1.6         |
| Body Small      | 14px | Regular 400  | 1.5         |
| Caption         | 12px | Regular 400  | 1.4         |
| Button          | 16px | Semibold 600 | 1.0         |
| Label           | 14px | Medium 500   | 1.0         |

### 3.3 Typography Rules

- Uppercase headlines: max 7 words, Bold or Semibold, 90% line-height
- Sentence-case headlines: Semibold, 110% line-height (print), 90% (digital)
- Body text: 145% line-height, Book/Regular weight
- **Alignment: flush left or centered — NEVER flush right**
- Do not mix font families within a single interface

---

## 4. Spacing System

**Base unit: 4px** — all spacing is a multiple of 4.

| Token | Value | Tailwind Equivalent |
| ----- | ----- | ------------------- |
| xs    | 4px   | `p-1` / `m-1`       |
| sm    | 8px   | `p-2` / `m-2`       |
| md    | 16px  | `p-4` / `m-4`       |
| lg    | 24px  | `p-6` / `m-6`       |
| xl    | 32px  | `p-8` / `m-8`       |
| 2xl   | 48px  | `p-12` / `m-12`     |
| 3xl   | 64px  | `p-16` / `m-16`     |
| 4xl   | 96px  | `p-24` / `m-24`     |

**Common component spacing:**

- Card padding: 24px
- Section margin: 48px (desktop) / 24px (mobile)
- Button: 16px horizontal, 12px vertical
- Input field: 12px top/bottom, 16px left/right

---

## 5. UI Component Specs

### 5.1 Primary Button

```
Background:    Toyota Red (#EB0A1E)
Height:        56px — touch-friendly
Border-radius: 8px
Text:          White, uppercase, Bold, 16px
States:
  Default:   Toyota Red
  Hover:     Darken 10%
  Active:    Darken 20%
  Disabled:  50% opacity (do not desaturate)
```

### 5.2 Cards

```
Background:    White (#FFFFFF)
Border:        1px solid #E5E7EB
Border-radius: 12px
Shadow:        0 1px 3px rgba(0,0,0,0.1)
Padding:       24px
```

### 5.3 Status Badges

```
Shape:    Pill (border-radius: full)
Padding:  4px 12px
Font:     12px, Semibold
```

| Status             | Background | Text      |
| ------------------ | ---------- | --------- |
| Critical           | `#FEE2E2`  | `#DC2626` |
| Warning / Active   | `#FEF3C7`  | `#D97706` |
| Success / Resolved | `#D1FAE5`  | `#059669` |
| Pending            | `#E0E7FF`  | `#4F46E5` |

### 5.4 Input Fields

```
Height:        48px
Border:        1px solid #D1D5DB
Border-radius: 8px
Focus ring:    2px Toyota Red outline
Error state:   Red border + error message below
```

### 5.5 Navigation

```
Primary:      Bottom tab navigation on mobile (max 5 items)
Header bar:   Top bar with Toyota logo + contextual actions
Heights:      64px (desktop) / 56px (mobile)
```

---

## 6. Iconography

- **Style:** Outlined icons
- **Sizes:** 24px (standard) · 20px (compact) · 32px (emphasis)
- **Stroke weight:** 1.5px–2px
- Use icons consistently — same style family throughout a single app

---

## 7. Layout

### Breakpoints

| Breakpoint | Min Width | Target        |
| ---------- | --------- | ------------- |
| sm         | 640px     | Large phones  |
| md         | 768px     | Tablets       |
| lg         | 1024px    | Laptops       |
| xl         | 1280px    | Desktops      |
| 2xl        | 1536px    | Large screens |

- Max content width: **1200px** centered
- Max card width: **400px**
- Sidebar width: **320px** fixed
- Desktop grid: 12-column, 24px gutters
- Mobile grid: 4-column, 16px gutters

---

## 8. Accessibility

- Normal text on white: min **4.5:1** contrast ratio
- Large text (18px+ bold) and UI components: min **3:1** contrast ratio
- All interactive elements: min **44×44px** touch target
- Focus indicator: visible Toyota Red 2px outline
- Keyboard navigation must be supported

---

## 9. Motion & Animation

| Speed  | Duration | When to use             |
| ------ | -------- | ----------------------- |
| Fast   | 150ms    | Status changes, toggles |
| Normal | 300ms    | UI transitions          |
| Slow   | 500ms    | Page/screen transitions |

- **Entering elements:** ease-out
- **Exiting elements:** ease-in
- **Transforms:** ease-in-out
- Respect `prefers-reduced-motion` — disable or minimize animations when set

---

## 10. Dos and Don'ts

### DO

- Use Toyota Red (`#EB0A1E`) for the single most important CTA per screen
- Use Toyota Type at all available weights; fall back to Inter at matching weights
- Maintain high contrast — Toyota interfaces serve safety-critical contexts
- Use semantic status colors (critical/warning/success/info) for state communication
- Follow the 4px spacing grid throughout

### DON'T

- Apply gradients to Toyota Red
- Add drop shadows to typography
- Exceed 7 words in an uppercase headline
- Mix typeface families in one layout
- Use Toyota Red at reduced opacity
- Use Toyota Red as a generic accent — reserve it for primary actions

---

## References

- [Toyota Brand Guidelines](https://brand.toyota.com/guidelines/visual)
- [Toyota Brand Colors](https://brand.toyota.com/guidelines/visual/brand-colors)
- [Toyota Typography](https://brand.toyota.com/guidelines/visual/typography)
