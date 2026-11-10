# Zachariah Farahany — Portfolio

Personal portfolio site: selected work, blog posts, and CV. Built as a React single-page app that is prerendered to static HTML at build time and served from GitHub Pages.

**Live site**: [zachfara.github.io/MyPortfolio](https://zachfara.github.io/MyPortfolio/)

## Tech Stack

- **React 19** with functional components and hooks
- **React Router 7** — `BrowserRouter` with a `/MyPortfolio` basename; a `404.html` [SPA redirect](https://github.com/rafgraph/spa-github-pages) keeps deep links working on GitHub Pages
- **Vite 7** for dev server and production builds
- **Shiki** for build-free syntax highlighting in blog posts
- **React Helmet** for per-page meta tags and titles
- **Vitest + React Testing Library** for tests; **ESLint 9** (flat config, zero-warnings policy)
- Plain CSS design system — no preprocessor

## Routes

| Path                                                   | Page                                                                                                                       |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `/`                                                    | Home — intro plus featured work                                                                                            |
| `/work`                                                | All projects and repositories (the former `/projects` and `/repositories` pages, now merged; both old paths redirect here) |
| `/cv`                                                  | Curriculum vitae                                                                                                           |
| `/blog`                                                | Blog index                                                                                                                 |
| `/blog/why-do-we-need-agents`, `/blog/ai-agent-memory` | Blog posts (React components in `src/pages/BlogPosts/`)                                                                    |

Unknown paths fall back to Home.

## Project Structure

```
src/
├── main.jsx                # Entry point; hydrates prerendered HTML (or mounts fresh in dev)
├── entry-server.jsx        # SSR entry used by the prerender step
├── App.jsx                 # Router + route table
├── components/
│   ├── Layout.jsx          # App shell: identity rail, top bar, mobile menu overlay
│   ├── BlogTOC.jsx         # Table of contents for blog posts
│   └── CodeBlock.jsx       # Shiki-highlighted code blocks (theme in shikiTheme.js)
├── pages/
│   ├── Home.jsx
│   ├── Work.jsx
│   ├── Blog.jsx
│   ├── CurriculumVitae.jsx
│   └── BlogPosts/
├── data/
│   ├── workItems.js        # Single source of truth for project cards (Home + Work)
│   └── generated/
│       └── github-repo-updates.json  # Last-updated timestamps, synced at build time
└── styles/
    ├── theme-dark.css      # Design-system entrypoint (imported last, owns the cascade)
    └── theme-dark/         # Ordered layers: 00-tokens-base … 90-scrollbars
scripts/
├── sync-github-repo-updates.mjs  # Fetches repo last-push dates from the GitHub API
├── prerender.mjs                 # Renders each route to static HTML after the build
└── check-layout.mjs              # Layout check used by `npm run check`
```

## Styling

All visual styling lives in the dark design system under `src/styles/theme-dark/`, split into numbered layers (`00-tokens-base.css` through `90-scrollbars.css`) that `theme-dark.css` imports in order. It is loaded last in `main.jsx` so it owns the cascade. A handful of standalone stylesheets remain for the sidebar and hamburger menu; the other files in `src/styles/` are retired legacy overrides that are no longer imported.

## Getting Started

Requires Node.js 24 (see `.nvmrc`).

```bash
git clone https://github.com/ZachFara/MyPortfolio.git
cd MyPortfolio
npm ci --legacy-peer-deps   # also installs the git hooks
npm run dev          # http://localhost:5173
```

### Scripts

| Command                     | Description                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `npm run dev`               | Start the dev server with hot reload                                                                     |
| `npm run build`             | Sync GitHub repo metadata, build the production bundle, then prerender all routes (via `postbuild`)      |
| `npm run preview`           | Serve the production build locally                                                                       |
| `npm test`                  | Run the test suite once                                                                                  |
| `npm run test:watch`        | Run tests in watch mode                                                                                  |
| `npm run test:coverage`     | Generate a coverage report                                                                               |
| `npm run check`             | **The gate**: format, lint, types, dead code, module boundaries, layout, tests. Pre-commit and CI run it |
| `npm run lint`              | ESLint with `--max-warnings=0`                                                                           |
| `npm run sync:repo-updates` | Refresh `github-repo-updates.json` from the GitHub API (set `GITHUB_TOKEN` to avoid rate limits)         |

## Contributing

All work follows [AGENTS.md](AGENTS.md): branch per task, conventional commits, PRs into `master` with a green `npm run check`. What to build is in [DESIGN.md](DESIGN.md); how, in [docs/decisions/](docs/decisions/); current status and the task list, in [PROGRESS.md](PROGRESS.md).

## Build & Prerendering

`npm run build` does three things:

1. `sync:repo-updates` fetches the last-push date for every repo referenced in `workItems.js` and writes it to `src/data/generated/github-repo-updates.json`.
2. Vite builds the client bundle to `dist/`.
3. The `postbuild` hook builds an SSR bundle from `entry-server.jsx` and `scripts/prerender.mjs` renders each route to a static `index.html` under `dist/`, so pages arrive as real HTML and React hydrates on load.

## Testing

Vitest with React Testing Library; tests live in `tests/` mirroring `src/` (components, pages, and a Shiki code-styling test). The approach is smoke-test focused — render without crashing, key elements present — rather than asserting on styling or implementation details. See [TESTING.md](TESTING.md) for details.

## Deployment

GitHub Actions deploys to GitHub Pages on pushes to `master`:

- **`ci-cd.yml`** — runs `npm run check` on every push and PR (plus commitlint on PRs); on `master`, builds and deploys `dist/` to the `gh-pages` branch.
- **`static.yml`** — a simpler build-and-deploy workflow, also triggered on `master` pushes (and manually via `workflow_dispatch`).

The Vite `base` is `/MyPortfolio/` to match the Pages subdirectory, and `public/404.html` redirects unknown paths back into the SPA router.
