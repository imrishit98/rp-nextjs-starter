import Footer from './footer';
import Main from './main';
import Navbar from './navbar';
import SEO from './seo';

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
