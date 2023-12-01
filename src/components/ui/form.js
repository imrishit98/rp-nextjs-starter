import * as Yup from 'yup';

import { DropdownArrowIcon, SubmitIcon } from '@/ui/icons';

import { SubmitButton } from '@/ui/buttons';
import { XSText } from '@/ui/typography';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form = ({ pageTitle, conversionPageUrl }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    dropdownField: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, formState, handleSubmit } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = data => {
    setLoading(true);
    const submitURL = `/api/form-handler`;

    if (data) {
      const webhookData = {
        firstName: data.firstName,
        dropdown: data.dropdownField,
        conversionPageUrl: conversionPageUrl,
        conversionPageTitle: pageTitle,
      };

      axios
        .post(submitURL, webhookData)
        .then(res => {
          setIsSubmitted(true);
          router.push('/thank-you' + conversionPageUrl);
        })
        .catch(err => {
          console.error(err);
          alert('There was an error submitting your form. Please try again.');
        });
    }
  };
  return (
    <div className='justify-center py-20 lg:text-left'>
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {/* Input Field - Required */}
          <div>
            <label
              htmlFor='firstName'
              className='block mb-1'>
              First Name
              <span className='inline text-red'>*</span>
            </label>
            <input
              className={`px-4 py-3 rounded-md border border-solid border-light-blue w-full focus:border-cyan focus:outline-none ${
                errors.firstName ? 'invalid' : ''
              }`}
              name='firstName'
              type='text'
              {...register('firstName')}
            />
            <XSText className='inline text-red'>{errors.firstName?.message}</XSText>
          </div>

          {/* Dropdown Field - Optional */}

          <div className='relative'>
            <label
              htmlFor='dropdownField'
              className='block mb-1'>
              Dropdown Label
            </label>
            <select
              name='dropdownField'
              className='w-full px-4 py-3 border border-solid rounded-md border-light-blue focus:border-cyan focus:outline-none'
              {...register('dropdownField', {
                required: false,
              })}>
              <option
                value=''
                selected>
                Select
              </option>
              <option value='option-1'>Option 1</option>
              <option value='option-2'>Option 2</option>
            </select>
            <DropdownArrowIcon className='stroke-light-blue' />
          </div>

          {/* Submit Button */}
          <div className='flex mt-5 lg:col-span-2 md:justify-end'>
            <SubmitButton
              className
              label={loading ? 'Submitting...' : 'Submit'}
              hasIcon>
              <SubmitIcon />
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};
