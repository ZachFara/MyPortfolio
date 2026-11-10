import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

const reactRecommended = react.configs.flat.recommended;
const reactJsxRuntime = react.configs.flat['jsx-runtime'];
if (!reactRecommended || !reactJsxRuntime) {
  throw new Error('eslint-plugin-react no longer ships the expected flat configs');
}

// Strictness and complexity limits are recorded in docs/decisions/0004-check-pipeline.md.
// Do not loosen any rule or threshold here without a new decision record.
export default defineConfig([
  {
    ignores: ['dist/**', 'dist-ssr/**', 'coverage/**', 'public/**'],
  },

  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      noInlineConfig: true,
    },
    rules: {
      'no-unused-vars': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'error',
      'no-implicit-coercion': 'error',
      'no-shadow': 'error',
      'no-param-reassign': 'error',

      // Complexity limits
      complexity: ['error', 10],
      'max-depth': ['error', 3],
      'max-params': ['error', 3],
      'max-nested-callbacks': ['error', 3],
      'max-statements': ['error', 20],
    },
  },

  // React code (app + tests)
  {
    files: ['src/**/*.{js,jsx}', 'tests/**/*.{js,jsx}'],
    extends: [reactRecommended, reactJsxRuntime, reactHooks.configs['recommended-latest']],
    settings: { react: { version: 'detect' } },
    rules: {
      // Props are type-checked through JSDoc by tsc (ADR 0003), not runtime propTypes.
      'react/prop-types': 'off',
      // Prose-heavy JSX: apostrophes and quotes are content. Still forbid the characters
      // that signal a real JSX mistake.
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
  },

  // Browser code
  {
    files: ['src/**/*.{js,jsx}'],
    extends: [reactRefresh.configs.vite],
    languageOptions: { globals: globals.browser },
  },

  // Tests run in jsdom under Vitest
  {
    files: ['tests/**/*.{js,jsx,mjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // Build/tooling scripts and root config files run in Node and may log
  {
    files: ['scripts/**/*.mjs', '*.config.js'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['scripts/**/*.mjs'],
    rules: { 'no-console': 'off' },
  },
]);
