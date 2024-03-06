import { H1, LgText } from '@/ui/typography';

import { Button } from '@/ui/buttons';
import { Container } from '@/ui/containers';
import Layout from '@/components/layout';

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
            <Button
              link='/'
              label='Go to home page'
              className='w-[245px] mx-auto'
              type='link'
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ThankYou;
