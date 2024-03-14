import { BodyText, H3 } from '@/ui/typography';

import { Button } from '@/ui/buttons';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const NewsletterForm = () => {
  const router = useRouter();

  const [submitSuccess, setSubmitSuccess] = useState(false);

  // this handler should be further extended for a real project
  const handleSubmit = e => {
    // e.preventDefault();
    // const submitURL = `/api/newsletter-form`;
    // const formData = new FormData(e.target);
    // if (formData) {
    //   const data = {
    //     email: formData.get('email'),
    //     page: router.pathname,
    //   };
    //   axios
    //     .post(submitURL, data)
    //     .then(res => {
    //       setSubmitSuccess(true);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       alert('There was an error submitting your form. Please try again.');
    //     });
    // }
  };

  return (
    <>
      <div className='text-center'>
        <H3 className='font-bold text-white'>
          {submitSuccess ? (
            'Thank you for subscribing!'
          ) : (
            <span>Newsletter subscription form</span>
          )}
        </H3>
        <BodyText className='mt-5 text-white'>
          {submitSuccess
            ? 'You will receive an email shortly with a link to confirm your subscription.'
            : 'Receive the latest blog posts and news updates. No spam.'}
        </BodyText>
        <div className='mt-8'>
          {!submitSuccess ? (
            <form
              className='flex flex-col items-center justify-center md:gap-4'
              onSubmit={handleSubmit}>
              <div className='flex flex-col w-full gap-4 md:flex-row md:justify-center'>
                <input
                  className={`w-full px-6 py-4 placeholder-black border rounded-md focus:border-cobalt border-gray' md:w-96`}
                  name='email'
                  type='email'
                  placeholder='Email *'
                  required
                />
                <Button
                  label='Subscribe'
                  type='button'
                  variant='tertiary'
                  className='px-10'
                />
              </div>

              <div className='flex'>
                <input
                  id='newsletterCheckbox'
                  type='checkbox'
                  defaultValue
                  className='focus:ring-2 focus:ring-transparent text-black w-4 h-4 p-2.5 bg-gray-50 rounded border border-gray-300'
                  required
                />

                <label
                  htmlFor='newsletterCheckbox'
                  className='ml-2 text-left cursor-pointer'>
                  <BodyText className='text-white'>
                    I agree to receive email communications from ion8
                  </BodyText>
                </label>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};
