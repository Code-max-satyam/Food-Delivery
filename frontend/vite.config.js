import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // Make asset paths relative
  build: {
    outDir: 'build',  // Change output folder from 'dist' to 'build'
  }
})
