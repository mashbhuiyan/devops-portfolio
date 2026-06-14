# CLAUDE.md — DevOps Portfolio Project

## Project Overview
Personal portfolio website for a Cloud & DevOps Engineer.
Built with Next.js + Tailwind CSS, deployed on AWS S3 + CloudFront via GitHub Actions CI/CD.

## Owner
- Role: Cloud & DevOps Engineer
- Skills Focus: AWS, Docker, Kubernetes, Terraform, CI/CD, Linux, Ansible

## Tech Stack
- **Framework**: Next.js 14 (static export)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React + Simple Icons (for tech logos)
- **Animations**: Framer Motion
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **IaC**: Terraform (infrastructure folder)
- **Containerization**: Docker (local dev)

---

## Claude Code Behavior Rules

### ALWAYS
- Read this file at the start of every session
- Follow the phase system: PLAN → REVIEW → EXECUTE
- Work one component at a time
- Show diffs before applying changes
- Keep components small and single-responsibility
- Use TypeScript types for everything
- Use Tailwind utility classes only (no custom CSS unless unavoidable)
- Keep commits small and descriptive

### NEVER
- Write code during Plan Mode
- Skip TypeScript types
- Use inline styles
- Generate multiple components at once without approval
- Push to remote (blocked by permissions)
- Delete any files without explicit confirmation
- Use `any` TypeScript type

---

## Project Phases

### Phase 1 — PLANNING (Current)
- [x] Create CLAUDE.md
- [x] Create SKILLS.md
- [x] Create PLANNING.md
- [ ] Finalize architecture
- [ ] Get user approval on plan

### Phase 2 — SCAFFOLDING
- [ ] Initialize Next.js project
- [ ] Configure Tailwind CSS
- [ ] Set up TypeScript
- [ ] Set up folder structure
- [ ] Create base layout & design system

### Phase 3 — COMPONENTS
- [ ] Hero section
- [ ] About section
- [ ] Skills section
- [ ] Projects section
- [ ] Contact section
- [ ] Footer

### Phase 4 — POLISH
- [ ] Animations (Framer Motion)
- [ ] Responsive design (mobile-first)
- [ ] SEO metadata
- [ ] Performance optimization
- [ ] Lighthouse audit

### Phase 5 — DEPLOYMENT
- [ ] Dockerfile for local dev
- [ ] next.config.js static export
- [ ] Terraform: S3 + CloudFront
- [ ] GitHub Actions CI/CD pipeline
- [ ] Domain + SSL setup

---

## Folder Structure
```
devops-portfolio/
├── CLAUDE.md               ← Claude instructions (this file)
├── SKILLS.md               ← Tech stack decisions & rationale
├── PLANNING.md             ← Architecture & component plan
├── .claudeignore           ← Files Claude should not touch
├── .env.example            ← Environment variable template
├── Dockerfile              ← Local dev container
├── docker-compose.yml      ← Local dev orchestration
├── next.config.js          ← Next.js config (static export)
├── tailwind.config.ts      ← Tailwind design system
├── tsconfig.json           ← TypeScript config
├── package.json
│
├── infrastructure/         ← Terraform IaC
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── s3-cloudfront.tf
│
├── .github/
│   └── workflows/
│       └── deploy.yml      ← CI/CD pipeline
│
├── public/
│   ├── favicon.ico
│   ├── og-image.png        ← Open Graph image for SEO
│   └── assets/
│       └── images/
│
└── src/
    ├── app/
    │   ├── layout.tsx      ← Root layout + metadata
    │   ├── page.tsx        ← Home page (assembles all sections)
    │   └── globals.css     ← Tailwind base imports only
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Projects.tsx
    │   │   └── Contact.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── Badge.tsx
    │       ├── Card.tsx
    │       └── SectionHeader.tsx
    │
    ├── data/
    │   ├── skills.ts       ← All skills data
    │   ├── projects.ts     ← All projects data
    │   └── personal.ts     ← Name, bio, links
    │
    ├── types/
    │   └── index.ts        ← All TypeScript interfaces
    │
    ├── hooks/
    │   └── useScrollAnimation.ts
    │
    └── lib/
        └── utils.ts        ← Utility functions
```

---

## Design System (Tailwind)
- **Primary color**: Slate dark theme (slate-900 background)
- **Accent**: Cyan/Teal (DevOps terminal aesthetic)
- **Font Display**: JetBrains Mono (code/terminal feel for headings)
- **Font Body**: Inter
- **Border radius**: Minimal (sharp, professional)
- **Shadows**: Subtle, dark

---

## Coding Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (`useScrollAnimation.ts`)
- Types: PascalCase interfaces (`ProjectCard`, `SkillBadge`)
- Data files: camelCase (`projects.ts`)
- CSS classes: Tailwind only, sorted with prettier-plugin-tailwindcss
- No default exports for utilities, named exports only
- All components must have explicit TypeScript prop types

---

## Git Commit Convention
```
feat: add Skills section component
fix: correct mobile nav overflow
style: adjust hero section spacing
docs: update PLANNING.md with phase 3 status
infra: add Terraform S3 bucket config
ci: add GitHub Actions deploy workflow
```

---

## Current Session Goal
> Read PLANNING.md to understand current phase before doing anything.
> Always confirm with user before moving to next phase.