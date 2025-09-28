# Zachariah Farahany - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, blog posts, and professional experience in data science and AI development.

**Live Site**: [View Portfolio](https://zfara.github.io/MyPortfolio/)

## Architecture Overview

### Tech Stack
- **Frontend**: React 19.1.0 with modern hooks and functional components
- **Routing**: React Router 7.7.0 with HashRouter for GitHub Pages compatibility
- **Build Tool**: Vite 4.6.0 for fast development and optimized production builds
- **Styling**: Custom CSS with SCSS preprocessor, responsive design system
- **Testing**: Vitest with React Testing Library for component testing
- **SEO**: React Helmet for dynamic meta tags and page titles

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx       # Main layout wrapper with sidebar
│   ├── Sidebar.jsx      # Navigation sidebar with mobile hamburger
│   ├── BlogSidebar.jsx  # Blog-specific sidebar component
│   ├── HamburgerMenu.jsx # Mobile navigation toggle
│   └── CardTransitionStyles.jsx # Animation utilities
├── pages/               # Route-based page components
│   ├── Home.jsx         # Landing page with introduction
│   ├── Projects.jsx     # Project showcase with categories
│   ├── Blog.jsx         # Blog post listing
│   ├── Repositories.jsx # GitHub repositories display
│   ├── CurriculumVitae.jsx # Professional experience
│   └── BlogPosts/       # Individual blog post components
│       ├── AIAgentMemory.jsx
│       └── WhyDoWeNeedAgents.jsx
├── styles/              # Modular CSS organization
│   ├── main.css         # Base styles and typography
│   ├── blog.css         # Blog-specific styling
│   ├── mobile-*.css     # Responsive design breakpoints
│   └── sidebar-*.css    # Navigation and layout styles
└── utils/               # JavaScript utilities
    └── hamburgerMenu.js # Mobile menu interaction logic
```

### Design System

**Layout Philosophy**:
- **Sidebar Navigation**: Fixed sidebar with smooth transitions and mobile-responsive hamburger menu
- **Card-Based Design**: Project cards with hover animations and consistent spacing
- **Typography Hierarchy**: Clean typography with proper heading structure and readability
- **Responsive Breakpoints**: Mobile-first design with tablet and desktop optimizations

**Animation System**:
- Smooth transitions using cubic-bezier easing functions
- Card hover effects with elevation and shadow changes
- Sidebar slide animations for mobile navigation
- Page transition effects for improved user experience

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zfara/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with legacy peer deps if needed
   npm ci --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-optimized bundle |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run lint` | Run ESLint with zero warnings policy |

## Testing

The project uses **Vitest** as the testing framework with **React Testing Library** for component testing:

```
tests/
├── components/          # Component unit tests
│   ├── Layout.test.jsx
│   └── Sidebar.test.jsx
├── pages/               # Page component tests
│   ├── Blog.test.jsx
│   ├── Projects.test.jsx
│   └── AIAgentMemory.test.jsx
└── setup.js            # Test configuration
```

**Testing Strategy**:
- Component rendering validation
- User interaction testing
- Accessibility compliance checks
- Route navigation testing

## Styling Architecture

### CSS Organization
- **Base Layer**: Typography, reset, and foundational styles
- **Components**: Reusable component-specific styles
- **Layout**: Page layout and grid systems
- **Utilities**: Animation helpers and responsive utilities

### Mobile-First Responsive Design
- **Breakpoints**: Custom breakpoint system for consistent responsive behavior
- **Sidebar Behavior**: Desktop fixed sidebar transforms to mobile hamburger menu
- **Touch Interactions**: Optimized for mobile touch interactions and gestures

## Deployment

### GitHub Pages Deployment
The site is configured for GitHub Pages deployment with:
- **Base Path**: `/MyPortfolio/` for GitHub Pages subdirectory
- **HashRouter**: Ensures proper routing on static hosting
- **404 Handling**: Custom 404.html with SPA redirect logic
- **Asset Optimization**: Vite build optimization for production

### Deployment Process
```bash
npm run build      # Build production bundle
# Push to gh-pages branch or deploy dist/ folder
```

## Content Management

### Blog Posts
Blog posts are React components in `src/pages/BlogPosts/`:
- **SEO Optimized**: Each post includes proper meta tags via React Helmet
- **Code Highlighting**: Syntax highlighting for technical content
- **Responsive Images**: Optimized image loading and display
- **Navigation**: Breadcrumb navigation and "Back to Blog" links

### Project Showcase
Projects are organized by category (Robotics, Machine Learning, etc.):
- **Interactive Cards**: Hover effects and smooth transitions
- **External Links**: Direct links to GitHub repositories and live demos
- **Image Optimization**: WebP format images for faster loading

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build configuration and plugins |
| `vitest.config.js` | Test framework configuration |
| `eslint.config.js` | Code linting rules and standards |
| `package.json` | Dependencies and npm scripts |

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Please feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on design or functionality

## License

This project is open source and available under standard web development practices for portfolio sites.

---
