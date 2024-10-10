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
import { XsText } from '@/ui/typography';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

/**
 * Renders a form with dynamic fields based on the provided fields array.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.fields - An array of objects representing the fields to be rendered in the form.
 *   Each object should have the following properties:
 *   - name (string): The name of the field.
 *   - label (string): The label of the field.
 *   - type (string): The type of the field.
 *   - required (boolean): Indicates if the field is required.
 *   - validationMsg (string): The validation message to display if the field is invalid.
 *   - options (Array): An array of options for the field (only applicable to select fields).
 *   - className (string): The CSS class name for the field.
 * @return {JSX.Element} The rendered form component.
 */
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
    // for testing purposes
    //console.log(data);
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
                options={field.options} // if it's a select or radio list or checkbox list
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

/**
 * Renders a form field component based on the provided props.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label of the field.
 * @param {string} props.type - The type of the field.
 * @param {string} props.name - The name of the field.
 * @param {boolean} props.required - Indicates if the field is required.
 * @param {string} props.validationMsg - The validation message to display if the field is invalid.
 * @param {Array} props.options - An array of options for the field (only applicable to select fields).
 * @param {string} props.className - The CSS class name for the field.
 * @param {function} register - The register function for form validation.
 * @param {object} errors - The errors object for form validation.
 * @return {JSX.Element} The rendered form field component.
 */
export const Field = ({
  label,
  type,
  name,
  required,
  validationMsg,
  options,
  className = '',
  register,
  errors,
}) => {
  return (
    <div>
      {type === 'select' ? (
        <Select
          label={label}
          name={name}
          isRequired={required}
          options={options}
          register={register}
          className={className}
        />
      ) : (
        <Input
          label={label}
          name={name}
          type={type}
          placeholder={label}
          isRequired={required}
          register={register}
          className={className}
        />
      )}

      {/* validation doesn't work - todo */}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <XsText className='inline text-red-600'>{validationMsg}</XsText>
        )}
      />
    </div>
  );
};
