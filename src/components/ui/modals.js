import { BodyText, H3 } from '@/ui/typography';

import { CloseIcon } from '@/svgs/icons';
import { GeneralForm } from '@/forms/general-form';
import Image from 'next/image';
import { Modal } from 'flowbite-react';
import { useRouter } from 'next/router';

// WIP ImageModal is NOT ready for review yet.

/**
 * @description - this component uses the Flowbite-react Modal component in order to load the image in its original size
 * @param {boolean} isModalOpen - state variable to determine whether the modal is open or close
 * @param {*} setIsModalOpen - the state function that sets the state variable when the modal is either open or close
 * @param {url} imgSrc - url of the image
 * @param {number} imgOW - the original width of the image
 * @param {number} imgOH - the original height of the image
 * @param {string} imgAlt - the alt text
 */
export const ImageModal = ({
  isModalOpen,
  setIsModalOpen,
  imgSrc,
  imgOW,
  imgOH,
  imgAlt,
}) => {
  return (
    <Modal
      dismissible
      show={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto bg-gray-900 top-20 bg-opacity-80 pt-28 md:pt-0 h-[100vh]'>
      <div className='relative h-full mx-auto md:h-auto'>
        <div className='relative shadow'>
          {/* the modal close button */}
          <button
            type='button'
            className='absolute z-10 top-4 right-5 bg-transparent p-1.5 ml-auto inline-flex items-center lg:-mr-[30%] md:-mr-[10%]'
            data-modal-hide='popup-modal'
            aria-label='Close'
            onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
            <span className='sr-only'>Close popup image</span>
          </button>
          <div className='grid grid-cols-1 text-center'>
            <div className={`md:-ml-[30%] md:-mr-[30%] md:w-[${imgOW}px] relative`}>
              {/* this the image loaded in its original width and height */}
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={imgOW}
                height={imgOH}
                className='inline-block w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

/**
 * @description - FormModal component is used to load the form in a popup modal usually from the navigation button or a button in a section. This example here specifically loads the form in a modal when the contact button in the navigation bar is clicked.
 * @param {string} pageTitle - used for page title tracking, could also be used for form title in some specific cases
 * @returns
 */

export const FormModal = ({ pageTitle }) => {
  const router = useRouter();
  const handleRoute = () => {
    // Preserve existing query parameters and remove showForm parameter
    const newQuery = { ...router.query };
    delete newQuery.showForm;
    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-[1000] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-[#0a416bd9]`}>
        <div
          id='contact-form-modal'
          className='relative w-[900px] max-w-lg lg:max-w-4xl mx-auto bg-white border-deep-blue shadow-lg p-6 lg:p-10 rounded-[10px]'>
          <div className='relative'>
            {/* modal close button */}
            <div className='flex justify-end w-full'>
              <span
                id='modal-close-btn'
                className='cursor-pointer'
                onClick={handleRoute}>
                <CloseIcon />
              </span>
            </div>
            <H3>Form in a modal</H3>
            <BodyText>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </BodyText>
            <GeneralForm pageTitle={pageTitle} />
          </div>
        </div>
      </div>
    </>
  );
};
