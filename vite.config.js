// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
  router: {
    base: '/',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/assets/styles'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@icons': resolve(__dirname, 'src/components/icons'),
      '@composables': resolve(__dirname, 'src/composables'),
    },
  },
})