import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: 'pages',
    rollupOptions: {
      input: {
        main: 'index.html',
        qr: 'qr.html'
      }
    }
  }
})
