import * as Yup from 'yup';

import { Input, RadioButtonList, Select } from '@/ui/form-elements';

import { Button } from '@/ui/buttons';
import { XsText } from '@/ui/typography';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const FormWConditionalFields = ({ conversionPageUrl }) => {
  /* for the conditional field for the radio list and the dropdown */
  const [ageGroupSelection, setAgeGroupSelection] = useState('');

  // display the message based on value selected
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const displayConditionalField = event => {
    setSelectedOption(event.target.value);
  };

  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    aboutYourDepartment: Yup.string().required('Please select one of the options'),
    deptDetails: Yup.string(),
    // #todo: The following lines requires a revisit since it doesn't work as expected.
    // The requirement is that when the 'Software Engineering' is selected from the select, only then the deptDetails is required and should display the validation message otherwise deptDetails is optional.

    // deptDetails: Yup.string().when('aboutYourDepartment', {
    //   is: 'Software Engineering',
    //   then: Yup.string().required('Please write something about your department'),
    // }),
    ageGroupLst: Yup.string(),
  });

  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    //console.log(data);
    // add the submit code for webhook and axios call here - you can find the sample code in the general-form.js
  };
  return (
    <div className='justify-center py-20 lg:text-left'>
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
          {/* Dropdown Field - Required */}
          <div className=''>
            <Select
              label='Tell us about your department'
              name='aboutYourDepartment'
              isRequired
              options={['Software Engineering', 'Sales & Marketing', 'Design']}
              register={{
                ...register('aboutYourDepartment'),
              }}
              onChange={displayConditionalField}
              value={selectedOption}
              errorMessage={errors.aboutYourDepartment?.message}
            />
          </div>
          <div>
            {/* conditional field that's bound to the aboutYourDepartment dropdown.  */}
            {selectedOption === 'Software Engineering' ? (
              <Input
                label='Tell us something about your department'
                name='deptDetails'
                type='text'
                placeholder='Write something about your department'
                register={{ ...register('deptDetails', { required: false }) }}
              />
            ) : null}
          </div>

          {/* Radio buttons list */}
          <div className=''>
            <RadioButtonList
              label='What is your age group'
              name='ageGroupLst'
              options={['2 - 12', '13 - 30', '31 - 45']}
              register={{ ...register('ageGroupLst') }}
              onChange={e => setAgeGroupSelection(e.target.value)}
            />
            {/* conditional field that's bound to the ageGroupLst radio buttons.  */}
            {ageGroupSelection === '2 - 12' ? (
              <XsText className='mt-2'>You have a free ticket!</XsText>
            ) : ageGroupSelection === '13 - 30' || ageGroupSelection === '31 - 45' ? (
              <XsText className='mt-2'>You have 10% discount!</XsText>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className='flex mt-5 lg:col-span-2 md:justify-start'>
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
