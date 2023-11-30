import { Container } from '../ui/containers';
import { FooterLink } from '../ui/buttons';
import Link from 'next/link';

const Footer = ({ conversionPageUrl }) => {
  return (
    <footer className='py-2 mt-20 border-t-2'>
      <Container className='flex items-center justify-center text-sm font-medium'>
        © {new Date().getFullYear()}&nbsp; NextJS Starter Template |{' '}
        <FooterLink
          link='/'
          label='Privacy Policy'
          className='underline font-semibold'
        />{' '}
        |{' '}
        <FooterLink
          link={'/contact-us' + '?conversionPageUrl=' + conversionPageUrl}
          label='Contact Us'
          className='underline font-semibold'
        />
      </Container>
    </footer>
  );
};

export default Footer;
