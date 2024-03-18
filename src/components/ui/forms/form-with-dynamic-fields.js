import * as Yup from 'yup';

import {
  CheckboxList,
  Input,
  RadioButtonList,
  Select,
  Textarea,
} from '@/ui/form-elements';

import { Button } from '@/ui/buttons';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const Field = ({
  label,
  type,
  name,
  required,
  options,
  className,
  register,
  errors,
}) => {
  // displays the name of each field
  // console.log(register);
  console.log('errorMessage: ' + errors);
  return (
    <div>
      {type === 'select' ? (
        <Select
          label={label}
          name={name}
          isRequired={required}
          options={options}
          register={{ ...register }}
          // errorMessage={errors ? validationMsg : null} // not working
          errorMessage={errors}
        />
      ) : (
        <Input
          label={label}
          name={name}
          type={type}
          placeholder={label}
          isRequired={required}
          register={{ ...register }}
          // errorMessage={errors ? validationMsg : null}  // not working
          errorMessage={errors}
        />
      )}
    </div>
  );
};

export const FormWDynamicFields = ({ fields }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    // first_name: Yup.string().required(fields[0][3]),
    firstName: Yup.string().required(),
    emailAddress: Yup.string().required(),
    phoneNumber: Yup.string(),
    yourDepartment: Yup.array().required(),
    // hobbiesChk: Yup.array(),
    // ageGroupLst: Yup.string(),
    // message: Yup.string().required('Please enter your message'),
  });

  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    // the following console.log will print out all the data for debugging purposes.
    console.log(data);

    // The following form submission code is a sample code that can be used and customized for real projects
    /*
    const submitURL = `/api/form-handler`;
    if (data) {
      const webhookData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phoneNumber,
        email: data.emailAddress,
        aboutYourDepartment: data.aboutYourDepartment,
        hobbiesChk: data.hobbiesChk,
        ageGroupLst: data.ageGroupLst,
        message: data.message,
        page: router.pathname,
        pageTitle: { pageTitle },
      };

    router.push('/thank-you' + conversionPageUrl);

    axios
        .post(submitURL, webhookData)
        .then((res) => {
          setContactFormOpen(false);
          if (router.pathname.includes('/lp')) {
            router.push(router.pathname + '/thank-you');
          } else {
            router.push('/thank-you');
          }
        })
        .catch((err) => {
          alert('There was an error submitting your form. Please try again.');
        });
    }
    */
  };
  return (
    <div className='justify-center pt-20 lg:text-left'>
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          {fields.map((field, index) => (
            <Field
              key={index}
              label={field.label}
              type={field.type}
              required={field.required}
              validationMsg={field.validationMsg}
              options={field.options}
              className={field.className}
              register={{ ...register(field.name) }}
              errors={errors.register?.message} //  < this doesn't work - errors.firstName?.message - the field name should be dynamic but cannot get the field.name to work
            />
          ))}
          {/* Submit Button */}
          <div className='flex md:col-span-2 md:justify-end'>
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
