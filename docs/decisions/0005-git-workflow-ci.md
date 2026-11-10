# 0005. Git workflow, hooks, and CI

- Status: accepted
- Date: 2026-11-10

## Context

Every change should be reviewed and checked before it reaches `master`, which is the branch GitHub
Pages deploys from.

## Decision

- **Branches:** `feat/`, `fix/`, `chore/`, or `docs/` plus a short name. Changes merge into
  `master` only through PRs.
- **Hooks (husky 9):** `pre-commit` runs `npm run check`, and `commit-msg` runs commitlint with
  `@commitlint/config-conventional`. Running `npm install` installs the hooks through the
  `prepare` script.
- **CI (`.github/workflows/ci-cd.yml`):** On pull requests and pushes to `master`, the `check` job
  runs `npm run check`. On pull requests, the `commitlint` job lints every commit in the PR range.
  After `check` passes on a push to `master`, the build and deploy jobs run.
- **Branch protection on `master`:** The `check` and `commitlint` status checks are required, the
  branch must be up to date before merge, changes must come in through a PR (no approving reviews
  required, because this is a solo repo), force pushes and deletion are blocked, and the rules
  apply to admins too.
- **PR template:** `.github/pull_request_template.md` has the sections What changed, Why, and How
  it was tested.

## Consequences

- Nobody can push directly to `master`, the owner included.
- `git commit --no-verify` is banned by the AGENTS.md rules, and CI catches it anyway.
