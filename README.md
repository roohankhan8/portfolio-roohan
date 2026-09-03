# Roohan Khan — Backend Engineering Portfolio

[![Live site](https://img.shields.io/badge/Live%20site-portfolio--roohan.vercel.app-0f766e?style=flat-square)](https://portfolio-roohan.vercel.app)

A personal portfolio for **Roohan Khan**, an Associate Software Engineer focused on backend work. It presents selected projects, engineering approach, experience, skills, and contact details in a focused single-page experience.

**Live site:** [portfolio-roohan.vercel.app](https://portfolio-roohan.vercel.app)

![Social preview of the Roohan Khan portfolio](https://portfolio-roohan.vercel.app/opengraph-image)

## Design goals

- Put backend systems work, practical delivery, and engineering judgment ahead of decorative UI.
- Make the portfolio easy to scan for recruiters and collaborators, with clear anchors for experience, projects, skills, and contact.
- Keep the interface responsive, readable, and theme-aware.
- Provide strong sharing and search metadata, including a canonical URL, Open Graph/Twitter preview image, JSON-LD, `robots.txt`, and a sitemap.

## Technology stack

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- `next/font` for local, optimized Geist typography
- React Icons
- Vitest and Testing Library

## Local setup

Prerequisites: Node.js 20.9 or newer and npm.

```bash
git clone https://github.com/roohankhan8/portfolio-roohan.git
cd portfolio-roohan
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To generate canonical URLs and crawler metadata for a different deployment domain, create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without this variable, the site uses `https://portfolio-roohan.vercel.app` as its public base URL.

## Project structure

```text
app/
├── _components/        # Portfolio sections and shared UI
├── _lib/               # Portfolio content, project data, and types
├── _screenshots/       # Project imagery
├── globals.css         # Global styles and design tokens
├── layout.tsx          # Fonts and site-wide SEO metadata
├── page.tsx            # Homepage composition and JSON-LD
├── opengraph-image.tsx # Generated 1200×630 social preview
├── robots.ts           # /robots.txt route
└── sitemap.ts          # /sitemap.xml route
```

## Commands

```bash
npm run dev      # Start the local development server
npm run lint     # Run ESLint
npm test         # Run the Vitest suite once
npm run build    # Create and validate the production build
npm start        # Serve a completed production build
```

Run `npm run lint`, `npm test`, and `npm run build` before opening a pull request or deploying.

## Accessibility

The site is built with accessibility in mind: semantic sectioning, descriptive headings, keyboard-operable native controls and links, responsive text, and visible content hierarchy. When changing the UI, preserve focus visibility, maintain sufficient color contrast in both themes, give images meaningful `alt` text, and test keyboard navigation at narrow and wide viewport sizes.

## Updating content

Most portfolio copy and site-level details live in `app/_lib/portfolio-data.ts`:

- Update `siteMeta` for the title, description, contact details, and public URLs.
- Update `projects.json` for project summaries, technology stacks, links, and screenshot references.
- Add project images to `app/_screenshots/`, then register them in `portfolio-data.ts` when needed.
- Update experience, skills, focus areas, and navigation in `portfolio-data.ts`.

After an update, review the project locally, run the validation commands above, and check the generated `/opengraph-image`, `/robots.txt`, and `/sitemap.xml` routes.

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com/new). Import the repository, use the default Next.js build settings, and set `NEXT_PUBLIC_SITE_URL` to the final production URL before deploying. Vercel will serve the application and generate the metadata routes automatically.

## License

This repository is a personal portfolio. Please do not reuse the design, written content, or project material as your own.
