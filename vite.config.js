import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  base: './',
  plugins: [react(), commonjs()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  preview: {
    port: 3000,
  },
});
