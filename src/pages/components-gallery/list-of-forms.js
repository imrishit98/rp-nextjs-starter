import {
  Container,
  FullWidthContainer,
  SectionHeader,
} from '@/components/ui/containers';
import {
  Field,
  FormWDynamicFields,
} from '@/components/ui/forms/form-with-dynamic-fields';

import { FormWConditionalFields } from '@/components/ui/forms/form-with-conditional-fields';
import { GeneralForm } from '@/components/ui/forms/general-form';
import Layout from '@/components/layout';
import { NewsletterForm } from '@/components/ui/forms/newsletter-form';
import { TwoStepForm } from '@/components/ui/forms/two-step';

/** This page will list different variants of forms (simple contact form, two-step form, modal form and newsletter.). */
const ListOfForms = () => {
  const dynamicFields = [
    {
      type: 'text',
      label: 'First Name',
      name: 'firstName',
      required: true,
      className: '',
      validationMsg: 'Enter your first name',
    },
    {
      type: 'text',
      label: 'Last Name',
      name: 'lastName',
      required: true,
      className: '',
      validationMsg: 'Enter your last name',
    },
    {
      type: 'tel',
      label: 'Phone Number',
      name: 'phoneNumber',
      required: false,
      className: '',
    },
    {
      type: 'email',
      label: 'Email Address',
      name: 'emailAddress',
      required: true,
      className: '',
      validationMsg: 'Enter your email address',
    },
    {
      type: 'select',
      label: 'Select your department',
      name: 'yourDepartment',
      required: true,
      options: ['Software Engineering', 'Sales & Marketing', 'Design'],
      className: '',
      validationMsg: 'Select your department',
    },
  ];
  return (
    <Layout seoTitle='List of Forms'>
      {/* Should be removed once the dynamic form is approved */}
      {/* The general form */}
      {/* <FullWidthContainer>
        <Container>
          <SectionHeader
            title='General form'
            subTitle='A simple generic form with optional and required fields.'
          />
          <GeneralForm />
        </Container>
      </FullWidthContainer> */}

      {/* The form with dynamic fields */}
      <FullWidthContainer>
        <Container>
          <SectionHeader
            title='Form with Dynamic Fields'
            subTitle='A simple generic form with optional and required fields.'
          />
          <FormWDynamicFields fields={dynamicFields} />
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
