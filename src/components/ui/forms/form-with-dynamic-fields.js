import * as Yup from 'yup';

import {
  CheckboxList,
  Input,
  RadioButtonList,
  Select,
  Textarea,
} from '@/ui/form-elements';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/ui/buttons';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
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
  console.log('errorMessage: ' + errors);
  return (
    <div>
      {type === 'select' ? (
        <Select
          label={label}
          name={name}
          isRequired={required}
          options={options}
          register={register}
        />
      ) : (
        <Input
          label={label}
          name={name}
          type={type}
          placeholder={label}
          isRequired={required}
          register={register}
        />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <div>{message}</div>}
      />
    </div>
  );
};

export const FormWDynamicFields = ({ fields }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    emailAddress: Yup.string().required(),
    phoneNumber: Yup.string(),
    yourDepartment: Yup.array().required(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className='justify-center pt-20 lg:text-left'>
      <FormProvider>
        <form
          id='form'
          className=''
          onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
            {fields.map((field, index) => (
              <Field
                key={index}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
                validationMsg={field.validationMsg}
                options={field.options}
                className={field.className}
                register={register}
                errors={errors}
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
      </FormProvider>
    </div>
  );
};
