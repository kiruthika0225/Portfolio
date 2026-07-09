import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- Changed from '@vitejs/react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // <--- Ensures paths point to your GitHub repo name
})
