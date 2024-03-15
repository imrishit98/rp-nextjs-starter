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

  /*
    The following lines make sure that we have a URL that directly opens the form modal. 
    Use case: http://ion8.net/?showForm=true - this url can be used in an email notification, and when clicked it will redirect users to the website and directly to the form modal opened.
  */
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
