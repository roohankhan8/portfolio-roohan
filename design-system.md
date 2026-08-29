# Design System

Create and consistently apply a complete design system across the portfolio. The design should feel like a premium software engineer portfolio: technical, structured, minimal, and modern.

Do not design every section independently. All components must follow the same visual system.

---

## 1. Design Principles

The design should follow these principles:

### Precision

Use consistent spacing, typography, border radii, and component dimensions.

### Restraint

Do not add visual effects unless they communicate hierarchy or interaction.

### Technical Character

Use subtle references to software engineering, APIs, systems, data, architecture, and code.

### Strong Hierarchy

Every section should clearly communicate:

1. Primary information
2. Supporting information
3. Actions

### Content First

The projects and engineering work should be more visually important than decorative elements.

### Depth Without Clutter

Use borders, subtle background layers, shadows, and contrast to create hierarchy without excessive cards or glassmorphism.

---

# 2. Color System

The portfolio should primarily use a dark theme.

The visual direction should be:

* Deep dark backgrounds
* Slightly lighter surfaces
* High-contrast text
* One primary accent color
* Restrained use of secondary accents

Use semantic color tokens rather than hardcoding colors throughout components.

Example:

```css
--background: #09090b;
--background-secondary: #0f1115;
--surface: #14161b;
--surface-elevated: #1a1d23;

--border: #272a33;
--border-subtle: #1d2027;

--foreground: #f4f4f5;
--foreground-secondary: #a1a1aa;
--foreground-muted: #71717a;

--primary: #3b82f6;
--primary-hover: #60a5fa;
--primary-muted: rgba(59, 130, 246, 0.12);

--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;
```

The exact color values may be adjusted if a better visual system is created, but the hierarchy must remain consistent.

### Accent Color

Use a blue accent as the primary identity color.

Suggested direction:

```text
Primary: Electric Blue
Secondary: Cyan / Blue variations
Neutral: Zinc / Slate
```

Do not use multiple unrelated accent colors throughout the page.

The accent color should primarily appear in:

* Primary buttons
* Active navigation items
* Important links
* Selected states
* Small technical details
* Code/interface highlights

---

# 3. Background System

Use layered backgrounds.

Base background:

```text
Very dark neutral
```

Add subtle visual depth through:

* Slightly elevated section surfaces
* Fine borders
* Very subtle gradients
* Optional low-opacity grid pattern
* Optional noise texture

The grid should be extremely subtle.

Possible technical grid:

```text
Horizontal and vertical lines
Low opacity
Visible mainly in the hero
```

Do not place a visible grid behind all content.

---

# 4. Typography

Use a clean sans-serif font for the primary interface.

Recommended:

* Geist
* Inter
* Geist Mono or JetBrains Mono for technical details

Suggested typography pairing:

```text
Primary:
Geist Sans

Technical / Code:
Geist Mono
```

If the project already has an appropriate font, preserve it unless there is a clear reason to change it.

---

## Typography Scale

### Display

Used only in the hero.

```text
Desktop:
64px - 80px

Tablet:
52px - 64px

Mobile:
42px - 52px

Weight:
700 - 800

Line Height:
0.95 - 1.1
```

Example:

```text
Roohan Khan
```

The name should be visually dominant.

---

### H1

```text
48px - 64px
Weight: 700
Line-height: 1.1
```

---

### H2

```text
36px - 48px
Weight: 700
Line-height: 1.2
```

Used for major section headings.

Example:

```text
Selected Work
```

---

### H3

```text
20px - 28px
Weight: 600
```

Used for:

* Project names
* Experience titles
* Cards

---

### Body Large

```text
18px - 20px
Line-height: 1.6
```

Used in:

* Hero descriptions
* About section

---

### Body

```text
16px
Line-height: 1.6
```

---

### Small

```text
14px
Line-height: 1.5
```

Used for:

* Metadata
* Labels
* Technologies
* Dates

---

### Technical Label

Use monospace typography.

Example:

```text
[01] FEATURED WORK
```

Suggested styling:

```text
Font: Geist Mono
Size: 12px - 14px
Letter spacing: 0.1em
Uppercase
Accent or muted color
```

Use sparingly.

---

# 5. Spacing System

Use a consistent spacing scale.

Recommended base unit:

```text
4px
```

Spacing tokens:

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
128px
```

Example Tailwind mapping:

```text
1 = 4px
2 = 8px
3 = 12px
4 = 16px
5 = 20px
6 = 24px
8 = 32px
10 = 40px
12 = 48px
16 = 64px
20 = 80px
24 = 96px
32 = 128px
```

---

## Section Spacing

Desktop:

```text
120px - 160px vertical spacing
```

Tablet:

```text
96px - 120px
```

Mobile:

```text
72px - 96px
```

Do not use arbitrary spacing values.

---

# 6. Layout System

Use a centered container.

Recommended:

```text
max-width: 1280px
```

Main content:

```text
width: 100%
max-width: 1280px
margin: auto
```

Horizontal padding:

```text
Desktop:
32px - 48px

Tablet:
24px

Mobile:
16px - 20px
```

Use consistent grid alignment between sections.

---

## Grid

Desktop:

```text
12-column grid
```

Tablet:

```text
8-column grid
```

Mobile:

```text
4-column grid
```

Not every section needs to visibly use all columns, but alignment should follow this system.

---

# 7. Border Radius

Use restrained radius values.

Recommended:

```text
Small: 6px
Medium: 10px
Large: 16px
XL: 20px
```

Use:

```text
Buttons:
8px

Cards:
12px - 16px

Project visuals:
16px - 20px
```

Do not make every component extremely rounded.

Avoid:

```text
Full pill-shaped cards
Excessive 24px+ radius
```

Pills should primarily be reserved for:

* Technology tags
* Status indicators
* Small labels

---

# 8. Border System

Borders are a major part of the visual identity.

Use subtle borders to create structure.

Examples:

```css
border: 1px solid var(--border);
```

Hover:

```css
border-color: rgba(255, 255, 255, 0.15);
```

Use borders for:

* Cards
* Sections
* Project items
* Navigation
* Input fields
* Code blocks

Do not rely entirely on shadows.

---

# 9. Shadow System

Shadows should be subtle.

Suggested levels:

```text
None:
Default flat components

Low:
Slight elevation

Medium:
Modals or important interactive elements
```

Example:

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
--shadow-md: 0 8px 30px rgba(0, 0, 0, 0.25);
```

Do not use large colorful shadows.

---

# 10. Buttons

Create a reusable button component.

## Primary Button

Used for:

* View Projects
* Contact
* Primary CTA

Style:

```text
Blue accent background
High contrast text
8px radius
Clear hover state
```

Example:

```text
View My Work →
```

---

## Secondary Button

Style:

```text
Transparent background
Subtle border
Neutral text
```

Example:

```text
View GitHub
```

---

## Ghost Button

Used for low-priority actions.

```text
No background
Minimal hover effect
```

---

## Button Sizes

```text
Small:
Height 36px

Medium:
Height 44px

Large:
Height 52px
```

Do not create inconsistent button heights.

---

# 11. Navigation System

Desktop navigation should be minimal.

Structure:

```text
[ RK / Roohan Khan ]       Home  About  Work  Experience       GitHub  Contact
```

Requirements:

* Sticky
* Subtle translucent background
* Backdrop blur only if performance remains good
* Bottom border
* Active section indicator
* Responsive mobile menu

The navbar should not dominate the screen.

---

# 12. Card System

Do not use cards everywhere.

Use cards only when grouping information improves comprehension.

Card structure:

```text
Surface background
1px subtle border
Medium radius
Consistent internal padding
```

Hover:

```text
Slight upward movement
Border becomes more visible
Subtle surface change
```

Do not use:

* Large scaling
* Heavy shadows
* Aggressive glow

---

# 13. Project Cards

Project cards are one of the most important components.

Recommended layout:

```text
Project Number

Project Name

Short description

Technology tags

Visual preview

View Case Study →
GitHub ↗
```

Each card should have strong visual hierarchy.

Example:

```text
01

Ecommerce Backend

A Laravel-powered ecommerce platform featuring authentication,
cart management, checkout workflows, and payment integrations.

Laravel
PostgreSQL
REST API
Payments

[ PROJECT VISUAL ]

View Case Study →
```

Featured projects should have larger cards than secondary projects.

---

# 14. Technology Tags

Technology tags should use a restrained pill design.

Example:

```text
Laravel
PHP
PostgreSQL
React
```

Style:

```text
Monospace or compact sans-serif
Small size
Subtle background
Subtle border
```

Do not use highly colorful technology badges.

The website should look unified rather than like a collection of logos.

---

# 15. Icons

Use one icon system consistently.

Recommended:

* Lucide Icons

Do not mix:

* Lucide
* Heroicons
* Font Awesome
* Random SVG sets

Use icons only when they improve recognition.

---

# 16. Motion System

Animations should reinforce hierarchy.

Recommended durations:

```text
Fast:
150ms

Standard:
200ms

Slow:
300ms - 500ms
```

Recommended easing:

```text
ease-out
```

---

## Hover Motion

Use subtle transformations:

```text
translateY(-2px)
translateY(-4px)
```

Avoid:

```text
Large scale transformations
Spinning
Continuous movement
```

---

## Scroll Animation

Recommended:

```text
Opacity: 0 → 1

Transform:
translateY(16px) → 0
```

Stagger lists slightly.

Do not animate every individual element independently.

---

## Hero Animation

Allow one distinctive hero animation.

Possible options:

* Animated API request flow
* Moving data nodes
* Terminal cursor
* Subtle system architecture diagram
* Code line reveal

The animation should stop or remain subtle after the initial interaction.

---

# 17. Code and Technical Elements

Use monospace typography for technical elements.

Possible elements:

```text
GET /api/projects
200 OK
```

```text
Laravel
PostgreSQL
Redis
```

```text
01 / BACKEND ENGINEERING
```

Use these details to reinforce the engineering identity.

Do not fill the portfolio with fake code.

Avoid large decorative code snippets that are not related to actual work.

---

# 18. Section Header Component

Create a reusable section header.

Structure:

```text
[ 01 ] FEATURED WORK

Selected Projects

A selection of applications, systems, and technical projects.
```

Example implementation:

```text
Eyebrow label
Large heading
Optional supporting text
```

Use consistent spacing across every section.

---

# 19. Project Case Study System

If individual project pages are implemented, use a consistent structure.

```text
PROJECT NAME

Short description

[ Hero Visual ]

Overview

The Challenge

The Solution

Architecture

Technical Decisions

Technology Stack

Key Features

Results

GitHub / Live Project
```

Architecture sections can use:

* Simple diagrams
* Flow charts
* Structured component relationships

Keep diagrams clean and readable.

---

# 20. Mobile Design

The mobile experience must not be a compressed desktop design.

Requirements:

* 44px minimum interactive targets
* Single-column layout where appropriate
* Reduced decorative elements
* Readable typography
* Proper navigation drawer
* No horizontal scrolling
* Project cards adapt cleanly
* Buttons stack when necessary

The hero must remain visually strong on mobile.

---

# 21. Accessibility

Follow basic accessibility standards.

Requirements:

* Semantic HTML
* Visible keyboard focus states
* Proper button labels
* Image alt text
* Good color contrast
* Keyboard-accessible navigation
* Reduced-motion support
* No information communicated only through color

---

# 22. Responsive Breakpoints

Recommended breakpoints:

```text
Mobile:
< 640px

Tablet:
640px - 1024px

Desktop:
1024px - 1280px

Large Desktop:
1280px+
```

The implementation should be fluid between breakpoints.

Do not create layouts that only work at exact breakpoint widths.

---

# 23. Component Design Tokens

Centralize design values.

Suggested structure:

```text
app/
components/
lib/
data/

styles/
  tokens.css
  globals.css
```

Or use the existing project's architecture if it is already better.

Define reusable tokens for:

```text
Colors
Typography
Spacing
Radius
Borders
Shadows
Motion
Breakpoints
```

Avoid scattering arbitrary design values throughout JSX.

---

# 24. Design Consistency Rules

The agent must follow these rules throughout the project:

1. Do not use random font sizes.
2. Do not use arbitrary spacing without a reason.
3. Do not use multiple competing accent colors.
4. Do not use more than two font families.
5. Do not use excessive gradients.
6. Do not use excessive rounded containers.
7. Do not animate everything.
8. Do not create unnecessary cards.
9. Do not use inconsistent button styles.
10. Reuse components instead of duplicating UI patterns.

---

# 25. Visual Inspiration Direction

The website should visually communicate:

```text
Modern Software Engineering
+
Backend Architecture
+
Premium Product Design
```

The feeling should be closer to:

* A polished developer platform
* A modern SaaS product
* A technical engineering portfolio

And less like:

* A generic student resume
* A template marketplace website
* A crypto landing page
* A gaming website
* A hacker-themed portfolio

---

# Final Design Standard

Before completing the design, review the website as a complete system.

Ask:

* Does every section look like part of the same product?
* Is the backend identity immediately clear?
* Are projects more prominent than decorative elements?
* Does the typography create clear hierarchy?
* Is the mobile design intentional?
* Are spacing and alignment consistent?
* Does the website feel credible to a recruiter or senior engineer?
* Does the portfolio demonstrate engineering thinking rather than just technology names?

The final result should feel like the personal website of a backend-focused software engineer who builds real applications and is continuously advancing toward more complex systems, architecture, data, and AI-enabled software.
