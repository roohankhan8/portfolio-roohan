# Portfolio Design System Brief

## Purpose

Define one consistent visual system for the Roohan Khan portfolio so implementation decisions stay aligned across all sections. This is a builder-facing brief for the current Next.js repository.

The design should feel:

- technical
- modern
- restrained
- premium
- confident
- product-focused

The site must not look like a student template, crypto landing page, or glass-heavy portfolio clone.

## Visual Direction

Primary experience:

- dark theme
- deep charcoal backgrounds
- high-contrast neutral text
- one blue accent family
- subtle technical structure through borders, grids, and monospace details

Secondary effects must stay minimal. Content hierarchy should do most of the work.

## Core Principles

### Precision

Use consistent spacing, radius, borders, component sizing, and typography.

### Restraint

Add visual effects only when they improve hierarchy, focus, or interaction clarity.

### Technical Character

Reference software architecture through subtle grids, labels, data-flow motifs, and monospace accents.

### Content Priority

Projects, experience, and engineering thinking must dominate decorative treatment.

### Cohesion

Every section should look like part of one product, not individually styled blocks.

## Typography

Use the fonts already configured in the repo:

- Primary: `Geist Sans`
- Technical: `Geist Mono`

Do not introduce more font families unless there is a strong reason.

### Type Scale

- Display: `clamp(3rem, 7vw, 5rem)`, weight `700-800`, tight line height
- Section heading: `clamp(2rem, 4vw, 3rem)`, weight `700`
- Card heading: `1.25rem` to `1.75rem`, weight `600`
- Large body: `1.125rem` to `1.25rem`, line height around `1.6`
- Body: `1rem`, line height around `1.6`
- Small/meta: `0.875rem`
- Eyebrow/technical label: `0.75rem` to `0.875rem`, uppercase, increased tracking, monospace

The hero name must be the strongest type element on the page.

## Color System

Use semantic tokens in CSS. Avoid scattering raw color values through JSX.

Recommended base palette:

```css
:root {
  --bg: #070b11;
  --bg-elevated: #0d121a;
  --surface: #111824;
  --surface-strong: #16202d;

  --border: #233044;
  --border-strong: #31435f;

  --text: #f3f7fb;
  --text-secondary: #a6b4c8;
  --text-muted: #6f8098;

  --accent: #4ea1ff;
  --accent-hover: #78b8ff;
  --accent-soft: rgba(78, 161, 255, 0.12);

  --success: #33c27f;
  --warning: #f2b84b;
  --error: #ef5f6c;
}
```

Guidelines:

- Backgrounds stay neutral and dark
- The blue accent is the only strong brand color
- Accent color appears in primary actions, active states, focused highlights, and small technical details
- Avoid introducing unrelated secondary accent colors

## Background and Surface System

Use layered depth instead of loud effects.

Allowed treatments:

- dark base background
- subtle radial or linear gradients
- very low-opacity grid in the hero or key transitions
- restrained surface panels
- light noise only if it remains nearly invisible

Avoid:

- visible grids behind all content
- bright gradient floods
- repeated glass cards
- decorative elements with no structural purpose

## Spacing System

Use a 4px base scale and stay close to Tailwind defaults.

Primary spacing tokens:

- `4`
- `8`
- `12`
- `16`
- `20`
- `24`
- `32`
- `40`
- `48`
- `64`
- `80`
- `96`
- `128`

Section spacing target:

- mobile: `72px` to `96px`
- tablet: `96px` to `120px`
- desktop: `120px` to `160px`

## Layout System

- Max content width: approximately `1280px`
- Horizontal padding:
  - mobile: `16px` to `20px`
  - tablet: `24px`
  - desktop: `32px` to `48px`
- Use consistent alignment across sections
- Desktop layouts can imply a 12-column rhythm without exposing a literal grid everywhere

## Radius and Border System

Use restrained radii.

- Buttons: around `8px`
- Standard cards: `12px` to `16px`
- Featured project visuals: `16px` to `20px`
- Pills/tags only where useful

Borders are a major structural device:

- default border: `1px solid var(--border)`
- hover or active border can step up to `var(--border-strong)`

Shadows should remain subtle and dark. Do not rely on glow.

## Motion System

Motion must be restrained and respect `prefers-reduced-motion`.

Recommended durations:

- fast: `150ms`
- standard: `200ms`
- slow: `300ms` to `500ms`

Recommended motion patterns:

- fade and slight upward reveal
- subtle card lift on hover
- gentle stagger for grouped items
- one restrained hero-specific animation

Avoid:

- heavy parallax
- long entrance animations
- continuous floating motion
- large scale transforms

## Reusable UI Patterns

### Section Header

Use a consistent section heading pattern:

- monospace eyebrow with section index or label
- strong heading
- short supporting sentence

### Buttons

Support three clear variants:

- Primary: blue fill, strong contrast, main CTA
- Secondary: bordered neutral button
- Ghost: low-emphasis action

Button heights should remain consistent across the site.

### Tags

Use restrained pills or compact chips for technologies and labels.

- small size
- subtle surface
- subtle border
- no rainbow tag styling

### Cards

Use cards only where grouping improves comprehension:

- project cards
- focus-area blocks
- experience entries if needed
- stack category panels if interactive

Card hover behavior should be light:

- slight translateY
- stronger border
- small surface shift

## Project Presentation Rules

Project cards are a priority component.

Each should clearly show:

- project index or featured marker
- project name
- concise description
- problem or outcome framing
- stack tags
- supporting visual area
- actions such as case study and GitHub

Featured projects should feel more substantial than secondary entries through scale and layout, not flashy effects.

## Navigation System

Navigation should be:

- sticky
- compact
- lightly translucent if performance allows
- border-separated from the page
- easy to scan
- keyboard accessible

Desktop should feel minimal. Mobile should use a clear drawer or panel, not a cramped horizontal list.

## Technical Motifs

Use engineering cues sparingly:

- monospace labels
- route-like strings
- architecture-inspired dividers
- data-flow or node visual in the hero
- subtle code or API vocabulary in section chrome

Do not use fake code blocks as decoration.

## Accessibility Rules

- semantic landmarks and headings
- visible keyboard focus states
- sufficient color contrast
- meaningful link and button labels
- reduced-motion fallback
- no information conveyed by color alone
- 44px minimum target size on mobile where practical

## Mobile Rules

Mobile must be intentionally redesigned, not compressed desktop.

- single-column where appropriate
- strong hero hierarchy maintained
- stacked CTAs when needed
- no horizontal scrolling
- reduced decorative density
- project cards remain readable and tappable

## Implementation Direction

In this repo, the design system should be expressed through:

- CSS custom properties in `app/globals.css`
- Tailwind utility usage that references those variables
- a small set of reusable UI patterns and section wrappers
- consistent spacing and type classes across components

Do not scatter arbitrary one-off values through every section.

## Consistency Rules

- Do not use random font sizes
- Do not use multiple accent colors
- Do not over-round every component
- Do not animate every element
- Do not create unnecessary cards
- Do not mix icon families
- Do not rely on logos to communicate skill
- Do not let decorative visuals outrank the portfolio content

## Final Quality Standard

Before considering the design system correctly applied, the implemented site should satisfy these checks:

- all sections feel like one product
- backend identity is obvious in the first viewport
- project work is more prominent than decoration
- typography creates clear hierarchy
- mobile layout feels intentional
- spacing and alignment are consistent
- the portfolio feels credible to a recruiter, client, or senior engineer

If a design choice increases novelty but decreases clarity or credibility, reject it.
