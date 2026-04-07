---
name: toyota-alertap-design
description: Toyota Mobility design guidelines for the ALERTAP emergency response mobile app. Use when building ANY UI screen, component, theme token, or styling decision in the red-alert-mobile-app project. Covers brand colors, typography (Toyota Type), spacing, components, dark mode, and emergency color semantics.
version: 1.0.0
license: MIT
---

# Toyota ALERTAP Design System

**Project:** ALERTAP — Toyota Mobility for Emergency  
**Based on:** Toyota Brand Guidelines (brand.toyota.com)

---

## 1. Brand Values

- **Excitement** — energy and confidence in every interaction
- **Clarity** — clear, legible communication at a glance
- **Trust** — approachable yet professional
- **Reliability** — emergency interfaces demand instant, zero-confusion UX

---

## 2. Color System

### 2.1 Brand Colors (Tailwind tokens)

Use these NativeWind / Tailwind v4 classes defined in `style/global.css`:

| Token         | HEX       | Class                                     | Usage                                    |
| ------------- | --------- | ----------------------------------------- | ---------------------------------------- |
| Brand Primary | `#EB0A1E` | `bg-brand-primary` / `text-brand-primary` | CTAs, emergency indicators, brand accent |
| Brand Black   | `#000000` | `bg-brand-black` / `text-brand-black`     | Primary text, dark BG                    |
| Brand White   | `#FFFFFF` | `bg-brand-white` / `text-brand-white`     | Backgrounds, text on dark                |
| Brand Gray    | `#58595B` | `bg-brand-gray` / `text-brand-gray`       | Secondary text, borders                  |

### 2.2 Emergency Semantic Colors

| Token    | HEX       | Class                                               | Usage            |
| -------- | --------- | --------------------------------------------------- | ---------------- |
| Critical | `#DC2626` | `bg-emergency-critical` / `text-emergency-critical` | Life-threatening |
| Warning  | `#F59E0B` | `bg-emergency-warning` / `text-emergency-warning`   | Moderate urgency |
| Success  | `#10B981` | `bg-emergency-success` / `text-emergency-success`   | Resolved / safe  |
| Info     | `#3B82F6` | `bg-emergency-info` / `text-emergency-info`         | Neutral status   |

### 2.3 Agency Colors

| Agency       | HEX       | Class                |
| ------------ | --------- | -------------------- |
| Police / PNP | `#1E40AF` | `bg-agency-police`   |
| Fire / BFP   | `#B91C1C` | `bg-agency-fire`     |
| Ambulance    | `#059669` | `bg-agency-medical`  |
| Disaster     | `#EA580C` | `bg-agency-disaster` |

### 2.4 Adaptive UI Tokens (light / dark aware)

Use these for all backgrounds, text, and cards — they auto-switch in dark mode:

```
bg-app-background            /* #fff / #121212 */
bg-app-background-secondary  /* #f9fafb / #1f2937 */
bg-app-background-tertiary   /* #e5e7eb / #374151 */
bg-app-background-mute       /* #d3d4d3 / #2e2e2e — disabled states */
bg-app-card                  /* #fff / #1e1e1e */
text-app-text-primary        /* #000 / #fff */
text-app-text-secondary      /* #58595b / #e5e7eb */
text-app-text-muted          /* #9ca3af / #9ca3af */
text-app-text-light          /* #d1d5db / #4b5563 */
border-app-divider           /* #e5e7eb / #303d52 */
```

### 2.5 Color Rules

- **NEVER** render Toyota Red at less than full opacity
- **NEVER** apply gradients to Toyota Red (#EB0A1E)
- Use Toyota Red ONLY for primary CTAs and the most critical indicators — never decorative

---

## 3. Typography

### 3.1 Font Family

**Toyota Type** is the official font (OTF files loaded via `expo-font`).

Font constants are in `style/typography.ts`. Import the `typography` object:

```ts
import { typography } from "@/style/typography";
```

**RULE:** For React Native components, use `StyleSheet` / inline styles for `fontFamily`, NOT Tailwind/NativeWind classes. NativeWind font family classes exist (`font-toyota`, `font-toyota-bold`, etc.) but StyleSheet is preferred for reliability.

```ts
// Preferred pattern
style={{ fontFamily: 'ToyotaType', fontSize: typography.fontSize.body }}

// Available font families
'ToyotaType'           // Regular
'ToyotaType-Bold'      // Bold
'ToyotaType-Light'     // Light
'ToyotaType-Semibold'  // Semibold
'ToyotaType-Italic'    // Italic
```

### 3.2 Type Scale

| Element    | Size | Weight       | Line Height |
| ---------- | ---- | ------------ | ----------- |
| H1         | 48px | Bold 700     | 1.1         |
| H2         | 36px | Semibold 600 | 1.2         |
| H3         | 24px | Semibold 600 | 1.3         |
| H4         | 20px | Semibold 600 | 1.4         |
| Body Large | 18px | Regular 400  | 1.6         |
| Body       | 16px | Regular 400  | 1.6         |
| Body Small | 14px | Regular 400  | 1.5         |
| Caption    | 12px | Regular 400  | 1.4         |
| Button     | 16px | Semibold 600 | 1           |
| Label      | 14px | Medium 500   | 1           |

### 3.3 Typography Rules

- Uppercase headlines: max 7 words, Bold or Semibold
- Body text: 145% line-height, Book/Regular weight
- **Alignment: flush left or centered — NEVER flush right**
- Do not mix font families

---

## 4. Spacing System

**Base unit: 4px** — all spacing is a multiple of 4.

| Token | Value | Tailwind        |
| ----- | ----- | --------------- |
| xs    | 4px   | `p-1` / `m-1`   |
| sm    | 8px   | `p-2` / `m-2`   |
| md    | 16px  | `p-4` / `m-4`   |
| lg    | 24px  | `p-6` / `m-6`   |
| xl    | 32px  | `p-8` / `m-8`   |
| 2xl   | 48px  | `p-12` / `m-12` |
| 3xl   | 64px  | `p-16` / `m-16` |
| 4xl   | 96px  | `p-24` / `m-24` |

**Component-specific:**

- Card padding: 24px (`p-6`)
- Section margin: 48px desktop / 24px mobile
- Button: 16px horizontal, 12px vertical (`px-4 py-3`)
- Input: 12px 16px (`py-3 px-4`)

---

## 5. Component Specifications

### 5.1 Emergency Button (Primary CTA)

```
Background:    Toyota Red (#EB0A1E)
Width:         Full width on mobile, min-w-[200px] on desktop
Height:        56px (h-14) — touch-friendly
Border-radius: 8px (rounded-lg)
Text:          White, uppercase, Bold (ToyotaType-Bold), 16px
Icon:          Warning icon, white, 24px
States:
  Default:   bg-brand-primary
  Pressed:   bg-red-700 (darken ~10-20%)
  Disabled:  opacity-50 (NOT reduced red saturation)
```

### 5.2 Cards

```
Background:    bg-app-card
Border:        1px solid border-app-divider  →  border border-app-divider
Border-radius: 12px (rounded-xl)
Shadow:        shadow-sm (0 1px 3px rgba(0,0,0,0.1))
Padding:       24px (p-6)
```

### 5.3 Status Badges (pill shape)

```
Border-radius: Full (rounded-full)
Padding:       4px 12px (py-1 px-3)
Font:          Caption (12px), Semibold
```

| Status           | bg              | text                      |
| ---------------- | --------------- | ------------------------- |
| Critical         | `bg-red-100`    | `text-emergency-critical` |
| Active / Warning | `bg-amber-100`  | `text-yellow-700`         |
| Resolved         | `bg-green-100`  | `text-emergency-success`  |
| Pending          | `bg-indigo-100` | `text-indigo-600`         |

### 5.4 Input Fields

```
Height:        48px (h-12)
Border:        1px solid #D1D5DB  →  border border-gray-300
Border-radius: 8px (rounded-lg)
Focus:         2px Toyota Red outline
Error:         Red border + error message below
Padding:       py-3 px-4
```

### 5.5 Navigation

```
Primary:  Bottom tab navigation, max 5 items
Header:   Top bar with Toyota logo + actions
Heights:  64px desktop / 56px mobile (h-14)
```

---

## 6. Iconography

- **Style:** Outlined icons (Lucide React Native is the project standard)
- **Sizes:**
  - Standard: 24px
  - Compact: 20px
  - Emphasis: 32px
- **Stroke:** 1.5px–2px

**Required emergency icons:** Police/PNP, Ambulance/Medical, Fire/BFP, Disaster, Location/GPS, Phone/Call, Warning/Alert, Check/Verified, Clock/Time, Map/Route, Message/Chat

---

## 7. Layout

### Responsive breakpoints

| Breakpoint | Width  |
| ---------- | ------ |
| sm         | 640px  |
| md         | 768px  |
| lg         | 1024px |
| xl         | 1280px |
| 2xl        | 1536px |

**Max widths:** content 1200px, cards 400px, sidebar 320px  
**Grids:** 12-col / 24px gutter (desktop) — 4-col / 16px gutter (mobile)

---

## 8. Accessibility

- Text on white: min 4.5:1 contrast
- Large text / UI components: min 3:1 contrast
- All interactive elements: min touch target 44×44px
- Focus indicator: Toyota Red 2px outline
- Keyboard navigation required

---

## 9. Animations & Motion

| Type   | Duration | When                    |
| ------ | -------- | ----------------------- |
| Fast   | 150ms    | Status changes          |
| Normal | 300ms    | Standard transitions    |
| Slow   | 500ms    | Page/screen transitions |

- **Entering elements:** ease-out
- **Exiting elements:** ease-in
- **Transforms:** ease-in-out

**Emergency-specific:**

- Pulse animation for critical alert indicators
- Shake animation for SOS activation

---

## 10. Emergency Screen Contexts

| Screen           | Background                  | Accent                    |
| ---------------- | --------------------------- | ------------------------- |
| Report Screen    | `bg-app-background` (white) | Toyota Red                |
| Live Tracking    | Map-centric                 | Agency colors on markers  |
| Status Updates   | `bg-app-background`         | Semantic emergency colors |
| Responder Active | `bg-app-background`         | Agency + status colors    |

---

## 11. Dark Mode

Dark mode is applied via the `.dark` class on the root element (class strategy).  
**Always use adaptive `app-*` tokens** instead of hard-coded hex values. The global CSS handles the override automatically.

```tsx
// Correct — uses adaptive token
<View className="bg-app-background">

// Wrong — breaks dark mode
<View style={{ backgroundColor: '#ffffff' }}>
```

---

## 12. Dos and Don'ts

### DO

- Use Toyota Red (`#EB0A1E`) for primary CTAs
- Use Toyota Type (ToyotaType OTF) for all visible text
- Maintain high contrast — emergency UIs cannot have readability failures
- Use semantic colors for status (critical/warning/success/info)
- Keep emergency buttons prominent (full-width, 56px height)
- Follow 4px base spacing unit

### DON'T

- Use gradients on Toyota Red
- Add shadows to typography
- Use more than 7 words in uppercase headlines
- Mix font families
- Use Toyota Red at reduced opacity
- Create visual clutter in emergency interfaces
- Use hard-coded colors — always use design tokens
