import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/main.css'
import App from './App.jsx'
import './styles/theme-dark.css' // Dark technical redesign — loaded last to win the cascade

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictMode><App /></StrictMode>)
} else {
  createRoot(rootElement).render(<StrictMode><App /></StrictMode>)
}
