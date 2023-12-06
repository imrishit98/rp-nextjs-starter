import * as Yup from 'yup';

import { CheckboxList, Input, Select, Textarea } from './form-elements';
import { DropdownArrowIcon, SubmitIcon } from '@/ui/icons';
import { useFieldArray, useForm } from 'react-hook-form';

import { SubmitButton } from '@/ui/buttons';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

export const Form = ({ pageTitle, conversionPageUrl }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    emailAddress: Yup.string().required('Please enter your email address'),
    phoneNumber: Yup.string(),
    aboutYourDepartment: Yup.string().required('Please select one of the options'),
    hobbiesChk: Yup.array(),
    message: Yup.string().required('Please enter your message'),
  });

  const { formState, register, handleSubmit, setValue, control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    console.log(data);
    // setLoading(true);
    // const submitURL = `/api/form-handler`;
    // if (data) {
    //   const webhookData = {
    //     firstName: data.firstName,
    //     dropdown: data.dropdownField,
    //     conversionPageUrl: conversionPageUrl,
    //     conversionPageTitle: pageTitle,
    //   };
    //   axios
    //     .post(submitURL, webhookData)
    //     .then(res => {
    //       setIsSubmitted(true);
    //       router.push('/thank-you' + conversionPageUrl);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       alert('There was an error submitting your form. Please try again.');
    //     });
    // }
  };



  return (
    <div className='justify-center py-20 lg:text-left'>
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {/* First name - Required */}
          <div>
            <Input
              label='First name'
              name='firstName'
              id='firstName'
              type='text'
              placeholder='First name'
              isRequired
              register={...register('firstName')}
              errorMessage={errors.firstName?.message}
            />
          </div>

          {/* Last name - Required */}
          <div>
            <Input
              label='Last name'
              name='lastName'
              id='lastName'
              type='text'
              placeholder='Last name'
              isRequired
              register={ ...register('lastName') }
              errorMessage={errors.lastName?.message}
            />
          </div>
          {/* Email address - Required */}
          <div>
            <Input
              label='Email address'
              name='emailAddress'
              id='emailAddress'
              type='email'
              placeholder='Email address'
              isRequired
              register={...register('emailAddress')}
              errorMessage={errors.emailAddress?.message}
            />
          </div>

        
          {/* Phone number - Optional */}
          <div> 
            <Input
              label='Phone number'
              name='phoneNumber'
              id='phoneNumber'
              type='tel'
              placeholder='Phone number'
              register={...register('phoneNumber', {
                required: false,
              })}
            />
          </div> 

          {/* Dropdown Field - Required */}
          <div>
            <Select
              label='Tell us about your department'
              name='aboutYourDepartment'
              isRequired
              options={['Software Engineering', 'Sales & Marketing', 'Design']}
              register={...register('aboutYourDepartment')}
              errorMessage={errors.aboutYourDepartment?.message}
              
            />
          </div>

          {/* Checkbox */}
          <div> 
        
          <CheckboxList
              label='What are your hobbies'
              name='hobbiesChk'
              options={['Books', 'Biking', 'Gardening']}
              register={...register('hobbiesChk', {required:false})}
              // errorMessage={errors.hobbiesChk?.message}
            />
          </div>

          {/* Textarea Field - Required */}
          <div>
            <Textarea
              label='Your message'
              name='message'
              id='message'
              isRequired
              register={...register('message')}
              errorMessage={errors.message?.message}
            />
          </div>

          {/* Submit Button */}
          <div className='flex mt-5 lg:col-span-2 md:justify-end'>
            <SubmitButton
              className
              label={loading ? 'Submitting...' : 'Submit'}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
