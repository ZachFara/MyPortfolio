import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import './styles/transitions.css' // Import our custom transitions
import './styles/overrides.css' // Import overrides to fix red outlines
import './styles/blog.css' // Import blog styles
import './styles/sidebar-components.css' // Import our clean sidebar styling
import './styles/unified-card-animations.css' // Import unified card animations
import './styles/sidebar-fix.css' // Fix for sidebar disappearing when scrolling
// Card animations CSS is loaded directly in index.html
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Repositories from './pages/Repositories'
import CurriculumVitae from './pages/CurriculumVitae'
import Blog from './pages/Blog'
import AIAgentMemory from './pages/BlogPosts/AIAgentMemory'
import WhyDoWeNeedAgents from './pages/BlogPosts/WhyDoWeNeedAgents'

function App() {
  useEffect(() => {
    // Load scripts from public folder
    const loadScript = (src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
      return script
    }

    // Load scripts in sequence to respect dependencies
    const scripts = [
      './assets/js/jquery.min.js',
      './assets/js/browser.min.js',
      './assets/js/breakpoints.min.js',
      './assets/js/util.js',
      './assets/js/main.js'
      // Card animations are now loaded directly in index.html
    ]
    
    let loadedScripts = []
    
    scripts.forEach(src => {
      loadedScripts.push(loadScript(src))
    })
    
    // Cleanup function to remove scripts when component unmounts
    return () => {
      loadedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return (
    <Router>
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
    </Router>
  )
}

export default App
