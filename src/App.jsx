import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
// Legacy HTML5UP override stylesheets removed — the design system in
// styles/theme-dark.css now owns the cascade.
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import Work from './pages/Work'
import CurriculumVitae from './pages/CurriculumVitae'
import Blog from './pages/Blog'
import AIAgentMemory from './pages/BlogPosts/AIAgentMemory'
import WhyDoWeNeedAgents from './pages/BlogPosts/WhyDoWeNeedAgents'

// AppContent is the routes + layout without the router — exported for SSR prerendering
export function AppContent() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/* Projects + Repositories were merged into Work — keep old links alive */}
        <Route path="/projects" element={<Navigate to="/work" replace />} />
        <Route path="/repositories" element={<Navigate to="/work" replace />} />
        <Route path="/cv" element={<CurriculumVitae />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/why-do-we-need-agents" element={<WhyDoWeNeedAgents />} />
        <Route path="/blog/ai-agent-memory" element={<AIAgentMemory />} />
        {/* Add a catch-all redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <Router basename="/MyPortfolio">
      <AppContent />
    </Router>
  )
}

export default App
