import fs from 'fs';
import path from 'path';

const domain = 'https://pujapandit.tech';
const routes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'services', changefreq: 'weekly', priority: '0.8' },
  { path: 'book', changefreq: 'weekly', priority: '0.9' },
  { path: 'about', changefreq: 'monthly', priority: '0.8' },
  { path: 'gallery', changefreq: 'weekly', priority: '0.7' },
  { path: 'faq', changefreq: 'weekly', priority: '0.7' },
  { path: 'blog', changefreq: 'weekly', priority: '0.8' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' },
  { path: 'privacy', changefreq: 'monthly', priority: '0.5' },
  { path: 'terms', changefreq: 'monthly', priority: '0.5' }
];

const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

routes.forEach(route => {
  const fullUrl = route.path ? `${domain}/${route.path}` : `${domain}/`;
  sitemap += `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
});

sitemap += `\n</urlset>\n`;

// Write to public/sitemap.xml
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('Successfully generated public/sitemap.xml!');

// Write to dist/sitemap.xml if dist folder exists
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log('Successfully generated dist/sitemap.xml!');
}
