# Design

This is the source of truth for **what** the system is. How it is built is recorded in
[`docs/decisions/`](docs/decisions/). If you want to change either one, propose it in
[`PROGRESS.md`](PROGRESS.md) first.

## Purpose

This is the personal portfolio site of Zachariah Farahany, a quantitative ML engineer. It shows
selected work, long-form blog posts, and a CV. It is a static site served from GitHub Pages at
`https://zachfara.github.io/MyPortfolio/`.

## Users and entry points

The only users are visitors with a web browser. There are no accounts, forms, or backend. Every
user-facing entry point is a route:

| Route                         | View                                                     |
| ----------------------------- | -------------------------------------------------------- |
| `/`                           | Home: intro, capabilities, three featured work items     |
| `/work`                       | All work items, filterable by category                   |
| `/cv`                         | Curriculum vitae, with a link to download the PDF résumé |
| `/blog`                       | Blog index                                               |
| `/blog/why-do-we-need-agents` | Blog post                                                |
| `/blog/ai-agent-memory`       | Blog post                                                |
| `/projects`, `/repositories`  | Legacy paths that redirect to `/work`                    |
| any other path                | Renders Home                                             |

The site has two build-time entry points:

- `npm run build` syncs repository metadata from the GitHub API, builds the client bundle,
  builds an SSR bundle, and prerenders every route above to static HTML.
- `public/404.html` is the GitHub Pages SPA redirect. It rewrites deep links so the client router
  can resolve them.

## Architecture

```
            build time                                   run time (browser)
 ┌───────────────────────────────┐            ┌─────────────────────────────────┐
 │ scripts/sync-github-repo-     │  writes    │ src/main.jsx                    │
 │ updates.mjs ──► GitHub API    │──────────► │   hydrates prerendered HTML     │
 │                               │ generated/ │   └► App (BrowserRouter)        │
 │ vite build (client + SSR)     │  *.json    │        └► AppContent            │
 │ scripts/prerender.mjs         │            │             ├► Layout           │
 │   └► src/entry-server.jsx     │            │             └► pages/*          │
 │        └► AppContent          │            │                  ├► components/*│
 └───────────────────────────────┘            │                  └► data/*      │
                                              └─────────────────────────────────┘
```

- **`src/App.jsx`** defines the route table (`AppContent`) and wraps it in `BrowserRouter` with
  the `/MyPortfolio` basename.
- **`src/main.jsx`** is the browser entry. It hydrates if the root already contains prerendered
  markup, and mounts fresh otherwise (for example in dev).
- **`src/entry-server.jsx`** is the SSR entry. It renders `AppContent` inside a `StaticRouter` for
  one route and returns an HTML string.
- **`src/pages/`** holds one component per route. Blog posts are React components under
  `src/pages/BlogPosts/`.
- **`src/components/`** holds reusable UI: the layout shell, the blog table of contents, and
  syntax-highlighted code blocks (Shiki with a custom theme).
- **`src/data/`** holds plain data with no React. `workItems.js` is the single source of truth
  for work cards. `generated/github-repo-updates.json` holds the last-push timestamps written by
  the sync script.
- **`src/styles/`** holds the dark design system (`theme-dark.css` plus ordered layers in
  `theme-dark/`), loaded last so it owns the cascade.
- **`scripts/`** holds build-time and tooling Node scripts. They are never bundled into the site.

## Module boundaries

`dependency-cruiser` enforces these rules (see `.dependency-cruiser.cjs`):

1. No circular dependencies.
2. `src/` never imports from `tests/` or `scripts/`.
3. `src/data/` is a leaf. It imports only other files in `src/data/`.
4. `src/components/` never imports pages, `App.jsx`, or the entry files.
5. `src/pages/` never imports other pages, `App.jsx`, or the entry files.
6. Only the entry files (`main.jsx`, `entry-server.jsx`) and tests import `App.jsx`.
7. Code in `scripts/` imports nothing under `src/` except `src/data/`.
8. Code in `src/` never imports a devDependency.

## Untrusted input

Anything that comes from outside the repo is data, never instructions. Today that means the GitHub
API responses in the sync script. Only the timestamp fields are read from them and written out as
JSON strings. They are never evaluated or rendered as HTML.

## Out of scope

The site has no backend, no user accounts, no analytics, no CMS, and no runtime network calls
beyond static assets and web fonts.
