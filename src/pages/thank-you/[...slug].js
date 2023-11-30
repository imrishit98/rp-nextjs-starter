import { H1, LgText } from '../components/ui/typography';

import { Container } from '../components/ui/containers';
import Layout from '../components/layout/index';
import { SecondaryButton } from '../components/ui/buttons';

const ThankYou = () => {
  var title = 'Thank You';
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      <div className='items-center w-full mx-auto text-center bg-white py-14 md:px-12 lg:px-40'>
        <Container className='py-24'>
          <div className='xl:px-28'>
            <H1 className='pb-7'>Thank you!</H1>
            <LgText className='text-gray-500 pb-7'>
              Your information has been received.
            </LgText>
            <SecondaryButton
              link='/'
              label='Go to home page'
              className='w-[245px] mx-auto'
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ThankYou;
