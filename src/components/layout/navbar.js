import Link from 'next/link';
import { Container } from '../ui/containers';

const Navbar = () => {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
    { href: '/about', text: 'About' },
  ];

  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
        >
          RP
        </Link>
        <div className='flex'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className='px-4 py-2 text-sm font-medium hover:font-bold'
            >
              {link.text}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
