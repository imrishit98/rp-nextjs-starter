import { BasicAccordion, TabbedAccordion } from '@/components/ui/accordions';
import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';

import Layout from '@/components/layout';

/**
 * @description - This page lists different variants of the Flowbite-react accordion
 *
 */
const ListOfAccordions = () => {
  return (
    <Layout seoTitle='List of Accordions'>
      {/* Basic Accordion */}
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='Basic Accordion'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <BasicAccordion />
        </Container>
      </FullWidthContainer>

      {/* Tabbed Accordion */}
      <FullWidthContainer>
        <Container className='text-center'>
          <SectionHeader
            title='Tabbed Accordion'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <TabbedAccordion />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfAccordions;
