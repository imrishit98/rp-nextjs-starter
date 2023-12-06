import { Container, SectionHeader } from '@/ui/containers';
import { Gallery, Testimonials } from '@/ui/sliders';
import { H1, H4, LgText } from '@/ui/typography';

import { Form } from '@/components/ui/form';
import Layout from '@/components/layout';

const title = 'Components Page';

const Components = () => {
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      {/* Section header for the page */}
      <Container className='py-10 lg:py-20'>
        <SectionHeader
          title='Components'
          desc='These are commonly used components.'
          className='text-center'
        />
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

      <Container>
        <div className='mb-6'>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

          <H4>Contact Form</H4>
          <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
        </div>
        <Form />
      </Container>
    </Layout>
  );
};

export default Components;
