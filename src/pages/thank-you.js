import Layout from '../components/layout';
import { SecondaryButton } from '../components/ui/buttons';
import { Container } from '../components/ui/containers';
import { MessageSentIcon } from '../components/ui/icons';
import { H1, LgText } from '../components/ui/typography';

const ThankYou = () => {
  var title = 'ion8 Starter Template - Thank You';
  return (
    <Layout seoTitle={title} seoDesc=''>
      <div className='items-center w-full mx-auto text-center bg-white py-14 md:px-12 lg:px-40'>
        <Container className='py-24'>
          <div>
            <MessageSentIcon />
          </div>
          <div className='mb-7'>
            <H1 className='pt-12 pb-7'>Thank you!</H1>
            <LgText className='pb-7'>
              Your details have been received. We’ll get in touch with you
              shortly.{' '}
            </LgText>
            <SecondaryButton
              link='#'
              label='Go to Homepage'
              className='w-[245px] mx-auto'
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ThankYou;
