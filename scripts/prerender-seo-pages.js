import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const baseHtmlFile = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlFile)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlFile, 'utf8');

const pages = [
  {
    slug: 'pandit-ji-hyderabad',
    title: 'Pandit Ji in Hyderabad | North Indian Hindu Priest',
    description: 'Looking for a North Indian Pandit Ji in Hyderabad? Book Pandit Dheeraj Shastri for Puja, Havan, Griha Pravesh, Satyanarayan Puja and Hindu ceremonies.',
    keywords: 'pandit ji in hyderabad, pandit for puja in hyderabad, hindu priest in hyderabad',
    h1: 'North Indian Pandit Ji in Hyderabad',
    canonical: 'https://pujapandit.tech/pandit-ji-hyderabad/'
  },
  {
    slug: 'griha-pravesh-puja-hyderabad',
    title: 'Griha Pravesh Pandit in Hyderabad | Housewarming Puja',
    description: 'Book a North Indian Pandit for Griha Pravesh Puja in Hyderabad. Traditional housewarming rituals at home. Call to check availability and book.',
    keywords: 'griha pravesh pandit hyderabad, housewarming puja hyderabad, pandit for griha pravesh hyderabad',
    h1: 'Griha Pravesh Puja in Hyderabad',
    canonical: 'https://pujapandit.tech/griha-pravesh-puja-hyderabad/'
  },
  {
    slug: 'satyanarayan-puja-hyderabad',
    title: 'Satyanarayan Puja Pandit in Hyderabad | Book Online',
    description: 'Book a North Indian Pandit Ji for Satyanarayan Puja & Katha in Hyderabad. Traditional home puja rituals. Call or WhatsApp to check availability.',
    keywords: 'satyanarayan puja pandit hyderabad, satyanarayan katha hyderabad, pandit for satyanarayan puja in hyderabad',
    h1: 'Satyanarayan Puja & Katha in Hyderabad',
    canonical: 'https://pujapandit.tech/satyanarayan-puja-hyderabad/'
  },
  {
    slug: 'havan-pandit-hyderabad',
    title: 'Havan Pandit in Hyderabad | Vedic Yagya Services',
    description: 'Book a North Indian Pandit for Havan and Yagya in Hyderabad. Authentic Vedic rituals for home and business. Call to check availability.',
    keywords: 'havan pandit hyderabad, yagya pandit hyderabad, vedic havan in hyderabad',
    h1: 'Havan & Yagya Rituals in Hyderabad',
    canonical: 'https://pujapandit.tech/havan-pandit-hyderabad/'
  },
  {
    slug: 'north-indian-wedding-pandit-hyderabad',
    title: 'North Indian Wedding Pandit in Hyderabad | Marriage Rituals',
    description: 'Experienced North Indian Pandit Ji for Hindu wedding ceremonies in Hyderabad. Traditional vivah rituals and phere. Call to check dates.',
    keywords: 'north indian wedding pandit hyderabad, marriage pandit hyderabad, wedding priest in hyderabad',
    h1: 'North Indian Wedding Pandit in Hyderabad',
    canonical: 'https://pujapandit.tech/north-indian-wedding-pandit-hyderabad/'
  }
];

pages.forEach(page => {
  let html = baseHtml;
  
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);
  
  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${page.description}" />`);
  
  // Replace Meta Keywords
  html = html.replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${page.keywords}" />`);
  
  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${page.canonical}" />`);
  
  // Replace OG Title & Description & URL
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${page.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${page.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${page.canonical}" />`);
  
  // Replace Twitter Title & Description
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${page.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${page.description}" />`);
  
  // Replace H1 in Root Content
  html = html.replace(/<h1>.*?<\/h1>/s, `<h1>${page.h1}</h1>`);

  const pageDir = path.join(distDir, page.slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf8');
  console.log(`Successfully prerendered static page: dist/${page.slug}/index.html`);
});
