import Link from 'next/link';
import { Container } from '../ui/containers';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <div className='flex items-center '>
          <Link href='/'>
            <a className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'>
              RP
            </a>
          </Link>
        </div>
        <div className='flex'>
          <Link href='/'>
            <a className='px-4 py-2 mx-1 text-sm font-medium hover:font-bold'>
              Home
            </a>
          </Link>
          <Link href='/blog'>
            <a className='px-4 py-2 mx-1 text-sm font-medium hover:font-bold'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='px-4 py-2 mx-1 text-sm font-medium hover:font-bold'>
              About
            </a>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
