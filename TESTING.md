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

The project uses GitHub Actions for continuous integration and deployment:

1. **Test Stage**:
   - When you push to any branch or create a pull request to `master`
   - Tests are run automatically
   - Linting checks are performed

2. **Build Stage**:
   - Runs when tests pass on the `master` branch
   - The site is built and artifacts are stored

3. **Deploy Stage**:
   - Deploys the built artifacts to production
   - Only runs after successful build on `master` branch

## Adding New Tests

When adding new features, please include corresponding tests:

- For components: Add tests in `tests/components`
- For pages: Add tests in `tests/pages`

## Mocking

Use Vitest's mocking capabilities to mock external dependencies:

```js
import { vi } from 'vitest';

// Example mock
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));
```
