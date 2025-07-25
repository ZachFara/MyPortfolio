import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../../src/components/Sidebar';

// Mock Helmet to avoid errors if needed
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    // This test simply verifies that the component renders without throwing an error
    expect(() => {
      render(
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      );
    }).not.toThrow();
  });
});
