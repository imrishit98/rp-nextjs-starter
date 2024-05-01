import { Checkbox, Radio } from 'flowbite-react';
import { SmText, XsText } from '@/ui/typography';
import { useFieldArray, useForm } from 'react-hook-form';

import { poppins } from '@/utils/fonts';
import { useState } from 'react';

//  TailwindCSS styles for different fields
const fieldStyles = `px-4 py-3 text-sm font-normal rounded-lg bg-gray-50 border border-solid border-gray-300 w-full focus:border-gray-900 focus:ring-transparent focus:outline-none mt-2 ${poppins.className}`;

const checkboxStyles = `focus:ring-2 focus:ring-green-500 text-green-500 w-4 h-4 p-2.5 bg-gray-50 rounded border border-gray-300 ${poppins.className}`;

const radioStyles = `w-4 h-4 border border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-50 bg-gray-50 rounded-3xl checked:border-green-500 checked:rounded-full checked:border-4 focus:border-green-500 focus:rounded-full focus:border-4
${poppins.className}`;

/**
 *
 * @component - A Label called from within the field
 *
 * @param {string} label - label of the field
 * @param {string} name - name of the field used in htmlFor attribute to connect the label to the field that's used for
 * @param {boolean} isRequired - indicates whether a required field indicator such as an asterisk should be displayed or not
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - a Label component for labeling fields
 * @example - <Label label={label} name={name} isRequired={isRequired} />
 */
export const Label = ({ label, name, isRequired, className = '' }) => {
  return (
    <label htmlFor={name}>
      <SmText className={`font-medium ${className}`}>
        {label} {isRequired ? <span className={'inline text-red-600'}>*</span> : null}
      </SmText>
    </label>
  );
};

/**
 * @component - input field eg text, number, password or email
 *
 * @param {string} label - label of the field
 * @param {string} name - name of the field
 * @param {type} type - type of the field - possible values: text, number, password, email
 * @param {string} placeholder - text that would be displayed as the placeholder
 * @param {*} register - registers the field for Yup validation
 * @param {boolean} isRequired - just for UI purposes; if exists then it will be passed on to the Label component in order to display the asterisk
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - an Input component for capturing input from the user
 */
export const Input = ({
  label,
  name,
  type,
  placeholder,
  register,
  isRequired,
  className = '',
}) => {
  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
      />

      <input
        className={`
          ${fieldStyles} ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

/**
 * @component - textarea field for multiline user inputs usually messages or details
 *
 * @param {string} label - label of the field
 * @param {name} name - name of the field
 * @param {string} placeholder - text that would be displayed as the placeholder
 * @param {*} register - registers the field for Yup validation
 * @param {boolean} isRequired - just for UI purposes; if exists then it will be passed on to the Label component in order to display the asterisk
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - a Textarea component
 */

export const Textarea = ({
  label,
  name,
  placeholder,
  register,
  isRequired,
  className = '',
}) => {
  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
      />

      <textarea
        className={`h-28 ${fieldStyles} ${className}`}
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

/**
 * @component - a dropdown / select field
 *
 * @param {string} label - label of the field
 * @param {name} name - name of the field
 * @param {array} options - an array of values to fill in the select field as options
 * @param {event} onChange - if exists then it will replace the default handler with a custom one eg. if we have conditional fields. See form-with-conditional-fields.js
 * @param {string} value - the selected value
 * @param {*} register - registers the field for Yup validation
 * @param {boolean} isRequired - just for UI purposes; if exists then it will be passed on to the Label component in order to display the asterisk
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - a select component
 */

export const Select = ({
  label,
  name,
  options,
  onChange,
  value,
  register,
  isRequired,
  className = '',
}) => {
  const { setValue, control } = useForm();

  const handleSelectChange = value => {
    setValue(name, value);
  };

  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
      />

      <select
        name={name}
        className={` ${fieldStyles} ${className}`}
        {...register}
        onChange={onChange ? onChange : e => handleSelectChange(e.target.value)}
        value={value}>
        <option value=''>Select an option</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

// todo: The checkbox if required, doesn't display the error message, which in fact should. This needs to be revisited.

/**
 * @component - a checkbox list
 *
 * @param {string} label - label of the field
 * @param {name} name - name of the field
 * @param {array} options - an array of values to fill in the checkboxes list field as options
 * @param {event} onChange - if exists then it will replace the default handler with a custom one eg. if we have conditional fields. See form-with-conditional-fields.js
 * @param {*} register - registers the field for Yup validation
 * @param {boolean} isRequired - just for UI purposes; if exists then it will be passed on to the Label component in order to display the asterisk
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - a checkbox list component
 */
export const CheckboxList = ({
  label,
  name,
  options,
  onChange,
  register,
  isRequired,
  className = '',
  children,
  ...props
}) => {
  const { setValue, control } = useForm();
  const { fields } = useFieldArray({
    control,
    name: name,
  });
  const handleCheckboxChange = index => {
    setValue(`${name}.${index}`, !fields[index]?.value);
  };

  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
        className='block text-gray-900'
      />

      <div className={`grid grid-flow-row lg:grid-flow-col mt-4`}>
        {options.map((option, index) => (
          <div key={index}>
            <Checkbox
              name={name[index]}
              value={option}
              className={`${checkboxStyles} ${className}`}
              {...register}
              onChange={onChange ? onChange : () => handleCheckboxChange(index)}
            />{' '}
            <Label
              name={name + index}
              label={option}
              className='inline-block mb-4 ml-2 text-gray-600'
            />
          </div>
        ))}
      </div>
    </>
  );
};

// todo: The radio buttons list by default should display the validation/error message if the user misses to select any and tries to submit the form. Currently, the error message is not displayed.

/**
 * @component - a radio buttons list
 *
 * @param {string} label - label of the field
 * @param {name} name - name of the field
 * @param {array} options - an array of values to fill in the radio buttons list as options
 * @param {event} onChange - if exists then it will replace the default handler with a custom one eg. if we have conditional fields. See form-with-conditional-fields.js
 * @param {*} register - registers the field for Yup validation
 * @param {boolean} isRequired - just for UI purposes; if exists then it will be passed on to the Label component in order to display the asterisk
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns {JSX.Element} - a radio buttons list component
 */
export const RadioButtonList = ({
  label,
  name,
  options,
  onChange,
  register,
  isRequired,
  className = '',
  children,
  ...props
}) => {
  const { setValue, control } = useForm();

  const handleRadioChange = value => {
    setValue(name, value);
  };

  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
        className='block text-gray-900'
      />

      <div className={`grid grid-flow-row lg:grid-flow-col mt-4`}>
        {options.map((option, index) => (
          <div key={index}>
            <Radio
              name={name[index]}
              value={option}
              className={`${radioStyles} ${className}`}
              {...register}
              onChange={onChange ? onChange : () => handleRadioChange(index)}
            />{' '}
            <Label
              name={name + index}
              label={option}
              className='inline-block mb-4 ml-2 text-gray-600'
            />
          </div>
        ))}
      </div>
    </>
  );
};
