import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploys cleanly to Vercel as-is.
// For GitHub Pages, set base: '/your-repo-name/' below.
export default defineConfig({
  plugins: [react()],
  base: './',
})
