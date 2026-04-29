import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const rootDir = join(__dirname, '..')

const routes = [
  '/',
  '/projects',
  '/repositories',
  '/cv',
  '/blog',
  '/blog/why-do-we-need-agents',
  '/blog/ai-agent-memory',
]

async function prerender() {
  const entryPath = join(rootDir, 'dist-ssr', 'entry-server.js')
  const { render } = await import(entryPath)
  const template = readFileSync(join(rootDir, 'dist', 'index.html'), 'utf-8')

  for (const route of routes) {
    try {
      const appHtml = render(route)
      const html = template.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${appHtml}</div>`
      )

      let outputPath
      if (route === '/') {
        outputPath = join(rootDir, 'dist', 'index.html')
      } else {
        const dir = join(rootDir, 'dist', route)
        mkdirSync(dir, { recursive: true })
        outputPath = join(dir, 'index.html')
      }

      writeFileSync(outputPath, html)
      console.log(`✅ Prerendered ${route}`)
    } catch (err) {
      console.error(`❌ Failed to prerender ${route}:`, err.message)
    }
  }

  // Clean up the SSR build artefacts
  rmSync(join(rootDir, 'dist-ssr'), { recursive: true, force: true })
}

prerender().catch(err => {
  console.error('Prerender script failed:', err)
  process.exit(1)
})
