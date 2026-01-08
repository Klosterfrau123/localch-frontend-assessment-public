# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Frontend home assignment template for building a business place detail view using Next.js 16 with React 19 and Storybook.

## Commands

```bash
# Development server (Next.js)
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run Storybook
yarn storybook

# Build Storybook
yarn build-storybook
```

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- Storybook 10 with Vite
- Node.js 22+
- Yarn 1

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages
- `src/app/[placeId]/page.tsx` - Dynamic route for place details
- `.storybook/` - Storybook configuration

### Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json)

### Storybook Configuration

Stories directory must be configured in `.storybook/main.ts` by adding paths to the `stories` array.

## Data Source

Place data API: `https://web.staticlocal.ch/coding-session-rest-api/{place_id}`

Example place IDs:
- `GXvPAor1ifNfpF0U5PTG0w`
- `ohGSnJtMIC5nPfYRi_HTAg`
