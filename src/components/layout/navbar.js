import Link from 'next/link';
import { Container } from '../ui/containers';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../ui/buttons';
import { H3, NavbarLink, LgText } from '../ui/typography';
import { CloseIcon, HamburgerIcon } from '../ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // toggle the submenu in mobile on click
  const [isSubMenuOpen, setIsSubMenuOpen] = useState([]);

  const navigation = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
      subItem: [
        {
          name: 'About our team',
          href: '/about/team',
        },
        {
          name: 'History Timeline',
          href: '/about/history',
        },
      ],
    },
    {
      name: 'Services',
      href: '/services',
      subItem: [
        {
          name: 'Software Engineering',
          href: '/services/software-engineering',
        },
        {
          name: 'Marketing',
          href: '/services/Marketing',
        },
      ],
    },
  ];

  function toggleSubItems(itemIndex) {
    isSubMenuOpen.includes(itemIndex)
      ? setIsSubMenuOpen((current) =>
          current.filter((isSubMenuOpen) => isSubMenuOpen !== itemIndex)
        )
      : setIsSubMenuOpen([...isSubMenuOpen, itemIndex]);
  }

  return (
    <nav>
      <Container className='justify-between h-[72px] md:h-[94px] flex'>
        <div className='flex items-center flex-grow py-3 md:flex-none'>
          <Link href='/' className='font-bold text-cobalt'>
            <H3>ion8</H3>
          </Link>
        </div>

        {/* Desktop/tablet menu */}
        <div className='relative hidden md:justify-between md:flex'>
          {navigation.map((item, index) =>
            item.subItem ? (
              <div key={index}>
                {/* main menu item */}
                <LgText
                  className={`p-5 ${item.subItem ? 'nav-subitem' : ''
                    } font-bold text-deep-blue hover:text-cobalt`}
                >
                  {item.name}
                </LgText>
                {/* subItem menu */}
                <ul className='absolute top-[60px] z-10 w-[240px] nav-subitem-content'>
                  {item.subItem
                    ? item.subItem.map((subItem, subIndex) => (
                      <li className='px-4 py-4 bg-slate-50 hover:bg-slate-100' key={subIndex}>
                        <NavbarLink
                          link={subItem.href}
                          className='text-left'
                        >
                          {subItem.name}
                        </NavbarLink>
                      </li>
                    ))
                    : null}
                </ul>
              </div>
            ) : (
              <NavbarLink key={index} link={item.href} className=''>
                <LgText
                  className={`p-5 ${item.subItem ? 'nav-subitem' : ''
                    } font-bold text-deep-blue hover:text-cobalt`}
                >
                  {item.name}
                </LgText>
              </NavbarLink>
            )
          )}
        </div>
        <div className='hidden md:block'>
          <PrimaryButton link='/profile' label='Profile' />
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
            <HamburgerIcon
              className={('w-6 h-6 ', isOpen ? 'hidden' : 'block')}
            />
            <CloseIcon
              className={('w-6 h-6 ', isOpen ? 'block' : 'hidden')}
              onClick={() => setIsSubMenuOpen([])}
            />
          </button>
        </div>
        {/* mobile menu list */}
        <div
          className={
            'absolute left-0 justify-center w-full h-auto py-6 px-4 overflow-hidden top-[72px] bg-white md:hidden z-10 text-center ' +
            (isOpen ? 'block' : 'hidden')
          }
          data-collapse-content='mobileMenuEvent'
          id='mobileMenu'
        >
          <ul className='static top-[60px] z-10 w-full text-center'>
            {navigation.map(
              (item, itemIndex) =>
                item.subItem ? (
                  <div key={itemIndex}>
                    <li onClick={() => toggleSubItems(itemIndex)}>
                      <LgText className='py-3 font-bold text-deep-blue'>
                        {item.name}
                      </LgText>
                      {/* maps submenu items */}{' '}
                      {item.subItem.map((subItem, subItemindex) => (
                        <div
                          className={`${isSubMenuOpen.includes(itemIndex)
                              ? 'flex'
                              : 'hidden'
                            } px-4 py-3 bg-slate-50 justify-center`}
                          key={subItemindex}
                        >
                          <NavbarLink link={subItem.href}>
                            {subItem.name}
                          </NavbarLink>
                        </div>
                      ))}{' '}
                    </li>
                  </div>
                ) : (
                  <li key={itemIndex} className='py-2'>
                    {/* Main menuItem with no subItems will have a link */}
                    <NavbarLink link={item.href}>
                      <LgText className='font-bold text-deep-blue'>
                        {item.name}
                      </LgText>
                    </NavbarLink>
                  </li>
                )

              /* end of item.subItem ? */
            )}{' '}
          </ul>{' '}
          {/* end of navigation.map ? */}
          <div className='mt-5 md:hidden'>
            <PrimaryButton link='/' label='Contact Us' />
          </div>
        </div>
        {/* end of mobile menu */}
      </Container>
    </nav>
  );
};

export default Navbar;
