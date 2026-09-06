# React Dashboard Starter

This is a small React + TypeScript app that presents a fake revenue operations dashboard.

The app is intentionally compact, but it includes enough real application structure for useful beginner pull request examples:

- typed domain data
- derived business metrics
- date range and customer segment filters
- reusable utility functions
- responsive UI states

## Scripts

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## Example challenge branches

- Add tests for dashboard filtering and metric formatting.
- Fix the top metric calculation when every metric is trending down.
- Add a region filter.
- Move the metric cards into their own component.
- Persist selected filters in local storage.
- Add an empty state when filters match no sales channels.
