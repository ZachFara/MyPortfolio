import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/theme-dark.css' // Design system — loaded last to own the cascade

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictMode><App /></StrictMode>)
} else {
  createRoot(rootElement).render(<StrictMode><App /></StrictMode>)
}
