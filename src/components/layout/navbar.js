import { siteName } from '@/../site-config';
import NavMenu from '@/components/layout/menu';
import { Container } from '@/components/ui/containers';
import Link from 'next/link';

/**
 * Navigation bar component that appears at the top of every page.
 * Contains logo/brand link and navigation menu.
 * @component
 * @returns {JSX.Element} Navigation bar with logo and menu
 */
const Navbar = () => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'>
          {siteName}
        </Link>
        <NavMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
