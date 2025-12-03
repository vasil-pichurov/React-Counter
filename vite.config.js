import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Counter/', // MUST match your GitHub repo name
  plugins: [react()],
})
