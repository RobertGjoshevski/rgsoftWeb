import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spaFallbackPlugin } from './vite.spa-fallback.js'

export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  base: '/',
})


