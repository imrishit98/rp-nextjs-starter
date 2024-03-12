import { CloseIcon } from '@/svgs/icons';
import { GeneralForm } from '@/forms/general-form';
import Image from 'next/image';
import { Modal } from 'flowbite-react';
import { useRouter } from 'next/router';

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
      <div className='relative h-full mx-auto md:h-auto py-10'>
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
        className={`fixed inset-0 z-[1000] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-[#00061866]`}>
        <div
          id='contact-form-modal'
          className='relative w-[900px] max-w-lg lg:max-w-4xl mx-auto bg-deep-blue border-oxford border-[3px] shadow-lg sm:my-20 lg:my-6 rounded-[20px]'>
          <div className='relative flex flex-col border-0 w-full mx-auto outline-none focus:outline-none md:w-full p-3 sm:p-8 lg:p-16 xl:p-[100px]'>
            <div className='flex justify-end w-full'>
              <span
                id='modal-close-btn'
                className='cursor-pointer'
                onClick={handleRoute}>
                {/* <CloseIcon /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18 6L6 18M6 6l12 12'></path>
                </svg>
              </span>
            </div>
            <GeneralForm pageTitle={pageTitle} />
          </div>
        </div>
      </div>
    </>
  );
};
