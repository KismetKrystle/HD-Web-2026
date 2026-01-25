# H.E.R. DAO Website

The official website for H.E.R. DAO - Building the Future of Web3 by empowering women in blockchain through infrastructure, education, and ecosystems.

## About H.E.R. DAO

H.E.R. DAO is committed to increasing diversity and inclusion in Web3, creating a sustainable pipeline for women developers and fostering innovation through education and community.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design system
- **Animations**: GSAP with ScrollTrigger
- **Font**: Inter Tight (Google Fonts)
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── Footer.tsx     # Footer with social links
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero section with animated background
│       ├── About.tsx      # About section with partner logos
│       ├── ServiceCards.tsx    # Products/Services cards
│       ├── FeaturedProjects.tsx # Featured products showcase
│       └── Achievement.tsx     # Statistics and achievements
```

## Key Features

- **Animated Hero Section**: Dynamic GIF background with GSAP animations
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Smooth Scrolling**: GSAP ScrollTrigger for scroll-based animations
- **Social Integration**: Direct links to X, Telegram, GitHub, and Instagram
- **Performance Optimized**: Next.js Image optimization and lazy loading

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design System

The project uses a custom design system with:

- **Colors**: Purple (#8B5CF6), Pink (#EC4899), Blue (#6366F1)
- **Typography**: Inter Tight with weights 400-900
- **Spacing**: Consistent spacing scale (8px, 16px, 24px, 48px, 96px, 144px)
- **Components**: Reusable button, card, and section components

## Deployment

The site is deployed on Vercel. Any push to the `main` branch triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo)

## Connect With Us

- **Website**: [herdao.org](https://herdao.org)
- **X (Twitter)**: [@_HerDAO](https://x.com/_HerDAO)
- **Telegram**: [t.me/herdao](https://t.me/herdao)
- **GitHub**: [H-E-R-DAO](https://github.com/H-E-R-DAO)
- **Instagram**: [@h.e.r.dao](https://instagram.com/h.e.r.dao)

## License

© 2026 H.E.R. DAO. All rights reserved.
