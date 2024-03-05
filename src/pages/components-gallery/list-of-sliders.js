import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';
import { GallerySlider, HeroWithSlider, Testimonials } from '@/ui/sliders';

import { H4 } from '@/ui/typography';
import Layout from '@/components/layout';
import React from 'react';

const ListOfSliders = () => {
  return (
    <Layout seoTitle='List of Sliders'>
      <FullWidthContainer>
        <HeroWithSlider />
      </FullWidthContainer>
      <FullWidthContainer className='bg-cool-grey'>
        <SectionHeader
          title='Gallery Slider'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <GallerySlider />
      </FullWidthContainer>
      <FullWidthContainer>
        <SectionHeader
          title='Testimonials'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <Testimonials />
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfSliders;
