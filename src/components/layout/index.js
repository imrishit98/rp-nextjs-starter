import Footer from '@/layout/footer';
import Main from '@/layout/main';
import Navbar from '@/layout/navbar';
import SEO from '@/layout/seo';

// conversionPageUrl tracks the path that leads to contact form
const Layout = ({
  seoTitle,
  seoDesc,
  seoPath,
  seoChildren,
  conversionPageUrl,
  children,
}) => {
  return (
    <>
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
