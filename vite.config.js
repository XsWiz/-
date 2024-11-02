import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入element plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 注册element plus
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1.配置elementplus采用sass样式配色系统
      resolvers:
        [
          ElementPlusResolver({ importStyle: "sass" }),

        ],
    }),
  ],
  resolve: {
    alias: {
      /* 这个是实际转化路径 */
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 2  自动导入定制化样式文件进行样式覆盖
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      }
    }
  },


})
