import Footer from '@/components/Layout/footer';
import Main from '@/components/Layout/main';
import Navbar from '@/components/Layout/navbar';
import SEO from '@/components/Layout/seo';

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
