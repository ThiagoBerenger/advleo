import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Adicione todas as suas rotas aqui
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://advleo.com.br' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  // Usar uma promise diretamente para aguardar o final do stream
  await new Promise((resolve, reject) => {
    sitemap.pipe(writeStream)
      .on('finish', resolve)  // Quando terminar o stream, resolver a promise
      .on('error', reject);   // Se ocorrer um erro, rejeitar a promise

    // Escrever os links no stream
    links.forEach(link => sitemap.write(link));

    sitemap.end();
  });

  console.log('Sitemap gerado com sucesso!');
}

generateSitemap();