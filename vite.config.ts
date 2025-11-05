import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        // 全局导入 Less 文件（支持多个）
        additionalData: `
          @import "@/styles/variables.less";
          @import "@/styles/mixins.less";
        `,
        // 允许 Less 内联 JavaScript（可选，根据需求开启）
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
