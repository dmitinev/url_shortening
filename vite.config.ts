import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_params.scss";',
      },
    },
  },
  base: '/url_shortening/',
});
