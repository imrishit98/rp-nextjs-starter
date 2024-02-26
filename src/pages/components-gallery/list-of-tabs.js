import {
  Container,
  FullWidthContainer,
  SectionHeader,
} from '@/components/ui/containers';
import { HorizontalTabs, VerticalTabs } from '@/components/ui/tabs';

import Layout from '@/components/Layout';
import React from 'react';

const ListOfTabs = () => {
  return (
    <Layout
      seoTitle='List of Tabs'
      seoDesc=''>
      {/* This component uses the Flowbite Tabs in vertical style
      section: What we do */}
      <FullWidthContainer className='pb-[100px]'>
        <Container className='text-center'>
          <VerticalTabs>
            <SectionHeader
              title='What we do'
              subTitle='We are a full-cycle business management consultancy that partners with companies to streamline their processes and improve their bottom line.'
            />
          </VerticalTabs>
        </Container>
      </FullWidthContainer>

      <FullWidthContainer className='pb-[100px]'>
        <Container className='text-center'>
          <HorizontalTabs>
            <SectionHeader
              title='Software implementation'
              subTitle='ion8 partners with more than 50 top software providers for CRM, UCaaS,
          secure document handling, and more.'
            />
          </HorizontalTabs>
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfTabs;
