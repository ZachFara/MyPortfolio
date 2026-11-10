import { describe, it, expect } from 'vitest';
import { render } from '../src/entry-server.jsx';

// Smoke test through the real prerender entry point (no mocks): every route the
// build prerenders must render to non-empty HTML inside the layout shell.
const ROUTES = [
  ['/', 'class="hero__title"'],
  ['/work', 'Selected Work'],
  ['/cv', 'Curriculum Vitae'],
  ['/blog', 'Beyond the Mean'],
  ['/blog/why-do-we-need-agents', 'Why Do We Need Agents?'],
  ['/blog/ai-agent-memory', 'Agentic Memory from Llama Index'],
];

describe('prerender smoke test', () => {
  it.each(ROUTES)('renders %s', (route, expected) => {
    const html = render(route);
    expect(html).toContain('class="shell"');
    expect(html).toContain(expected);
  });
});
