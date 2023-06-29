import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue({
         template: { transformAssetUrls },
      }),
      quasar(),
   ],
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
   server: {
      host: '0.0.0.0',
      port: '8080',
      proxy: {
         // API 프록시 설정
         '/api': {
            target: 'http://localhost',
            changeOrigin: true,
            logLevel: 'debug',
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
         },
      },
   },
})
