import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';
import { HorizontalTabs, VerticalTabs } from '@/ui/tabs';

import Layout from '@/components/layout';

/**
 * @description - This page lists different variants of tabbed sections - adopted from Flowbite-react
 * @returns
 */

const ListOfTabs = () => {
  return (
    <Layout
      seoTitle='List of Tabs'
      seoDesc=''>
      {/* Horizontal tabs */}
      <FullWidthContainer className='bg-cool-gray'>
        <Container className='text-center'>
          <SectionHeader
            title='Horizontal Tabs'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <HorizontalTabs />
        </Container>
      </FullWidthContainer>

      {/* Vertical tabs */}
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
