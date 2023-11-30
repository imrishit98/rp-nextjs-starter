import { Gallery, Testimonials } from '../components/ui/sliders';
import { H1, H4, LgText } from '../components/ui/typography';
import { PrimaryButton, SecondaryButton } from '../components/ui/buttons';

import { Container } from '../components/ui/containers';
import { Form } from '../components/ui/form';
import Layout from '../components/layout';
import { SubmitIcon } from '../components/ui/icons';

const title = 'Components Page';

const Components = () => {
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      <Container className='text-center h-[50vh] flex'>
        <div>
          <H1 className='mb-4'>Components</H1>
          <LgText className='md:px-20 lg:px-40'>
            These are commonly used components.
          </LgText>
        </div>
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Form Elements with Validation</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Form />
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Image Gallery</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Gallery />
      </Container>

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Testimonials</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default Components;
