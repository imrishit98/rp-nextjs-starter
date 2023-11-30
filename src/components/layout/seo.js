import Head from 'next/head';
import siteConfig from '../../../site-config';
import { useRouter } from 'next/router';

const SEO = ({ title, description, path, children }) => {
  const router = useRouter();

  const seoUrl = path
    ? `${siteConfig.url + path}`
    : `${siteConfig.url + router.pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta
        httpEquiv='x-ua-compatible'
        content='ie=edge'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta
        name='robots'
        content='index, follow'
      />
      <meta
        name='description'
        content={description}
      />
      <meta
        name='og:title'
        property='og:title'
        content={title}
      />
      <meta
        name='og:description'
        property='og:description'
        content={description}
      />
      <meta
        property='og:url'
        content={seoUrl}
      />
      <link
        rel='canonical'
        href={seoUrl}
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:title'
        content={title}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:url'
        content={seoUrl}
      />

      {/* Images */}
      <link
        rel='icon'
        href='/favicon.ico'
      />
      {/* <meta property='og:image' content={`${siteConfig.url}/og-image.png`} />
      <meta name='twitter:image' content={`${siteConfig.url}/og-image.png`} /> */}

      {children}
    </Head>
  );
};

export default SEO;
