const siteConfig = require('./site-config');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig?.siteUrl,
  generateRobotsTxt: true,
  autoLastmod: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
