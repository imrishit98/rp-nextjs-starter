import { BodyText } from '@/ui/typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const FormPopupBtn = ({ label, className, ...props }) => {
  const router = useRouter();
  const handleRoute = () => {
    // Preserve existing query parameters and add showForm parameter
    const newQuery = { ...router.query, showForm: true };
    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true,
    });
  };
  return (
    <button
      className={
        `flex justify-center items-center py-[10px] rounded-[5px] text-white bg-cyan px-9 focus:outline-none focus:ring-none hover:bg-cobalt ` +
        className
      }
      onClick={handleRoute}
      {...props}>
      {label ? <span>{label}</span> : <span>Request a quote</span>}
    </button>
  );
};

/**
 * @description - this component is particular to the footer section links
 * @param {url} link - url to the destination
 * @param {string} conversionPageUrl - the query param of the current page so that we could track the user click landing
 * @param {string} label - text to be displayed
 * @returns
 */
export const FooterLink = ({ link, conversionPageUrl, label, className = '' }) => {
  return (
    <Link
      href={conversionPageUrl ? link + '?conversionPageUrl=' + conversionPageUrl : link}
      className={` text-gray-400 ${className}`}>
      <BodyText className='inline'>{label}</BodyText>
    </Link>
  );
};

/**
 * @description - Submit or link button based on Figma styleguide definition
 * @param {url} link - url to the destination
 * @param {string} label - text to be displayed
 * @param {string} variant - possible values are primary or secondary and if not exists then it will be default(tertiary) based on Figma
 * @param {boolean} hasIcon - if an icon exists
 * @param {string} type - possible values are button or link
 * @returns
 */
export const Button = ({
  id,
  link,
  label,
  variant,
  hasIcon,
  type,
  className = '',
  children,
  ...props
}) => {
  return (
    <>
      {type == 'link' ? (
        // for a link button
        <Link
          id={id}
          href={link}
          className={` inline-block w-full md:w-auto py-5 justify-center items-center rounded-xl px-6 focus:outline-none focus:ring-none sm:mt-10 ${
            variant == 'primary'
              ? 'text-white bg-burnt-sienna-bs600 hover:bg-burnt-sienna-bs900'
              : variant == 'secondary'
                ? 'text-white bg-purple-p700 hover:bg-purple-p900'
                : variant == 'tertiary'
                  ? 'text-black bg-cyan hover:bg-deep-blue'
                  : null
          }`}>
          <span className={`mr-[10px] ml-0 ${!hasIcon ? 'hidden' : ''}`}>
            {children}
          </span>
          <span className={className}>{label}</span>
        </Link>
      ) : type == 'button' ? (
        // for a submit button
        <button
          className={` inline-block w-full md:w-auto py-4 justify-center items-center rounded-xl px-20 focus:outline-none focus:ring-none font-bold ${
            variant == 'primary'
              ? 'text-white bg-cobalt hover:bg-cyan'
              : variant == 'secondary'
                ? 'text-white bg-cyan hover:bg-cobalt'
                : variant == 'tertiary'
                  ? 'text-black bg-cyan hover:bg-light-blue'
                  : null
          }`}
          type='submit'>
          <span className={`mr-[10px] ml-0 ${!hasIcon ? 'hidden' : ''}`}>
            {children}
          </span>
          <span className={className}>{label}</span>
        </button>
      ) : null}
    </>
  );
};

/**
 * @description - This button is used as a next/back button for the two-step-form.js
 * @param {string} label - label of the button
 * @param {string} className - extra TailwindCSS classes if needed
 * @param {*} props - the onClick event handler
 * @returns
 */
export const ButtonNoLink = ({ label, className, ...props }) => {
  return (
    <div
      className={
        'inline-block py-[14px] justify-center items-center text-white rounded-[8px] px-6 focus:outline-none focus:ring-none bg-cyan hover:bg-teal disabled:bg-[#d1d5db] cursor-pointer ' +
        className
      }
      {...props}>
      <span className='text-base font-normal'>{label}</span>
    </div>
  );
};
