import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//vite.dev/config
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8112',
        changeOrigin: true
      },
      '/swagger': {
        target: 'http://localhost:8112',
        changeOrigin: true
      }
    }
  }
})