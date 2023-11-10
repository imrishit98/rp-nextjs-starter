import Link from 'next/link';
import { Container } from '../ui/containers';

const Footer = () => {
  return (
    <footer className='py-2 mt-20 border-t-2'>
      <Container className='flex items-center justify-center text-sm font-medium'>
        © {new Date().getFullYear()}&nbsp;
        <Link
          href={'/'}
          target='_blank'
          rel='noopener noreferrer'>
          NextJS Starter Template
        </Link>
        . All Rights Reserved.
      </Container>
    </footer>
  );
};

export default Footer;
