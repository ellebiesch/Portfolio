import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_TITLE__: JSON.stringify('elvina'),
  },
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5050,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
