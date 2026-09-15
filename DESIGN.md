---
name: Mihwar
description: An Arabic-first automotive commerce system shaped like a precise premium inspection bench.
colors:
  accent: "#f26419"
  accent-strong: "#d94e0b"
  signal: "#ff7a3d"
  ink: "#101315"
  graphite: "#171b1e"
  panel: "#202529"
  paper: "#f3f2ee"
  white: "#fffdfa"
  muted: "#aeb4b7"
  copy: "#5d6569"
  copy-soft: "#656c70"
  control: "#f8f7f3"
  card-image: "#ebeae5"
  hover: "#f9f7f1"
  success: "#6fd08c"
  line: "rgba(255, 253, 250, .14)"
  line-dark: "rgba(16, 19, 21, .14)"
  grid: "rgba(255, 253, 250, .035)"
  grid-strong: "rgba(255, 253, 250, .35)"
  overlay: "rgba(10, 12, 13, .96)"
  overlay-clear: "rgba(10, 12, 13, .08)"
typography:
  display:
    fontFamily: "var(--font-main)"
    fontSize: "clamp(2.65rem, 8vw, 5.5rem)"
    fontWeight: 950
    lineHeight: 0.94
    letterSpacing: "-.035em"
  headline:
    fontFamily: "var(--font-main)"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 950
    lineHeight: 1
    letterSpacing: "-.035em"
  body-prominent:
    fontFamily: "var(--font-main)"
    fontSize: "clamp(1rem, 2vw, 1.2rem)"
    lineHeight: 1.85
  body:
    fontFamily: "var(--font-main)"
    fontSize: "1rem"
    lineHeight: 1.75
  label:
    fontFamily: "var(--font-main)"
    fontSize: ".72rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: ".06em"
  button:
    fontFamily: "var(--font-main)"
    fontWeight: 900
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
  button-hero:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 1.25rem"
    height: "3rem"
  search-console:
    backgroundColor: "color-mix(in srgb, #fffdfa 5.5%, transparent)"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "1rem"
    width: "42rem"
  vehicle-select:
    backgroundColor: "{colors.control}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 2.75rem 0 1rem"
    height: "3.25rem"
  product-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: Mihwar

## Overview

**Creative North Star: "منصة الفحص / The Inspection Bench"**

Mihwar should feel like a live automotive test bench: precise, technical, premium, and fast. Graphite test-bay surfaces, warm metal whites, calibrated rails, compact labels, and one controlled orange signal make product discovery feel operational rather than ornamental.

The system is Arabic-first and mobile-first, with complete LTR equivalence. Interfaces place search, vehicle guidance, practical product detail, and honest status information ahead of spectacle; the result is a focused parts counter rather than a cinematic car poster or a generic ecommerce skin.

**Key Characteristics:**

- High-contrast graphite and warm-paper surfaces.
- A single controlled orange signal with merchant-controlled accent ownership.
- Squared controls, restrained curves, thin rails, ticks, and tabular numeric detail.
- Dense enough to feel technical, spacious enough to scan quickly.
- Short axis movement and one calibrated scan instead of ambient visual effects.

## Colors

The palette combines workshop graphite with warm information surfaces and a narrowly controlled safety-orange signal.

### Primary

- **Merchant Signal Orange:** The commerce accent for rails, active emphasis, borders, links, and merchant identity. Its runtime value comes from the Salla theme setting; the frontmatter records the shipped fallback.
- **Strong Merchant Orange:** A darker accent fallback for icons and compact emphasis; it follows the merchant accent at runtime.

### Secondary

- **Fixed Safety Signal:** Reserved for system feedback such as selection, caret, scrollbar, and tap feedback; it does not change with the merchant palette.
- **Ready Green:** Used only for honest ready/available status indicators.

### Neutral

- **Workshop Ink:** The deepest structural surface and primary text color.
- **Graphite Bay:** Secondary dark surface for inspection frames and dark hover states.
- **Equipment Panel:** The declared mid-dark panel neutral for the system's surface vocabulary.
- **Warm Paper:** The page ground, deliberately warmer than pure white.
- **Metal White:** The brightest information surface and reversed text color.
- **Instrument Muted:** Supporting text on dark surfaces.
- **Technical Copy:** Main secondary copy on light surfaces.
- **Soft Technical Copy:** Quieter notes and disclaimers.
- **Control White:** Form-field background.
- **Card Image Metal:** Product-image well background.
- **Warm Hover:** Light-surface hover feedback.
- **Light and Dark Lines:** Low-opacity boundaries that separate surfaces without heavy chrome.
- **Grid and Overlay Neutrals:** Measurement grids and dark overlay states; keep them subordinate to content.

### Named Rules

**The One Signal Rule.** Use orange as a diagnostic signal, not as broad decoration; large surfaces remain graphite, paper, or white.

**The Merchant Accent Rule.** Commerce emphasis follows the configured merchant accent, while the fixed safety signal remains reserved for system feedback.

## Typography

**Display Font:** `var(--font-main)` (the Salla-configured Arabic-capable theme font)

**Body Font:** `var(--font-main)` (the same theme family)

**Character:** A single Arabic-first family carries the interface. Extreme weight, compact tracking, and short display leading create authority; generous body leading keeps dense commerce information readable.

### Hierarchy

- **Display:** Very heavy and tightly set; hero headlines only, with a short measure of about 12 characters.
- **Headline:** Very heavy section and product titles with balanced wrapping.
- **Body Prominent:** Hero descriptions and other leading explanatory copy.
- **Body:** Controls, empty states, and practical product guidance.
- **Label:** Compact instrument labels and inspection statuses; numerals use tabular figures where prices or codes must align.
- **Button:** Heavy action text that stays legible at compact control sizes.

### Named Rules

**The Arabic-First Rule.** Use the configured `--font-main` throughout; do not introduce a decorative Latin display face that weakens Arabic parity.

**The Short Display Rule.** Reserve the tightest tracking and leading for brief, balanced headlines; long explanatory content uses the body rhythm.

## Layout

The system is mobile-first and uses the inherited Raed container with a 1280px maximum. Major sections breathe vertically with fluid padding, while controls and labels remain compact. The hero begins as a single stack where search leads and the inspection viewport remains short; at 40rem the inspection viewport gains height and capability labels gain room; at 64rem the hero becomes an asymmetric two-column diagnostic stage and vehicle guidance aligns its control and action horizontally.

Measurement grids use broad 25% vertical divisions, 4rem horizontal rhythm, 3rem inspection cells, and 32px ticks. Keep reading order and logical alignment equivalent in RTL and LTR; use logical properties rather than mirroring content manually.

**The Task-First Breakpoint Rule.** On small screens, search and the next usable action precede visual inspection; wider layouts may place the inspection frame beside them, never ahead of them.

## Elevation & Depth

Depth is primarily tonal and structural: dark-on-dark surface steps, light-on-light surface steps, one-pixel lines, and orange top rails. Most cards rest flat with no shadow. A single diffuse ambient shadow is reserved for the raised vehicle panel and pointer-hover product cards.

### Shadow Vocabulary

- **Ambient Lift:** `0 18px 48px rgba(16, 19, 21, .12)`; use only when a panel or card truly rises above the page plane.
- **Focus Ring:** A two-layer white-and-ink keyboard ring; it communicates focus, not elevation.

### Named Rules

**The Tonal-First Rule.** Establish hierarchy with surface contrast and borders before reaching for shadow.

**The No Glow Rule.** Do not use neon bloom, frosted glass, or glow-heavy cyber effects; the inspection language comes from measured geometry and honest state.

## Shapes

The form language is calibrated and mostly squared. Small controls and technical containers use restrained 4px corners, product cards use 10px corners, and 18px is the largest declared radius for exceptional large surfaces. Circles are limited to status dots and icon geometry. Borders, clipped-looking inner divisions, and straight measurement rails do more visual work than rounding.

**The Restrained Curve Rule.** Default to the smallest radius and increase it only when the component already establishes that role; never turn the system into pill-shaped generic commerce UI.

## Components

### Buttons

Buttons feel compact, tactile, and decisive.

- **Shape:** Squared control with restrained corners and a 3rem minimum height; the implementation exceeds the 44px touch baseline.
- **Primary:** Workshop Ink fill, Metal White text, heavy label, and compact inline padding.
- **Hero:** Inverts to Metal White on the dark stage and shifts to Warm Paper on hover.
- **Hover / Focus:** Fine-pointer hover rises by 2px over 180ms; keyboard focus uses the global visible two-layer ring. Disabled controls remain present at reduced opacity and never imply availability.

### Search Console

The search console is the operational center of the first viewport.

- **Style:** A faint light wash on Workshop Ink, a low-opacity boundary, and a 2px merchant-accent top rail.
- **Field:** The native Salla search stays on a Metal White field inside the dark console.
- **Focus:** `:focus-within` strengthens the accent boundary and slightly raises the light wash; the state does not glow.

### Vehicle Select and Empty State

Vehicle guidance must remain honest about its configured data.

- **Select:** Full-width Control White field, 3.25rem minimum height, 4px corners, logical icon padding, and a visible label.
- **Action:** Uses the primary button and remains disabled until a configured vehicle route is selected.
- **Empty State:** Replaces the field with plain explanatory copy and a shop-all action; it never fabricates vehicle fitment.
- **Panel:** Metal White with a dark hairline, 3px accent top rail, and the single ambient shadow.

### Inspection Frame

The signature frame presents a vehicle as something being measured, not advertised cinematically.

- **Structure:** Graphite Bay surface, one-pixel light boundaries, compact status header, measurement axes, grid, and three honest discovery capability labels.
- **Status:** Ready Green is confined to the small system-ready indicator.
- **Motion:** The image settles over 700ms and the scan makes one 850ms eased pass after entry or focus. RTL reverses the scan direction. Reduced motion removes the scan and all transforms.

### Product Card

Product cards are practical catalog containers with a restrained premium finish.

- **Shape:** 10px corners with clipped overflow.
- **Surface:** Metal White body over a Card Image Metal image well.
- **Type:** Heavy product title; prices and subtitles use tabular numerals.
- **State:** Flat at rest. Fine-pointer hover strengthens the merchant-accent border, lifts by 4px, and introduces the ambient shadow.

### Navigation and Focus

Navigation keeps the storefront familiar while adopting the inspection-bench palette.

- **Navigation:** Workshop Ink top bar with Metal White content and a low-opacity divider; the main navigation remains flat with a dark hairline and no shadow.
- **Text Actions:** Heavy inline links underline on hover and take the merchant accent.
- **Focus:** Every link, button, input, select, summary, and tabbable element receives a 2px Metal White outline offset by 2px plus a 4px Workshop Ink outer ring.

## Do's and Don'ts

### Do:

- **Do** lead mobile surfaces with search, selection, or another usable shopping action.
- **Do** use graphite, paper, borders, rails, ticks, and compact labels to create the technical atmosphere.
- **Do** preserve Arabic RTL and English LTR equivalence with logical layout properties.
- **Do** keep routine motion between 160ms and 240ms, using the calibrated easing curve for spatial movement.
- **Do** use honest labels and configured routes when vehicle data or commercial proof is unavailable.

### Don't:

- **Don't** turn the hero into a cinematic car poster that delays product discovery.
- **Don't** use glow-heavy cyber effects, frosted glass, or generic glass panels.
- **Don't** spread orange across large backgrounds or introduce competing accent colors.
- **Don't** default to pill controls, oversized rounding, or generic ecommerce cards.
- **Don't** claim real vehicle-to-part fitment, statistics, testimonials, or proof that the product does not supply.
