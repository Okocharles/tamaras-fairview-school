# Tamara's Fairview School

Tamara's Fairview School is a Next.js-based school management application. From the project structure and database schema, it appears to support core school operations such as staff management, student records, academics, billing, CBT exams, assignments, lesson notes, and notifications.

## Main Features
- Multi-role school access for admins, teachers, bursars, parents, and students
- Academic session and term management
- Class, subject, and staff assignment tracking
- Student and parent record management
- Results, assignments, lesson notes, and CBT exam workflows
- Fee scheduling and payment tracking
- Notification support

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Prisma
- PostgreSQL
- Supabase
- Tailwind CSS

## Project Structure
- `app/` - Next.js app routes and pages
- `components/` - reusable UI components
- `lib/` - shared helpers and utilities
- `prisma/` - database schema and Prisma setup
- `public/` - static assets
- `store/` - client-side state management
- `supabase/` - Supabase-related configuration or helpers

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file and update it with real values:

```bash
cp .env.example .env
```

3. Make sure your database connection values are set in `.env`.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Database Notes
- Prisma is configured for PostgreSQL.
- The schema defines school-specific models such as `Student`, `Staff`, `Class`, `Subject`, `Result`, `CbtExam`, `FeeSchedule`, and `Payment`.
- Database connection values are expected from environment variables such as `DATABASE_URL` and `DIRECT_URL`.

## Environment Notes
- Do not commit real secrets to the repository.
- Review `.env.example` before local setup.

## Status
This README was updated to replace the default framework template with project-specific onboarding notes.
