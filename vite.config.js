import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages deployment - use your actual repository name
  // or '/' if you're using a custom domain
  base: '/MyPortfolio/',
})
