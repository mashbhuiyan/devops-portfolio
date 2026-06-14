# PLANNING.md — Architecture & Execution Plan

## Current Phase: PHASE 1 — PLANNING ✅
> Update this file at the start of every phase.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Developer Machine                     │
│  VS Code + Claude Code → Next.js Dev Server (Docker)    │
└───────────────────┬─────────────────────────────────────┘
                    │ git push
                    ▼
┌─────────────────────────────────────────────────────────┐
│                     GitHub Repository                    │
│         Triggers GitHub Actions on push to main          │
└───────────────────┬─────────────────────────────────────┘
                    │ CI/CD Pipeline
                    ▼
┌─────────────────────────────────────────────────────────┐
│              GitHub Actions Workflow                     │
│  1. Install deps  2. Build  3. Export static  4. Deploy  │
└───────────────────┬─────────────────────────────────────┘
                    │ aws s3 sync
                    ▼
┌─────────────────────────────────────────────────────────┐
│                    AWS S3 Bucket                         │
│              Static website files (out/)                 │
└───────────────────┬─────────────────────────────────────┘
                    │ Origin
                    ▼
┌─────────────────────────────────────────────────────────┐
│                 AWS CloudFront CDN                       │
│         SSL + Custom Domain + Global Edge Cache          │
└───────────────────┬─────────────────────────────────────┘
                    │ HTTPS
                    ▼
┌─────────────────────────────────────────────────────────┐
│                    End User Browser                      │
│              yourname.com (portfolio)                    │
└─────────────────────────────────────────────────────────┘
```

---

## Page Structure

```
┌─────────────────────────────────┐
│           NAVBAR                │  Fixed top, blur backdrop
│  Logo  |  About Skills Projects │  Smooth scroll links
│         Contact  |  [Resume]    │  Mobile hamburger menu
└─────────────────────────────────┘
│                                 │
│           HERO                  │  Full viewport height
│  Hi, I'm [Name]                 │  Terminal-style typewriter
│  Cloud & DevOps Engineer        │  Animated text
│  [View Work]  [Contact Me]      │  CTA buttons
│  Floating tech logos            │  Subtle background grid
│                                 │
├─────────────────────────────────┤
│           ABOUT                 │  Two-column layout
│  Photo/Avatar  |  Bio text      │  Personal story
│  Years exp, certs, location     │  Key stats
│                                 │
├─────────────────────────────────┤
│           SKILLS                │  Categorized grid
│  Cloud  |  Containers  |  CI/CD │  Animated badges
│  IaC  |  Monitoring  |  OS      │  Tech icons + names
│  [Proficiency bars optional]    │
│                                 │
├─────────────────────────────────┤
│           PROJECTS              │  Card grid (3 cols)
│  ┌──────┐ ┌──────┐ ┌──────┐   │  Each card:
│  │Proj 1│ │Proj 2│ │Proj 3│   │  - Title, description
│  └──────┘ └──────┘ └──────┘   │  - Tech stack badges
│  [GitHub] [Live Demo]          │  - Links
│                                 │
├─────────────────────────────────┤
│           CONTACT               │  Centered layout
│  Email  |  LinkedIn  |  GitHub  │  Social links
│  [Contact Form - optional]      │  Or direct email
│                                 │
└─────────────────────────────────┘
│           FOOTER                │
│  © 2025 [Name] | Made with ♥   │
└─────────────────────────────────┘
```

---

## Component Breakdown

### Layout Components
| Component | File | Description |
|---|---|---|
| Root Layout | `app/layout.tsx` | HTML shell, fonts, metadata |
| Navbar | `components/layout/Navbar.tsx` | Fixed nav, smooth scroll, mobile menu |
| Footer | `components/layout/Footer.tsx` | Copyright, links |

### Section Components
| Component | File | Description |
|---|---|---|
| Hero | `components/sections/Hero.tsx` | Landing, typewriter, CTA |
| About | `components/sections/About.tsx` | Bio, photo, stats |
| Skills | `components/sections/Skills.tsx` | Categorized tech badges |
| Projects | `components/sections/Projects.tsx` | Project cards grid |
| Contact | `components/sections/Contact.tsx` | Social links, email |

### UI Primitives
| Component | File | Description |
|---|---|---|
| Button | `components/ui/Button.tsx` | Reusable button variants |
| Badge | `components/ui/Badge.tsx` | Tech stack badge |
| Card | `components/ui/Card.tsx` | Project card wrapper |
| SectionHeader | `components/ui/SectionHeader.tsx` | Section title + subtitle |

### Data Files
| File | Contents |
|---|---|
| `data/personal.ts` | Name, bio, email, social links, resume URL |
| `data/skills.ts` | All skills grouped by category |
| `data/projects.ts` | All projects with descriptions, links, tech |

---

## Execution Steps (Ordered)

### Step 1 — Project Scaffolding
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
npm install framer-motion lucide-react @iconify/react
```

### Step 2 — Configuration Files
- `next.config.js` → static export mode
- `tailwind.config.ts` → custom design tokens
- `tsconfig.json` → path aliases (@/components, @/data)
- `.env.example` → template

### Step 3 — Design System
- Tailwind config: colors, fonts, spacing
- `globals.css`: Tailwind directives + custom scrollbar
- Google Fonts: JetBrains Mono + Inter

### Step 4 — Data Layer
- `types/index.ts`: All interfaces
- `data/personal.ts`: Fill in your details
- `data/skills.ts`: All skills
- `data/projects.ts`: Your projects

### Step 5 — Base Layout
- `app/layout.tsx`: Root layout, SEO metadata
- `app/page.tsx`: Assemble all sections
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`

### Step 6 — UI Primitives
- `Button.tsx`, `Badge.tsx`, `Card.tsx`, `SectionHeader.tsx`

### Step 7 — Sections (one at a time)
1. Hero section
2. About section
3. Skills section
4. Projects section
5. Contact section

### Step 8 — Polish
- Framer Motion scroll animations
- Mobile responsiveness audit
- Dark mode consistency check
- Loading states

### Step 9 — SEO & Performance
- Meta tags, OG image
- next/image optimization
- Lighthouse audit (target: 95+ all categories)

### Step 10 — DevOps Layer
- `Dockerfile` + `docker-compose.yml`
- `infrastructure/` Terraform files
- `.github/workflows/deploy.yml`

---

## Design Decisions

### Color Palette
```
Background:  #0a0f1e  (deep navy - not pure black)
Surface:     #111827  (slate-900)
Border:      #1f2937  (slate-800)
Primary:     #06b6d4  (cyan-500 - terminal green alternative)
Accent:      #3b82f6  (blue-500)
Text:        #f1f5f9  (slate-100)
Muted:       #64748b  (slate-500)
```

### Typography
```
Display/Code: JetBrains Mono (headings, terminal text)
Body:         Inter (paragraphs, UI text)
```

### Aesthetic Direction
- Dark theme (DevOps terminal aesthetic)
- Subtle grid/dot background pattern
- Cyan accent (terminal green feel, more modern)
- Minimal borders, sharp corners
- Code-like elements (terminal prompts, brackets)
- Professional but not corporate

---

## Projects to Showcase (Placeholders — update with real projects)

1. **Kubernetes Microservices Platform**
   - Deployed multi-service app on EKS with Helm charts
   - Tech: Kubernetes, Docker, Helm, AWS EKS, Terraform

2. **CI/CD Pipeline Automation**
   - Full GitHub Actions pipeline with staging/prod environments
   - Tech: GitHub Actions, Docker, AWS, ArgoCD

3. **Infrastructure as Code — AWS**
   - Complete AWS infrastructure provisioned with Terraform
   - Tech: Terraform, AWS (VPC, EC2, RDS, S3, CloudFront)

4. **Monitoring & Alerting Stack**
   - Prometheus + Grafana + Alertmanager setup
   - Tech: Prometheus, Grafana, Docker Compose, Linux

5. **This Portfolio Website**
   - Deployed via GitHub Actions to AWS S3 + CloudFront
   - Tech: Next.js, Terraform, GitHub Actions, AWS

---

## Definition of Done (Per Section)
- [ ] TypeScript types defined
- [ ] Tailwind classes only (no inline styles)
- [ ] Mobile responsive (375px → 1440px)
- [ ] Framer Motion animation added
- [ ] Data driven (no hardcoded content in JSX)
- [ ] Reviewed and approved by user

---

## Status Tracker

| Phase | Status | Notes |
|---|---|---|
| 1 — Planning | 🟡 In Progress | Awaiting user approval |
| 2 — Scaffolding | ⬜ Not Started | |
| 3 — Components | ⬜ Not Started | |
| 4 — Polish | ⬜ Not Started | |
| 5 — Deployment | ⬜ Not Started | |