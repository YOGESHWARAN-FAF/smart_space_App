/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  resolve: {
    alias: {
      // FIX: Force Vite to use working plugin file
      '@capacitor/geolocation': '@capacitor/geolocation/dist/plugin.js',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
