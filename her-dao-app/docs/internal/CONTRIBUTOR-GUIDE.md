# Internal Contributor Guide

This document serves as the central reference for contributors to the H.E.R. DAO website.

## DEVELOPMENT

### Environment & Setup
- **Node Version**: `>=22.11.0`
- **Package Manager**: npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

### Build Process
```bash
npm run build
```
The project is configured for static export (`output: 'export'` in `next.config.ts`). The build artifacts will be in the `.next` directory (or `out` directory depending on exact Next.js version behavior with export, but Vercel handles this).

### Code Structure
- **Framework**: Next.js 16 (App Router)
- **Styling**: Native CSS with CSS variables (`src/app/globals.css`). No Tailwind unless explicitly requested.
- **Components**: Located in `src/components`. Organized by type (e.g., `sections`, `ui`, `layout`).

### Animation Conventions
- **Library**: GSAP (`gsap` and `@gsap/react`).
- **Pattern**: Use the `useGSAP` hook for all animations to ensure proper cleanup and React compatibility.
- **Registry**: Plugins should be registered once (e.g., `gsap.registerPlugin(useGSAP)`).

### Naming Conventions
- **Components**: PascalCase (e.g., `ServiceCards.tsx`).
- **Files/Directories**: Generally kebab-case, except for Component files.
- **CSS Classes**: BEM-like naming is preferred for clarity (e.g., `.hero-title-container`, `.text-hero-top`).

---

## DEPLOYMENT

### Vercel Workflow
- The project is deployed on Vercel.
- Deployments are triggered automatically on pushes to `main`.
- Preview deployments are generated for Pull Requests.

### Branch Strategy
- **`main`**: Production-ready code. Protected.
- **Feature Branches**: Create new branches for all changes (e.g., `feature/new-section`, `fix/mobile-layout`).

### Access & Rollback
- Deploy access is managed via Vercel team permissions.
- Rollbacks can be performed via the Vercel dashboard by reverting to a previous successful deployment.

---

## CONTRIBUTING

### Workflow
1.  **Branch**: Create a feature branch from `main`. Format: `feature/description` or `fix/issue`.
2.  **Dev**: Implement changes locally.
3.  **PR**: Open a Pull Request against `main`.

### Requirements
- **No direct pushes to `main`**. All changes must go through a PR.
- **PR Requirements**:
    - Clear description of changes.
    - Screenshots for visual changes.
- **Minimum Review**: At least one approval is required before merging.

### Design Approval
- **Visual Changes**: Must receive design approval before merging to ensure high aesthetic standards are maintained.

---

## DIRECTION

# Directional Context

H.E.R. DAO evolves in phases:

1. Education-first community
2. Infrastructure builder DAO
3. Product incubator

This website currently serves as core brand infrastructure.
Tooling projects will live as independent repositories.

The website repository remains controlled core infrastructure.
