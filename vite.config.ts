import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Code splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion': ['motion'],
            'ui': ['lucide-react'],
          },
        },
      },
      // Minification and optimization
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Source maps for production debugging
      sourcemap: false,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
