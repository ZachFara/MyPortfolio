import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import python from 'shiki/langs/python.mjs';
import shikiTheme from './shikiTheme';

/*
 * Syntax-highlighted code block used inside blog posts.
 *
 * Editor-grade highlighting via Shiki (TextMate grammars, same as VS Code)
 * themed to the site palette (see shikiTheme.js). Built synchronously with the
 * JS RegExp engine so it renders identically during SSR/prerender and client
 * hydration — no async, no WASM. Shiki emits inline-styled spans, so colors
 * come from the theme, not from CSS token classes.
 */
const highlighter = createHighlighterCoreSync({
  themes: [shikiTheme],
  langs: [python],
  engine: createJavaScriptRegexEngine({ forgiving: true }),
});

const CodeBlock = ({ code, language = 'python' }) => {
  const html = highlighter.codeToHtml(code.trim(), {
    lang: language,
    theme: 'zf-editorial',
  });
  return (
    <div
      className="code-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default CodeBlock;
