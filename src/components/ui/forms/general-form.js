import * as Yup from 'yup';

import { CheckboxList, RadioButtonList, Input, Select, Textarea } from '@/ui/form-elements';

import { useForm } from 'react-hook-form';

import { Button } from '@/ui/buttons';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const GeneralForm = ({ conversionPageUrl }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    emailAddress: Yup.string().required('Please enter your email address'),
    phoneNumber: Yup.string(),
    aboutYourDepartment: Yup.string().required('Please select one of the options'),
    hobbiesChk: Yup.array(),
    ageGroupLst: Yup.string(),
    message: Yup.string().required('Please enter your message'),
  });

  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    //console.log(data);
    router.push('/thank-you' + conversionPageUrl);

  };
  return (
    <div className='justify-center py-20 lg:text-left'>
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
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

          {/* Checkbox list - Required */}
          <div> 
          
          <CheckboxList
              label='What are your hobbies'
              name='hobbiesChk'
              isRequired
              options={['Books', 'Biking', 'Gardening']}
              register={...register('hobbiesChk')}
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
          <div className='flex lg:col-span-2 md:justify-end'>
            <Button
              className='px-10'
              label={loading ? 'Submitting...' : 'Submit'}
              variant='primary'
              type='button'
            />
          </div>
        </div>
      </form>
    </div>
  );
};
