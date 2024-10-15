import fs from 'fs';
import path from 'path';
import { url } from '../../site-config';

const ignorePaths = ['api/*', 'sign-in'];

function getPages(dir, baseUrl, pages = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Check if the current file path should be ignored
    if (
      ignorePaths.some(ignorePath => {
        // Check if the ignorePath is a wildcard
        if (ignorePath.endsWith('/*')) {
          const basePath = path.join(
            process.cwd(),
            'src',
            'app',
            ignorePath.slice(0, -2),
          ); // Remove '/*' and join with base path
          return filePath.startsWith(basePath);
        }
        return filePath.includes(ignorePath);
      })
    ) {
      return; // Skip this file or directory
    }

    if (stat.isDirectory()) {
      getPages(filePath, baseUrl, pages);
    } else if (file === 'page.js' || file === 'route.js') {
      let relativePath = path.relative('src/app', dir);
      let url = path.join(baseUrl, relativePath).replace(/\\/g, '/');

      // Remove 'page.js' or 'route.js' from the URL
      url = url.replace(/\/(page|route)\.js$/, '');

      // Remove directories with parentheses from the URL
      url = url.replace(/\([^()]+\)\//g, '');

      // Avoid including URLs with [slug] in the sitemap
      if (!/\[.*?\]/.test(url)) {
        // Avoid duplicate entries for index pages
        if (!pages.some(page => page.url === url)) {
          pages.push({
            url: url,
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      }
    }
  });

  return pages;
}

export default async function sitemap() {
  const baseUrl = url.replace('https:/', 'https://');

  // Get all pages from the app directory
  const pages = getPages(path.join(process.cwd(), 'src', 'app'), baseUrl);

  // Ensure all URLs in pages have the correct https:// format
  pages.forEach(page => {
    page.url = page.url.replace('https:/', 'https://');
  });

  return pages;
}
