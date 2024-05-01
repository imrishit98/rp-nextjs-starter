import '../styles/main.scss';

import { useEffect, useMemo, useState } from 'react';

import { ContactFormContext } from '@/utils/context';
import TagManager from 'react-gtm-module';

const MyApp = ({ Component, pageProps }) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const providerContactFormOpen = useMemo(
    () => ({
      contactFormOpen,
      setContactFormOpen,
    }),
    [contactFormOpen],
  );

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
  }, []);

  return (
    <ContactFormContext.Provider value={providerContactFormOpen}>
      <Component {...pageProps} />
    </ContactFormContext.Provider>
  );
};

export default MyApp;
