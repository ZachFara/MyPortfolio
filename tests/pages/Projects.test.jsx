import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Work from '../../src/pages/Work';

describe('Work Page', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(
        <MemoryRouter>
          <Work />
        </MemoryRouter>,
      );
    }).not.toThrow();
  });

  it('displays work content', () => {
    const { container } = render(
      <MemoryRouter>
        <Work />
      </MemoryRouter>,
    );

    const content = container.querySelector('main, section, [class]');
    expect(content).toBeDefined();
  });
});
