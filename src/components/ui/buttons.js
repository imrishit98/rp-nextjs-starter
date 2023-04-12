import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export const SubmitButton = ({
  hasIcon,
  iconOnTheRight,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      className='block px-6 py-3 text-center text-white rounded-lg bg-cobalt md:inline-block hover:bg-cyan focus:outline-none focus:ring'
      type='submit'
    >
      <span
        className={` ${
          iconOnTheRight ? 'order-last ml-[10px] mr-0' : 'mr-[10px] ml-0'
        }
       ${!hasIcon ? 'hidden' : ''}`}
      >
        {children}
      </span>
      <span> {loading ? 'Submitting...' : 'Submit'}</span>
    </button>
  );
};

export const PrimaryButton = ({
  id,
  link,
  label,
  className,
  hasIcon,
  iconOnTheRight,
  children,
  ...props
}) => {
  return (
    <Link
      id={id}
      href={link}
      className={
        'flex py-4 justify-center items-senter rounded-[5px] text-white bg-cobalt px-5 focus:outline-none focus:ring-none hover:bg-cyan font-bold ' +
        className
      }
      {...props}
    >
      <span
        className={` ${
          iconOnTheRight ? 'order-last ml-[10px] mr-0' : 'mr-[10px] ml-0'
        }
       ${!hasIcon ? 'hidden' : ''}`}
      >
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
  iconOnTheRight,
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
      {...props}
    >
      <span
        className={` ${
          iconOnTheRight ? 'order-last ml-[10px] mr-0' : ' mr-[10px] ml-0'
        } ${!hasIcon ? 'hidden' : ''}`}
      >
        {children}
      </span>
      <span>{label}</span>
    </Link>
  );
};
