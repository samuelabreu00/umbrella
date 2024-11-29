import { SitemapStream } from 'sitemap';
import fs from 'fs';
import path from 'path';

// Criação do Sitemap
const sitemap = new SitemapStream({ hostname: 'https://www.umbrellamental.com' });

// Caminho onde o sitemap será salvo
const writeStream = fs.createWriteStream(path.resolve('dist', 'sitemap.xml'));

// Adicionando URLs ao sitemap
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/sobre', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/nosprocure', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/serviçosempresariais', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/club', changefreq: 'weekly', priority: 0.8 });

// Finalizando o sitemap
sitemap.end();

// Usando o pipe para passar o fluxo de dados para o writeStream
sitemap.pipe(writeStream).on('finish', () => {
  console.log('Sitemap gerado com sucesso!');
}).on('error', (err) => {
  console.error('Erro ao gerar sitemap:', err);
});
