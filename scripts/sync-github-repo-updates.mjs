import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import WORK from '../src/data/workItems.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = join(__dirname, '..');
const outputPath = join(rootDir, 'src', 'data', 'generated', 'github-repo-updates.json');

const apiHeaders = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'myportfolio-build-sync',
};

if (process.env.GITHUB_TOKEN) {
  apiHeaders.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const existingData = JSON.parse(readFileSync(outputPath, 'utf-8'));
const repos = [...new Set(WORK.map((item) => item.repo).filter(Boolean))];
const nextData = { ...existingData };

for (const repo of repos) {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: apiHeaders,
  });

  if (!response.ok) {
    console.error(`Failed to fetch ${repo}: ${response.status} ${response.statusText}`);
    continue;
  }

  const payload = await response.json();
  nextData[repo] = {
    updatedAt: payload.pushed_at ?? payload.updated_at ?? null,
  };
}

writeFileSync(outputPath, `${JSON.stringify(nextData, null, 2)}\n`);
console.log(`Synced GitHub last-updated metadata for ${repos.length} repos.`);
