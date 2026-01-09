/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'NapasQR',
      fileName: 'main',
    },
    copyPublicDir: false,
  },
  test: {
    globals: true
  }
})
