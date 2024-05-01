import { Button, ButtonNoLink } from '@/ui/buttons';
import { Select, Textarea } from '@/ui/form-elements';

/**
 * @description - Form step 2
 * @param {event} handleBack - the event that handles the back button
 * @param {*} register - the React Hook Form register prop that applies the validation on the fields
 * @param {string} errors - handles the error messages if any
 * @returns
 */
export const Step2 = ({ handleBack, register, errors }) => {
  return (
    <div className='grid gap-4 md:grid-cols-2 mt-12'>
      {/* department dropdown */}
      <div>
        <Select
          label='Tell us about your department'
          name='aboutYourDepartment'
          isRequired
          options={['Software Engineering', 'Sales & Marketing', 'Design']}
          register={{ ...register('aboutYourDepartment') }}
          errorMessage={errors.aboutYourDepartment?.message}
        />
      </div>
      {/* Anything else to say? */}
      <div>
        <Textarea
          label='Your message'
          name='details'
          id='details'
          register={{ ...register('details') }}
        />
      </div>

      <div className='grid col-span-2'>
        <div className='place-self-start col-start-1'>
          <ButtonNoLink
            className='m-auto mt-8 px-16 cursor-pointer'
            label='< Back'
            onClick={() => {
              handleBack();
            }}
          />
        </div>
        <div className='col-start-2 place-self-end'>
          <Button
            className='m-auto px-16'
            label='Submit'
            type='button'
            variant='primary'
          />
        </div>
      </div>
    </div>
  );
};
