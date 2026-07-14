import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../src/components/Layout';

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

  it('renders nav, rail, and children', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(container.querySelector('.rail')).toBeInTheDocument();
    expect(container.querySelector('.topbar')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
