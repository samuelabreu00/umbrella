import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

const sitemap = new SitemapStream({ hostname: 'https://www.umbrellamental.com' });

const writeStream = fs.createWriteStream(path.resolve('dist', 'sitemap.xml'));

streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log('Sitemap gerado com sucesso!');
}).catch((err) => {
  console.log('Erro ao gerar sitemap:', err);
});
