# 0004. One check command, and the tools in it

- Status: accepted
- Date: 2026-11-10

## Context

Local hooks and CI must never disagree about what "passing" means. We need a formatter, a strict
linter, a type checker, complexity limits, dead-code detection, module boundary rules, a layout
check, and tests.

## Decision

`npm run check` is the single gate. It runs these steps in order and stops at the first failure:

| Step           | Tool                                        | Why this tool                                                                                 |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `format:check` | Prettier 3                                  | The standard JS/CSS/MD formatter, with config in `.prettierrc.json`                           |
| `lint`         | ESLint 9 flat config, `--max-warnings=0`    | Already in use. Adds `eqeqeq`, `curly`, `prefer-const`, `no-console` (except scripts)         |
| complexity     | ESLint core rules                           | `complexity` 10, `max-depth` 3, `max-params` 3, `max-nested-callbacks` 3, `max-statements` 20 |
| `typecheck`    | TypeScript `tsc --noEmit`                   | See ADR 0003                                                                                  |
| `deadcode`     | knip, run twice: default and `--production` | Finds unused files, exports, and deps. Production mode flags code only tests reach            |
| `deps`         | dependency-cruiser                          | Declarative import rules that encode the boundaries in DESIGN.md                              |
| `layout`       | `scripts/check-layout.mjs`                  | Allow-list of root files and directories. Small, no dependencies, and tested                  |
| `test`         | Vitest 3 with Testing Library and jsdom     | Already in use. Vitest 3 is the first version whose types match Vite 7                        |

Vendored third-party files in `public/assets/` (Font Awesome CSS and fonts, plus legacy template
CSS/Sass) are excluded from formatting because we do not author them. That is the only exclusion.

ESLint also runs `eslint-plugin-react` (recommended plus jsx-runtime) and
`eslint-plugin-react-hooks`. `react/prop-types` is off because `tsc` checks props (ADR 0003).
`react/no-unescaped-entities` forbids only `>` and `}`, because apostrophes and quotes in prose are
content, not mistakes. Inline `eslint-disable` comments are turned off entirely
(`noInlineConfig`).

There is no file or function length limit. The blog posts and CV are long JSX made mostly of
prose, so line counts measure content, not complexity. Cyclomatic complexity, depth, parameter
count, and statement count measure logic. This is raised under Open Questions in PROGRESS.md.

## Consequences

- The pre-commit hook and the CI `check` job both run `npm run check` and nothing else.
- Making a threshold looser needs a new decision record. It is never done in a feature PR.
