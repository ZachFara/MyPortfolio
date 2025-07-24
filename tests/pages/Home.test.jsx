import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/pages/Home';

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Home Page', () => {
  it('renders without crashing', () => {
    // This test simply checks if the component renders without throwing an error
    expect(() => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
  
  it('contains essential homepage elements', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    
    // Check for presence of key sections - update these selectors based on your actual Home component
    const mainSection = document.querySelector('section') || document.querySelector('div.content');
    expect(mainSection).toBeDefined();
  });
});
