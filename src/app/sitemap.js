import fs from 'fs';
import path from 'path';
import { url } from '../../site-config';

const ignorePaths = ['api/*', 'sign-in'];

/**
 * Checks if a given file path should be ignored based on the ignorePaths array.
 * @param {string} filePath - The file path to check.
 * @returns {boolean} - True if the file path should be ignored, false otherwise.
 */
const isIgnored = filePath => {
  return ignorePaths.some(ignorePath => {
    if (ignorePath.endsWith('/*')) {
      const basePath = path.join(process.cwd(), 'src', 'app', ignorePath.slice(0, -2));
      return filePath.startsWith(basePath);
    }
    return filePath.includes(ignorePath);
  });
};

/**
 * Recursively retrieves all pages from the specified directory.
 * @param {string} dir - The directory to search for pages.
 * @param {string} baseUrl - The base URL for the sitemap.
 * @param {Array} pages - The accumulated list of pages.
 * @returns {Array} - The list of pages found in the directory.
 */
const getPages = (dir, baseUrl, pages = []) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Check if the current file path should be ignored
    if (isIgnored(filePath)) return;

    if (stat.isDirectory()) {
      getPages(filePath, baseUrl, pages);
    } else if (['page.js', 'route.js'].includes(file)) {
      const relativePath = path.relative('src/app', dir);
      let pageUrl = path
        .join(baseUrl, relativePath)
        .replace(/\\/g, '/')
        .replace(/\/(page|route)\.js$/, '')
        .replace(/\([^()]+\)\//g, ''); // Remove directories with parentheses from the URL

      // Avoid including URLs with [slug] in the sitemap and prevent duplicates
      if (!/\[.*?\]/.test(pageUrl) && !pages.some(page => page.url === pageUrl)) {
        pages.push({
          url: pageUrl,
          changeFrequency: 'weekly',
          priority: 0.7,
        });
      }
    }
  });

  return pages;
};

/**
 * Generates the sitemap by retrieving all pages and formatting their URLs.
 * @returns {Promise<Array>} - A promise that resolves to the list of pages for the sitemap.
 */
const sitemap = async () => {
  const baseUrl = url.replace('https:/', 'https://');
  const pages = getPages(path.join(process.cwd(), 'src', 'app'), baseUrl);

  // Ensure all URLs in pages have the correct https:// format
  return pages.map(page => ({
    ...page,
    url: page.url.replace('https:/', 'https://'),
  }));
};

export default sitemap;
