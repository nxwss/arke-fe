import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async (req, res) => {
  // Definisci qui le pagine statiche del tuo sito
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/giorgia-campus', changefreq: 'daily', priority: 0.7 }
  ];

  // Stream per generare la sitemap
  const stream = new SitemapStream({ hostname: `https://www.arkeconsulting.it` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  res.end(xmlString);
};