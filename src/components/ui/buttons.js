import { BodyText } from '@/components/ui/typography';
import Link from 'next/link';
import React from 'react';

export const FooterLink = ({ link, conversionPageUrl, label, className }) => {
  return (
    <Link
      href={conversionPageUrl ? link + '?conversionPageUrl=' + conversionPageUrl : link}
      className={` text-gray-400 ${className}`}>
      <BodyText className='inline'>{label}</BodyText>
    </Link>
  );
};

export const PrimaryButton = ({
  id,
  link,
  label,
  className,
  hasIcon,
  children,
  ...props
}) => {
  return (
    <Link
      id={id}
      href={link}
      className={
        'flex py-4 justify-center items-center rounded-[5px] text-white bg-cobalt px-5 focus:outline-none focus:ring-none hover:bg-cyan font-bold ' +
        className
      }
      {...props}>
      <span className={` 'mr-[10px] ml-0 ' ${!hasIcon ? 'hidden' : ''}`}>
        {children}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export const SecondaryButton = ({
  id,
  link,
  label,
  className,
  hasIcon,
  children,
  ...props
}) => {
  return (
    <Link
      id={id}
      href={link}
      className={
        'flex justify-center items-senter py-4 rounded-[5px] text-white bg-cyan px-5 focus:outline-none focus:ring-none hover:bg-cobalt font-bold ' +
        className
      }
      {...props}>
      <span
        className={`mr-[10px] ml-0 '
         ${!hasIcon ? 'hidden' : ''}`}>
        {children}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export const SubmitButton = ({ label, children, className, ...props }) => {
  return (
    <button
      className={`block py-3 text-center text-white rounded-lg bg-cobalt md:inline-block hover:bg-cyan focus:outline-none focus:ring ${className}`}
      type='submit'>
      <span>{label}</span>
    </button>
  );
};
