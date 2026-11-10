import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App.jsx';

// Routes are defined relative to the basename; prepend it so StaticRouter matches correctly
/**
 * @param {string} route path relative to the basename, e.g. '/work'
 * @returns {string}
 */
export function render(route) {
  const location = `/MyPortfolio${route === '/' ? '/' : route}`;
  return renderToString(
    <StaticRouter location={location} basename="/MyPortfolio">
      <AppContent />
    </StaticRouter>,
  );
}
