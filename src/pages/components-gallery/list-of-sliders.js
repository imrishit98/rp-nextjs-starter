import { Gallery, Testimonials } from '@/components/ui/sliders';

import { Container } from '@/components/ui/containers';
import { H4 } from '@/components/ui/typography';
import Layout from '@/components/Layout';
import React from 'react';

const ListOfSliders = () => {
  return (
    <Layout seoTitle='List of Sliders'>
      {' '}
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

export default ListOfSliders;
