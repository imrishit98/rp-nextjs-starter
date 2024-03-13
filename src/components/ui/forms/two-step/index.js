// import * as Sentry from '@sentry/nextjs';
import * as yup from 'yup';

import { FormProvider, useForm } from 'react-hook-form';
import { useContext, useState } from 'react';

import { Step1 } from './step1';
import { Step2 } from './step2';
import axios from 'axios';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

// adapted from https://github.com/orgs/react-hook-form/discussions/4028#discussioncomment-452478
// conversionPath is always supplied by ContactBlock
export const TwoStepForm = ({ conversionPath }) => {
  // const { closeModalContact } = useContext(ModalContext); // defined in _app.js
  const router = useRouter();

  // What form step are we on? Count from 0 to index into the validation schema array.
  const [activeStep, setActiveStep] = useState(0);

  const defaultValues = {
    firstName: '',
    lastName: '',
    aboutYourDepartment: '',
    details: '',
  };

  const r = 'Please enter your ';
  const validationSchema = [
    // Step 1
    yup.object().shape({
      firstName: yup.string().required(r + 'first name'),
      lastName: yup.string().required(r + 'last name'),
    }),
    // Step 2
    yup.object().shape({
      aboutYourDepartment: yup.string().required('Please select your department'),
      details: yup.string().nullable(),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];

  const {
    handleSubmit,
    trigger,
    getValues,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: 'onBlur',
  });

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Step1
            handleNext={handleNext}
            register={register}
            errors={errors}
          />
        );
      case 1:
        return (
          <Step2
            handleBack={handleBack}
            register={register}
            errors={errors}
          />
        );
    }
  }

  const handleBack = () => {
    setActiveStep(0);
  };

  const handleNext = () => {
    trigger().then(isStepValid => {
      if (isStepValid) setActiveStep(1);
    });
  };

  // Submit the entire form - should not arrive here until validation passes for both pages
  const ourHandleSubmit = formData => {
    // for testing purposes and should be removed on a real project
    console.log(formData);
    // fake post URL - works around lack of CORS support on Zoho Forms
    // see rewrite in next.config.js, and https://stackoverflow.com/a/65058898
    // const postUrl = '/api/submit-contact-form';

    // let config = {
    //   method: 'post',
    //   url: postUrl,
    //   data: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // };
    // axios(config)
    //   .then(res => {
    //     reset(); // Clear the form
    //     router.push('/thank-you');
    //   })
    //   .catch(err => {
    //     console.error('Error: ', err);
    //     // Sentry.captureException(err);
    //     alert('There was an error submitting your form. Please try again.');
    //   })
    //   .finally();
  };

  return (
    <FormProvider>
      <form
        name='form'
        onSubmit={handleSubmit(ourHandleSubmit)}
        method='POST'
        acceptCharset='UTF-8'
        encType='multipart/form-data'>
        {getStepContent(activeStep)}
      </form>
    </FormProvider>
  );
};
