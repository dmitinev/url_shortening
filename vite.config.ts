import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/_mixins.scss";',
  //     },
  //   },
  // },
  base: '/url_shortening/',
})
