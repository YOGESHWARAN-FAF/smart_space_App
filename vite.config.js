import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@capacitor/geolocation': '@capacitor/geolocation/dist/plugin.cjs.js',
    },
  },
})
