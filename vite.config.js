import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,  // Adiciona o fallback para o React Router
  },
  resolve: {
    alias: {
      '@/': '/src',
    },
  },
});
