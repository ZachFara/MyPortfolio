import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AIAgentMemory from '../../src/pages/BlogPosts/AIAgentMemory';

describe('AIAgentMemory Blog Post', () => {
  it('renders the blog post title correctly', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>,
    );

    expect(screen.getByText('Agentic Memory from Llama Index')).toBeInTheDocument();
  });

  it('renders the blog subtitle correctly', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>,
    );

    expect(screen.getByText('How To Turn Theory Into A Practical Stack')).toBeInTheDocument();
  });

  it('contains code examples with proper formatting', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>,
    );

    const codeElements = document.querySelectorAll('code');
    expect(codeElements.length).toBeGreaterThan(0);

    // Check for the main code cell
    const codeCells = document.querySelectorAll('.code-block');
    expect(codeCells.length).toBeGreaterThan(0);
  });

  it('has proper navigation elements', () => {
    render(
      <MemoryRouter>
        <AIAgentMemory />
      </MemoryRouter>,
    );

    const backButton = screen.getByText('← Back to All Posts');
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest('a')).toHaveAttribute('href', '/blog');
  });
});
