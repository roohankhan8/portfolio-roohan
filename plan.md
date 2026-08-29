# Portfolio Implementation Brief

## Objective

Replace the default starter page with a premium personal portfolio for Roohan Khan that presents him as a backend-focused software developer who builds complete applications, APIs, integrations, ecommerce systems, and data-driven products.

This file is the build brief for this specific repository. It is not a general prompt. Any missing factual content must remain intentionally omitted rather than invented.

## Current Repository State

- Framework: Next.js `16.3.3`
- Router: App Router (`app/`)
- Language: TypeScript
- Styling: Tailwind CSS `v4` via `app/globals.css`
- Fonts already available: `Geist` and `Geist Mono`
- Current UI state: default `create-next-app` starter
- Existing dependencies are minimal; do not add packages unless there is clear implementation value

## Product Positioning

The portfolio must make this message obvious within the first screen:

> Roohan Khan is a backend-focused software engineer who builds APIs, integrations, and complete software products.

The site should emphasize:

- Laravel and PHP strength
- Backend/API development
- Full-stack delivery when needed
- Practical work with React, Next.js, and Flutter
- Databases including MySQL and PostgreSQL
- Payment, admin, ecommerce, and third-party integration experience
- Ongoing growth into backend architecture, AI-enabled software, and data work

The site must not read like a generic template or a long list of technologies.

## Required Content Strategy

Prioritize credibility over coverage.

- Feature selected work, not every repository
- Explain engineering problems and decisions, not only tool names
- Keep copy specific and short
- Avoid invented metrics, dates, employers, project outcomes, or repository details
- If reliable profile data is unavailable during implementation, leave the section compact and factual

## Required Sections

Implement a single-page portfolio with these sections in order:

1. Sticky navigation
2. Hero
3. Quick profile or focus-area strip
4. About
5. Featured work
6. Technical stack
7. Engineering approach
8. Experience
9. Currently exploring
10. GitHub activity or selected repository summary
11. Contact
12. Footer

## Section Requirements

### 1. Navigation

- Sticky top navigation
- Links to `Home`, `About`, `Work`, `Experience`, `Skills`, `Contact`
- External links for GitHub and LinkedIn
- Resume link only if a real resume asset exists in the repo
- Mobile navigation required
- Active section state required

### 2. Hero

Must include:

- Name: `Roohan Khan`
- Role: `Backend Developer & Software Engineer` or a close variant
- Supporting line focused on APIs, backend systems, integrations, and products
- Short paragraph describing backend, scalable web apps, REST APIs, ecommerce, payments, and data-driven work
- CTAs for work, GitHub, and LinkedIn
- One restrained technical visual element

Avoid generic hero copy and decorative noise.

### 3. Quick Profile

Use a compact strip or card cluster highlighting focus areas such as:

- Backend Systems
- REST APIs
- Laravel
- Payment Integrations
- Full-Stack Applications
- Data and Machine Learning

Only include numeric stats if they come from reliable local or fetched data.

### 4. About

Explain the professional narrative in a concise, human tone:

- Started in web development and expanded into full-stack delivery
- Strong practical PHP and Laravel experience
- Work across React, Next.js, Flutter, APIs, and integrations
- Interest in architecture, databases, AI, and machine learning
- Continuous learning through practical projects

Optional supporting UI:

- Focus-area list
- Small timeline
- Currently exploring callout

### 5. Featured Work

This is the most important section.

- Show approximately 4 to 6 selected projects
- Prioritize backend systems, ecommerce, payment/integration work, enterprise/admin platforms, and strong data projects
- Each project must include:
  - Name
  - One-sentence summary
  - Problem solved
  - Tech stack
  - Engineering challenges or technical decisions
  - GitHub link if valid
  - Demo link if valid
- Include a clear `View Case Study` interaction even if the initial implementation keeps the case study inline or lightweight

Do not fabricate project content. If details are incomplete, keep the card tighter instead of guessing.

### 6. Technical Stack

Group skills by capability instead of showing a wall of badges.

Required groups:

- Backend
- Frontend
- Databases
- Mobile
- Data and AI
- Tools and Infrastructure

The UI may be expandable, tabbed, or segmented, but it must remain restrained and readable.

### 7. Engineering Approach

Create a section that explains how Roohan builds software.

Suggested progression:

- Understand the problem
- Design the system
- Model the data
- Build the API
- Integrate services
- Test the workflow
- Improve maintainability

This section should reinforce engineering judgment and backend identity.

### 8. Experience

- Use a clean timeline or stacked layout
- Include only verified roles, dates, and responsibilities
- If public data is limited, keep the section concise
- Do not invent employers or timelines

### 9. Currently Exploring

Present focused growth areas, for example:

- NestJS
- System design
- Advanced Laravel architecture
- AI-enabled applications
- Data engineering
- Cloud architecture

Frame this as active growth, not lack of specialization.

### 10. GitHub Activity

- Distinguish personal and work GitHub presence when data supports it
- Prefer selected repositories or technology summaries over brittle scraped activity widgets
- Do not expose private repositories or uncertain data

### 11. Contact

- Strong closing CTA
- GitHub and LinkedIn links
- Email only if confirmed and appropriate
- No fake contact form
- If no mail backend exists, use `mailto:` or keep the form out of scope for now

### 12. Footer

Include:

- Roohan Khan
- Backend Developer & Software Engineer
- GitHub link
- LinkedIn link
- Optional `Built with Next.js`

## Implementation Constraints

- Use server components by default
- Add client components only where interaction requires them
- Keep the site as a single-page experience unless project case-study routing becomes necessary
- Reuse shared data structures for projects, skills, experience, and social links
- Prefer clean section components over one large page file
- Avoid unnecessary dependencies
- Respect reduced-motion preferences
- Maintain semantic HTML and accessible focus states
- Ensure mobile-first responsiveness

## Expected File Direction

Target structure should stay simple and reusable. A likely direction:

- `app/page.tsx` for page composition
- `app/layout.tsx` for metadata and shell setup
- `app/globals.css` for tokens, utilities, and global styling
- `app/_components/` for reusable sections and UI primitives
- `app/_lib/` for typed content data

Exact names may be adjusted if a clearer structure emerges, but repeated content must not be hardcoded across multiple components.

## Content Rules

- Do not invent project facts
- Do not invent experience details
- Do not invent GitHub statistics
- Do not add placeholder lorem ipsum
- If a section lacks enough verified content, design for brevity rather than filler

## Research Rules For Later Build

When gathering content for implementation:

- Use reliable public sources only
- Prioritize GitHub and any locally available resume or content files
- Use LinkedIn only for information that is clearly visible and verifiable
- Keep a factual boundary between confirmed information and inferred positioning

## Delivery Standard

The finished portfolio should quickly answer:

- Who is Roohan Khan?
- What does he specialize in?
- What has he built?
- What problems can he solve?
- What technologies does he actually use?
- How can someone contact him?

If any section weakens that clarity, reduce it or simplify it.
