import {
  Container,
  FullWidthContainer,
  SectionHeader,
} from '@/components/ui/containers';

import { FormWConditionalFields } from '@/components/ui/forms/form-with-conditional-fields';
import { GeneralForm } from '@/components/ui/forms/general-form';
import Layout from '@/components/layout';
import { NewsletterForm } from '@/components/ui/forms/newsletter-form';
import { TwoStepForm } from '@/components/ui/forms/two-step';

/** This page will list different variants of forms (simple contact form, two-step form, modal form and newsletter.). */
const ListOfForms = () => {
  return (
    <Layout seoTitle='List of Forms'>
      {/* The general form */}
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='General form'
            subTitle='A simple generic form with optional and required fields.'
          />
          <GeneralForm />
        </Container>
      </FullWidthContainer>

      {/* The form with conditional fields */}
      <FullWidthContainer className='bg-light-blue'>
        <Container>
          <SectionHeader
            title='Form with conditional fields'
            subTitle='Select "Software Engineering" from the select field and you will see a conditional field being added beside it. Also the radio buttons display conditional text based upon which one is being selected. Cool right?'
          />
          <FormWConditionalFields />
        </Container>
      </FullWidthContainer>

      {/* The two-step form */}
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='The two-step form'
            subTitle='Fill in the fields (required and/or optional ones) in both steps and go back and forth between the steps to see the valus perserve between the steps.'
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
