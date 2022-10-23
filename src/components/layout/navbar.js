import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from '../ui/containers';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <div className='flex items-center '>
          <Link href='/'>
            <a className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'>
              RP
            </a>
          </Link>
        </div>
        <div className='flex'>
          <Link href='/'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='px-4 py-2 text-sm font-medium hover:font-bold'>
              About
            </a>
          </Link>
          {mounted && (
            <button
              className='p-2 text-sm font-bold hover:font-bold'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? '🔆' : '🌙'}
            </button>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
