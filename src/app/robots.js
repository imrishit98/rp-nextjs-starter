import siteConfig from '../../site-config';

export default function robots() {
  const { url } = siteConfig;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
