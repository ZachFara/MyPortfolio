import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Global ignores
  {
    ignores: [
      'dist/**',
      'public/assets/js/*.min.js',
      'public/assets/js/jquery.min.js',
      'public/assets/js/util.js',
      'public/assets/js/main.js',
      'public/assets/js/browser.min.js',
      'public/assets/js/breakpoints.min.js',
      'public/assets/js/card-animations.js'
    ]
  },
  
  // Rules for test files
  {
    files: ['tests/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        global: 'writable',
      }
    }
  },
  
  // Default configuration for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        define: 'readonly',
        module: 'readonly',
        jQuery: 'readonly',
        browser: 'readonly',
        breakpoints: 'readonly',
        $: 'readonly',
        $a: 'readonly',
        b: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-undef': 'error',
      'no-useless-escape': 'warn',
      'no-cond-assign': 'warn',
      'no-control-regex': 'warn',
      'no-constant-binary-expression': 'warn',
      'no-prototype-builtins': 'warn',
      'no-empty': 'warn',
      'no-self-assign': 'warn',
      'valid-typeof': 'warn'
    },
  },
])
