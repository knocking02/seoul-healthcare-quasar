import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'

// https://vitejs.dev/config/
export default ({ mode }) => {
   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
   return defineConfig({
      plugins: [
         vue({
            template: { transformAssetUrls },
         }),
         quasar(),
         VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/modules/i18n/locales/**'), // provide a path to the folder where you'll store translation data (see below)
         }),
         ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') }),
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
}
