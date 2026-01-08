# Frontend Engineer Home Assignment

## What This Project Does

This project displays business place information from the local.ch API:

- **Home Page** (`/`) - Grid of place cards linking to detail pages
- **Place Detail** (`/[placeId]`) - Full business information with name, address, opening hours, ratings, and a review form

## Getting Started

```bash
yarn install    # Install dependencies
yarn dev        # Run app at http://localhost:3000
yarn storybook  # Run Storybook at http://localhost:6006
```

## Storybook

Storybook documents all UI components with different states:

- **Pages** - HomePage (Default, ManyPlaces, Empty) and PlaceDetail
- **Components** - PlaceCard, OpeningHours, RatingSummary, StarRating

Access at http://localhost:6006 after running `yarn storybook`.

## Tech Stack

- Next.js 16 / React 19
- TypeScript
- CSS Modules
- Storybook 10 with a11y addon
