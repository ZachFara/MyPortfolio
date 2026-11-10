# Testing Guide

This project uses Vitest with React Testing Library for unit and integration testing. Our testing approach focuses on ensuring core components and pages render correctly.

## Running Tests

- Run all tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Run tests with coverage report: `npm run test:coverage`

## Test Structure

Tests are organized in the `tests` directory:

- `tests/components`: Tests for React components
- `tests/pages`: Tests for page components

## Testing Philosophy

Our tests focus on:

1. **Smoke tests**: Ensuring components render without crashing
2. **Basic functionality**: Verifying that key elements are present
3. **Component interaction**: Testing that components work together properly

We intentionally avoid testing:

- Styling and CSS details
- Implementation details that might change frequently
- Third-party library functionality

## CI/CD Pipeline

On every PR and on every push to `master`, the `check` job runs `npm run check`, which is the same
command the pre-commit hook runs. PRs also run `commitlint` over their commits. After a push to
`master` passes `check`, the site is built, prerendered, and deployed to GitHub Pages. See
`docs/decisions/0005-git-workflow-ci.md`.

## Adding New Tests

When adding new features, please include corresponding tests:

- For components: Add tests in `tests/components`
- For pages: Add tests in `tests/pages`
- For scripts: Add tests in `tests/scripts` (export pure functions; guard the CLI entry)

## Mocking

Test against the real thing. Mock only what cannot run locally, such as the GitHub API that the
build-time sync script calls. Pages render with real `react-helmet` and React Router (wrap them
in `MemoryRouter`), and `tests/smoke.test.jsx` renders every route through the real SSR entry.

Run `npm run check` before committing. It is the same gate that CI and the pre-commit hook run.
