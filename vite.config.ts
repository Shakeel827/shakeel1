import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react', 'jspdf'], // Add any other non-ESM dependencies here
  },
  build: {
    rollupOptions: {
      external: [], // Do NOT externalize anything
    },
    commonjsOptions: {
      include: [/node_modules/], // Force all node_modules to be bundled as CommonJS if needed
    },
  },
});
