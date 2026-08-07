# TAMARA'S FAIRVIEW SCHOOL
## Master Build Specification (MBS)
### Version 1.0 — July 2026
### Document Reference: MBS-WEB-2026-V1

---

> **Classification:** Internal Development Document  
> **Prepared For:** Development Team / AI Coding Assistant  
> **Organization:** Tamara's Fairview Nursery, Grade and High School  
> **Location:** 13 Liberty Boulevard Road, Jos South LGA, Plateau State, Nigeria  
> **Contact Email:** tamarasfaviewschooljos@gmail.com  
> **Proprietress:** Mrs. Osinamofan Oko — 07038532976  
> **Exam Officer:** Mr. Reuben Yohanna — 08030467413  
> **Support Lines:** 08138298325 | 08131618327 | 08032823229  

---

## TABLE OF CONTENTS

| # | Section |
|---|---------|
| 01 | [Project Vision & Goals](#01-project-vision--goals) |
| 02 | [Technology Stack](#02-technology-stack) |
| 03 | [Folder Structure](#03-folder-structure) |
| 04 | [Design System — Colors, Typography, Spacing](#04-design-system) |
| 05 | [Authentication & Session Management](#05-authentication--session-management) |
| 06 | [User Roles & RBAC](#06-user-roles--rbac) |
| 07 | [Database Schema](#07-database-schema) |
| 08 | [Public Website — All Pages](#08-public-website) |
| 09 | [Content Management System (CMS)](#09-content-management-system-cms) |
| 10 | [Admissions Module](#10-admissions-module) |
| 11 | [Student Information System (SIS)](#11-student-information-system-sis) |
| 12 | [Student Portal & Dashboard](#12-student-portal--dashboard) |
| 13 | [Parent Portal & Dashboard](#13-parent-portal--dashboard) |
| 14 | [Teacher Portal & Dashboard](#14-teacher-portal--dashboard) |
| 15 | [Admin & Proprietress Dashboard](#15-admin--proprietress-dashboard) |
| 16 | [Examination Officer Dashboard](#16-examination-officer-dashboard) |
| 17 | [Continuous Assessment & Examination Module](#17-continuous-assessment--examination-module) |
| 18 | [Automated Report Card & Result Engine](#18-automated-report-card--result-engine) |
| 19 | [Fee & Finance Management Module](#19-fee--finance-management-module) |
| 20 | [Online Payment Gateway Integration](#20-online-payment-gateway-integration) |
| 21 | [Attendance Management Module](#21-attendance-management-module) |
| 22 | [Timetable Management Module](#22-timetable-management-module) |
| 23 | [Homework & Assignment Module](#23-homework--assignment-module) |
| 24 | [Messaging & Communication Module](#24-messaging--communication-module) |
| 25 | [Notifications System (Push, SMS, Email)](#25-notifications-system) |
| 26 | [News & Blog Module](#26-news--blog-module) |
| 27 | [Events, Calendar & RSVP Module](#27-events-calendar--rsvp-module) |
| 28 | [Photo & Video Gallery Module](#28-photo--video-gallery-module) |
| 29 | [Global Search Module](#29-global-search-module) |
| 30 | [FAQ Module](#30-faq-module) |
| 31 | [Online Chat & AI Assistant](#31-online-chat--ai-assistant) |
| 32 | [Alumni Section](#32-alumni-section) |
| 33 | [Staff HR & Profile Management](#33-staff-hr--profile-management) |
| 34 | [Library Management Module](#34-library-management-module) |
| 35 | [Transport Module](#35-transport-module) |
| 36 | [Download Center](#36-download-center) |
| 37 | [Analytics & Reporting Dashboard](#37-analytics--reporting-dashboard) |
| 38 | [Audit Logs & Activity Tracking](#38-audit-logs--activity-tracking) |
| 39 | [API Specification](#39-api-specification) |
| 40 | [SEO Requirements](#40-seo-requirements) |
| 41 | [Accessibility (WCAG 2.2 AA)](#41-accessibility-wcag-22-aa) |
| 42 | [AI-Powered Features](#42-ai-powered-features) |
| 43 | [PWA (Progressive Web App)](#43-pwa-progressive-web-app) |
| 44 | [Security Requirements](#44-security-requirements) |
| 45 | [Testing Strategy](#45-testing-strategy) |
| 46 | [CI/CD & DevOps](#46-cicd--devops) |
| 47 | [Deployment Architecture](#47-deployment-architecture) |
| 48 | [Backup & Disaster Recovery](#48-backup--disaster-recovery) |
| 49 | [Future Roadmap](#49-future-roadmap) |
| 50 | [Acceptance Criteria](#50-acceptance-criteria) |
| 51 | [AI Build Prompts Per Module](#51-ai-build-prompts-per-module) |
| 52 | [Appendices](#52-appendices) |

---

## 01. Project Vision & Goals

### 1.1 Vision Statement

Build a modern, high-performance, mobile-first web platform for **Tamara's Fairview Nursery, Grade and High School** that serves two equally important purposes:

1. **External Public Portal** — Reflects the school's faith-based values, academic excellence, identity, and serves as a primary recruitment and branding engine.
2. **Internal Management Portal / LMS** — Manages academics, admissions, fee clearances, attendance, timetables, homework, examination, and report cards from a single integrated platform.

The platform must uphold the school's institutional motto at all times:

> *"A Whole New World of Learning and Care"*

### 1.2 Core Values (To Be Embedded Across All Public Touchpoints)

| # | Value | Expression in Platform |
|---|-------|----------------------|
| 1 | **Integrity** | Transparent grade reporting, audit logs |
| 2 | **Excellence** | High-performance UX, sub-2s load times |
| 3 | **Discipline** | Structured workflows, approval chains |
| 4 | **Respect** | Accessible, inclusive design (WCAG 2.2 AA) |
| 5 | **Responsibility** | Role-based access, data protection |
| 6 | **Compassion** | Parent-friendly UI, supportive error messages |

### 1.3 Business Objectives

- Increase new admissions by providing a seamless mobile-first application experience
- Eliminate paper-based report card distribution entirely by Term 2
- Reduce fee-default rates via automated financial gatekeeping
- Improve parent engagement through real-time portals and notifications
- Establish Tamara's Fairview School as the most digitally advanced school in Jos South LGA

### 1.4 Success Metrics (KPIs)

| Metric | Target |
|--------|--------|
| Online Admission Applications | +40% in first academic year |
| Parent Portal Active Users | 70% of enrolled parent base |
| Page Load Speed (3G Nigeria) | < 2.0 seconds |
| Platform Uptime | ≥ 99.9% |
| Report Card Digital Downloads | 100% by Term 2 |
| Fee Default Rate Reduction | -25% via gatekeeper engine |
| Mobile Traffic Share | ≥ 80% (Nigerian context) |

---

## 02. Technology Stack

### 2.1 Core Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Framework** | Next.js 15 (App Router) | SSR for SEO, React Server Components, streaming |
| **Language** | TypeScript 5.x | Type safety, better AI code generation |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Utility-first, accessible components |
| **Animations** | Framer Motion 11 | Smooth micro-interactions |
| **Forms** | React Hook Form + Zod | Validation, performance |
| **State Management** | Zustand + React Query (TanStack) | Lightweight global state + server state |
| **Backend** | Next.js Server Actions + API Routes | Unified fullstack, no separate server needed |
| **ORM** | Prisma 6 | Type-safe DB access, migrations |
| **Database** | PostgreSQL 16 (Neon / Supabase) | Relational, scalable, managed |
| **Authentication** | Clerk | Multi-role auth, MFA, session mgmt |
| **File Storage** | Cloudinary | Media transforms, PDF storage |
| **Email** | Resend | Transactional email, templates |
| **SMS** | Termii (Nigerian provider) | Bulk SMS, OTP, notifications |
| **Push Notifications** | Firebase Cloud Messaging (FCM) | Android + iOS PWA push |
| **Payments** | Paystack + Flutterwave + Monnify | Nigerian payment rails |
| **Search** | Algolia / Typesense (self-hosted) | Full-text search, instant results |
| **Charts & Analytics** | Recharts + Tremor | Dashboards, data visualization |
| **AI Features** | Google Gemini API / OpenAI GPT-4o | Chatbot, suggestions, analytics |
| **Rich Text Editor** | Tiptap | CMS content creation |
| **PDF Generation** | React-PDF / Puppeteer | Report cards, receipts |
| **Deployment** | Vercel (Frontend) + Neon (DB) | Edge network, Nigeria-optimized |
| **CDN** | Cloudflare | Asset caching, DDoS protection |
| **Monitoring** | Sentry + Vercel Analytics | Error tracking, performance |
| **CI/CD** | GitHub Actions | Automated testing and deployment |

### 2.2 Third-Party Integrations

| Service | Purpose |
|---------|---------|
| Google Maps API | Campus map embed |
| Google reCAPTCHA v3 | Form spam protection |
| WhatsApp Business API | Parent chat |
| Termii | Nigerian SMS gateway |
| Paystack | Primary payment gateway |
| Flutterwave | Secondary payment gateway |
| Monnify | Bank transfer payments |
| Firebase | Push notifications |
| Cloudinary | Media management |
| Resend | Email delivery |
| Algolia | Search |
| Google Analytics 4 | Traffic analytics |
| Sentry | Error monitoring |
| Gemini API | AI Assistant |

---

## 03. Folder Structure

```
tamara-fairview-school/
├── app/                              # Next.js App Router
│   ├── (public)/                     # Public routes (no auth)
│   │   ├── page.tsx                  # Homepage
│   │   ├── about/
│   │   ├── sections/                 # School sections — each a static route (own hero, logo, content)
│   │   │   ├── discovery/
│   │   │   │   └── page.tsx
│   │   │   ├── nursery/              # Nursery incl. LKG & HKG sub-tabs
│   │   │   │   └── page.tsx
│   │   │   ├── grade-school/
│   │   │   │   └── page.tsx
│   │   │   ├── junior-secondary/     # JSS1–JSS3
│   │   │   │   └── page.tsx
│   │   │   └── senior-secondary/     # SS1–SS3
│   │   │       └── page.tsx
│   │   ├── admissions/
│   │   ├── news/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── alumni/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── downloads/
│   │   ├── careers/
│   │   └── search/
│   ├── (auth)/                       # Auth routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (portal)/                     # Protected portal routes
│   │   ├── layout.tsx                # Portal shell layout
│   │   ├── student/
│   │   │   ├── dashboard/
│   │   │   ├── homework/
│   │   │   ├── timetable/
│   │   │   ├── results/
│   │   │   ├── attendance/
│   │   │   └── profile/
│   │   ├── parent/
│   │   │   ├── dashboard/
│   │   │   ├── children/
│   │   │   ├── payments/
│   │   │   ├── messages/
│   │   │   ├── results/
│   │   │   └── notifications/
│   │   ├── teacher/
│   │   │   ├── dashboard/
│   │   │   ├── attendance/
│   │   │   ├── homework/
│   │   │   ├── marks/
│   │   │   ├── lesson-plans/
│   │   │   ├── timetable/
│   │   │   └── messages/
│   │   ├── exam-officer/
│   │   │   ├── dashboard/
│   │   │   ├── question-papers/
│   │   │   ├── timetable/
│   │   │   ├── invigilators/
│   │   │   └── results/
│   │   └── admin/
│   │       ├── dashboard/
│   │       ├── students/
│   │       ├── staff/
│   │       ├── admissions/
│   │       ├── finance/
│   │       ├── cms/
│   │       ├── analytics/
│   │       ├── audit-logs/
│   │       ├── library/
│   │       ├── transport/
│   │       └── settings/
│   ├── api/                          # API route handlers
│   │   ├── auth/
│   │   ├── students/
│   │   ├── staff/
│   │   ├── admissions/
│   │   ├── assessments/
│   │   ├── results/
│   │   ├── payments/
│   │   │   ├── paystack/
│   │   │   ├── flutterwave/
│   │   │   └── monnify/
│   │   ├── notifications/
│   │   ├── search/
│   │   ├── cms/
│   │   ├── analytics/
│   │   └── webhooks/
│   ├── layout.tsx                    # Root layout
│   └── globals.css
├── components/
│   ├── ui/                           # shadcn/ui base components
│   ├── public/                       # Public website components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSlider.tsx
│   │   ├── SchoolSectionCard.tsx
│   │   ├── CoreValuesGrid.tsx
│   │   ├── GoldenRulesAccordion.tsx
│   │   ├── EventCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── AlumniCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── SearchBar.tsx
│   │   └── ChatWidget.tsx
│   ├── portal/                       # Portal-shared components
│   │   ├── PortalSidebar.tsx
│   │   ├── PortalHeader.tsx
│   │   ├── NotificationBell.tsx
│   │   ├── AttendanceTable.tsx
│   │   ├── GradeTable.tsx
│   │   ├── ReportCard.tsx
│   │   ├── PaymentHistory.tsx
│   │   ├── HomeworkCard.tsx
│   │   ├── TimetableGrid.tsx
│   │   └── MessageThread.tsx
│   └── shared/                       # Shared across public + portal
│       ├── LoadingSpinner.tsx
│       ├── ErrorBoundary.tsx
│       ├── Toast.tsx
│       └── Modal.tsx
├── lib/
│   ├── prisma.ts                     # Prisma client singleton
│   ├── auth.ts                       # Clerk helpers
│   ├── paystack.ts                   # Paystack utilities
│   ├── flutterwave.ts
│   ├── monnify.ts
│   ├── termii.ts                     # SMS utilities
│   ├── cloudinary.ts                 # Upload helpers
│   ├── resend.ts                     # Email utilities
│   ├── fcm.ts                        # Push notification helpers
│   ├── search.ts                     # Algolia client
│   ├── gemini.ts                     # AI client
│   ├── pdf.ts                        # Report card PDF generator
│   └── utils.ts
├── actions/                          # Server Actions
│   ├── admissions.ts
│   ├── assessments.ts
│   ├── attendance.ts
│   ├── finance.ts
│   ├── messaging.ts
│   ├── notifications.ts
│   ├── results.ts
│   └── staff.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   ├── images/
│   ├── icons/
│   ├── manifest.json                 # PWA manifest
│   └── sw.js                         # Service worker
├── hooks/                            # Custom React hooks
├── types/                            # TypeScript type definitions
├── config/                           # App configuration
├── middleware.ts                     # Clerk auth middleware
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 04. Design System

### 4.1 Color Palette

```css
/* Primary Brand Colors — Tamara's Fairview */
--color-primary-900: #0A1628;    /* Deep Navy */
--color-primary-800: #0D1F3C;
--color-primary-700: #102850;
--color-primary-600: #1A3A6B;
--color-primary-500: #1E4D8C;    /* Main Brand Blue */
--color-primary-400: #2E6AC9;
--color-primary-300: #5B8DE8;
--color-primary-200: #93B8F5;
--color-primary-100: #D0E3FD;
--color-primary-50:  #EBF3FF;

/* Secondary — Gold (Excellence & Achievement) */
--color-gold-900: #3D2400;
--color-gold-600: #B45309;
--color-gold-500: #D97706;       /* Main Gold */
--color-gold-400: #F59E0B;
--color-gold-300: #FCD34D;
--color-gold-100: #FEF3C7;

/* Success */
--color-success-500: #059669;
--color-success-100: #D1FAE5;

/* Warning */
--color-warning-500: #D97706;
--color-warning-100: #FEF3C7;

/* Danger */
--color-danger-500: #DC2626;
--color-danger-100: #FEE2E2;

/* Neutrals */
--color-neutral-900: #111827;
--color-neutral-700: #374151;
--color-neutral-500: #6B7280;
--color-neutral-300: #D1D5DB;
--color-neutral-100: #F3F4F6;
--color-white: #FFFFFF;
```

### 4.2 Typography

```css
/* Import in layout.tsx */
/* Google Fonts: Inter (UI), Playfair Display (headings) */

--font-sans: 'Inter', system-ui, sans-serif;
--font-display: 'Playfair Display', Georgia, serif;  /* For hero & section titles */
--font-mono: 'JetBrains Mono', monospace;

/* Scale */
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */
--text-6xl:  3.75rem;    /* 60px */
```

### 4.3 Spacing & Breakpoints

```css
/* Breakpoints */
--screen-sm:  640px;
--screen-md:  768px;
--screen-lg:  1024px;
--screen-xl:  1280px;
--screen-2xl: 1536px;

/* Touch targets — minimum 48x48px as per WCAG */
--touch-target-min: 48px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

### 4.4 Component Design Tokens

| Component | Background | Text | Border | Shadow |
|-----------|-----------|------|--------|--------|
| Primary Button | `primary-500` | white | none | md |
| Secondary Button | transparent | `primary-500` | `primary-500` | none |
| Card | white | `neutral-900` | `neutral-200` | sm |
| Portal Sidebar | `primary-900` | white | none | lg |
| Badge (Pass) | `success-100` | `success-500` | none | none |
| Badge (Fail) | `danger-100` | `danger-500` | none | none |

### 4.5 Section Branding — Two-Tier Logo System

The school operates two visually distinct wings under one institution, and the site's logo swaps by section rather than using a single mark everywhere.

```
/public/images/logos/
├── grade-school-logo.png     # F&S crest — rainbow, book, dove
└── high-school-logo.png      # TFHS crest — rainbow, torch, dove
```

| Logo Asset | CSS Var | Used On |
|---|---|---|
| `grade-school-logo.png` | `--logo-junior` | Discovery, Nursery (incl. LKG/HKG), Grade School |
| `high-school-logo.png` | `--logo-senior` | Junior Secondary (JSS), Senior Secondary (SSS) |

**Implementation notes:**
- Store the active logo per section in a single config map (`config/sections.ts`) keyed by section slug — every section page, its nav breadcrumb, and its hero badge read from the same map so the two logos never drift out of sync.
- The main site header (global Navbar, homepage, footer) keeps the primary Tamara's Fairview wordmark/crest as today; the section-specific logo only appears within that section's own pages (hero badge, section nav pill, section-specific footer strip) to visually orient parents on which wing they're browsing.
- Both PNGs should be re-exported as optimized SVG or WebP for retina/perf, but source files are the two supplied crests.

---

## 05. Authentication & Session Management

### 5.1 Provider: Clerk

- **Sign-up:** Email + Password or Google OAuth
- **Sign-in:** Email/Password, Google, OTP (SMS via Termii)
- **MFA:** TOTP (Google Authenticator) for Admin roles
- **Session Duration:** 7 days (auto-refresh)
- **Password Reset:** Email link + SMS OTP
- **Account Types:** Separate flows for Staff vs. Parent/Student

### 5.2 Auth Middleware

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/about(.*)',
  '/news(.*)',
  '/events(.*)',
  '/gallery(.*)',
  '/contact(.*)',
  '/faq(.*)',
  '/downloads(.*)',
  '/alumni(.*)',
  '/admissions/apply(.*)',
  '/search(.*)',
  '/api/webhooks/(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});
```

### 5.3 Role-Based Route Protection

| Route Prefix | Required Role |
|-------------|--------------|
| `/portal/admin/*` | `super_admin`, `admin` |
| `/portal/exam-officer/*` | `exam_officer`, `super_admin` |
| `/portal/teacher/*` | `teacher`, `super_admin` |
| `/portal/parent/*` | `parent`, `super_admin` |
| `/portal/student/*` | `student`, `super_admin` |

---

## 06. User Roles & RBAC

### 6.1 Role Hierarchy

```
super_admin (Proprietress)
    │
    ├── admin (Office Manager)
    │       ├── exam_officer
    │       ├── teacher (Subject/Class Teachers)
    │       └── hod (Head of Department)
    │
    ├── parent
    └── student
```

### 6.2 Permission Matrix

| Permission | super_admin | admin | exam_officer | hod | teacher | parent | student |
|-----------|:-----------:|:-----:|:------------:|:---:|:-------:|:------:|:-------:|
| Approve results | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Edit student records | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Upload CA scores | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Upload homework | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| View own results | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| Download report card | ✅ | ✅ | ✅ | ❌ | ❌ | ✅* | ✅* |
| Make payments | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Approve admissions | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Publish news/events | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View analytics | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage staff | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View audit logs | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Send circulars | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage library | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage transport | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

> *`✅*` = Only if no outstanding financial obligations (Clearance Engine)

### 6.3 Clerk Metadata Structure

```json
{
  "publicMetadata": {
    "role": "teacher",
    "staffId": "STF-2024-0042",
    "section": "grade_school",
    "department": "mathematics"
  },
  "privateMetadata": {
    "dbUserId": "uuid-here"
  }
}
```

---

## 07. Database Schema

### 7.1 Core Models (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─────────────────────────────────────────
// ENUMS
// ─────────────────────────────────────────

enum UserRole {
  SUPER_ADMIN
  ADMIN
  EXAM_OFFICER
  HOD
  TEACHER
  PARENT
  STUDENT
}

enum Section {
  DISCOVERY
  NURSERY
  LKG
  HKG
  GRADE_SCHOOL
  JSS
  SSS
}

enum Term {
  FIRST
  SECOND
  THIRD
}

enum AdmissionStatus {
  PENDING
  UNDER_REVIEW
  ACCEPTED
  REJECTED
  WAITLISTED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum AttendanceStatus {
  PRESENT
  ABSENT
  LATE
  EXCUSED
}

enum NotificationChannel {
  PUSH
  SMS
  EMAIL
  IN_APP
}

enum EventStatus {
  DRAFT
  PUBLISHED
  CANCELLED
  COMPLETED
}

enum NewsStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

enum LibraryItemStatus {
  AVAILABLE
  BORROWED
  RESERVED
  DAMAGED
}

// ─────────────────────────────────────────
// USER
// ─────────────────────────────────────────

model User {
  id            String   @id @default(cuid())
  clerkId       String   @unique
  email         String   @unique
  firstName     String
  lastName      String
  phone         String?
  avatarUrl     String?
  role          UserRole
  isActive      Boolean  @default(true)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  student       Student?
  staff         Staff?
  parentOf      ParentStudent[]
  notifications Notification[]
  auditLogs     AuditLog[]    @relation("PerformedBy")
  sentMessages  Message[]     @relation("Sender")
  receivedMessages MessageRecipient[]
}

// ─────────────────────────────────────────
// STUDENT
// ─────────────────────────────────────────

model Student {
  id                String    @id @default(cuid())
  userId            String    @unique
  user              User      @relation(fields: [userId], references: [id])
  studentId         String    @unique  // e.g., TFS-2024-001
  section           Section
  grade             String    // e.g., "Grade 3", "JSS1", "SS2"
  dateOfBirth       DateTime
  gender            String
  address           String?
  stateOfOrigin     String?
  religion          String?
  enrollmentDate    DateTime  @default(now())
  isActive          Boolean   @default(true)
  hasOutstandingFee Boolean   @default(false)

  parents           ParentStudent[]
  attendance        Attendance[]
  caScores          CAScore[]
  termResults       TermResult[]
  homeworkSubmissions HomeworkSubmission[]
  feeInvoices       FeeInvoice[]
  libraryBorrows    LibraryBorrow[]
  transportRoute    TransportRouteStudent?
  admissionRecord   AdmissionApplication?
}

model ParentStudent {
  id         String   @id @default(cuid())
  parentId   String
  studentId  String
  parent     User     @relation(fields: [parentId], references: [id])
  student    Student  @relation(fields: [studentId], references: [id])
  relationship String  // Mother, Father, Guardian

  @@unique([parentId, studentId])
}

// ─────────────────────────────────────────
// STAFF
// ─────────────────────────────────────────

model Staff {
  id             String   @id @default(cuid())
  userId         String   @unique
  user           User     @relation(fields: [userId], references: [id])
  staffId        String   @unique  // e.g., STF-2024-0042
  department     String?
  qualification  String?
  subjects       StaffSubject[]
  classes        StaffClass[]
  joinDate       DateTime @default(now())
  isActive       Boolean  @default(true)
  leaveBalance   Int      @default(20)
  leaveRequests  LeaveRequest[]
  documents      StaffDocument[]
  homeworks      Homework[]
  lessonPlans    LessonPlan[]
}

model StaffSubject {
  id        String   @id @default(cuid())
  staffId   String
  staff     Staff    @relation(fields: [staffId], references: [id])
  subject   String
  section   Section
}

model StaffClass {
  id        String   @id @default(cuid())
  staffId   String
  staff     Staff    @relation(fields: [staffId], references: [id])
  classId   String
  class     Class    @relation(fields: [classId], references: [id])
  isClassTeacher Boolean @default(false)
}

// ─────────────────────────────────────────
// CLASS
// ─────────────────────────────────────────

model Class {
  id          String    @id @default(cuid())
  name        String    // e.g., "Grade 3A", "JSS1B"
  section     Section
  academicYear String   // e.g., "2025/2026"
  teachers    StaffClass[]
  timetableSlots TimetableSlot[]
  homework    Homework[]
}

// ─────────────────────────────────────────
// ADMISSIONS
// ─────────────────────────────────────────

model AdmissionApplication {
  id                String          @id @default(cuid())
  applicationId     String          @unique  // e.g., APP-2026-0001
  applicantName     String
  dateOfBirth       DateTime
  gender            String
  appliedSection    Section
  appliedGrade      String
  parentName        String
  parentPhone       String
  parentEmail       String
  address           String
  previousSchool    String?
  documents         Json            // Array of Cloudinary URLs
  status            AdmissionStatus @default(PENDING)
  reviewedBy        String?
  reviewNotes       String?
  studentId         String?         @unique
  student           Student?        @relation(fields: [studentId], references: [id])
  createdAt         DateTime        @default(now())
  updatedAt         DateTime        @updatedAt
}

// ─────────────────────────────────────────
// ACADEMICS
// ─────────────────────────────────────────

model Subject {
  id          String   @id @default(cuid())
  name        String
  code        String   @unique
  section     Section
  caScores    CAScore[]
  termResults TermResult[]
}

model CAScore {
  id          String   @id @default(cuid())
  studentId   String
  student     Student  @relation(fields: [studentId], references: [id])
  subjectId   String
  subject     Subject  @relation(fields: [subjectId], references: [id])
  term        Term
  academicYear String
  ca1         Float    @default(0)
  ca2         Float    @default(0)
  ca3         Float    @default(0)
  ca4         Float    @default(0)
  ca5         Float    @default(0)
  totalCA     Float    @default(0)  // Max 40
  uploadedBy  String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([studentId, subjectId, term, academicYear])
}

model TermResult {
  id              String   @id @default(cuid())
  studentId       String
  student         Student  @relation(fields: [studentId], references: [id])
  subjectId       String
  subject         Subject  @relation(fields: [subjectId], references: [id])
  term            Term
  academicYear    String
  caTotal         Float    // 40%
  examScore       Float    // 60%
  totalScore      Float    // caTotal + examScore
  grade           String   // A, B, C, D, F
  remark          String   // Excellent, Good, Pass, Fail
  isPassed        Boolean
  approvedBy      String?
  approvedAt      DateTime?
  isPublished     Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@unique([studentId, subjectId, term, academicYear])
}

// ─────────────────────────────────────────
// ATTENDANCE
// ─────────────────────────────────────────

model Attendance {
  id          String           @id @default(cuid())
  studentId   String
  student     Student          @relation(fields: [studentId], references: [id])
  date        DateTime
  status      AttendanceStatus @default(PRESENT)
  remarks     String?
  recordedBy  String
  createdAt   DateTime         @default(now())

  @@unique([studentId, date])
}

// ─────────────────────────────────────────
// TIMETABLE
// ─────────────────────────────────────────

model TimetableSlot {
  id        String   @id @default(cuid())
  classId   String
  class     Class    @relation(fields: [classId], references: [id])
  dayOfWeek Int      // 1=Monday, 5=Friday
  startTime String   // "08:00"
  endTime   String   // "09:00"
  subject   String
  teacherId String
  room      String?
  term      Term
  academicYear String
}

// ─────────────────────────────────────────
// HOMEWORK & LESSON PLANS
// ─────────────────────────────────────────

model Homework {
  id           String   @id @default(cuid())
  classId      String
  class        Class    @relation(fields: [classId], references: [id])
  staffId      String
  staff        Staff    @relation(fields: [staffId], references: [id])
  subject      String
  title        String
  description  String
  attachments  Json?    // Cloudinary URLs
  dueDate      DateTime
  term         Term
  academicYear String
  createdAt    DateTime @default(now())
  submissions  HomeworkSubmission[]
}

model HomeworkSubmission {
  id          String   @id @default(cuid())
  homeworkId  String
  homework    Homework @relation(fields: [homeworkId], references: [id])
  studentId   String
  student     Student  @relation(fields: [studentId], references: [id])
  attachments Json?    // Cloudinary URLs
  remarks     String?
  score       Float?
  submittedAt DateTime @default(now())
  gradedBy    String?
  gradedAt    DateTime?
}

model LessonPlan {
  id           String   @id @default(cuid())
  staffId      String
  staff        Staff    @relation(fields: [staffId], references: [id])
  subject      String
  grade        String
  title        String
  objectives   String
  content      String
  attachments  Json?
  deliveryDate DateTime
  submittedAt  DateTime @default(now())
  version      Int      @default(1)
}

// ─────────────────────────────────────────
// FINANCE
// ─────────────────────────────────────────

model FeeStructure {
  id           String   @id @default(cuid())
  name         String   // e.g., "Tuition Fee Term 1"
  section      Section
  grade        String?
  amount       Float
  term         Term
  academicYear String
  dueDate      DateTime
  isActive     Boolean  @default(true)
}

model FeeInvoice {
  id            String        @id @default(cuid())
  invoiceId     String        @unique  // e.g., INV-2026-0001
  studentId     String
  student       Student       @relation(fields: [studentId], references: [id])
  feeItems      Json          // Array of {name, amount}
  totalAmount   Float
  amountPaid    Float         @default(0)
  balance       Float
  term          Term
  academicYear  String
  dueDate       DateTime
  isPaid        Boolean       @default(false)
  isPartial     Boolean       @default(false)
  payments      Payment[]
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model Payment {
  id               String        @id @default(cuid())
  paymentRef       String        @unique  // Gateway reference
  invoiceId        String
  invoice          FeeInvoice    @relation(fields: [invoiceId], references: [id])
  amount           Float
  gateway          String        // paystack | flutterwave | monnify
  status           PaymentStatus @default(PENDING)
  gatewayResponse  Json?
  paidAt           DateTime?
  createdAt        DateTime      @default(now())
}

// ─────────────────────────────────────────
// MESSAGING
// ─────────────────────────────────────────

model Message {
  id          String   @id @default(cuid())
  senderId    String
  sender      User     @relation("Sender", fields: [senderId], references: [id])
  subject     String
  body        String
  attachments Json?
  isCircular  Boolean  @default(false)
  recipients  MessageRecipient[]
  createdAt   DateTime @default(now())
}

model MessageRecipient {
  id         String   @id @default(cuid())
  messageId  String
  message    Message  @relation(fields: [messageId], references: [id])
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  isRead     Boolean  @default(false)
  isAcknowledged Boolean @default(false)
  readAt     DateTime?
  acknowledgedAt DateTime?

  @@unique([messageId, userId])
}

// ─────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────

model Notification {
  id         String              @id @default(cuid())
  userId     String
  user       User                @relation(fields: [userId], references: [id])
  title      String
  body       String
  type       String              // homework, fee, result, attendance, admission, general
  channel    NotificationChannel
  isRead     Boolean             @default(false)
  data       Json?               // Additional metadata
  createdAt  DateTime            @default(now())
}

// ─────────────────────────────────────────
// NEWS & BLOG
// ─────────────────────────────────────────

model NewsPost {
  id           String     @id @default(cuid())
  slug         String     @unique
  title        String
  excerpt      String
  content      String     // Rich text (Tiptap JSON or HTML)
  coverImage   String?    // Cloudinary URL
  category     String     // Achievement, Event, Academic, General
  tags         String[]
  authorId     String
  status       NewsStatus @default(DRAFT)
  publishedAt  DateTime?
  viewCount    Int        @default(0)
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}

// ─────────────────────────────────────────
// EVENTS
// ─────────────────────────────────────────

model Event {
  id           String      @id @default(cuid())
  slug         String      @unique
  title        String
  description  String
  coverImage   String?
  startDate    DateTime
  endDate      DateTime
  location     String?
  isOnline     Boolean     @default(false)
  status       EventStatus @default(DRAFT)
  rsvpEnabled  Boolean     @default(false)
  rsvpDeadline DateTime?
  maxAttendees Int?
  category     String      // Sports, Academic, Cultural, PTA, Graduation
  rsvps        EventRSVP[]
  photos       EventPhoto[]
  createdAt    DateTime    @default(now())
  updatedAt    DateTime    @updatedAt
}

model EventRSVP {
  id        String   @id @default(cuid())
  eventId   String
  event     Event    @relation(fields: [eventId], references: [id])
  name      String
  email     String
  phone     String?
  relation  String?  // Parent, Alumni, Staff, Guest
  attending Boolean  @default(true)
  createdAt DateTime @default(now())

  @@unique([eventId, email])
}

model EventPhoto {
  id        String   @id @default(cuid())
  eventId   String
  event     Event    @relation(fields: [eventId], references: [id])
  url       String
  caption   String?
  uploadedAt DateTime @default(now())
}

// ─────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────

model GalleryAlbum {
  id          String   @id @default(cuid())
  title       String
  description String?
  coverImage  String?
  category    String   // Campus, Events, Sports, Academics, Virtual Tour
  photos      GalleryPhoto[]
  videos      GalleryVideo[]
  createdAt   DateTime @default(now())
}

model GalleryPhoto {
  id        String       @id @default(cuid())
  albumId   String
  album     GalleryAlbum @relation(fields: [albumId], references: [id])
  url       String       // Cloudinary URL
  caption   String?
  altText   String
  order     Int          @default(0)
}

model GalleryVideo {
  id        String       @id @default(cuid())
  albumId   String
  album     GalleryAlbum @relation(fields: [albumId], references: [id])
  url       String
  thumbnail String?
  title     String
  duration  String?
}

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────

model FAQ {
  id        String   @id @default(cuid())
  question  String
  answer    String
  category  String   // Admissions, Fees, Academics, Portal, General
  order     Int      @default(0)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// ─────────────────────────────────────────
// ALUMNI
// ─────────────────────────────────────────

model AlumniProfile {
  id              String   @id @default(cuid())
  name            String
  graduationYear  Int
  section         String   // Last class: SS3, Grade 5, etc.
  currentLocation String?
  university      String?
  profession      String?
  testimonial     String?
  photoUrl        String?
  isApproved      Boolean  @default(false)
  createdAt       DateTime @default(now())
}

// ─────────────────────────────────────────
// LIBRARY
// ─────────────────────────────────────────

model LibraryBook {
  id          String            @id @default(cuid())
  isbn        String?           @unique
  title       String
  author      String
  subject     String?
  section     Section?
  quantity    Int               @default(1)
  available   Int               @default(1)
  coverUrl    String?
  status      LibraryItemStatus @default(AVAILABLE)
  borrows     LibraryBorrow[]
}

model LibraryBorrow {
  id          String      @id @default(cuid())
  bookId      String
  book        LibraryBook @relation(fields: [bookId], references: [id])
  studentId   String
  student     Student     @relation(fields: [studentId], references: [id])
  borrowedAt  DateTime    @default(now())
  dueDate     DateTime
  returnedAt  DateTime?
  isOverdue   Boolean     @default(false)
}

// ─────────────────────────────────────────
// TRANSPORT
// ─────────────────────────────────────────

model TransportRoute {
  id          String   @id @default(cuid())
  routeName   String
  busNumber   String?
  driverName  String?
  driverPhone String?
  stops       Json     // Array of {stopName, time}
  students    TransportRouteStudent[]
}

model TransportRouteStudent {
  id        String         @id @default(cuid())
  routeId   String
  route     TransportRoute @relation(fields: [routeId], references: [id])
  studentId String         @unique
  student   Student        @relation(fields: [studentId], references: [id])
  pickupStop String
}

// ─────────────────────────────────────────
// STAFF MANAGEMENT
// ─────────────────────────────────────────

model LeaveRequest {
  id         String   @id @default(cuid())
  staffId    String
  staff      Staff    @relation(fields: [staffId], references: [id])
  leaveType  String   // Annual, Sick, Maternity, Emergency
  startDate  DateTime
  endDate    DateTime
  days       Int
  reason     String
  status     String   @default("PENDING") // PENDING, APPROVED, REJECTED
  reviewedBy String?
  reviewedAt DateTime?
  createdAt  DateTime @default(now())
}

model StaffDocument {
  id         String   @id @default(cuid())
  staffId    String
  staff      Staff    @relation(fields: [staffId], references: [id])
  name       String
  type       String   // CV, Certificate, Contract, ID
  url        String   // Cloudinary URL
  uploadedAt DateTime @default(now())
}

// ─────────────────────────────────────────
// DOWNLOAD CENTER
// ─────────────────────────────────────────

model DownloadItem {
  id          String   @id @default(cuid())
  title       String
  description String?
  category    String   // Forms, Handbook, Calendar, Policies, Uniforms
  fileUrl     String   // Cloudinary URL
  fileType    String   // PDF, DOCX, XLSX
  fileSize    String?
  isPublic    Boolean  @default(true)  // false = portal only
  downloadCount Int    @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// ─────────────────────────────────────────
// AUDIT LOGS
// ─────────────────────────────────────────

model AuditLog {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation("PerformedBy", fields: [userId], references: [id])
  action      String   // CREATE, UPDATE, DELETE, APPROVE, REJECT, LOGIN, LOGOUT
  resource    String   // Student, Result, Fee, Staff, Admission, etc.
  resourceId  String?
  oldData     Json?
  newData     Json?
  ipAddress   String?
  userAgent   String?
  createdAt   DateTime @default(now())
}

// ─────────────────────────────────────────
// CMS (Page Builder)
// ─────────────────────────────────────────

model CMSPage {
  id         String   @id @default(cuid())
  slug       String   @unique
  title      String
  metaTitle  String?
  metaDesc   String?
  content    Json     // Structured content blocks
  isPublished Boolean @default(false)
  updatedBy  String?
  updatedAt  DateTime @updatedAt
  createdAt  DateTime @default(now())
}

model SiteSettings {
  id           String   @id @default(cuid())
  key          String   @unique
  value        String
  description  String?
  updatedAt    DateTime @updatedAt
}
```

---

## 08. Public Website

### 8.1 Homepage (`/`)

**Sections (in order):**

1. **Sticky Navigation Bar**
   - Logo (left)
   - Nav Links: Home | About | **Sections** (dropdown → Discovery / Nursery / Grade School / Junior Secondary / Senior Secondary) | Admissions | News | Events | Gallery | Alumni | Contact
   - Right: Search icon | Portal Login CTA (gold button)
   - Mobile: Hamburger → slide-in drawer
   - Transparent on hero, white on scroll (transition effect)

2. **Hero Slider / Fullscreen Carousel**
   - 4–5 slides with full-bleed background images (Cloudinary-optimized)
   - Overlaid text: School motto in Playfair Display
   - Per-slide CTAs: "Apply Now", "Explore Sections", "Portal Login"
   - Auto-advance every 6s, touch swipe on mobile
   - Pause on hover

3. **Quick Stats Bar**
   - Animated counters: `Years of Excellence` | `Students Enrolled` | `Qualified Staff` | `Graduate Success Rate`

4. **About / Identity Strip**
   - Brief intro paragraph
   - Vision & Mission side-by-side cards
   - CTA: "Read More About Us"

5. **Core Values Grid (6 Cards)**
   - Animated icon + title + description per value
   - Hover: flip card revealing deeper explanation

6. **School Sections Preview**
   - Horizontal scroll cards (mobile) / grid (desktop)
   - 5 section cards, linking to their own page: Discovery → Nursery → Grade School → Junior Secondary → Senior Secondary
   - Each card shows its section's logo badge (Grade School crest for the first three, High School crest for the last two — per §4.5), age group, short description, CTA "Explore Section"

7. **Why Choose Tamara's Fairview (Features)**
   - Icon grid: NERDC Curriculum | Faith-Based | Digital Skills | Safe Environment | Holistic Development

8. **News & Announcements Teaser** (latest 3 posts from CMS)

9. **Upcoming Events Teaser** (next 3 events)

10. **Gallery Teaser** (masonry grid, latest 6 photos)

11. **Testimonials Carousel** (parent + alumni quotes)

12. **Alumni Success Stories Strip** (3 alumni cards)

13. **Admissions CTA Banner**
    - Full-width colored band
    - "Applications are now OPEN for 2026/2027"
    - Apply Now button

14. **Contact & Location Section**
    - Embedded Google Map
    - Click-to-call phone matrix
    - Click-to-email link

15. **Footer**
    - Logo + tagline
    - Quick links (4 columns)
    - Social media icons
    - Address
    - © copyright
    - WhatsApp chat bubble (fixed, bottom-right)

---

### 8.2 About Page (`/about`)

**Sections:**
- School history and founding story
- Proprietress's message (photo + text)
- Vision, Mission
- 6 Core Values (full page, detailed)
- 7 Golden Rules (Interactive accordion with icons)
- Faith Statement (POL-17 section)
- Daily Devotion mention (7:30–8:00am)
- Holistic Education pillars: Academic, Emotional, Social, Spiritual, Practical Intelligence
- Photo gallery strip
- Accreditations / affiliations

---

### 8.3 School Sections Pages

Rather than one generic template, each school section gets its **own static route** with a purpose-built hero and content — while sharing a common component library (`SectionHero`, `SectionCurriculumBlock`, `SectionGallery`, `SectionTestimonials`, `SectionAdmissionsCTA`) so the five pages stay visually consistent and easy to maintain. Every section page reads its logo, colors accent, and copy from `config/sections.ts`.

**Shared page anatomy** (all five pages follow this skeleton, populated per section):

1. **Hero Section** — full-bleed banner, section logo badge (top-left, per the two-tier system in §4.5), section name + tagline, age-group pill, background photo/video of that section's learners, primary CTA ("Apply to This Section") + secondary CTA ("Download Curriculum Overview")
2. **Section Overview** — 2–3 paragraph description of the section's philosophy and focus
3. **Curriculum & Subjects** — subject list / focus areas, NERDC alignment note
4. **A Day in the Life** — timeline/schedule visual of a typical day
5. **Facilities specific to this section** (e.g. sensory play room for Discovery; ICT Lab for JSS/SSS)
6. **Meet the Teachers** — section-specific staff cards (photo, name, qualification)
7. **Gallery Strip** — photos filtered to this section (pulls from Gallery module, category = section)
8. **Parent/Student Testimonials** — filtered to this section
9. **Admissions CTA banner** — "Ready to enroll in [Section]?" → `/admissions/apply?section=[slug]`
10. **Cross-link footer strip** — "Explore other sections" mini-nav to the other four pages

---

#### 8.3.1 Discovery Page (`/sections/discovery`)

- **Logo:** Grade School crest (`--logo-junior`)
- **Age group:** 2+ years (Playgroup)
- **Hero:** Warm, playful imagery — toddlers in sensory play; tagline emphasizing nurturing first steps away from home
- **Overview focus:** Early childhood care, safety, and sensory development in a home-like setting
- **Curriculum highlights:** Sensory play stations, motor-skill activities, music & movement, story time, free play vs. structured play balance
- **Typical day:** Drop-off & settling, snack, sensory circle time, outdoor play, nap/rest, pickup
- **Facilities called out:** Soft-play area, nap room, low-height furniture, CCTV-monitored playground
- **Reassurance module (unique to this page):** "What to pack", drop-off/pickup safety protocol, caregiver-to-child ratio stat

#### 8.3.2 Nursery Page (`/sections/nursery`)

- **Logo:** Grade School crest (`--logo-junior`)
- **Age group:** 3–5 years — covers Nursery 1, Lower Kindergarten (LKG), Higher Kindergarten (HKG) as **in-page tabs/sub-sections** rather than separate routes
- **Hero:** Bright classroom imagery; tagline on guided discovery and school-readiness
- **Sub-level tabs:** Nursery 1 (social & cognitive growth, guided homework habits) | LKG (literacy & numeracy readiness) | HKG (primary-preparatory skills) — each tab swaps the curriculum highlights and "typical day" blocks beneath the shared hero
- **Curriculum highlights:** Phonics, early numeracy, fine motor skills, guided homework introduction
- **Facilities called out:** Reading corner, numeracy manipulatives, outdoor learning garden

#### 8.3.3 Grade School Page (`/sections/grade-school`)

- **Logo:** Grade School crest (`--logo-junior`)
- **Age group:** 6–10 years, Grade 1–5
- **Hero:** Classroom/learning imagery; tagline on building strong academic foundations
- **Curriculum highlights:** Full NERDC-aligned subject list (English, Maths, Basic Science, Social Studies, Digital Technology, CRS/IRS, Vocational/Trade Skills), Continuous Assessment (CA) structure explained
- **Typical day:** Morning devotion → subject periods → break → afternoon periods → homework club
- **Facilities called out:** Grade-level classrooms, computer lab intro, library access
- **Unique module:** "From Grade School to JSS" — a short transition-readiness note linking forward to the Junior Secondary page

#### 8.3.4 Junior Secondary Page (`/sections/junior-secondary`)

- **Logo:** High School crest (`--logo-senior`)
- **Age group:** 11+ years, JSS1–JSS3
- **Hero:** More mature academic imagery (ICT lab, labs, sports); tagline on discipline and skill-building
- **Curriculum highlights:** Full JSS subject list including Digital Technology/ICT and Trade Skills, BECE preparation track, NERDC alignment
- **Typical day:** Period-by-period breakdown including practicals (ICT lab sessions, trade skill workshops)
- **Facilities called out:** ICT/Computer Lab, science labs, trade-skills workshop, sports field
- **Unique module:** BECE readiness stats/timeline; "Meet the Exam Officer" mini-card linking to the Examination Officer contact

#### 8.3.5 Senior Secondary Page (`/sections/senior-secondary`)

- **Logo:** High School crest (`--logo-senior`)
- **Age group:** SS1–SS3
- **Hero:** Achievement-oriented imagery (graduation, science labs, career fair); tagline on advanced academics and career preparation
- **Curriculum highlights:** Science/Arts/Commercial subject tracks, WAEC/NECO exam prep, career counselling, university placement support
- **Typical day:** Extended academic periods, practical lab sessions, prep/study periods
- **Facilities called out:** Advanced science labs, careers office, ICT lab, exam hall
- **Unique module:** "Where Our Graduates Go" — university placement stats + link through to the Alumni section; WAEC/NECO results highlight strip

---

### 8.4 Admissions Page (`/admissions`)

- Overview and requirements
- Step-by-step application guide (visual stepper)
- Fee schedule table (by section)
- Academic Calendar (3-term system)
- Online Application CTA → `/admissions/apply`
- FAQ accordion (admissions-specific)
- Contact for admissions

### 8.5 Admissions Application Form (`/admissions/apply`)

**Multi-step form (5 steps with progress bar):**

1. **Step 1 — Student Details**
   - Full name, DOB, gender, nationality, state of origin, religion, address
2. **Step 2 — Section & Grade Selection**
   - Dropdown selection of section + grade
   - Age validation against selected section
3. **Step 3 — Parent/Guardian Details**
   - Parent 1 details (name, phone, email, occupation)
   - Parent 2 / Guardian details (optional)
4. **Step 4 — Document Upload**
   - Birth certificate (mobile camera or file picker)
   - Passport photograph
   - Previous school report/reference (optional)
   - Medical records (optional)
5. **Step 5 — Review & Submit**
   - Full summary
   - reCAPTCHA v3
   - Submit button
   - On success: Application ID shown, confirmation SMS + email sent

**Post-submission tracking:** `/admissions/track?id=APP-2026-XXXX`

---

### 8.6 Contact Page (`/contact`)

- Interactive Google Map
- Phone matrix (click-to-call cards)
- Email (click-to-email)
- WhatsApp direct link
- Contact form (Name, Email, Phone, Subject, Message)
- Office hours
- Transportation directions

---

### 8.7 Downloads Page (`/downloads`)

- Categorized tabs: Forms | Handbook | Calendar | Policies | Uniforms
- Search/filter
- File name, type, size, last updated
- Download button (public files; portal files require login)

---

### 8.8 Careers Page (`/careers`)

- Current vacancies list
- Job description modal
- Online application form (CV upload via Cloudinary)
- Application confirmation email

---

## 09. Content Management System (CMS)

### 9.1 Overview

Admin users can manage all website content without developer involvement.

### 9.2 CMS Features

| Feature | Description |
|---------|-------------|
| **Page Builder** | Edit any public page (About, Homepage sections, Sections pages) via structured blocks |
| **News Manager** | Create, edit, publish, schedule, archive news posts |
| **Events Manager** | Create, edit, manage events; view RSVP lists |
| **Gallery Manager** | Create albums, upload photos/videos, set captions |
| **FAQ Manager** | Add, edit, reorder FAQ entries |
| **Downloads Manager** | Upload documents, set visibility (public/portal) |
| **Site Settings** | Update school logo, phone numbers, social links, contact details |
| **SEO Manager** | Edit meta titles, descriptions, OG images per page |
| **Banner/Announcement Manager** | Create site-wide alert banners |
| **Testimonials Manager** | Add, approve, order testimonials |
| **Alumni Manager** | Review and approve alumni profile submissions |
| **Career/Vacancies Manager** | Manage job postings |

### 9.3 Rich Text Editor (Tiptap)

The CMS uses **Tiptap** for rich text content:
- Headings (H1–H4)
- Bold, italic, underline, strikethrough
- Ordered and unordered lists
- Links
- Inline images
- Tables
- YouTube embeds
- Code blocks
- Text alignment

---

## 10. Admissions Module

### 10.1 Application Workflow

```
Parent Submits Form
        ↓
Application Created (status: PENDING)
        ↓
Auto SMS + Email Confirmation sent to parent
        ↓
Admin Reviews Application (status: UNDER_REVIEW)
        ↓
Admin Decision:
    ├── ACCEPTED → Student record created, parent portal account created
    │              SMS + Email sent to parent with portal credentials
    ├── REJECTED → Rejection SMS + Email sent with reason
    └── WAITLISTED → Waitlist SMS + Email, re-review later
```

### 10.2 Admin Admissions Dashboard

- Table of all applications with filters: Status | Section | Date | Name
- Per-application actions: View | Review | Accept | Reject | Waitlist
- Bulk actions: Export CSV
- Statistics: Total Applications | Pending | Accepted | Rejected | Waitlisted

### 10.3 Application Tracking Page (Public)

Parent enters Application ID → sees current status + next steps

### 10.4 Onboarding After Acceptance

On acceptance, the system automatically:
1. Creates a `Student` record with auto-generated `studentId`
2. Creates a `User` record with role `STUDENT`
3. Creates a `User` record for parent with role `PARENT`
4. Links via `ParentStudent`
5. Sends login credentials via email + SMS
6. Creates initial `FeeInvoice` for the current term

---

## 11. Student Information System (SIS)

### 11.1 Features

| Feature | Description |
|---------|-------------|
| **Student Directory** | Searchable, filterable list of all students |
| **Student Profiles** | Full profile with photo, personal details, academic history |
| **Class Assignment** | Assign students to classes and sections |
| **Enrollment History** | Track movements across grades and academic years |
| **Document Storage** | Birth certificate, medical records, photos |
| **Notes** | Internal admin notes per student |
| **Export** | CSV export of student records |

### 11.2 Student Profile Page (Admin View)

- Personal information
- Parent/guardian details
- Current class and section
- Attendance summary
- Academic performance chart
- Fee status and invoice history
- Disciplinary notes (if any)
- Uploaded documents
- Audit trail for this student

---

## 12. Student Portal & Dashboard

**Route:** `/portal/student/dashboard`

### 12.1 Dashboard Widgets

| Widget | Description |
|--------|-------------|
| **Welcome Banner** | Student name, class, term, academic year |
| **Attendance Summary** | Percentage attendance, recent absences |
| **Upcoming Homework** | Due today, due this week |
| **Latest Results** | Most recent CA scores published |
| **Upcoming Exams** | Timetable highlights |
| **Quick Links** | Timetable | Results | Downloads | Profile |
| **Achievements** | Badges for attendance, academic, conduct |
| **Notifications** | Recent unread notifications |

### 12.2 Student Portal Pages

| Page | Path | Content |
|------|------|---------|
| Dashboard | `/portal/student/dashboard` | Summary widgets |
| Homework | `/portal/student/homework` | List of assignments, submissions |
| Timetable | `/portal/student/timetable` | Weekly class schedule |
| Results | `/portal/student/results` | CA scores + terminal results per term |
| Report Card | `/portal/student/results/[term]` | Full report card (gated by fee clearance) |
| Attendance | `/portal/student/attendance` | Monthly calendar view |
| Downloads | `/portal/student/downloads` | Timetable PDF, report, handouts |
| Profile | `/portal/student/profile` | View personal info |
| Achievements | `/portal/student/achievements` | Academic badges |
| Notifications | `/portal/student/notifications` | All notifications |

### 12.3 Report Card Gating

If `student.hasOutstandingFee === true`:
- Report Card page shows a locked state UI
- Message: *"Your report card is currently unavailable due to outstanding financial obligations. Please contact the finance office or make payment to access your results."*
- CTA: "Contact Finance Office" (phone number shown)

---

## 13. Parent Portal & Dashboard

**Route:** `/portal/parent/dashboard`

### 13.1 Dashboard Widgets

| Widget | Description |
|--------|-------------|
| **Children Cards** | Quick overview for each child linked to account |
| **Fee Status** | Outstanding balance per child |
| **Recent Notifications** | Alerts, circulars |
| **Upcoming Events** | School events |
| **Homework Due** | Children's pending homework |
| **Attendance Alerts** | Children with <80% attendance |

### 13.2 Parent Portal Pages

| Page | Path | Content |
|------|------|---------|
| Dashboard | `/portal/parent/dashboard` | Overview |
| My Children | `/portal/parent/children` | Select child to view details |
| Child Profile | `/portal/parent/children/[id]` | Full academic profile |
| Attendance | `/portal/parent/children/[id]/attendance` | Child's attendance records |
| Results | `/portal/parent/children/[id]/results` | CA and terminal results |
| Report Card | `/portal/parent/children/[id]/results/[term]` | PDF report (gated) |
| Homework | `/portal/parent/children/[id]/homework` | Assigned homework |
| Payments | `/portal/parent/payments` | Invoice list, pay online |
| Payment Receipt | `/portal/parent/payments/[id]/receipt` | Downloadable receipt |
| Messages | `/portal/parent/messages` | Inbox and sent messages |
| New Message | `/portal/parent/messages/new` | Send message to teacher/admin |
| Circulars | `/portal/parent/circulars` | School announcements |
| Timetable | `/portal/parent/children/[id]/timetable` | Child's weekly timetable |
| Profile | `/portal/parent/profile` | Personal details, notification preferences |
| Notifications | `/portal/parent/notifications` | All portal notifications |

---

## 14. Teacher Portal & Dashboard

**Route:** `/portal/teacher/dashboard`

### 14.1 Dashboard Widgets

| Widget | Description |
|--------|-------------|
| **Today's Classes** | Timetable for today |
| **Pending Attendance** | Classes awaiting today's attendance |
| **Homework Due for Grading** | Submitted but ungraded |
| **Pending Lesson Plans** | Upcoming delivery dates |
| **Unread Messages** | From parents/admin |
| **Class Performance Chart** | Average scores per class |

### 14.2 Teacher Portal Pages

| Page | Path | Content |
|------|------|---------|
| Dashboard | `/portal/teacher/dashboard` | Summary |
| My Classes | `/portal/teacher/classes` | Classes assigned |
| Attendance | `/portal/teacher/attendance` | Mark attendance per class |
| Homework | `/portal/teacher/homework` | Create, manage homework |
| Grade Homework | `/portal/teacher/homework/[id]/grade` | Review submissions, add scores |
| Marks / CA | `/portal/teacher/marks` | Enter CA1–CA5 scores |
| Lesson Plans | `/portal/teacher/lesson-plans` | Upload lesson plans (1 day prior) |
| Timetable | `/portal/teacher/timetable` | View personal teaching schedule |
| My Students | `/portal/teacher/students` | Student list for my classes |
| Student Profile | `/portal/teacher/students/[id]` | Student academic view |
| Messages | `/portal/teacher/messages` | Inbox, compose |
| Resources | `/portal/teacher/resources` | Uploaded materials |
| Profile | `/portal/teacher/profile` | Personal info, subject assignments |

### 14.3 CA Score Entry Workflow

1. Teacher selects class, term, subject
2. Student roster loads automatically
3. Teacher enters CA1–CA5 per student (max 8 marks each = 40 total)
4. System validates entries in real-time
5. Save draft or submit final
6. Once submitted, teacher cannot edit without HOD approval
7. HOD/Admin can unlock for correction + audit log entry created

---

## 15. Admin & Proprietress Dashboard

**Route:** `/portal/admin/dashboard`

### 15.1 Dashboard Widgets

| Widget | Description |
|--------|-------------|
| **Enrollment Stats** | Total students per section |
| **Revenue Chart** | Monthly fee collection vs outstanding |
| **Recent Admissions** | Latest applications and status |
| **Staff Overview** | Total staff, active, on leave |
| **Attendance Rate** | School-wide today |
| **Recent Audit Activity** | Latest significant actions |
| **Upcoming Events** | Events needing attention |
| **System Health** | Uptime, storage usage |

### 15.2 Admin Pages

| Area | Key Pages |
|------|-----------|
| **Students** | Directory, profiles, enrollment, class assignment |
| **Staff** | Directory, profiles, leave, documents |
| **Admissions** | Application review, status management |
| **Finance** | Fee structures, invoices, payment records, outstanding reports |
| **CMS** | News, events, gallery, pages, FAQs, downloads |
| **Analytics** | Full analytics dashboard |
| **Audit Logs** | Complete activity history |
| **Notifications** | Send announcements, manage notification templates |
| **Library** | Book management, borrow records |
| **Transport** | Routes, drivers, student assignments |
| **Settings** | Site settings, academic year, term dates, fee structures |
| **Roles** | Manage user roles and permissions |

---

## 16. Examination Officer Dashboard

**Route:** `/portal/exam-officer/dashboard`

### 16.1 Core Features

| Feature | Description |
|---------|-------------|
| **Question Paper Review** | Review and approve uploaded question papers from teachers |
| **Exam Timetable** | Create and publish examination timetables |
| **Invigilator Management** | Assign teachers to exam halls, seating plans |
| **Result Approval** | Final review and approval of terminal exam scores before publication |
| **Grade Release Control** | Toggle result visibility per class/subject |
| **Exam Integrity** | Lock portal access during examination windows |

### 16.2 Exam Timetable Builder

- Grid-based timetable builder
- Assign subjects, dates, times, venue, invigilator
- Preview timetable before publishing
- Publish → auto-notification to all students and parents

### 16.3 Result Publication Workflow

```
Teacher enters Terminal Exam Scores
          ↓
HOD Reviews & Approves (optional, if configured)
          ↓
Exam Officer Reviews All Subjects
          ↓
Exam Officer Approves Publication
          ↓
Proprietress Final Sign-off (for SSS)
          ↓
System publishes results
          ↓
Auto-notification: SMS + Email + Push to parents/students
```

---

## 17. Continuous Assessment & Examination Module

### 17.1 Assessment Framework (POL-02)

| Component | Weight | Details |
|-----------|--------|---------|
| CA1 | 8% | First continuous assessment |
| CA2 | 8% | Second continuous assessment |
| CA3 | 8% | Third continuous assessment |
| CA4 | 8% | Fourth continuous assessment |
| CA5 | 8% | Fifth continuous assessment |
| **Total CA** | **40%** | Sum of CA1–CA5 |
| Terminal Exam | 60% | End-of-term examination |
| **Total Score** | **100%** | CA Total + Exam Score |

### 17.2 Grading Scale

| Score Range | Grade | Remark |
|-------------|-------|--------|
| 90–100 | A+ | Exceptional |
| 80–89 | A | Excellent |
| 70–79 | B | Very Good |
| 60–69 | C | Good |
| 50–59 | D | Pass |
| 0–49 | F | Fail |

### 17.3 Promotion Criteria (POL-02)

- Minimum pass: **50%** per subject
- Minimum attendance: **80%** for promotion eligibility
- Students failing more than 3 subjects = recommended for repeat
- System flags at-risk students automatically

### 17.4 Score Computation Engine

```typescript
// lib/scoreEngine.ts

export function computeCATotal(ca1: number, ca2: number, ca3: number, ca4: number, ca5: number): number {
  const max = 8;
  const scores = [ca1, ca2, ca3, ca4, ca5].map(s => Math.min(s, max));
  return scores.reduce((a, b) => a + b, 0); // Max 40
}

export function computeTotalScore(caTotal: number, examScore: number): number {
  const ca = Math.min(caTotal, 40);
  const exam = Math.min(examScore, 60);
  return parseFloat((ca + exam).toFixed(2));
}

export function computeGrade(totalScore: number): { grade: string; remark: string; passed: boolean } {
  if (totalScore >= 90) return { grade: 'A+', remark: 'Exceptional', passed: true };
  if (totalScore >= 80) return { grade: 'A', remark: 'Excellent', passed: true };
  if (totalScore >= 70) return { grade: 'B', remark: 'Very Good', passed: true };
  if (totalScore >= 60) return { grade: 'C', remark: 'Good', passed: true };
  if (totalScore >= 50) return { grade: 'D', remark: 'Pass', passed: true };
  return { grade: 'F', remark: 'Fail', passed: false };
}

export function checkPromotionEligibility(
  results: Array<{ passed: boolean }>,
  attendancePercentage: number
): { eligible: boolean; reason?: string } {
  if (attendancePercentage < 80) {
    return { eligible: false, reason: 'Attendance below 80% minimum requirement.' };
  }
  const failCount = results.filter(r => !r.passed).length;
  if (failCount > 3) {
    return { eligible: false, reason: `Failed ${failCount} subjects. Maximum allowed is 3.` };
  }
  return { eligible: true };
}
```

---

## 18. Automated Report Card & Result Engine

### 18.1 Report Card Contents

Each terminal report card PDF includes:

- School logo and name
- Student details (name, ID, class, section, academic year, term)
- Subject-by-subject results table: CA | Exam | Total | Grade | Remark
- Position in class
- Attendance summary: Days present / Days available / Percentage
- Conduct assessment (Excellent / Good / Fair / Poor)
- Teacher's comment
- Principal's comment (auto-generated + customizable)
- Promotion/Continuation status
- School seal/stamp

### 18.2 PDF Generation

```typescript
// lib/pdf.ts — using @react-pdf/renderer

import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

export function generateReportCard(data: ReportCardData): JSX.Element {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src="/images/logo.png" style={styles.logo} />
          <Text style={styles.schoolName}>Tamara's Fairview School</Text>
          <Text style={styles.motto}>A Whole New World of Learning and Care</Text>
        </View>
        {/* Student Info */}
        {/* Results Table */}
        {/* Attendance */}
        {/* Comments */}
        {/* Stamp */}
      </Page>
    </Document>
  );
}
```

### 18.3 Clearance Gate Logic

```typescript
// actions/results.ts

export async function getStudentReportCard(studentId: string, term: Term, year: string) {
  const student = await prisma.student.findUnique({ where: { id: studentId } });

  if (student?.hasOutstandingFee) {
    return { blocked: true, reason: 'Outstanding financial obligations.' };
  }

  const results = await prisma.termResult.findMany({
    where: { studentId, term, academicYear: year, isPublished: true },
    include: { subject: true },
  });

  return { blocked: false, results };
}
```

### 18.4 Attendance-Based Promotion Check

The system automatically checks at end-of-term:
1. Queries all attendance records for the student in the academic term
2. Computes percentage = (days present / total school days) × 100
3. If < 80%, flags student as "Attendance Warning" in report card

---

## 19. Fee & Finance Management Module

### 19.1 Fee Structure Management

Admin can create fee structures per:
- Section + Grade
- Term
- Academic Year
- Fee types: Tuition, Development Levy, PTA, Excursion, Uniforms, Books

### 19.2 Invoice Management

| Action | Description |
|--------|-------------|
| **Auto-generate invoices** | At start of each term, system creates invoices for all active students |
| **Manual invoice creation** | Admin can create custom invoices |
| **Partial payments** | Track installments against invoice balance |
| **Outstanding reports** | Filter students by outstanding balance |
| **Automatic fee flag** | `hasOutstandingFee` set to true if unpaid after due date |

### 19.3 Financial Reports

- Daily collection summary
- Outstanding fees by class/section
- Payment history per student
- Revenue vs target per term
- Scholarship/discount management
- Export to PDF/CSV

### 19.4 Finance Dashboard Widgets

| Widget | Description |
|--------|-------------|
| Total Collected (Term) | Running total for current term |
| Outstanding Amount | Aggregate outstanding balance |
| Fully Paid Students | Count and percentage |
| Recent Payments | Last 10 payments |
| Revenue Chart | Monthly bar chart |
| Top Defaulters | List of highest balances |

---

## 20. Online Payment Gateway Integration

### 20.1 Supported Gateways

| Gateway | Use Case |
|---------|---------|
| **Paystack** | Primary — Card, USSD, Bank Transfer, Mobile Money |
| **Flutterwave** | Secondary — Card, Bank, USSD, International |
| **Monnify** | Bank Transfer, USSD (CBN preferred) |

### 20.2 Payment Flow

```
Parent clicks "Pay Now" on invoice
        ↓
Select Gateway (Paystack / Flutterwave / Monnify)
        ↓
Redirect to gateway payment page
        ↓
Parent completes payment
        ↓
Gateway webhooks our /api/payments/[gateway]/webhook
        ↓
Webhook verifies payment signature
        ↓
Updates Payment record (status: COMPLETED)
        ↓
Updates FeeInvoice (amountPaid, balance, isPaid)
        ↓
If balance == 0: student.hasOutstandingFee = false
        ↓
Send payment confirmation SMS + Email + Push notification
        ↓
Generate downloadable receipt (PDF)
        ↓
Audit log entry created
```

### 20.3 Paystack Integration

```typescript
// lib/paystack.ts

import Paystack from 'paystack-node';

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY!);

export async function initializePayment({
  email,
  amount,
  reference,
  metadata,
}: {
  email: string;
  amount: number;  // in kobo (multiply NGN by 100)
  reference: string;
  metadata: Record<string, string>;
}) {
  const response = await paystack.initializeTransaction({
    email,
    amount: Math.round(amount * 100),
    reference,
    callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/portal/parent/payments/verify`,
    metadata,
  });
  return response.data;
}

export async function verifyPayment(reference: string) {
  const response = await paystack.verifyTransaction({ reference });
  return response.data;
}
```

### 20.4 Webhook Endpoint

```typescript
// app/api/payments/paystack/webhook/route.ts

import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('x-paystack-signature');
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest('hex');

  if (hash !== signature) {
    return new Response('Unauthorized', { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === 'charge.success') {
    // Update payment, invoice, student fee status
    // Send notifications
  }

  return new Response('OK', { status: 200 });
}
```

---

## 21. Attendance Management Module

### 21.1 Attendance Recording

**Mobile-optimized teacher workflow:**
1. Teacher opens Attendance page → selects class
2. Today's date pre-populated
3. Student roster auto-loaded
4. Toggle each student: Present ✅ | Absent ❌ | Late ⏰ | Excused 📋
5. Optional remarks per student
6. Submit → attendance locked for the day (editable by admin only)

### 21.2 Attendance Views

| View | Description |
|------|-------------|
| **Teacher View** | Mark attendance, view class history |
| **Admin View** | School-wide attendance dashboard, override any record |
| **Parent View** | Child's attendance calendar (color-coded: green/red/yellow) |
| **Student View** | Own attendance percentage + calendar |

### 21.3 Attendance Alerts

- Parent notified via SMS/push if student is absent (trigger same day by 10am)
- Weekly attendance summary email to parents
- Alert when attendance drops below 85% (warning) and 80% (critical)

### 21.4 Attendance Report

- Per student: calendar + monthly percentages
- Per class: class register
- School-wide: daily, weekly, termly attendance rates
- Export: PDF (official register), CSV (data analysis)

---

## 22. Timetable Management Module

### 22.1 Timetable Builder (Admin)

- Drag-and-drop interface (desktop)
- Tap-to-assign (mobile admin)
- Conflict detection: same teacher cannot be in two places at once
- Conflict detection: same room cannot have two classes simultaneously
- Period duration configuration (e.g., 45-minute periods)
- Break periods marked (Assembly 7:30, Short Break, Long Break)
- Term-specific timetables

### 22.2 Timetable Views

| View | Description |
|------|-------------|
| **Admin View** | Master timetable, all classes |
| **Teacher View** | Personal teaching schedule for the week |
| **Student View** | Class timetable |
| **Parent View** | Child's timetable |
| **Print View** | Printable A4 PDF timetable |

---

## 23. Homework & Assignment Module

### 23.1 Homework Creation (Teacher)

Fields:
- Class(es)
- Subject
- Title and description (rich text)
- Attachments (PDF, images via Cloudinary)
- Due date + time
- Marks allocation (optional)

> **Business Rule:** Lesson plans must be submitted **1 day prior** to delivery date. System enforces this with a warning if submission is too close to delivery.

### 23.2 Homework Submission (Student)

1. Student views homework list (sorted by due date)
2. Opens homework detail
3. Uploads typed answer or file attachment
4. Adds optional notes
5. Submits → timestamp recorded
6. Late submissions marked as "Late"

### 23.3 Grading (Teacher)

1. Teacher views all submissions for a homework
2. Opens each submission
3. Assigns score (out of configured max)
4. Adds remarks/feedback
5. Grades appear in student portal
6. Parent notified when homework graded

### 23.4 Homework Notifications

| Trigger | Notification |
|---------|-------------|
| Homework assigned | Push + in-app to student and parent |
| 24 hours before due date | Reminder push to student |
| 1 hour before due date | Final reminder push |
| Homework graded | Push + in-app to student and parent |

---

## 24. Messaging & Communication Module

### 24.1 Channels

| Channel | Description |
|---------|-------------|
| **Direct Messaging** | 1:1 messages between parent↔teacher, parent↔admin |
| **Class Groups** | Teacher broadcasts to all parents/students in a class |
| **School Announcements** | Admin broadcasts to all users |
| **Circulars** | Formal school notices with acknowledgement required |

### 24.2 Messaging Features

- Rich text message body
- File attachments (images, PDFs)
- Read receipts (✓ Delivered, ✓✓ Read)
- Acknowledgement tracking for circulars
- Message threading
- Unread count badge on navigation
- Email notification for new messages (configurable)

### 24.3 Circular Workflow

1. Admin creates circular (title, body, target audience, attachments)
2. System delivers to all target recipients
3. Each recipient sees "Acknowledge" button
4. Admin can view acknowledgement report: Acknowledged / Pending

### 24.4 Parent-Teacher Messaging Rules

- Parents can initiate messages to their child's class teachers
- Teachers can message individual parents or all parents of a class
- Admin can view all message threads
- Abusive or flagged messages escalated to admin

---

## 25. Notifications System

### 25.1 Notification Types

| Type | Triggers |
|------|---------|
| `homework` | Assigned, due soon, graded |
| `fee` | Invoice created, payment received, overdue |
| `result` | CA uploaded, terminal results published |
| `attendance` | Student absent, attendance warning |
| `admission` | Status changed (accepted/rejected/review) |
| `exam` | Timetable published, exam date reminder |
| `message` | New message, new circular |
| `general` | School announcements, events |

### 25.2 Delivery Channels

| Channel | Provider | Notes |
|---------|---------|-------|
| **Push (PWA)** | Firebase FCM | Android & iOS via service worker |
| **SMS** | Termii | Nigerian-optimized, OTP + bulk |
| **Email** | Resend | Branded HTML templates |
| **In-App** | Database + real-time | Notification bell in portal |

### 25.3 Notification Preferences

Users can configure per-channel preferences in their profile settings:
- Enable/disable push, SMS, email per notification type
- Quiet hours setting (e.g., no SMS between 10pm–7am)

### 25.4 Termii SMS Integration

```typescript
// lib/termii.ts

export async function sendSMS(to: string, message: string) {
  const response = await fetch('https://api.ng.termii.com/api/sms/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to,
      from: 'TamaraFVS',
      sms: message,
      type: 'plain',
      channel: 'generic',
      api_key: process.env.TERMII_API_KEY,
    }),
  });
  return response.json();
}
```

### 25.5 Email Templates (Resend)

Templates to create:
- Welcome / Onboarding
- Admission Confirmation
- Admission Decision (Accepted / Rejected)
- Fee Invoice
- Payment Receipt
- Results Published
- New Message
- Password Reset
- New Circular
- Event RSVP Confirmation
- Daily Digest (optional)

---

## 26. News & Blog Module

### 26.1 News Categories

| Category | Examples |
|----------|---------|
| **Academic Achievements** | WAEC results, NECO results, competitions |
| **Events** | Sports Day recap, Speech Day, Graduation |
| **School Updates** | Term dates, policy changes |
| **Excursions** | Field trip reports and photos |
| **Staff News** | New staff, promotions |
| **Community** | PTA meetings, outreach |
| **Awards** | Inter-school competitions |
| **ICT & Digital** | Tech competitions, coding club |

### 26.2 News Post Features

- Full-width cover image
- Rich text body (Tiptap)
- Photo gallery within post
- Related news (auto-suggested by category)
- Social sharing buttons (WhatsApp, Facebook, Twitter)
- View count
- SEO: slug, meta title, meta description, OG image

### 26.3 News Archive Page (`/news`)

- Grid of news cards (image, title, date, category, excerpt)
- Filter by category
- Search within news
- Pagination (20 posts per page)

---

## 27. Events, Calendar & RSVP Module

### 27.1 Event Types

| Event Type | Description |
|-----------|-------------|
| **Sports Day** | Annual inter-house sports competition |
| **Inter-house Sports** | Regular inter-house competitions |
| **Speech Day / Prize Giving** | Annual awards ceremony |
| **Graduation** | Nursery, Primary, JSS, SSS graduations |
| **PTA Meeting** | Parent-Teacher Association meetings |
| **Open Day** | School open day for prospective parents |
| **Holiday Notice** | Closure notices |
| **Excursion** | Educational outings |
| **Cultural Day** | Cultural events |
| **Career Day** | Career guidance event (SSS) |
| **ICT Fair** | Technology exhibition |

### 27.2 Events Page (`/events`)

- Upcoming events (card grid)
- Past events (with photo galleries attached)
- Calendar view (month/week toggle)
- Filter by event type

### 27.3 RSVP Flow

1. Event detail page shows "RSVP Now" button (if enabled)
2. RSVP form: Name, Email, Phone, Relationship to school, Number attending
3. Submit → RSVP record created
4. Confirmation email sent to RSVPer
5. Admin views RSVP list, can export CSV
6. Max attendee limit enforced (form closes when limit reached)
7. Post-event: Photos uploaded to event → auto-shared with RSVPers via email

### 27.4 Event Reminders

| Trigger | Notification |
|---------|-------------|
| 1 week before event | Email + push to RSVPers |
| 1 day before event | SMS + push to RSVPers |
| Morning of event | Push notification reminder |
| Post-event | Email with event photos link |

### 27.5 School Calendar Widget

Embeddable calendar widget showing:
- All school events
- Term start/end dates
- Public holidays
- Exam periods

---

## 28. Photo & Video Gallery Module

### 28.1 Gallery Structure

```
Gallery
├── Campus Life
│   ├── Classrooms
│   ├── Playground
│   ├── Library
│   └── Virtual Campus Tour
├── Events
│   ├── Sports Day 2025
│   ├── Graduation 2025
│   └── Speech Day 2025
├── Academics
│   ├── Science Lab
│   ├── ICT Lab
│   └── Classroom Activities
└── Community
    ├── PTA
    └── Outreach
```

### 28.2 Gallery Page (`/gallery`)

- Album grid view (cover image + album title)
- Click album → lightbox photo viewer
- Swipe navigation on mobile
- Lazy loading for performance
- Download single photo option
- Video player for video albums

### 28.3 Virtual Campus Tour

- Dedicated page: `/gallery/virtual-tour`
- 360° photo embeds (Google Street View or Matterport if available, otherwise photo walkthrough)
- Labeled key areas: Gates, Reception, Classrooms, Playground, Lab, Library

### 28.4 Photo Management (Admin)

- Batch upload photos (Cloudinary widget)
- Drag-and-drop reordering
- Add/edit captions
- Set cover photo per album
- Link album to event
- Publish/unpublish album

---

## 29. Global Search Module

### 29.1 What's Searchable (Public)

| Content Type | Indexed Fields |
|-------------|---------------|
| News Posts | Title, excerpt, content, tags |
| Events | Title, description, category |
| Gallery Albums | Title, description |
| FAQ | Question, answer |
| School Sections | Section name, description |
| Staff (public profiles) | Name, department |
| Downloads | Title, description |
| Pages | Title, content |

### 29.2 What's Searchable (Portal — by role)

| Content Type | Accessible By |
|-------------|--------------|
| Students | Admin, teacher |
| Staff | Admin |
| Results | Admin, exam officer |
| Invoices | Admin, parent (own) |
| Admissions | Admin |

### 29.3 Search Implementation

Using **Algolia** or **Typesense**:

```typescript
// lib/search.ts

import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID!,
  process.env.ALGOLIA_API_KEY!
);

export const newsIndex = client.initIndex('news_posts');
export const eventsIndex = client.initIndex('events');
export const faqIndex = client.initIndex('faq');
```

### 29.4 Search UI

- Prominent search bar in navbar (expands on click)
- Keyboard shortcut: `Ctrl + K` / `Cmd + K`
- Instant results as user types (debounced 300ms)
- Results grouped by category (News, Events, FAQ, etc.)
- Empty state: "No results found. Try: Admissions, Fees, Results"

---

## 30. FAQ Module

### 30.1 FAQ Categories

| Category | Example Questions |
|----------|-----------------|
| **Admissions** | What age does my child need to be? What documents do I need? |
| **Fees** | How much is tuition? When are fees due? Do you accept installments? |
| **Academic** | What curriculum do you follow? When do results come out? |
| **Portal** | How do I access the parent portal? I forgot my password. |
| **School Life** | What are school hours? What is the uniform? |
| **Events** | When is Sports Day? When is graduation? |
| **General** | Where is the school located? How do I contact you? |

### 30.2 FAQ Page (`/faq`)

- Search box at the top ("Search FAQs...")
- Category filter tabs
- Accordion answers (single expand at a time)
- Instant JavaScript filter (no server round-trip)
- "Was this helpful?" (thumbs up/down)
- CTA: "Didn't find your answer? Contact us."

### 30.3 FAQ Management (Admin CMS)

- Create, edit, delete FAQ entries
- Assign to category
- Drag-to-reorder within category
- Toggle active/inactive

---

## 31. Online Chat & AI Assistant

### 31.1 WhatsApp Chat Widget

- Fixed floating button (bottom-right of all public pages)
- Click → pre-populated WhatsApp link with school number and greeting message
- Message template: "Hello Tamara's Fairview School! I'd like to enquire about..."
- Phone: 07038532976 (Proprietress) or 08138298325 (Support)

### 31.2 AI Chatbot (Tamara AI)

Built using **Google Gemini API**.

**Capabilities:**
- Answer questions about admissions process
- Provide fee information
- Explain section requirements and age groups
- Tell about curriculum and school values
- Help navigate the portal
- Suggest resources from Downloads
- Escalate complex queries to WhatsApp

**Implementation:**

```typescript
// app/api/chat/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `
You are Tamara AI, the friendly assistant for Tamara's Fairview Nursery, 
Grade and High School in Jos, Nigeria. 

School motto: "A Whole New World of Learning and Care"
Location: 13 Liberty Boulevard Road, Jos South LGA, Plateau State, Nigeria
Contact: tamarasfaviewschooljos@gmail.com
Proprietress: Mrs. Osinamofan Oko (07038532976)

You help parents and students with questions about:
- Admissions (how to apply, age requirements, documents needed)
- School sections (Discovery, Nursery, LKG, HKG, Grade School, JSS, SSS)  
- Fees and payment
- Portal access and navigation
- School values and curriculum
- Events and academic calendar

Be warm, helpful, and professional. For complex matters, direct users to:
- Contact the school directly at 07038532976
- Email: tamarasfaviewschooljos@gmail.com
- Visit in person at the school address
`;

export async function POST(req: Request) {
  const { message, history } = await req.json();
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const chat = model.startChat({ history });
  const result = await chat.sendMessage(message);
  return Response.json({ reply: result.response.text() });
}
```

### 31.3 Chat Widget UI

- Floating chat bubble (school brand color, school logo icon)
- Opens a slide-up chat panel
- First message: "Hi! I'm Tamara AI. How can I help you today? 😊"
- Quick reply buttons: "Admissions", "Fees", "Portal Help", "Contact Us"
- Persistent chat history (localStorage)
- "Talk to a human" → opens WhatsApp

---

## 32. Alumni Section

### 32.1 Alumni Page (`/alumni`)

**Sections:**
1. **Hero** — "Join Our Growing Family of Alumni"
2. **Alumni Stories** — 3 featured cards (photo, name, year, profession, quote)
3. **Success Highlights** — Counter stats: Universities Gained | Countries Represented | Years of Alumni
4. **Testimonials** — Carousel of alumni quotes
5. **Submit Your Story** — Alumni registration form
6. **Alumni Network CTA** — WhatsApp group link or contact to join

### 32.2 Alumni Registration Form

Fields:
- Full name
- Graduation year
- Final class (e.g., SS3, Grade 5)
- Current location (City, Country)
- University/College attended (optional)
- Current profession (optional)
- Testimonial/message (optional)
- Photo upload (optional)
- Email and phone

On submit: Admin reviews → approves → appears on Alumni page

### 32.3 Admin Alumni Management

- List of submitted profiles
- Approve / Reject / Edit
- Feature specific alumni (show on homepage)
- Export alumni database CSV

---

## 33. Staff HR & Profile Management

### 33.1 Staff Directory (Admin)

- Searchable, filterable staff list
- Filter by department, role, section, status

### 33.2 Staff Profile

Each staff profile contains:
- Personal details (name, phone, email, address)
- Staff ID and join date
- Department and role
- Subjects taught
- Classes assigned
- Qualifications
- Uploaded documents (CV, certificates, ID, contract)
- Leave balance and history
- Performance notes (admin only)

### 33.3 Leave Management

**Leave Request Flow:**
1. Staff submits leave request (type, dates, reason)
2. Admin/Proprietress reviews → Approve / Reject
3. Staff notified via email + in-app
4. If approved: leave balance decremented
5. Admin dashboard shows staff on leave for the day

**Leave Types:**
- Annual Leave (20 days/year)
- Sick Leave (10 days/year)
- Maternity/Paternity Leave
- Emergency Leave
- Study Leave (as approved)

### 33.4 Staff Documents

- Upload: CV, Teaching Certificate, NYSC, Teaching License, NIN, ID Card, Contract
- Admin can set document expiry reminders (e.g., certificate renewal)

### 33.5 Careers / Recruitment

- Admin creates job vacancies (title, department, requirements, deadline)
- Public careers page shows open vacancies
- Applicants apply online (CV upload)
- Admin reviews applications in HR module

---

## 34. Library Management Module

### 34.1 Features

| Feature | Description |
|---------|-------------|
| **Book Catalog** | All books with title, author, subject, quantity |
| **Search** | Search by title, author, subject, section |
| **Borrow Management** | Issue books to students, set due dates |
| **Return Tracking** | Record returns, flag overdue books |
| **Overdue Alerts** | SMS reminder 2 days before due, on due date, after due |
| **Reservation** | Students can reserve unavailable books |
| **Digital Resources** | Link to external digital book resources |
| **Reports** | Most borrowed, overdue list, by section |

### 34.2 Library Borrow Workflow

1. Admin/Librarian scans or searches book
2. Enters student ID
3. Sets due date (default: 2 weeks)
4. Issues book → availability count decremented
5. Student receives confirmation SMS
6. On due date: overdue alert SMS sent
7. On return: record updated, availability incremented

### 34.3 Student Library Page (Portal)

- Currently borrowed books (with due dates)
- Borrow history
- Overdue status (highlighted in red)
- Reserve a book form

---

## 35. Transport Module

### 35.1 Features

| Feature | Description |
|---------|-------------|
| **Route Management** | Create/edit bus routes with stops |
| **Driver Info** | Driver name, phone, bus number |
| **Student Assignment** | Assign students to routes and pickup stops |
| **Route Map** | View stops on embedded map |
| **Parent View** | Parent can see child's route, bus, driver info |
| **Morning Alert** | Optional SMS to parents when bus is departing |

### 35.2 Transport Portal (Parent View)

- Child's assigned route and bus
- Driver contact number
- List of stops and estimated times
- Contact driver via click-to-call

---

## 36. Download Center

### 36.1 Public Downloads (`/downloads`)

| Category | Files |
|----------|-------|
| **Forms** | Admission form, medical form, permission slip |
| **Handbook** | School handbook PDF |
| **Academic Calendar** | Term dates |
| **Policies** | School policies |
| **Uniforms** | Uniform guide (with photos) |
| **Fee Schedule** | Term fee breakdown |

### 36.2 Portal Downloads (Logged-in users)

| Category | Files |
|----------|-------|
| **Report Cards** | PDF report cards (clearance gated) |
| **Timetable** | Class timetable PDF |
| **Receipts** | Fee payment receipts |
| **Circulars** | Official school circulars |
| **Homework** | Uploaded homework PDFs |

### 36.3 Download Tracking

Each download is logged (user, file, timestamp) for analytics.

---

## 37. Analytics & Reporting Dashboard

### 37.1 Analytics Dashboard (Admin/Proprietress)

**Overview Tab:**
- Total students (by section)
- Gender breakdown (pie chart)
- Age distribution (bar chart)
- Enrollment trend (line chart — monthly)

**Academic Performance Tab:**
- Average score by class/subject/term
- Pass rate by class (bar chart)
- Subject comparison heatmap
- Promotion vs repeat rate

**Attendance Tab:**
- School-wide daily attendance rate
- Class attendance comparison
- Students with attendance < 80% (at-risk list)
- Monthly attendance trend

**Finance Tab:**
- Total fees billed vs collected per term
- Outstanding amount by class
- Payment gateway usage breakdown
- Daily collection chart
- Outstanding student list

**Admissions Tab:**
- Applications by month
- Acceptance rate
- Applications by section
- Conversion funnel (Applied → Reviewed → Accepted → Enrolled)

**Engagement Tab:**
- Parent portal login frequency
- Notification delivery rates (SMS, email, push)
- Most-read news posts
- Most-downloaded files

### 37.2 Report Exports

All analytics can be exported as:
- PDF (formatted report with school logo)
- CSV (raw data for Excel)

---

## 38. Audit Logs & Activity Tracking

### 38.1 What Is Logged

| Event | Logged Data |
|-------|------------|
| User login/logout | User, IP, timestamp, device |
| Result change | Who changed, what field, old value, new value |
| Student record edit | Who edited, what changed |
| Fee record change | Invoice modification details |
| Staff record change | Admin who edited |
| Admission decision | Who approved/rejected, timestamp |
| Role change | Who changed role, old role, new role |
| File upload | User, file name, file type |
| Payment verification | Gateway, amount, reference |
| Report card download | Who downloaded, student, term |
| Message sent | Sender, recipients |
| Circular sent | Sender, total recipients |
| Leave approval | Admin who approved, staff affected |

### 38.2 Audit Log UI (Admin/Proprietress only)

- Chronological log of all events
- Filter by: User | Action | Resource | Date range
- Search by resource ID or user
- Export CSV
- Cannot be deleted or edited (immutable)

### 38.3 Login History

- Admin can view any user's last 30 login attempts
- Flags unusual activity (multiple failed logins, new device)

---

## 39. API Specification

### 39.1 Base URL

```
Production: https://api.tamarasfairviewschool.com/v1
Development: http://localhost:3000/api/v1
```

### 39.2 Authentication

All protected endpoints require Clerk JWT token:
```
Authorization: Bearer <clerk_session_token>
```

### 39.3 Core Endpoints

**Students**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| GET | `/students` | List all students | admin |
| GET | `/students/:id` | Get student details | admin, teacher |
| POST | `/students` | Create student | admin |
| PATCH | `/students/:id` | Update student | admin |
| DELETE | `/students/:id` | Deactivate student | super_admin |
| GET | `/students/:id/results` | Get student results | admin, parent, student |
| GET | `/students/:id/attendance` | Get attendance records | admin, teacher, parent |

**Admissions**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| POST | `/admissions` | Submit application | public |
| GET | `/admissions` | List all applications | admin |
| GET | `/admissions/:id` | Get application | admin, applicant |
| PATCH | `/admissions/:id/status` | Update status | admin |

**Assessments**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| GET | `/assessments` | List CA scores | teacher, admin |
| POST | `/assessments/bulk` | Bulk upload CA scores | teacher |
| GET | `/assessments/results` | Get computed results | admin, exam_officer |
| POST | `/assessments/results/approve` | Approve results | exam_officer |
| POST | `/assessments/results/publish` | Publish results | exam_officer, admin |

**Payments**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| GET | `/payments/invoices` | List invoices | admin, parent |
| GET | `/payments/invoices/:id` | Get invoice | admin, parent |
| POST | `/payments/initialize` | Start payment | parent |
| GET | `/payments/verify/:ref` | Verify payment | parent |
| POST | `/payments/paystack/webhook` | Paystack webhook | system |
| POST | `/payments/flutterwave/webhook` | Flutterwave webhook | system |

**Notifications**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| GET | `/notifications` | Get user notifications | all |
| PATCH | `/notifications/:id/read` | Mark as read | all |
| POST | `/notifications/send` | Send notification | admin |
| POST | `/notifications/subscribe` | Save FCM token | all |

**CMS**

| Method | Endpoint | Description | Role |
|--------|---------|-------------|------|
| GET | `/cms/news` | List news posts | public |
| GET | `/cms/news/:slug` | Get news post | public |
| POST | `/cms/news` | Create post | admin |
| PATCH | `/cms/news/:id` | Update post | admin |
| GET | `/cms/events` | List events | public |
| POST | `/cms/events` | Create event | admin |
| POST | `/cms/events/:id/rsvp` | Submit RSVP | public |
| GET | `/cms/gallery` | List albums | public |
| GET | `/cms/faq` | List FAQs | public |

### 39.4 Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "You do not have permission to perform this action.",
    "details": null
  }
}
```

### 39.5 Success Response Format

```json
{
  "success": true,
  "data": { ... },
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

## 40. SEO Requirements

### 40.1 Technical SEO

| Requirement | Implementation |
|------------|---------------|
| **Meta Tags** | Every page has unique `<title>` and `<meta name="description">` |
| **Open Graph** | `og:title`, `og:description`, `og:image`, `og:url` on all pages |
| **Twitter Cards** | Summary large image cards |
| **Canonical URLs** | `<link rel="canonical">` to prevent duplicate content |
| **Sitemap** | Auto-generated `/sitemap.xml` (Next.js sitemap) |
| **Robots.txt** | `/robots.txt` allowing crawl of public pages, blocking portal |
| **Structured Data** | JSON-LD schema markup (see below) |
| **Breadcrumbs** | Breadcrumb nav + BreadcrumbList schema |
| **Hreflang** | English only for now (`en-NG`) |
| **Image Alt Text** | All images have descriptive alt attributes |

### 40.2 Schema.org Markup

```json
// Homepage — EducationalOrganization schema
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Tamara's Fairview Nursery, Grade and High School",
  "alternateName": "Tamara's Fairview School",
  "url": "https://tamarasfairviewschool.com",
  "logo": "https://tamarasfairviewschool.com/logo.png",
  "description": "A Whole New World of Learning and Care — Tamara's Fairview School, Jos, Nigeria",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 Liberty Boulevard Road",
    "addressLocality": "Jos South",
    "addressRegion": "Plateau State",
    "addressCountry": "NG"
  },
  "telephone": "+2347038532976",
  "email": "tamarasfaviewschooljos@gmail.com",
  "educationalLevel": "Nursery, Primary, Secondary"
}
```

```json
// Events schema
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Sports Day 2026",
  "startDate": "2026-03-20",
  "location": {
    "@type": "Place",
    "name": "Tamara's Fairview School Grounds"
  }
}
```

### 40.3 Page-Specific Meta Templates

| Page | Title Format | Description |
|------|-------------|-------------|
| Homepage | `Tamara's Fairview School — Jos, Nigeria` | School overview |
| Admissions | `Admissions 2026/2027 — Tamara's Fairview School` | Apply for admission |
| Sections | `[Section Name] — Tamara's Fairview School` | Section details |
| News post | `[Post Title] — Tamara's Fairview School` | Article description |
| Event | `[Event Name] [Year] — Tamara's Fairview School` | Event details |

### 40.4 Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| TTFB | < 600ms |

---

## 41. Accessibility (WCAG 2.2 AA)

### 41.1 Requirements

| Requirement | Implementation |
|------------|---------------|
| **Color Contrast** | Minimum 4.5:1 for normal text, 3:1 for large text |
| **Keyboard Navigation** | All interactive elements reachable by keyboard |
| **Focus Indicators** | Visible focus ring on all focusable elements |
| **Screen Reader** | Proper ARIA labels, roles, and landmarks |
| **Alt Text** | All images have descriptive alt attributes |
| **Form Labels** | All form fields have associated `<label>` elements |
| **Error Messages** | Accessible error messages linked to fields |
| **Headings** | Logical heading hierarchy (H1 → H2 → H3) |
| **Skip Navigation** | "Skip to main content" link at top |
| **Touch Targets** | Minimum 48×48px |
| **Captions** | All videos have captions |
| **Language** | `lang="en"` set on `<html>` |
| **Zoom** | Page usable at 200% zoom |
| **Motion** | Respect `prefers-reduced-motion` media query |

### 41.2 ARIA Implementation

```tsx
// Example: accessible hamburger button
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  aria-controls="main-navigation"
  onClick={toggleMenu}
>
  <MenuIcon aria-hidden="true" />
</button>

// Example: accessible portal nav
<nav aria-label="Student portal navigation">
  <ul role="list">
    <li><a href="/portal/student/dashboard" aria-current="page">Dashboard</a></li>
  </ul>
</nav>
```

### 41.3 Testing Tools

- axe DevTools (browser extension)
- Lighthouse Accessibility audit
- NVDA (Windows screen reader)
- iOS VoiceOver

---

## 42. AI-Powered Features

### 42.1 Implemented AI Features

| Feature | Description | Technology |
|---------|-------------|-----------|
| **Tamara AI Chatbot** | FAQ and admissions assistant (Section 31) | Gemini API |
| **Auto Report Comments** | AI suggests teacher comments for report cards | Gemini API |
| **Performance Prediction** | Predict at-risk students based on CA trend | Gemini API |
| **Search Ranking** | AI-ranked search results | Algolia AI |
| **Spam Filter** | AI-based spam detection for contact forms | Gemini API |
| **Content Suggestions** | Blog post topic suggestions for CMS | Gemini API |

### 42.2 Auto Report Card Comment Generator

```typescript
// lib/aiComments.ts

export async function generateReportComment(
  studentName: string,
  averageScore: number,
  attendance: number,
  conduct: string
): Promise<string> {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
    Generate a brief, professional, encouraging teacher's comment for a student terminal report card.
    Student: ${studentName}
    Average Score: ${averageScore}%
    Attendance: ${attendance}%
    Conduct: ${conduct}
    Keep it to 2-3 sentences. Be specific, positive, and constructive.
    Output only the comment text, no preamble.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
```

### 42.3 At-Risk Student Detection

The system flags a student as "at-risk" if:
- CA average falls below 45% across 3 or more subjects
- Attendance below 80%
- 3 or more consecutive absences

At-risk students appear in a dedicated admin dashboard panel with suggested interventions.

---

## 43. PWA (Progressive Web App)

### 43.1 PWA Features

| Feature | Description |
|---------|-------------|
| **Installable** | "Add to Home Screen" prompt on Android/iOS |
| **Offline Support** | Key pages cached for offline access |
| **Push Notifications** | FCM push via service worker |
| **Fast Launch** | App-like launch from home screen |
| **App Icon** | High-resolution icons in all required sizes |

### 43.2 Web App Manifest

```json
// public/manifest.json
{
  "name": "Tamara's Fairview School",
  "short_name": "TFairview",
  "description": "A Whole New World of Learning and Care",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0A1628",
  "theme_color": "#1E4D8C",
  "icons": [
    { "src": "/icons/icon-72x72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96x96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128x128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-144x144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icons/icon-152x152.png", "sizes": "152x152", "type": "image/png" },
    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-384x384.png", "sizes": "384x384", "type": "image/png" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 43.3 Service Worker Strategy

| Route | Cache Strategy |
|-------|---------------|
| Homepage | Stale-While-Revalidate |
| Portal dashboard | Network-First |
| Static assets (JS/CSS) | Cache-First |
| Images | Stale-While-Revalidate |
| API calls | Network-First |
| Offline fallback | Custom offline page |

---

## 44. Security Requirements

### 44.1 Authentication Security

- TLS 1.3 enforced on all connections
- MFA required for `super_admin` and `admin` roles
- Brute force protection: 5 failed logins → 15-minute lockout
- JWT tokens short-lived (1 hour), refresh tokens for sessions
- Password strength requirements: min 8 chars, uppercase, number, special char

### 44.2 Data Security

- AES-256 encryption for student records at rest
- Personal data masked in logs (phone: `0703***2976`)
- GDPR-adjacent data handling (data deletion on request)
- Backup encryption

### 44.3 API Security

- Rate limiting: 100 requests/minute per IP (public), 500 (authenticated)
- Input validation: Zod schemas on all inputs
- SQL injection protection via Prisma ORM (parameterized queries)
- XSS prevention: Content Security Policy headers
- CSRF protection on all mutations
- File upload restrictions: allowed types, max size 10MB

### 44.4 Exam Integrity Features

- Portal exam lock: Admin can lock all student portal access during exam period
- Lock activates on configured start time, unlocks at configured end time
- Exception: Admin, Exam Officer, Teacher roles always retain access

### 44.5 Security Headers (Next.js)

```typescript
// next.config.ts
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

---

## 45. Testing Strategy

### 45.1 Testing Pyramid

```
               /\
              /E2E\          (Cypress / Playwright)
             /------\
            /Integr. \       (Jest + Supertest)
           /----------\
          /   Unit     \     (Jest + React Testing Library)
         /--------------\
```

### 45.2 Unit Tests

- All utility functions: score engine, grading, attendance calculator
- All Server Actions
- All API route handlers
- React component rendering
- Form validation logic

### 45.3 Integration Tests

- Complete admission flow (form → DB → email → SMS)
- Payment webhook processing
- CA score entry → result computation
- Report card generation with clearance gate
- Notification dispatch pipeline

### 45.4 End-to-End Tests (Playwright)

| Scenario | Steps |
|----------|-------|
| Parent applies for admission | Fill form → submit → receive confirmation |
| Teacher records attendance | Login → select class → mark → submit |
| Teacher enters CA scores | Login → select subject → enter scores → save |
| Parent makes payment | Login → view invoice → pay via Paystack → download receipt |
| Student downloads report card | Login → results → download → verify gating |
| Admin approves results | Login → review → approve → publish → verify notification |

### 45.5 Performance Tests

- Lighthouse CI on every PR
- k6 load testing: 500 concurrent users during result release simulation
- CDN cache hit rate > 90%

### 45.6 Security Tests

- OWASP ZAP automated scan on staging
- Dependency audit: `npm audit` on every PR
- Penetration test by third party before production launch

### 45.7 Accessibility Tests

- axe-core automated scan in CI pipeline
- Manual VoiceOver/NVDA testing before major releases

### 45.8 UAT (User Acceptance Testing)

Conducted during Phase 4 (Week 12–13) with:
- Mr. Reuben Yohanna (Exam Officer): Test result workflow
- 3 class teachers: Test attendance and homework modules
- 5 parents: Test parent portal, payment, and report download
- 3 students: Test student portal
- Proprietress (Mrs. Osinamofan Oko): Test admin dashboard and analytics

---

## 46. CI/CD & DevOps

### 46.1 GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml

name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run test:e2e
      - run: npx lighthouse-ci autorun

  deploy-staging:
    needs: test
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: vercel deploy --token=${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### 46.2 Branch Strategy

| Branch | Purpose | Deploy To |
|--------|---------|-----------|
| `feature/*` | New features | None |
| `fix/*` | Bug fixes | None |
| `develop` | Integration branch | Staging |
| `main` | Production-ready | Production |

### 46.3 Environment Configuration

```
# .env.local (development)
DATABASE_URL=
DIRECT_URL=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
TERMII_API_KEY=
PAYSTACK_SECRET_KEY=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
FLUTTERWAVE_SECRET_KEY=
MONNIFY_API_KEY=
MONNIFY_SECRET_KEY=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=
GEMINI_API_KEY=
GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_BASE_URL=
```

---

## 47. Deployment Architecture

### 47.1 Production Architecture

```
[User Browser / PWA]
        │
        ▼
[Cloudflare CDN + DDoS Protection]
        │
        ▼
[Vercel Edge Network]
        │
   ┌────┴────┐
   │         │
[Next.js   [Static Assets
 Server]    via CDN]
   │
   ├──────────────────── [Neon PostgreSQL (Serverless)]
   ├──────────────────── [Clerk Auth]
   ├──────────────────── [Cloudinary (Media)]
   ├──────────────────── [Resend (Email)]
   ├──────────────────── [Termii (SMS)]
   ├──────────────────── [Firebase (Push)]
   ├──────────────────── [Paystack / Flutterwave / Monnify]
   ├──────────────────── [Algolia (Search)]
   └──────────────────── [Gemini API (AI)]
```

### 47.2 Domain Setup

| Domain | Purpose |
|--------|---------|
| `tamarasfairviewschool.com` | Main website |
| `www.tamarasfairviewschool.com` | Redirects to main |
| `portal.tamarasfairviewschool.com` | Portal (optional subdomain) |

### 47.3 Performance Optimizations

- Next.js Image component with automatic format conversion (WebP/AVIF)
- Cloudinary auto-format + auto-quality
- Cloudflare caching rules (static assets: 1 year, dynamic: no-cache)
- Database connection pooling via Prisma + PgBouncer
- Server-side rendering for SEO pages, client-side for portal

---

## 48. Backup & Disaster Recovery

### 48.1 Database Backup

| Backup Type | Frequency | Retention | Storage |
|-------------|-----------|-----------|---------|
| Continuous WAL | Real-time | 7 days | Neon (built-in) |
| Daily Snapshot | Every 24h | 30 days | Neon + AWS S3 |
| Weekly Snapshot | Every 7 days | 6 months | AWS S3 Glacier |
| Monthly Snapshot | Monthly | 2 years | AWS S3 Glacier |

### 48.2 Recovery Time Objectives

| Scenario | RTO | RPO |
|----------|-----|-----|
| Single record corruption | < 30 minutes | < 1 hour |
| Database failure | < 2 hours | < 1 hour |
| Full server outage | < 4 hours | < 24 hours |

### 48.3 Media Backup

Cloudinary automatically stores all media with redundancy. An additional monthly sync of all uploaded files to an AWS S3 bucket provides secondary backup.

### 48.4 Disaster Recovery Plan

1. **Detection:** Sentry alert + Vercel downtime alert
2. **Assessment:** On-call engineer reviews scope (< 15 min)
3. **Communication:** Status page updated, admin notified via WhatsApp
4. **Recovery:** Point-in-time restore initiated (< 2 hours)
5. **Verification:** Data integrity checks run post-restore
6. **Communication:** All-staff and parent notification of service restoration

---

## 49. Future Roadmap

### Phase 6 (Post-Launch — Month 3–6)

- Online examination module (timed tests within portal)
- Student behavior tracking module
- Parent-teacher conference scheduling (online booking)
- Digital library (ebooks and online reading resources)
- School mobile app (React Native)
- Financial aid/scholarship management module
- Multi-language support (Hausa, Yoruba, Igbo)

### Phase 7 (Year 2)

- AI-powered academic tutor for students
- Automated WAEC/NECO result scraping and integration
- Multi-campus support
- Smart class attendance via face recognition (optional)
- Payroll module for staff
- Alumni mentorship matching system
- Real-time transport tracking (GPS integration)

### Phase 8 (Year 3+)

- SaaS model: License platform to other Nigerian schools
- Mobile native apps (iOS + Android)
- Advanced predictive analytics (student performance AI)
- Partnership with NERDC digital curriculum
- E-commerce module for school merchandise

---

## 50. Acceptance Criteria

### 50.1 Public Website

- [x] Homepage loads in < 2 seconds on 3G network
- [x] All 7 school section pages are live and mobile-responsive
- [x] Admissions form submits successfully with all 5 steps
- [x] Application tracking page shows correct status
- [x] News, Events, Gallery, FAQ pages all functional
- [x] Alumni section live with submission form
- [x] WhatsApp chat widget functional on all pages
- [x] AI chatbot responds to admissions queries accurately
- [x] Google Maps embedded and interactive
- [x] All click-to-call links work on mobile
- [x] Downloads center accessible with correct file categorization
- [x] SEO: All pages have unique meta titles and descriptions
- [x] WCAG 2.2 AA: Lighthouse accessibility score ≥ 90

### 50.2 Admissions Module

- [x] Applications are created with unique application IDs
- [x] SMS and email confirmation sent within 60 seconds of submission
- [x] Admin can review, accept, reject, and waitlist applications
- [x] Accepted applicants automatically receive portal credentials
- [x] Student record and parent account auto-created on acceptance

### 50.3 Academic Portal

- [x] Teachers can mark attendance for each class within 2 minutes
- [x] CA scores submit correctly with validation
- [x] Score computation: caTotal + examScore = totalScore (automated)
- [x] Grades and remarks assigned correctly per grading scale
- [x] At-risk student flag activates correctly (< 80% attendance or 3+ fails)

### 50.4 Report Card & Clearance Engine

- [x] Report cards display all correct data (scores, attendance, comments)
- [x] PDF downloads correctly in under 10 seconds
- [x] Students/parents with outstanding fees see locked report card
- [x] Students/parents with cleared fees can download immediately
- [x] Clearance state updates within 5 minutes of payment confirmation

### 50.5 Finance & Payments

- [x] Paystack payment flow completes successfully (test cards)
- [x] Flutterwave payment flow completes successfully
- [x] Payment receipt PDF generated and downloadable
- [x] Invoice balance updates correctly after each payment
- [x] `hasOutstandingFee` flag updates within 5 minutes of full payment

### 50.6 Notifications

- [x] SMS delivers within 60 seconds of trigger (Termii)
- [x] Email delivers within 5 minutes of trigger (Resend)
- [x] Push notification received on Android PWA
- [x] All notification types trigger correctly (homework, fee, result, attendance)

### 50.7 Events & RSVP

- [x] Event pages display correctly with all event details
- [x] RSVP form submits and saves correctly
- [x] Confirmation email sent to RSVP submitter
- [x] Admin views accurate RSVP count and list
- [x] Max attendee limit enforced (form closes when full)

---

## 51. AI Build Prompts Per Module

> Use these prompts verbatim in your AI coding assistant (Cursor, Bolt.new, Lovable, Claude) when building each module.

### 51.1 Public Homepage Prompt

```
Build the homepage for Tamara's Fairview Nursery, Grade and High School in Jos, Nigeria.
Use Next.js 15 App Router, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion.
School motto: "A Whole New World of Learning and Care"
Brand colors: Deep Navy (#0A1628 primary), Gold (#D97706 accent)
Fonts: Playfair Display for headings, Inter for body

Include these sections in order:
1. Sticky navbar with logo, nav links, search icon, and "Portal Login" gold CTA button
2. Full-screen hero slider (4 slides) with school motto overlay and CTAs: Apply Now, Portal Login
3. Animated stats bar: Years of Excellence, Students, Staff, Graduate Rate
4. About/Identity strip with Vision and Mission cards
5. Core Values grid (6 cards with hover flip): Integrity, Excellence, Discipline, Respect, Responsibility, Compassion
6. School Sections horizontal scroll (5 cards, each linking to its own page): Discovery, Nursery, Grade School, Junior Secondary, Senior Secondary — Discovery/Nursery/Grade School cards show the Grade School crest badge, Junior/Senior Secondary cards show the High School crest badge
7. Latest 3 news posts teasers
8. Upcoming 3 events teasers
9. Gallery masonry grid (6 photos)
10. Testimonials carousel
11. Alumni success stories (3 cards)
12. Admissions CTA banner (full-width gold)
13. Contact section with Google Maps, click-to-call, click-to-email
14. Footer with 4-column links, social icons
15. Fixed WhatsApp chat bubble (bottom-right)

Make it stunning. Use smooth scroll animations, Framer Motion entrance effects, and micro-interactions.
All sections must be fully mobile-responsive from 320px.
```

### 51.2 Authentication Prompt

```
Set up Clerk authentication for Tamara's Fairview School platform using Next.js 15 App Router and TypeScript.

Requirements:
- Configure Clerk middleware to protect all /portal/* routes
- Public routes: everything under (public) group, /api/webhooks/*, /admissions/apply
- Clerk metadata: publicMetadata.role (super_admin, admin, exam_officer, hod, teacher, parent, student)
- Custom sign-in page at /login with school branding
- Role-based redirect after login:
  - super_admin, admin → /portal/admin/dashboard
  - exam_officer → /portal/exam-officer/dashboard
  - teacher → /portal/teacher/dashboard
  - parent → /portal/parent/dashboard
  - student → /portal/student/dashboard
- Implement a useUserRole hook that reads the Clerk publicMetadata role
- Implement withRole HOC for page-level protection
- MFA required for super_admin and admin roles
```

### 51.3 Database & Prisma Setup Prompt

```
Set up the complete Prisma schema for Tamara's Fairview School platform using PostgreSQL.

Include these models with all relationships:
User, Student, Staff, ParentStudent, StaffSubject, StaffClass, Class,
AdmissionApplication, Subject, CAScore, TermResult, Attendance, TimetableSlot,
Homework, HomeworkSubmission, LessonPlan, FeeStructure, FeeInvoice, Payment,
Message, MessageRecipient, Notification, NewsPost, Event, EventRSVP, EventPhoto,
GalleryAlbum, GalleryPhoto, GalleryVideo, FAQ, AlumniProfile, LibraryBook,
LibraryBorrow, TransportRoute, TransportRouteStudent, LeaveRequest, StaffDocument,
DownloadItem, AuditLog, CMSPage, SiteSettings

Use all enums: UserRole, Section, Term, AdmissionStatus, PaymentStatus, AttendanceStatus,
NotificationChannel, EventStatus, NewsStatus, LibraryItemStatus

Create the Prisma singleton client at lib/prisma.ts.
Add seed data for: 1 super_admin user, 3 subjects, 2 classes, 5 students, 3 teachers.
Run migrations and verify the schema compiles without errors.
```

### 51.4 Admissions Module Prompt

```
Build the complete Admissions module for Tamara's Fairview School using Next.js 15, TypeScript, Prisma, and React Hook Form with Zod validation.

Public pages:
- /admissions: Overview with requirements, fee schedule, and CTA
- /admissions/apply: 5-step form with progress bar
  Step 1: Student details (name, DOB, gender, nationality, state, religion, address)
  Step 2: Section and grade selection with age validation
  Step 3: Parent/guardian details (2 parents)
  Step 4: Document upload (Cloudinary widget — birth certificate, photo, previous school report)
  Step 5: Review and submit with reCAPTCHA v3
  On success: show application ID, send confirmation SMS via Termii, send confirmation email via Resend
- /admissions/track: Enter application ID to see status

Admin portal pages (/portal/admin/admissions):
- Table of all applications (status filter, section filter, search)
- Individual application review page with approve/reject/waitlist actions
- On acceptance: auto-create Student + User + ParentStudent + FeeInvoice records
- Send credentials SMS + email to parent on acceptance
- Audit log every status change

Use server actions for all mutations. Validate with Zod. Mobile-first responsive design.
```

### 51.5 CA Score & Result Engine Prompt

```
Build the Continuous Assessment and Result Engine for Tamara's Fairview School.

Business rules:
- CA scores: CA1–CA5, each max 8 marks, total CA max 40
- Terminal exam score: max 60
- Total score = caTotal + examScore (max 100)
- Pass threshold: 50%
- Grading: A+(90+), A(80+), B(70+), C(60+), D(50+), F(<50)
- Promotion requires: ≥ 80% attendance AND pass in ≥ 3 subjects

Teacher portal (/portal/teacher/marks):
- Select class, term, academic year, subject
- Student roster loads automatically
- Enter CA1–CA5 for each student (inline editable table)
- Real-time validation and total calculation
- Save draft and submit final (locked after submit, requires HOD unlock)

Exam officer portal (/portal/exam-officer/results):
- Enter terminal exam scores per subject per student
- Review all scores before approval
- Approve results → publish
- Approval workflow: Teacher → Exam Officer → Admin

Score computation engine (lib/scoreEngine.ts):
- computeCATotal(), computeTotalScore(), computeGrade()
- checkPromotionEligibility()

Auto-notifications on result publish: SMS + email + push to parents and students
Create audit log for every score change.
Use server actions, Prisma, TypeScript. Mobile-first.
```

### 51.6 Report Card Generator Prompt

```
Build the automated terminal report card generator for Tamara's Fairview School.

Features:
1. PDF Generation using @react-pdf/renderer
   Include: school logo, name, motto, student details, subject-by-subject table (CA|Exam|Total|Grade|Remark),
   position in class, attendance %, conduct, teacher comment, principal comment, promotion status, school seal

2. Clearance gate:
   - Check student.hasOutstandingFee before allowing download
   - If blocked: show locked UI with message and finance office contact
   - If cleared: enable download immediately

3. Student portal page (/portal/student/results/[term]):
   - Display results table
   - Download PDF button (with clearance check)
   - Attendance summary
   - Teacher and principal comments

4. Parent portal page (/portal/parent/children/[id]/results/[term]):
   - Same as student view
   - Download PDF button (with clearance check)

5. AI-generated teacher comment:
   - Use Gemini API to suggest teacher comment based on student performance
   - Teacher can edit before finalizing

Use React Query for data fetching, server actions for PDF generation, Prisma for data.
Implement proper loading states and error boundaries.
```

### 51.7 Payment Gateway Prompt

```
Integrate Paystack, Flutterwave, and Monnify payment gateways for Tamara's Fairview School fee payments.

Fee invoice page (/portal/parent/payments):
- List all invoices for all linked children
- Show: invoice ID, term, items, total, paid, balance, due date, status badge
- "Pay Now" button opens gateway selection modal

Payment flow:
1. Parent selects gateway
2. Initialize payment via server action → get payment URL
3. Redirect to gateway
4. On return: verify payment via server action
5. On success: update Payment, FeeInvoice, Student.hasOutstandingFee
6. Generate PDF receipt
7. Send SMS + email + push notification confirmation

Webhook handlers:
- POST /api/payments/paystack/webhook (verify Paystack signature)
- POST /api/payments/flutterwave/webhook (verify Flutterwave signature)
- POST /api/payments/monnify/webhook (verify Monnify signature)

Payment receipt page (/portal/parent/payments/[id]/receipt):
- Display receipt details
- Download PDF receipt button

Create all utility functions in lib/paystack.ts, lib/flutterwave.ts, lib/monnify.ts
Implement idempotency to prevent double-processing of webhooks.
Add audit log for every payment event.
Use TypeScript, Prisma, Zod, server actions.
```

### 51.8 Notification System Prompt

```
Build the multi-channel notification system for Tamara's Fairview School.

Channels:
- In-app: Stored in DB, displayed in portal notification bell
- Email: Via Resend with branded HTML templates
- SMS: Via Termii (Nigerian SMS gateway)
- Push: Via Firebase Cloud Messaging (FCM) for PWA

Notification types: homework, fee, result, attendance, admission, exam, message, general

In-app notification bell (portal header):
- Shows unread count badge
- Dropdown with latest 10 notifications
- "Mark all read" button
- "View all" link to /portal/[role]/notifications

Notification preferences page:
- Per-type toggle for each channel
- Quiet hours setting

Notification trigger functions (lib/notifications.ts):
- notifyHomeworkAssigned(studentIds, homeworkId)
- notifyPaymentReceived(parentId, invoiceId, amount)
- notifyResultsPublished(studentIds, term)
- notifyStudentAbsent(parentId, studentId, date)
- notifyAdmissionDecision(applicationId, status)
- notifyExamTimetable(classId)
- sendSchoolAnnouncement(userIds, title, body)

Each function sends to all enabled channels based on user preferences.
Admin panel to manually send bulk announcements.
Use server actions, Prisma, Resend, Termii, FCM. TypeScript throughout.
```

### 51.9 Events & RSVP Prompt

```
Build the Events and RSVP module for Tamara's Fairview School.

Public events page (/events):
- Grid of upcoming events (card: cover image, title, date, location, category badge)
- Past events section with photo gallery links
- Monthly calendar view toggle
- Filter by category: Sports, Academic, Cultural, PTA, Graduation, Open Day

Event detail page (/events/[slug]):
- Hero image, title, dates, location
- Full description (rich text)
- If RSVP enabled: RSVP form (name, email, phone, relationship, attending count)
- RSVP count and remaining spots
- After RSVP: confirmation message + confirmation email via Resend
- Post-event: photo gallery section
- Share buttons: WhatsApp, Facebook

Admin events management (/portal/admin/cms/events):
- Create/edit event form with all fields + Cloudinary image upload
- Set RSVP enabled, deadline, max attendees
- View RSVP list with export CSV
- Upload post-event photos
- Publish/unpublish events

Automated reminders:
- 1 week before: email + push to all RSVPers
- 1 day before: SMS + push to RSVPers
- Morning of event: push reminder

Post-event:
- Admin marks event as COMPLETED
- Emails RSVPers with link to event photo gallery

Use server actions, Prisma, Resend, Termii, FCM. Mobile-first design.
```

### 51.10 Gallery Prompt

```
Build the Photo and Video Gallery module for Tamara's Fairview School.

Public gallery page (/gallery):
- Album grid (cover image, title, category, photo count)
- Filter by category: Campus Life, Events, Academics, Community, Virtual Tour
- Click album → lightbox viewer
- Lightbox: full-screen photo, caption, prev/next arrows, swipe on mobile
- Download photo button
- Video albums: embedded video player

Virtual Campus Tour page (/gallery/virtual-tour):
- Guided photo walkthrough of key areas
- Labeled hotspots: Gates, Reception, Classrooms, Playground, ICT Lab, Library
- Descriptive captions per area

Admin gallery management (/portal/admin/cms/gallery):
- Create album (title, description, category, cover image)
- Batch upload photos via Cloudinary widget
- Drag-and-drop to reorder photos
- Edit/delete individual photos
- Add/edit captions
- Link album to event
- Publish/unpublish album
- Upload video (Cloudinary video)

Use Cloudinary for all media. Lazy loading for images. Mobile-optimized lightbox.
```

### 51.10b School Section Pages Prompt

```
Build five standalone section pages for Tamara's Fairview Nursery, Grade and High School:
/sections/discovery, /sections/nursery, /sections/grade-school,
/sections/junior-secondary, /sections/senior-secondary

Shared setup:
- Create config/sections.ts: an array/map keyed by slug, each entry holding
  { name, tagline, ageGroup, logo ('grade-school' | 'high-school'), heroImage,
    overview, curriculumHighlights[], typicalDay[], facilities[], uniqueModule }
- Discovery, Nursery, and Grade School use logo: 'grade-school' (the F&S crest —
  rainbow, book, dove). Junior Secondary and Senior Secondary use logo:
  'high-school' (the TFHS crest — rainbow, torch, dove).
- Build one reusable <SectionPageTemplate> component driven by this config, so
  each of the five page.tsx files is a thin wrapper passing its own slug.

Template layout (in order), all populated from the section's config:
1. Hero: full-bleed background image, section logo badge top-left, section name
   + tagline in Playfair Display, age-group pill, two CTAs ("Apply to This
   Section" → /admissions/apply?section=[slug], "Download Curriculum Overview")
2. Section overview (2-3 paragraphs)
3. Curriculum & subjects list, with NERDC alignment note
4. "A Day in the Life" timeline/schedule visual
5. Facilities grid specific to this section
6. Teacher cards filtered to this section (photo, name, qualification)
7. Gallery strip pulling photos tagged with this section's category
8. Testimonials carousel filtered to this section
9. Admissions CTA banner: "Ready to enroll in [Section Name]?"
10. Cross-link strip: small cards linking to the other four section pages

Section-specific unique modules to include:
- Discovery: "What to Pack" list + drop-off/pickup safety note
- Nursery: in-page tabs for Nursery 1 / LKG / HKG that swap the curriculum
  highlights and typical-day blocks without leaving the page
- Grade School: "From Grade School to JSS" transition note linking to
  /sections/junior-secondary
- Junior Secondary: BECE readiness timeline + "Meet the Exam Officer" card
- Senior Secondary: "Where Our Graduates Go" university placement stats
  linking to /alumni, plus WAEC/NECO results highlight strip

Use Tailwind CSS 4 + shadcn/ui, Framer Motion for hero/scroll entrance
animations, mobile-first from 320px. Each page must be SSR for SEO with
per-section metadata (title, description, OG image = section hero image).
```

### 51.11 Alumni Section Prompt

```
Build the Alumni section for Tamara's Fairview School.

Public alumni page (/alumni):
- Hero: "Join Our Growing Family of Alumni"
- Featured alumni cards (photo, name, graduation year, university, profession, testimonial)
- Counter stats: Universities represented, Countries, Years of alumni
- Testimonials carousel
- "Share Your Story" CTA with alumni registration form
  Form fields: name, graduation year, final class, location, university, profession, testimonial, photo, email, phone
  On submit: Admin reviews → approves → appears on page
- WhatsApp alumni group link

Admin alumni management (/portal/admin/alumni):
- List of submitted profiles (pending approval)
- Approve / reject / edit each profile
- Feature/unfeature alumni (shows on homepage)
- Export alumni database CSV

Design: Warm, inspirational, celebratory. Show real faces of success.
```

### 51.12 AI Chatbot Prompt

```
Build the Tamara AI chatbot widget for Tamara's Fairview School using Google Gemini API.

UI (public website, all pages):
- Floating circular button (bottom-right, school brand color, school logo icon)
- Click → slides up chat panel (mobile: full-width bottom sheet, desktop: 380px wide panel)
- Header: "Tamara AI" + school logo + minimize button
- Message thread (user messages right-aligned, AI messages left-aligned)
- Quick reply chips on open: "Admissions", "Fees", "School Sections", "Contact"
- Input field + send button
- Typing indicator while AI responds

Gemini Integration (/api/chat/route.ts):
- System prompt describes the school, values, sections, fees, contacts
- Maintains conversation history in component state
- Streams responses for instant feel
- Fallback: "Talk to a real person →" button → opens WhatsApp

Capabilities:
- Answer admissions questions (requirements, process, age groups)
- Explain fee structure
- Describe school sections (Discovery through SSS)
- Explain the portal and how to access it
- Explain the 6 core values and 7 golden rules
- Direct to contact page for complex queries

Escalation:
- After 3 unresolved turns, suggest WhatsApp
- Always provide school phone number when user seems frustrated

Persist chat in localStorage so conversation continues on page refresh.
```

---

## 52. Appendices

### Appendix A: School Sections Quick Reference

| Page Route | Sub-levels (in-page) | Target Age | Key Focus | Logo Used |
|---|---|---|---|---|
| `/sections/discovery` | Playgroup | 2+ years | Early childhood care, sensory play, motor skills | Grade School crest |
| `/sections/nursery` | Nursery 1, LKG, HKG | 3–5 years | Social & cognitive growth, literacy/numeracy readiness | Grade School crest |
| `/sections/grade-school` | Grade 1–5 | 6–10 years | NERDC Curriculum, CA assessments | Grade School crest |
| `/sections/junior-secondary` | JSS1–JSS3 | 11+ years | NERDC + Trade Skills + Digital Technology, BECE prep | High School crest |
| `/sections/senior-secondary` | SS1–SS3 | Senior | Advanced academics, career prep, WAEC/NECO | High School crest |

### Appendix B: Academic Calendar

| Term | Duration |
|------|---------|
| First Term | September – December |
| Second Term | January – March |
| Third Term | April – July |

### Appendix C: 7 Golden Rules

1. We respect ourselves and others at all times
2. We take responsibility for our actions
3. We come to school prepared and ready to learn
4. We are honest and tell the truth
5. We take care of school property and our environment
6. We resolve conflicts peacefully
7. We celebrate the success of others

### Appendix D: Contact Directory

| Person | Role | Phone |
|--------|------|-------|
| Mrs. Osinamofan Oko | Proprietress | 07038532976 |
| Mr. Reuben Yohanna | Exam Officer | 08030467413 |
| Support Line 1 | General | 08138298325 |
| Support Line 2 | General | 08131618327 |
| Support Line 3 | General | 08032823229 |
| Email | General | tamarasfaviewschooljos@gmail.com |

### Appendix E: Priority Legend (MoSCoW)

| Priority | Label | Meaning |
|----------|-------|---------|
| 🔴 | **MUST** | Core feature, cannot launch without |
| 🟡 | **SHOULD** | High value, implement before Phase 2 |
| 🟢 | **COULD** | Nice to have, implement when bandwidth allows |
| ⚪ | **WON'T** (now) | Future roadmap |

### Appendix F: MUST-HAVE Feature List (Launch Blockers)

- 🔴 Public homepage with all key sections
- 🔴 Online admissions form
- 🔴 Parent, student, teacher portals
- 🔴 CA score entry and result computation engine
- 🔴 Report card generation with clearance gate
- 🔴 Fee invoice management
- 🔴 Paystack payment integration
- 🔴 SMS notifications via Termii
- 🔴 Attendance recording
- 🔴 Exam timetable publication
- 🔴 Role-based access control (RBAC)
- 🔴 Mobile-first responsive design (320px+)
- 🔴 PWA installability
- 🔴 Audit logs
- 🔴 Admin dashboard with key analytics
- 🔴 News/Blog CMS
- 🔴 Events with RSVP
- 🔴 Photo Gallery
- 🔴 FAQ page
- 🔴 WhatsApp chat widget
- 🔴 Download center

### Appendix G: Implementation Roadmap

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| **Phase 1** | Weeks 1–3 | Design system, wireframes, DB schema, auth setup |
| **Phase 2** | Weeks 4–7 | Public website, CMS, admissions module, news, events, gallery |
| **Phase 3** | Weeks 8–11 | All portals, CA/result engine, payments, notifications, homework, attendance |
| **Phase 4** | Weeks 12–13 | UAT, bug fixes, performance optimization, accessibility audit |
| **Phase 5** | Week 14 | Training, final deployment, launch, monitoring setup |
| **Phase 6** | Month 3–6 | Additional modules: library, transport, alumni, AI features |

---

*End of Document*

---

**Document Version:** 1.0  
**Prepared:** July 2026  
**Status:** Approved for Development  
**Next Review:** On completion of Phase 1

> *"A Whole New World of Learning and Care"*  
> — Tamara's Fairview Nursery, Grade and High School
