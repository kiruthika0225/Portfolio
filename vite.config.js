import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/index.html',
  plugins: [react()],
  // ... rest of file
})
