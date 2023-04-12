import Layout from '../layout';
import { SecondaryButton, PrimaryButton, SubmitButton } from './buttons';
import { Container } from './containers';
import { H1, H4 } from './typography';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitIcon } from './icons';

export const Form = ({ pageTitle }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  {
    /* form validation */
  }
  const validationSchema = Yup.object().shape({
    inputField: Yup.string().required('Please enter your first name'),
    business: Yup.string(),
  });

  {
    /* end of form validation */
  }
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, formState, handleSubmit } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    setLoading(true);
    const submitURL = `/api/form-handler`;

    if (data) {
      const webhookData = {
        inputField: data.inputField,

        conversionPageUrl: 'website URL' + router.pathname,
        conversionPageTitle: pageTitle,
      };

      axios
        .post(submitURL, webhookData)
        .then((res) => {
          setIsSubmitted(true);
          router.push('/thank-you');
        })
        .catch((err) => {
          console.error(err);
          alert('There was an error submitting your form. Please try again.');
        });
    }
  };
  return (
    <div className='justify-center py-20 lg:text-left'>
      <div className='mb-6'>
        <H4>Form Elements with Validation</H4>
      </div>
      <form id='form' className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-5'>
          <div>
            <label htmlFor='inputField' className='block mb-1'>
              Input Field <span className='text-red'>*</span>
            </label>
            <input
              className={`px-4 py-3 rounded-md border border-solid border-cobalt w-full focus:border-cyan focus:outline-none ${
                errors.inputField ? 'invalid' : ''
              }`}
              name='inputField'
              type='text'
              {...register('inputField')}
            />

            <p className='inline font-semibold text-extra-small text-red'>
              {errors.inputField?.message}
            </p>
          </div>
        </div>

        <div className='flex mt-5 md:justify-end'>
          <SubmitButton hasIcon>
            <SubmitIcon />
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};
