let siteUrl = '';
switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
  case 'production':
    siteUrl = 'https://zrecruit-careers-boilerplate.vercel.app/';
    break;
  case 'preview':
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    break;
  case 'development':
    siteUrl = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    break;
}

const siteConfig = {
  title: "ion8's NextJS Starter Template",
  tagline:
    'This is a starter template for Next.js projects with Tailwind CSS, SEO, and more.',
  url: siteUrl,
  baseUrl: '/',
  projectName: 'ion8-nextjs-starter',
  organizationName: 'ion8.net',
  careersRevalidation: 300, // 5 minutes
};

module.exports = siteConfig;
