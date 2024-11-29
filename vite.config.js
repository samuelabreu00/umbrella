import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/robots.txt',  // Já está correto
          dest: '', // Copia para a raiz da pasta dist
        },
        {
          src: 'dist/sitemap.xml',   // Caso o sitemap seja gerado
          dest: '', // Copia para a raiz da pasta dist
        },
      ],
    }),
    
  ],
  server: {
    historyApiFallback: true, // Adiciona o fallback para o React Router
  },
  resolve: {
    alias: {
      '@/': '/src',
    },
  },
});
