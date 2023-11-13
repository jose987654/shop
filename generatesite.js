// generateSitemap.js
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const baseUrl = 'http://23.88.55.176:5173/'; // Replace with your actual website URL
const pages = ['/', '/about', '/contact']; // Add other pages as needed

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
    </url>
  `,
    )
    .join('')}
</urlset>
`;

const sitemapPath = resolve('./public/sitemap.xml');
writeFileSync(sitemapPath, sitemap);

console.log(`Sitemap generated at ${sitemapPath}`);
