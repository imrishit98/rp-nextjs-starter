import { Container } from '@/ui/containers';
import { FooterLink } from '@/ui/buttons';

const Footer = ({ conversionPageUrl }) => {
  return (
    // this is sole for the visual purposes for the Sample Page for the new design
    <footer className='bg-purple-p900 text-center py-5'>
      <p className='footnote-lg text-purple-p100'>
        Ut quis quam senectus vulputate ut aliquam arcu gravida at. Varius at justo
        consectetur quam vitae proin ut sed eu. Commodo natoque.
      </p>
    </footer>

    // ** the traditional footer that we will be using in all projects
    // <footer className='py-2 mt-20 border-t-2'>
    //   <Container className='flex items-center justify-center text-sm font-medium'>
    //     © {new Date().getFullYear()}&nbsp; NextJS Starter Template |{' '}
    //     <FooterLink
    //       link='/'
    //       label='Privacy Policy'
    //       className='font-semibold underline'
    //     />{' '}
    //     |{' '}
    //     <FooterLink
    //       link='/contact-us'
    //       label='Contact Us'
    //       conversionPageUrl={conversionPageUrl}
    //       className='font-semibold underline'
    //     />
    //   </Container>
    // </footer>
  );
};

export default Footer;
