# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend home assignment for building a business place detail view using Next.js 16 with React 19 and Storybook.

## Commands

```bash
yarn dev              # Development server (Next.js)
yarn build            # Build for production
yarn storybook        # Run Storybook on port 6006
yarn lint             # ESLint + TypeScript + Prettier check
yarn lint:fix         # Auto-fix lint issues
yarn css-types        # Generate CSS Module type definitions
```

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- CSS Modules with typed-css-modules for type safety
- Storybook 10 with Vite and a11y addon

## Architecture

### Data Flow

```
API (staticlocal.ch) → src/lib/api.ts → Server Components → Presentational Components
```

- **Server Components** (`src/app/page.tsx`, `src/app/[placeId]/page.tsx`): Handle data fetching only
- **Presentational Components** (`src/components/HomePage/`, `src/components/PlaceDetail/`): Receive data as props, contain all UI logic

### Key Files

- `src/lib/types.ts` - TypeScript interfaces for Place, Address, FeedbackSummary, etc.
- `src/lib/api.ts` - API client with `fetchPlace()` and `ApiError` class
- `src/lib/config.ts` - Centralized configuration (API URL, example place IDs)
- `src/styles/globals.css` - Design tokens (colors, spacing, shadows, radii)

### Path Alias

`@/*` maps to `./src/*`

### CSS Modules

After modifying CSS files, run `yarn css-types` to regenerate type definitions (`*.css.d.ts`).

## Data Source

Place data API: `https://web.staticlocal.ch/coding-session-rest-api/{place_id}`

Example place IDs: `GXvPAor1ifNfpF0U5PTG0w`, `ohGSnJtMIC5nPfYRi_HTAg`
