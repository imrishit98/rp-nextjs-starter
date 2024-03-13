import { useContext, useEffect } from 'react';

import { ContactFormContext } from '@/utils/context';
import Footer from '@/components/layout/footer';
import { FormModal } from '@/ui/modals';
import Main from '@/components/layout/main';
import Navbar from '@/components/layout/navbar';
import SEO from '@/components/layout/seo';
import { useRouter } from 'next/router';

// conversionPageUrl tracks the path that leads to contact form
const Layout = ({
  seoTitle,
  seoDesc,
  seoPath,
  seoChildren,
  conversionPageUrl,
  children,
}) => {
  const router = useRouter();
  const { contactFormOpen, setContactFormOpen } = useContext(ContactFormContext);

  // Checks if the showForm query parameter is present in the URL when the router is
  // mounted, and on every subsequent router.query change.
  useEffect(() => {
    if (router.isReady) {
      const { showForm } = router.query;
      if (showForm && showForm === 'true') {
        setContactFormOpen(true);
      } else {
        setContactFormOpen(false);
      }
    }
  }, [router.query, router.isReady]);

  return (
    <>
      {contactFormOpen ? (
        <FormModal
          pageTitle={seoTitle}
          setShowForm={contactFormOpen}
        />
      ) : null}
      <SEO
        title={seoTitle}
        description={seoDesc}
        path={seoPath}>
        {seoChildren}
      </SEO>
      <Navbar conversionPageUrl={conversionPageUrl} />
      <Main>{children}</Main>
      <Footer conversionPageUrl={conversionPageUrl} />
    </>
  );
};

export default Layout;
