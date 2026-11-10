/**
 * Module boundary rules. These encode the "Module boundaries" section of DESIGN.md;
 * keep the two in sync. Do not remove or loosen a rule without a decision record.
 * @type {import('dependency-cruiser').IConfiguration}
 */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      comment: 'DESIGN.md boundary 1: no circular dependencies.',
      from: {},
      to: { circular: true },
    },
    {
      name: 'src-not-to-tests-or-scripts',
      severity: 'error',
      comment: 'DESIGN.md boundary 2: src/ never imports tests/ or scripts/.',
      from: { path: '^src/' },
      to: { path: '^(tests|scripts)/' },
    },
    {
      name: 'data-is-a-leaf',
      severity: 'error',
      comment: 'DESIGN.md boundary 3: src/data/ only imports other src/data/ files.',
      from: { path: '^src/data/' },
      to: { pathNot: '^src/data/' },
    },
    {
      name: 'components-not-to-pages-or-app',
      severity: 'error',
      comment: 'DESIGN.md boundary 4: components never import pages, App, or entries.',
      from: { path: '^src/components/' },
      to: { path: '^src/(pages/|App\\.jsx$|main\\.jsx$|entry-server\\.jsx$)' },
    },
    {
      name: 'pages-not-to-pages-or-app',
      severity: 'error',
      comment: 'DESIGN.md boundary 5: pages never import other pages, App, or entries.',
      from: { path: '^src/pages/' },
      to: { path: '^src/(pages/|App\\.jsx$|main\\.jsx$|entry-server\\.jsx$)' },
    },
    {
      name: 'only-entries-import-app',
      severity: 'error',
      comment: 'DESIGN.md boundary 6: App.jsx is imported only by entries and tests.',
      from: { pathNot: '^(src/main\\.jsx|src/entry-server\\.jsx|tests/)' },
      to: { path: '^src/App\\.jsx$' },
    },
    {
      name: 'scripts-only-to-src-data',
      severity: 'error',
      comment: 'DESIGN.md boundary 7: scripts/ may import from src/ only under src/data/.',
      from: { path: '^scripts/' },
      to: { path: '^src/', pathNot: '^src/data/' },
    },
    {
      name: 'src-not-to-dev-deps',
      severity: 'error',
      comment: 'DESIGN.md boundary 8: shipped code never imports a devDependency.',
      from: { path: '^src/' },
      to: { dependencyTypes: ['npm-dev'] },
    },
    {
      name: 'not-to-unresolvable',
      severity: 'error',
      comment: 'Every import must resolve.',
      from: {},
      to: { couldNotResolve: true },
    },
    {
      name: 'no-non-package-json',
      severity: 'error',
      comment: 'Every npm import must be declared in package.json.',
      from: {},
      to: { dependencyTypes: ['npm-no-pkg', 'npm-unknown'] },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: { path: '^(dist|dist-ssr|coverage|node_modules)/' },
    enhancedResolveOptions: {
      extensions: ['.js', '.jsx', '.mjs', '.json'],
      exportsFields: ['exports'],
      conditionNames: ['import', 'module', 'browser', 'default'],
      mainFields: ['module', 'main'],
    },
  },
};
