import { Checkbox, Radio } from 'flowbite-react';
import { SmText, XsText } from '@/ui/typography';
import { useFieldArray, useForm } from 'react-hook-form';

export const Label = ({ label, name, isRequired, className }) => {
  return (
    <label htmlFor={name}>
      <SmText className={`font-medium ${className}`}>
        {label} {isRequired ? <span className={'inline text-red-600'}>*</span> : <></>}
      </SmText>
    </label>
  );
};

export const Input = ({
  label,
  name,
  id,
  type,
  placeholder,
  register,
  errorMessage,
  isRequired,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
      />

      {/* #ToDo - invalid:border-red-500 invalid:text-red-500 */}
      <input
        className={
          'px-4 py-3 text-sm font-inter font-normal rounded-lg bg-gray-50 border border-solid border-gray-300 w-full focus:border-gray-900 focus:ring-transparent focus:outline-none mt-2 ' +
          className
        }
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errorMessage ? (
        <XsText className='inline text-red-600'>{errorMessage}</XsText>
      ) : null}
    </>
  );
};

export const Textarea = ({
  label,
  name,
  id,
  placeholder,
  register,
  errorMessage,
  isRequired,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <Label
        label={label}
        name={name}
        isRequired={isRequired}
      />

      <textarea
        className={
          'px-4 py-3 rounded-lg text-sm font-normal bg-gray-50 h-28 border border-solid border-gray-300 w-full focus:border-gray-900 focus:ring-transparent focus:outline-none mt-2 ' +
          className
        }
        name={name}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {errorMessage ? (
        <XsText className='inline text-red-600'>{errorMessage}</XsText>
      ) : null}
    </>
  );
};

export const Select = ({
  label,
  name,
  options,
  register,
  isRequired,
  onChange,
  errorMessage,
  className,
  children,
  ...props
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
        className={
          'w-full px-4 py-3 text-sm font-inter font-normal rounded-lg bg-gray-50 border border-solid border-gray-300 focus:border-cyan focus:outline-none mt-2 ' +
          className
        }
        onChange={e => handleSelectChange(e.target.value)}
        {...register}>
        <option value=''>Select an option</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}>
            {option}
          </option>
        ))}
      </select>

      {errorMessage ? (
        <XsText className='inline text-red-600'>{errorMessage}</XsText>
      ) : null}
    </>
  );
};

export const CheckboxList = ({
  label,
  name,
  options,
  register,
  isRequired,
  errorMessage,
  className,
  children,
  ...props
}) => {
  // const handleCheckboxChange = e => {
  //   setValue(e.target.name, e.target.checked ? e.target.value : null);
  // };
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
      {errorMessage ? (
        <XsText className='inline text-red-600'>{errorMessage}</XsText>
      ) : null}
      <div className={`grid grid-flow-col mt-4`}>
        {/* Option component */}
        {options.map((option, index) => (
          <div key={index}>
            <input
              name={name[index]}
              value={option}
              type='checkbox'
              className='focus:ring-2 focus:ring-green-500 text-green-500 w-4 h-4 p-2.5 bg-gray-50 rounded border border-gray-300'
              {...register}
              onChange={() => handleCheckboxChange(index)}
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
