const siteConfig = require('./site-config');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
