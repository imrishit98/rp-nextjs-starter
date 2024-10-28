/**
 * Hamburger menu icon component.
 * Used for mobile navigation toggle button.
 * @component
 * @returns {JSX.Element} SVG hamburger menu icon
 */
export const MenuIcon = () => {
  return (
    <svg
      className='w-6 h-6'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path d='M4 6h16M4 12h16m-7 6h7' />
    </svg>
  );
};

/**
 * Close (X) icon component.
 * Used for closing mobile navigation menu.
 * @component
 * @returns {JSX.Element} SVG close icon
 */
export const CloseIcon = () => {
  return (
    <svg
      className='w-6 h-6'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};
