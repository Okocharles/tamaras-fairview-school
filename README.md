# Tamara's Fairview Nursery, Grade and High School — Website

The real, production-ready Next.js build of the public website for Tamara's Fairview Nursery, Grade and High School (Jos South LGA, Plateau State, Nigeria).

This supersedes the earlier single-file React prototype — same design and content, but now a proper Next.js App Router project with real image assets (no more embedded/compressed base64 photos), file-based routing, and `next/image` optimization throughout.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS 4**
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To verify a production build:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    page.tsx                    # Home
    about/page.tsx
    staff/page.tsx
    admissions/page.tsx
    contact/page.tsx
    sections/[slug]/page.tsx    # Discovery, Nursery, Grade School,
                                 # Junior Secondary, Senior Secondary
    layout.tsx
    globals.css
  components/
    Navbar.tsx, Footer.tsx
    UI.tsx                      # buttons, headings, PageHero
    CrestBadge.tsx               # placeholder crest (used only where no real logo applies)
    GalleryCarousel.tsx          # auto-advancing photo carousel (next/image)
    ApplicationModal.tsx         # admissions form → Google Sheets
    ApplyProvider.tsx            # context so any page can open the apply modal
    SectionTemplate.tsx          # shared template for all 5 section pages
    HomeClient.tsx
  lib/
    colors.ts                   # design tokens (navy/gold palette)
    data.ts                     # section content, galleries, staff, contacts

public/
  images/
    logos/                      # grade-school-logo.png, high-school-logo.png
    staff/                      # staff + proprietress photos
    sections/
      nursery/
      grade-school/
      high-school/              # shared by Junior + Senior Secondary

docs/
  Master_Build_Specification.md # the living PRD this site was built from

tools/
  test-admissions-endpoint.html # standalone page to test the Google Apps
                                 # Script endpoint independent of the app
```

## Two-tier logo system

- **Grade School crest** (`/images/logos/grade-school-logo.png`) — used on Discovery (placeholder crest for now), Nursery, and Grade School
- **High School crest** (`/images/logos/high-school-logo.png`) — used on Junior Secondary and Senior Secondary

The main site header always uses the Grade School crest as the primary mark.

## Admissions → Google Sheet

The admissions modal posts to `GOOGLE_SHEETS_ENDPOINT` in `src/lib/data.ts` — a Google Apps Script Web App URL bound to the school's admissions Google Sheet. See `tools/test-admissions-endpoint.html` to test that endpoint directly, independent of the app.

## Deploying

This is a standard Next.js app — deploy to [Vercel](https://vercel.com) (recommended, zero config) or any Node hosting that supports Next.js.

## License

Private project for Tamara's Fairview Nursery, Grade and High School. Not licensed for reuse.
