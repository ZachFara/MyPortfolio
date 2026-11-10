# Progress

## Status

**Phase 1 (repo setup) is done and waiting for owner approval.** Phase 2 has not started. Do not
start Phase 2 until the owner approves.

Phase 1 delivered:

- `DESIGN.md`, a description of the system as it exists today. The repo had no design doc, so this
  describes the current site.
- `AGENTS.md` (with `CLAUDE.md` pointing to it), this file, and ADRs 0001–0005 in
  `docs/decisions/`.
- `npm run check`, which runs Prettier, ESLint (strict, with complexity limits), `tsc` strict on
  JSDoc, knip (default and production mode), dependency-cruiser boundary rules, the layout check,
  and Vitest. The pre-commit hook and the CI `check` job both run exactly this command.
- husky hooks (`pre-commit`, `commit-msg`), commitlint in CI, a PR template, and branch protection
  on `master`.
- The work needed to make the baseline pass under the new checks:
  - The whole repo was reformatted with Prettier.
  - JSDoc types were added so strict `tsc` passes.
  - Dead modules found by knip were removed: `Sidebar`, `BlogSidebar`, `Topbar`, `HamburgerMenu`,
    `CardTransitionStyles`, `utils/hamburgerMenu.js`, their orphaned CSS, and the unused jQuery
    template scripts in `public/assets/js/`.
  - The `Sidebar` test was removed along with its component.
  - Tracked `.DS_Store` files were untracked.
  - The unneeded `react-helmet` test mocks and the unused `IntersectionObserver` mock were removed.
  - Vitest moved from 1.6 to 3.2, the first version whose types match Vite 7.
  - `@vitest/coverage-v8` was added, because `test:coverage` was broken without it.
  - CI moved from Node 20 (end of life) to Node 24.

## Tasks

Do these in order, one per branch and one per session. Each task names its branch prefix and its
done criteria. Every task's done criteria also include a green `npm run check`.

1. **Consolidate the deploy workflows.** (`chore/`)
   Both `.github/workflows/ci-cd.yml` (`deploy` job) and `static.yml` deploy to `gh-pages` on
   every push to `master`, so each merge deploys twice. `static.yml` does not wait for `check`.
   _Done when_ there is exactly one deploy path, it runs only after `check` passes on `master`,
   `workflow_dispatch` still works, and README/TESTING/ADR 0005 describe it.
2. **Remove retired stylesheets in `src/styles/`.** (`chore/`)
   Nothing imports these 24 files: `blog`, `card-animations`, `clean-mobile`,
   `clean-project-cards`, `enhanced-profile-picture`, `enhanced-sidebar-transitions`,
   `fix-card-and-profile`, `hamburger-fixes`, `hide-original-toggle`, `main`,
   `mobile-responsive`, `mobile-sidebar-fix`, `mobile-ux-fixes`, `override-blue-highlights`,
   `overrides`, `palette`, `profile-picture`, `responsive-content`, `sidebar-fix`,
   `sidebar-search`, `sidebar-spacing`, `transitions`, `ultimate-menu-visibility`,
   `unified-card-animations`. `CodeStyling.css` is imported only by
   `tests/styles/CodeStyling.test.jsx`. That test's useful assertions (inline code and `.code-block`
   are present) belong in `tests/pages/AIAgentMemory.test.jsx`.
   _Done when_ those files are gone, the code-presence assertions live in the post's test, the
   stale comment in `App.css` is fixed, and `npm run build` plus a visual check of every route
   shows no change.
3. **Remove the unused HTML5 UP template assets in `public/assets/`.** (`chore/`)
   `public/assets/css/main.css`, `public/assets/css/card-animations.css`, and all of
   `public/assets/sass/` are unreferenced. Only `fontawesome-all.min.css` and `webfonts/` are used.
   _Done when_ only Font Awesome remains in `public/assets/` and the built site renders its icons.
4. **Use one source of truth for the route list.** (`chore/`)
   The prerendered routes are listed in `scripts/prerender.mjs`, again in `tests/smoke.test.jsx`,
   and implicitly in `src/App.jsx`.
   _Done when_ `src/App.jsx` (or a data module it uses) exports the list, prerender and the smoke
   test both import it, and the dependency rules still pass (scripts may only import `src/data/`,
   so the list has to live there).
5. **Drop `--legacy-peer-deps`.** (`chore/`)
   Find which packages' peer ranges conflict (`npm ci` without the flag) and upgrade them (likely
   `@testing-library/react` 15 → 16 and `@vitejs/plugin-react`).
   _Done when_ `npm ci` works without the flag in CI and in the docs, and ADR 0002 is updated by a
   superseding record.

## Open Questions

Each of these needs an owner decision. Agents must not resolve them on their own.

1. **File and function length limits.** ADR 0004 sets no `max-lines` or `max-lines-per-function`,
   because the CV and blog posts are long prose JSX. Adding a limit would mean moving post and CV
   content into data files first. Do you want that?
2. **Should `npm run check` build and prerender?** Today a change that breaks `vite build` or
   prerender but passes the smoke test is only caught after merge, on `master`. Adding
   `vite build && postbuild` (skipping the network sync) to `check` would catch it, but makes every
   commit about 3 seconds slower.
3. **JSDoc or TypeScript.** ADR 0003 keeps JS with JSDoc under `tsc --checkJs` to avoid a rename
   of every file. Is that fine, or do you want a `.tsx` migration task?
4. **What is next for the site itself?** `DESIGN.md` describes only what exists. The tasks above
   are all cleanup. Feature work needs a `DESIGN.md` change first (new posts, projects, pages,
   etc.).
5. **Branch protection applies to admins.** You cannot push directly to `master` either. Keep it
   that way?

## Next steps

1. The owner reviews the Phase 1 PR and answers the open questions.
2. After approval, merge the PR. Phase 2 then starts with task 1.

## Learned

- TypeScript 7 (`tsc` 7.0) handles `checkJs`/JSDoc fine. dependency-cruiser does not yet support
  TS ≥ 7 for TypeScript sources, so leave `tsPreCompilationDeps` off. We have no `.ts` files, so
  nothing is missed.
- dependency-cruiser needs `exportsFields` and `conditionNames` in `enhancedResolveOptions` to
  resolve packages that only declare `exports` (react-router-dom, shiki).
- knip production mode needs production entries marked with `!` in `knip.json`. Without them it
  reports false "unused dependencies".
- ESLint core `no-unused-vars` does not see JSX usage. `eslint-plugin-react`'s recommended config
  supplies `react/jsx-uses-vars`.
