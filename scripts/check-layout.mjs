// Layout check: rejects any tracked or untracked (non-ignored) file outside the allowed layout.
// The allow-list mirrors the "Directory layout" section of AGENTS.md; change both together.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const ROOT_FILES = new Set([
  '.dependency-cruiser.cjs',
  '.gitignore',
  '.nvmrc',
  '.prettierignore',
  '.prettierrc.json',
  'AGENTS.md',
  'CLAUDE.md',
  'DESIGN.md',
  'PROGRESS.md',
  'README.md',
  'TESTING.md',
  'commitlint.config.js',
  'eslint.config.js',
  'index.html',
  'knip.json',
  'package-lock.json',
  'package.json',
  'tsconfig.json',
  'vite.config.js',
  'vitest.config.js',
]);

/** Each allowed path prefix, with the pattern its files must match. */
export const DIRECTORY_RULES = [
  { prefix: '.github/', pattern: /^\.github\/(workflows\/[\w-]+\.yml|pull_request_template\.md)$/ },
  { prefix: '.husky/', pattern: /^\.husky\/(pre-commit|commit-msg)$/ },
  { prefix: 'docs/', pattern: /^docs\/decisions\/\d{4}-[a-z0-9-]+\.md$/ },
  { prefix: 'public/', pattern: /^public\/.+/ },
  { prefix: 'scripts/', pattern: /^scripts\/[\w-]+\.mjs$/ },
  {
    prefix: 'src/',
    pattern:
      /^src\/((App\.jsx|App\.css|main\.jsx|entry-server\.jsx|index\.css)|(components|pages|data|styles|assets)\/.+)$/,
  },
  { prefix: 'tests/', pattern: /^tests\/.+\.(test\.jsx?|test\.mjs)$|^tests\/setup\.js$/ },
];

/**
 * Returns the paths that are not allowed by the layout rules.
 * @param {string[]} paths repo-relative POSIX paths
 * @returns {string[]}
 */
export function findLayoutViolations(paths) {
  return paths.filter((path) => {
    if (!path.includes('/')) {
      return !ROOT_FILES.has(path);
    }
    const rule = DIRECTORY_RULES.find((r) => path.startsWith(r.prefix));
    return !rule || !rule.pattern.test(path);
  });
}

function listRepoFiles() {
  const output = execFileSync(
    'git',
    ['ls-files', '--cached', '--others', '--exclude-standard', '--deduplicate'],
    { encoding: 'utf-8' },
  );
  const deleted = new Set(
    execFileSync('git', ['ls-files', '--deleted'], { encoding: 'utf-8' }).split('\n'),
  );
  return output.split('\n').filter((p) => p !== '' && !deleted.has(p));
}

function main() {
  const violations = findLayoutViolations(listRepoFiles());
  if (violations.length > 0) {
    console.error('Layout check failed. These files are outside the allowed layout (AGENTS.md):');
    for (const v of violations) {
      console.error(`  ${v}`);
    }
    process.exit(1);
  }
  console.log('Layout check passed.');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
