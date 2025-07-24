import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../src/components/Layout';

// Mock child components to simplify testing
vi.mock('../../src/components/Sidebar', () => ({
  default: () => <div data-testid="sidebar-mock">Sidebar Mock</div>
}));

vi.mock('../../src/components/Topbar', () => ({
  default: () => <div data-testid="topbar-mock">Topbar Mock</div>
}));

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

describe('Layout Component', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(
        <MemoryRouter>
          <Layout>
            <div>Test Content</div>
          </Layout>
        </MemoryRouter>
      );
    }).not.toThrow();
  });
  
  it('renders child components', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </MemoryRouter>
    );
    
    // Check if mocked components are rendered
    expect(getByTestId('sidebar-mock')).toBeInTheDocument();
    expect(getByTestId('topbar-mock')).toBeInTheDocument();
    
    // Check if children are rendered
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
