# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website built with TypeScript and Tailwind CSS 4, showcasing data analyst work experience and projects. The site features advanced animations using Framer Motion and custom UI components with a dark theme design.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack (preferred for faster development)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Alternative Development
- `npx next dev -H 0.0.0.0` - Development server accessible externally (port 3000)
- `npx next dev -H 0.0.0.0 -p 8080` - External access on different port

## Project Architecture

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global styles and CSS variables
├── components/            
│   ├── sections/          # Main page sections
│   │   ├── hero.tsx       # Hero section with animations
│   │   ├── experience.tsx # Work experience timeline
│   │   └── projects.tsx   # Projects showcase
│   └── ui/                # Reusable UI components
│       ├── animated-background.tsx
│       ├── floating-dock-navigation.tsx
│       ├── meteors.tsx
│       ├── sparkles.tsx
│       └── typewriter.tsx
├── data/
│   └── portfolio.ts       # Central data store (personal info, experience, projects)
└── lib/
    └── utils.ts           # Utility functions and animations
```

### Key Architecture Patterns

**Data Management**: All content is centralized in `src/data/portfolio.ts` with TypeScript interfaces for type safety. This includes personal information, work experience, and project details.

**Component Structure**: 
- Section components (`components/sections/`) handle main page content
- UI components (`components/ui/`) provide reusable animated elements
- All components use TypeScript and follow the "use client" pattern for client-side interactivity

**Styling System**:
- Tailwind CSS 4 with custom CSS variables defined in `globals.css`
- Dark theme with gradient backgrounds and animated elements
- Responsive design with mobile-first approach
- Custom utility classes for consistent spacing (`section-spacing`, `container-spacing`)

**Animation Framework**:
- Framer Motion for page transitions and scroll-based animations
- Custom animation utilities in `lib/utils.ts`
- Scroll-triggered animations with `whileInView` for performance

**Navigation**: Floating dock navigation component that adapts to scroll position and provides smooth scrolling to sections.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React, Tabler Icons
- **Fonts**: Inter and JetBrains Mono (Google Fonts)
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

## Development Notes

### Path Aliases
- `@/*` maps to `src/*` for clean imports

### CSS Custom Properties
Global CSS variables are defined in `globals.css` for consistent theming:
- Color variables (background, primary, accent, gradients)
- Spacing variables (section-padding, container-padding)
- Font variables integrated with Tailwind

### Component Patterns
- Most components are client components using "use client"
- Animation variants are defined in `lib/utils.ts` for reusability
- Data is imported from central `portfolio.ts` file
- Consistent prop interfaces using TypeScript

### Build Configuration
- Standard Next.js configuration in `next.config.ts`
- ESLint extends Next.js core-web-vitals and TypeScript rules
- Turbopack enabled for faster development builds