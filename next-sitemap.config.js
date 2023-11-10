import siteConfig from 'site-config';

/** @type {import('next-sitemap').IConfig} */
export const siteUrl = siteConfig?.url;
export const generateRobotsTxt = true;
export const autoLastmod = false;
export const robotsTxtOptions = {
  policies: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
};
