# 0003. Strict type checking via JSDoc and `tsc --checkJs`

- Status: accepted
- Date: 2026-11-10

## Context

The project needs a strict type checker. The code is about 2,000 lines of JS/JSX, and renaming
every file to `.ts`/`.tsx` would produce a large diff that adds no features.

## Decision

Run TypeScript (`tsc`, v7) as the type checker with `allowJs`, `checkJs`, `strict`,
`noUncheckedIndexedAccess`, `noImplicitReturns`, `noUnusedLocals`, and `noUnusedParameters`
turned on. It covers `src/`, `tests/`, `scripts/`, and the root `*.config.js` files. Types are
written as JSDoc (`@typedef`, `@param`, `@type`). Untyped JSON gets one narrowing cast where it is
imported.

`@ts-ignore`, `@ts-expect-error`, and `@ts-nocheck` are not allowed (see AGENTS.md rules).

## Consequences

- The code runs as written, with no TypeScript build step. Vite and Node run the JS directly.
- JSDoc prop types are wordier than TSX. If that becomes painful, migrating to `.tsx` is a
  separate decision with its own record.
