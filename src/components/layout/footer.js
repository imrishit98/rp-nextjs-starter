import Link from 'next/link';

import { Container } from '@/components/ui/containers';
import { siteName } from '@/../site-config';

/**
 * Footer component that displays copyright information and a link.
 * Renders at the bottom of every page with a top border.
 * @component
 * @returns {JSX.Element} Footer component with copyright text and link
 */
const Footer = () => {
  return (
    <footer className='py-2 border-t-2'>
      <Container className='flex justify-center items-center text-sm font-medium'>
        © {new Date().getFullYear()}&nbsp;
        <Link
          href={'/'}
          target='_blank'
          rel='noopener noreferrer'>
          {siteName}
        </Link>
        . All Rights Reserved.
      </Container>
    </footer>
  );
};

export default Footer;
