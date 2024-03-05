import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';
import { HorizontalTabs, VerticalTabs } from '@/ui/tabs';

import Layout from '@/components/layout';
import React from 'react';

const ListOfTabs = () => {
  return (
    <Layout
      seoTitle='List of Tabs'
      seoDesc=''>
      {/* This component uses the Flowbite Tabs in vertical style
      section: What we do */}

      <FullWidthContainer className='bg-cool-gray'>
        <Container className='text-center'>
          <SectionHeader
            title='Horizontal Tabs'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <HorizontalTabs />
        </Container>
      </FullWidthContainer>

      <FullWidthContainer>
        <Container className='text-center'>
          <SectionHeader
            title='Vertical Tabs'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <VerticalTabs />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfTabs;
