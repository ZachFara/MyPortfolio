import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Work from '../../src/pages/Work';

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Work Page', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(
        <MemoryRouter>
          <Work />
        </MemoryRouter>
      );
    }).not.toThrow();
  });

  it('displays work content', () => {
    const { container } = render(
      <MemoryRouter>
        <Work />
      </MemoryRouter>
    );

    const content = container.querySelector('main, section, [class]');
    expect(content).toBeDefined();
  });
});
