import { Container } from '@/ui/containers';
import { FooterLink } from '@/ui/buttons';

const Footer = ({ conversionPageUrl }) => {
  return (
    <footer className='py-2 mt-20 border-t-2'>
      <Container className='flex items-center justify-center text-sm font-medium'>
        © {new Date().getFullYear()}&nbsp; NextJS Starter Template |{' '}
        <FooterLink
          link='/'
          label='Privacy Policy'
          className='font-semibold underline'
        />{' '}
        |{' '}
        <FooterLink
          link='/contact-us'
          label='Contact Us'
          conversionPageUrl={conversionPageUrl}
          className='font-semibold underline'
        />
      </Container>
    </footer>
  );
};

export default Footer;
