import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// Legacy HTML5UP override stylesheets removed — the design system in
// styles/theme-dark.css now owns the cascade.
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Repositories from './pages/Repositories'
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/repositories" element={<Repositories />} />
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
