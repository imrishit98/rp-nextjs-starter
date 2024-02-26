import { Container, SectionHeader } from '@/ui/containers';
import { Gallery, Testimonials } from '@/ui/sliders';

import { Form } from '@/ui/form';
import { H4 } from '@/ui/typography';
import Layout from '@/components/Layout';

import { useRouter } from 'next/router';

const ComponentsGallery = () => {
  const router = useRouter();

  const title = 'Components Page';
  // this is the current page url that will be captured
  const pageUrl = router.pathname;
  return (
    <Layout
      seoTitle={title}
      seoDesc=''
      conversionPageUrl={pageUrl}>
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
        <Form conversionPageUrl={pageUrl} />
      </Container>
    </Layout>
  );
};

export default ComponentsGallery;
