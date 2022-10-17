import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
