import React from 'react';

export const CloseIcon = ({ className, ...props }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M18.8872 6.82495L6.88721 18.825'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.88721 6.82495L18.8872 18.825'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const HamburgerIcon = ({ className, ...props }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M3.5 12H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 6H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 18H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const SubmitIcon = () => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='inline-block'
    >
      <path
        d='M12.298 1.06045C12.2296 1.04944 12.1596 1.05361 12.0929 1.07266C12.0263 1.09171 11.9646 1.12517 11.9123 1.17067C11.8601 1.21618 11.8184 1.27262 11.7904 1.336C11.7623 1.39938 11.7485 1.46815 11.75 1.53745V4.39745C11.75 4.59645 11.87 4.77145 12.036 4.88145C12.539 5.21745 12.87 5.79145 12.87 6.44445V8.44445C12.87 9.47445 12.03 10.3244 11 10.3244C9.96 10.3244 9.12 9.47445 9.12 8.44445V6.44445C9.12 5.79145 9.458 5.21745 9.964 4.88145C10.129 4.77145 10.25 4.59645 10.25 4.39845V1.53845C10.2516 1.46907 10.2379 1.40018 10.21 1.33668C10.182 1.27318 10.1403 1.21661 10.088 1.17099C10.0357 1.12537 9.97405 1.09182 9.90734 1.07272C9.84062 1.05361 9.77052 1.04943 9.702 1.06045C8.18555 1.32801 6.78825 2.05599 5.7 3.14545C5.00265 3.8407 4.44936 4.66673 4.07184 5.57621C3.69432 6.48569 3.5 7.46073 3.5 8.44545V13.4454C3.5 17.5754 6.87 20.9454 11 20.9454C15.13 20.9454 18.5 17.5754 18.5 13.4454V8.44545C18.5 4.75545 15.813 1.67845 12.298 1.06045Z'
        fill='white'
      />
    </svg>
  );
};
