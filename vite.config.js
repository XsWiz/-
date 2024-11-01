import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      /* 这个是实际转化路径 */
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
