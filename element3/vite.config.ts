import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variable.scss";@import "@/styles/mixin.scss";'
      }
    }
  }
})
