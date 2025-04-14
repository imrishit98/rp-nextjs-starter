/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ion8.net',
  generateRobotsTxt: true,
  changefreq: false,
  priority: false,
  trailingSlash: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',

        // disallow: ['/*feed/', '/downloads', '/clio-con-23/*', '/lp/*'],
      },
    ],
    // additionalSitemaps: [`https://ion8.net/post-sitemap.xml`],

  },
};
