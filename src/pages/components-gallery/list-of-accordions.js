import { BasicAccordion, CategorizedAccordion } from '@/components/ui/accordions';
import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';

import Layout from '@/components/layout';

const ListOfAccordions = () => {
  return (
    <Layout seoTitle='List of Accordions'>
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='Basic Accordion'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <BasicAccordion />
        </Container>
      </FullWidthContainer>

      {/* Categorized Accordion */}
      <FullWidthContainer>
        <Container className='text-center'>
          <SectionHeader
            title='Categorized Accordion'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <CategorizedAccordion />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfAccordions;
