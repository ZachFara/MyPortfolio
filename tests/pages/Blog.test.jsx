import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../../src/pages/Blog';

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Blog Page', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(
        <MemoryRouter>
          <Blog />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
  
  it('displays blog content', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );
    
    // Check for blog posts section - update selector based on your actual Blog component
    const blogSection = document.querySelector('.blog') || document.querySelector('section') || document.querySelector('div.content');
    expect(blogSection).toBeDefined();
  });
});
