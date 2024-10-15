import siteConfig from '../../site-config';

const robots = () => {
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
};

export default robots;
