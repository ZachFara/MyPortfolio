import { Highlight, Prism } from 'prism-react-renderer';

/*
 * Syntax-highlighted code block used inside blog posts.
 *
 * Uses prism-react-renderer, which tokenizes at render time (works with the
 * SSR prerender — no flaky CDN <script> tags). We pass an empty theme so the
 * renderer only emits Prism token classNames; the actual colors come from the
 * `.blog-post .token.*` rules in theme-dark.css, keeping code on the site's
 * dark palette instead of shipping a light Prism theme.
 */
const emptyTheme = { plain: {}, styles: [] };

const CodeBlock = ({ code, language = 'python' }) => (
  <Highlight prism={Prism} code={code.trim()} language={language} theme={emptyTheme}>
    {({ className, tokens, getLineProps, getTokenProps }) => (
      <pre className={`code-block ${className}`}>
        <code>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <span key={i} {...lineProps} className={`code-line ${lineProps.className || ''}`}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            );
          })}
        </code>
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
