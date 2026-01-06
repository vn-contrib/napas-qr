/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter',
    },
  },
  test: {
    globals: true
  }
})
