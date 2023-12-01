import { Gallery, Testimonials } from '@/ui/sliders';
import { H1, H4, LgText } from '@/ui/typography';

import { Container } from '@/ui/containers';
import Layout from '@/components/layout';

const title = 'Components Page';

const Components = () => {
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      <Container className='flex py-20 text-center'>
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
