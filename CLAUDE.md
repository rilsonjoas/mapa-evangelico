# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Mapa Evangélico" - a Next.js application serving as a hub for evangelical organizations in Brazil. The application displays denominations, social projects, faith confessions, para-ecclesiastical associations, academic journals, and seminaries/colleges in a categorized portal format.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` (uses Turbopack)
- **Production server**: `npm start`
- **Lint**: `npm run lint` (ESLint with Next.js TypeScript rules)

## Architecture

### Core Structure
- **App Router**: Uses Next.js 15 App Router with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **UI Library**: Radix UI primitives with custom styling
- **Font**: Sora from Google Fonts
- **Layout**: Header/Footer layout with flexible main content area

### Key Components
- `src/components/content/CategorySection.tsx` - Displays organization categories
- `src/components/charts/BrazilMap.tsx` - Interactive Brazil map using Google Charts
- `src/components/navigation/Header.tsx` & `Footer.tsx` - Site navigation
- `src/components/ui/` - shadcn/ui component library

### Data Management
- `src/data/content-types.ts` - Type definitions and category configuration
- `src/data/organizations.ts` - Organization data
- `src/data/statistics.ts` - Statistical data for charts

### Content Categories
The application organizes content into 6 main categories:
1. Denominações (Denominations)
2. Projetos Sociais (Social Projects)  
3. Confissões de Fé (Faith Confessions)
4. Associações Paraeclesiásticas (Para-ecclesiastical Associations)
5. Revistas Acadêmicas (Academic Journals)
6. Seminários e Faculdades (Seminaries and Colleges)

### Configuration
- **shadcn/ui**: Configured in `components.json` with New York style
- **TypeScript**: Path aliases `@/*` point to `src/*`
- **ESLint**: Next.js core-web-vitals and TypeScript rules
- **Tailwind**: Version 4 with CSS variables enabled

### External Integrations
- Google Charts for Brazil map visualization
- Google AdSense integration (placeholder in layout)
- Social media links and external organization websites