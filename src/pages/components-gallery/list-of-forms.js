import {
  Container,
  FullWidthContainer,
  SectionHeader,
} from '@/components/ui/containers';

import { FormWConditionalFields } from '@/components/ui/forms/form-with-conditional-fields';
import { GeneralForm } from '@/components/ui/forms/general-form';
import Layout from '@/components/layout';
import { NewsletterForm } from '@/components/ui/forms/newsletter-form';

/** This page will list different variants of forms (simple contact form, two-step form, modal form and newsletter.). */
const ListOfForms = () => {
  return (
    <Layout seoTitle='List of Forms'>
      {/* The general form */}
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='General form'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <GeneralForm />
        </Container>
      </FullWidthContainer>

      {/* The form with conditional fields */}
      <FullWidthContainer className='bg-light-blue'>
        <Container>
          <SectionHeader
            title='Form with conditional fields'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <FormWConditionalFields />
        </Container>
      </FullWidthContainer>

      {/* The two-step form */}
      <FullWidthContainer className='bg-light-blue'>
        <Container>
          <SectionHeader
            title='The two-step form'
            subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          />
          <TwoStepForm />
        </Container>
      </FullWidthContainer>

      {/* The newsletter form */}
      <FullWidthContainer className='bg-cobalt'>
        <Container>
          <NewsletterForm />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfForms;
