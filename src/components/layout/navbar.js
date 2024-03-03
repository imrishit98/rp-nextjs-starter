'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '@/components/ui/containers';
import { CloseIcon, MenuIcon } from '../ui/icons/menus';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: 'https://aitools.fyi/', label: 'aitools.fyi' },
    { href: 'https://amazingnewsletters.com/', label: 'Amazing Newsletters' },
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
        <div className='hidden md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='px-4 py-2 text-sm font-medium hover:font-bold'
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className='md:hidden'>
          <button
            className='p-2'
            type='button'
            aria-label='Toggle menu'
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div
            className={`absolute right-0 w-full bg-white shadow-md py-2 px-4 mt-2 rounded-md ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block px-4 py-2 text-sm font-medium hover:font-bold'
                onClick={() => setIsMenuOpen(false)}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
