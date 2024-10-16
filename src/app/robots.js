import { url } from '@/../../site-config';

/**
 * Generates the robots.txt configuration for the application.
 * @returns {Object} - The robots configuration object containing rules, sitemap, and host.
 */
const robots = () => {
  return {
    rules: [
      {
        userAgent: '*', // Applies to all user agents
        allow: '/', // Allows access to the root directory
        disallow: ['/private/', '/api/'], // Disallows access to specific directories
      },
    ],
    sitemap: `${url}/sitemap.xml`, // URL to the sitemap
    host: url, // Host URL of the application
  };
};

export default robots;
