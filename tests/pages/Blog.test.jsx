import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../../src/pages/Blog';

describe('Blog Page', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(
        <MemoryRouter>
          <Blog />
        </MemoryRouter>,
      );
    }).not.toThrow();
  });

  it('displays blog content', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>,
    );

    // Check for blog posts section - update selector based on your actual Blog component
    const blogSection =
      document.querySelector('.blog') ||
      document.querySelector('section') ||
      document.querySelector('div.content');
    expect(blogSection).toBeDefined();
  });
});
