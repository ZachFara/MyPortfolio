import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AIAgentMemory from '../../src/pages/BlogPosts/AIAgentMemory';

// Mock Helmet to avoid errors
vi.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>
}));

// This test ensures that our styling for code elements is applied correctly
describe('Code Styling Test', () => {
  it('verifies presence of code elements', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>
    );
    
    // Get all inline code elements
    const inlineCodeElements = Array.from(document.querySelectorAll('p code, li code'));
    expect(inlineCodeElements.length).toBeGreaterThan(0);
  });
  
  it('verifies presence of code cells', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>
    );
    
    const codeCells = document.querySelectorAll('.code-cell');
    expect(codeCells.length).toBeGreaterThan(0);
    
    // This test simply verifies the presence of the elements
    // JSDOM doesn't fully support computed styles, so we can't test the styling directly
  });
});
