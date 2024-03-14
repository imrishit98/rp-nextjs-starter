import { ButtonNoLink } from '@/ui/buttons';
import { Input } from '@/ui/form-elements';

/**
 * @description - Form step 1
 * @param {event} handleNext - the event that handles the next button
 * @param {*} register - the React Hook Form register prop that applies the validation on the fields
 * @param {string} errors - handles the error messages if any
 * @returns
 */
export const Step1 = ({ handleNext, register, errors }) => {
  return (
    <div className='grid xl:grid-cols-2 gap-4 mt-12'>
      {' '}
      {/* First name */}
      <div>
        <Input
          label='First name'
          name='firstName'
          type='text'
          placeholder='First name'
          isRequired
          register={{ ...register('firstName') }}
          errorMessage={errors.firstName?.message}
        />
      </div>
      {/* Last name */}
      <div>
        <Input
          label='Last name'
          name='lastName'
          type='text'
          placeholder='Last name'
          isRequired
          register={{ ...register('lastName') }}
          errorMessage={errors.lastName?.message}
        />
      </div>
      <div className='grid w-full xl:col-start-2'>
        <div className='place-self-end'>
          <ButtonNoLink
            className='m-auto mt-8 px-16 cursor-pointer'
            label='Next >'
            onClick={() => {
              handleNext();
            }}
          />
        </div>
      </div>
    </div>
  );
};
