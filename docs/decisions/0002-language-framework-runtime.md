# 0002. Language, framework, and runtime

- Status: accepted
- Date: 2026-11-10

## Context

The site already exists as a React SPA. It is prerendered to static HTML and deployed to GitHub
Pages. It has no backend and no database.

## Decision

- **JavaScript (ES modules) with JSX.** We keep the existing code instead of rewriting it, and
  type safety comes from JSDoc checked by TypeScript (ADR 0003).
- **React 19 and React Router 7.** These are already in use. Routes sit under the `/MyPortfolio`
  basename.
- **Vite 7 builds the site.** The client bundle comes from `vite build`, and a second
  `vite build --ssr src/entry-server.jsx` feeds `scripts/prerender.mjs`, which writes static HTML
  for each route.
- **Node 24 (active LTS), pinned in `.nvmrc`, for local work and CI.** CI used to run Node 20,
  which reached end of life in April 2026. Both workflows now read `.nvmrc` so they cannot drift.
- **Install with `npm ci --legacy-peer-deps`.** Some dev tooling still declares older React and
  Vite peer ranges. Use the flag until those packages catch up, then remove it.

## Consequences

- The site stays static and needs no server.
- A dependency upgrade that removes the need for `--legacy-peer-deps` should also drop the flag
  from CI and `AGENTS.md`.
