# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev              # Development server (http://localhost:3000)
yarn build            # Production build
yarn storybook        # Storybook (http://localhost:6006)
yarn lint             # ESLint + TypeScript + Prettier check
yarn lint:fix         # Auto-fix lint issues
yarn css-types        # Generate CSS Module type definitions (run after CSS changes)
```

## Architecture

### Data Flow

```
API (staticlocal.ch) → src/lib/api.ts → Server Components (app/) → Client Components (components/)
```

- **Server Components** (`src/app/page.tsx`, `src/app/[placeId]/page.tsx`): Data fetching only
- **Client Components** (`src/components/`): UI rendering with props from server

### Key Files

| File                      | Purpose                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| `src/lib/types.ts`        | TypeScript interfaces for Place, Address, FeedbackSummary         |
| `src/lib/api.ts`          | API client with `fetchPlace()` and `ApiError` class               |
| `src/lib/config.ts`       | Centralized config (API URL, example place IDs, dimension labels) |
| `src/lib/placeUtils.ts`   | Helper functions to extract data from nested Place structure      |
| `src/lib/openingHours.ts` | Opening hours grouping and formatting logic                       |
| `src/styles/globals.css`  | Design tokens (colors, spacing, shadows, radii)                   |

### Path Alias

`@/*` maps to `./src/*`

### CSS Modules

- Each component has `.module.css` with type definitions (`.module.css.d.ts`)
- Run `yarn css-types` after modifying CSS to regenerate types
- Use design tokens from `globals.css` (e.g., `var(--color-primary)`, `var(--space-4)`)

### Error Handling

- `src/app/[placeId]/error.tsx` - Error boundary for place detail page
- `ApiError` class distinguishes 404, network errors, and generic errors
- Home page uses `Promise.allSettled` for graceful partial failures

## Data Source

Place API: `https://web.staticlocal.ch/coding-session-rest-api/{place_id}`

Example IDs: `GXvPAor1ifNfpF0U5PTG0w`, `ohGSnJtMIC5nPfYRi_HTAg`
