import { describe, it, expect } from 'vitest';
import { findLayoutViolations } from '../../scripts/check-layout.mjs';

describe('findLayoutViolations', () => {
  it('accepts files in the allowed layout', () => {
    expect(
      findLayoutViolations([
        'AGENTS.md',
        'package.json',
        'src/App.jsx',
        'src/pages/BlogPosts/AIAgentMemory.jsx',
        'src/data/generated/github-repo-updates.json',
        'tests/pages/Home.test.jsx',
        'tests/scripts/check-layout.test.mjs',
        'scripts/prerender.mjs',
        'docs/decisions/0001-record-decisions.md',
        '.github/workflows/ci-cd.yml',
        '.github/pull_request_template.md',
        '.husky/pre-commit',
        'public/images/memory.png',
      ]),
    ).toEqual([]);
  });

  it('rejects unknown root files and directories', () => {
    expect(findLayoutViolations(['notes.txt', 'tmp/try.js', '.DS_Store'])).toEqual([
      'notes.txt',
      'tmp/try.js',
      '.DS_Store',
    ]);
  });

  it('rejects files in an allowed directory that break its pattern', () => {
    expect(
      findLayoutViolations([
        'src/utils/helper.js',
        'docs/notes.md',
        'docs/decisions/adr-one.md',
        'scripts/experiment.py',
        'tests/helpers.js',
      ]),
    ).toEqual([
      'src/utils/helper.js',
      'docs/notes.md',
      'docs/decisions/adr-one.md',
      'scripts/experiment.py',
      'tests/helpers.js',
    ]);
  });
});
