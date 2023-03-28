import Link from 'next/link';
import { Container } from '../ui/containers';
import { useState } from 'react';
import { PrimaryButton } from '../ui/buttons';
import { H2, NavbarLink } from '../ui/typography';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav>
      <Container className='justify-between'>
        <div className='flex items-center flex-grow py-3 md:flex-none'>
          <Link href='/' className='font-bold text-cobalt'>
            <H2>ion8</H2>
          </Link>
        </div>

        {/* Desktop/tablet menu */}
        <div className='hidden md:justify-between md:flex'>
          {navigation.map((item) => (
            <NavbarLink key={item.name} link={item.href} label={item.name} />
          ))}
        </div>
        <div className=''>
          <PrimaryButton link='/' label='Contact Us' />
        </div>

        {/* mobile menu */}

        <div className={'flex items-center justify-center md:hidden'}>
          <button
            id='mobileMenuBtn'
            data-collapse-toggle='mobileMenuEvent'
            type='button'
            className='inline-flex items-center justify-center ml-8 rounded-lg lg:hidden focus:outline-none focus:ring-none'
            aria-controls='mobileMenuBtn'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='sr-only'>Open main menu</span>

            <svg
              className={('w-6 h-6 ', isOpen ? 'hidden' : 'block')}
              width='25'
              height='24'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.5 12H21.5'
                stroke='#474748'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.5 6H21.5'
                stroke='#474748'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.5 18H21.5'
                stroke='#474748'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <svg
              className={('w-6 h-6 ', isOpen ? 'block' : 'hidden')}
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.8872 6.82495L6.88721 18.825'
                stroke='#474748'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.88721 6.82495L18.8872 18.825'
                stroke='#474748'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        {/* mobile menu list */}
        <div
          className={
            'absolute left-0 justify-center w-full h-auto py-6 overflow-hidden top-[100px] bg-white md:hidden z-10 text-left ' +
            (isOpen ? 'block' : 'hidden')
          }
          data-collapse-content='mobileMenuEvent'
          id='mobileMenu'
        >
          {navigation.map((item) => (
            <NavbarLink key={item.name} link={item.href} label={item.name} />
          ))}
        </div>
        {/* end of mobile menu */}
      </Container>
    </nav>
  );
};

export default Navbar;
