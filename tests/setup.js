import '@testing-library/jest-dom';

// Mock IntersectionObserver which might be used for lazy loading components
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};
