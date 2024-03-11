import { BodyText } from '@/ui/typography';
import Link from 'next/link';

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
          className={` inline-block w-full md:w-auto py-4 justify-center items-center rounded-[5px] px-5 focus:outline-none focus:ring-none font-bold mt-10 ${
            variant == 'primary'
              ? 'text-white bg-cobalt hover:bg-cyan'
              : variant == 'secondary'
                ? 'text-white bg-cyan hover:bg-cobalt'
                : variant == 'tertiary'
                  ? 'text-black bg-cyan hover:bg-deep-blue'
                  : null
          }`}>
          <span className={`mr-[10px] ml-0 ${!hasIcon ? 'hidden' : ''}`}>
            {children}
          </span>
          <span>{label}</span>
        </Link>
      ) : type == 'button' ? (
        // for a submit button
        <button
          className={` inline-block w-full md:w-auto py-4 justify-center items-center rounded-[5px] px-20 focus:outline-none focus:ring-none font-bold ${
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
          <span>{label}</span>
        </button>
      ) : null}
    </>
  );
};
