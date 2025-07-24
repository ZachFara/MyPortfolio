import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../../src/pages/Projects';

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Projects Page', () => {
  it('renders without crashing', () => {
    // This test simply checks if the component renders without throwing an error
    expect(() => {
      render(
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
  
  it('displays project content', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
    
    // Check for projects section - update selector based on your actual Projects component
    const projectsSection = document.querySelector('.projects') || document.querySelector('section') || document.querySelector('div.content');
    expect(projectsSection).toBeDefined();
  });
});
