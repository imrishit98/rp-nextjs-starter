import siteConfig from '../../site-config';
import Layout from '../components/layout';
import '../styles/main.scss';
import { Gabarito } from 'next/font/google';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteConfig.url,
    // images: `${siteConfig.url}/og-image.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteConfig.url,
    // images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: new URL(siteConfig.url),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: './favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={gabarito.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
