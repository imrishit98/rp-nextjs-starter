import Footer from './footer';
import Main from './main';
import Navbar from './navbar';

/**
 * Main layout component that wraps the application content.
 * Provides consistent layout structure with navigation, main content, and footer.
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be rendered within the layout
 * @returns {JSX.Element} Layout wrapper with navigation, main content, and footer
 */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
