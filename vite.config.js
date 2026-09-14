import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base. The site now answers on word-in-rijec.com, where a '/'
  // base would also work — but the project-pages URL
  // (xarlos89.github.io/word-and-rijec/) stays live as a fallback, and an
  // absolute '/asset' path 404s under that sub-path. Keeping the base
  // relative means one build serves both. See CLAUDE.md → Deployment.
  base: './',
})
