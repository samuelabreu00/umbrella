import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/robots.txt',
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
  build: {
    // Hook para gerar o sitemap.xml após o build
    rollupOptions: {
      plugins: [
        {
          name: 'generate-sitemap',
          writeBundle() {
            const sitemap = new SitemapStream({ hostname: 'https://www.umbrellamental.com' });
            const writeStream = fs.createWriteStream(path.resolve('dist', 'sitemap.xml'));

            // Gere o sitemap dinamicamente aqui, exemplo:
            sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
            sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });

            streamToPromise(sitemap.pipe(writeStream))
              .then(() => {
                console.log('Sitemap gerado com sucesso!');
              })
              .catch((err) => {
                console.log('Erro ao gerar sitemap:', err);
              });
          },
        },
      ],
    },
  },
});
