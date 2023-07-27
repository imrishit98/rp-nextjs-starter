import '../styles/main.scss';
import siteConfig from '../../site-config';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.tagline,
  metadataBase: siteConfig.url,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.tagline,
    // images: `${siteConfig.url}/og-image.png`,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.tagline,
    // images: [`${siteConfig.url}/og-image.png`],
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
