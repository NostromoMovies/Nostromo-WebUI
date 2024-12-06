import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Adjust this path to point to your Nostromo.Server/webui directory
const serverWebuiPath = path.resolve(__dirname, '../NostromoServer/Nostromo.Server/webui')

export default defineConfig({
  plugins: [vue()],
  base: '/webui/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Add this line to resolve the '@' alias
    }
  },
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
  },
  build: {
    outDir: serverWebuiPath,
    emptyOutDir: true,
    assetsDir: 'assets'
  }
})
