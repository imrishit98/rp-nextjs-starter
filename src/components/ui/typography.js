import Link from 'next/link';

export const H1 = ({ className = '', children, ...props }) => {
  return (
    <h1
      className={
        'text-[38px] md:text-[50px] leading-[48px] md:leading-[60px] font-bold' +
        ' ' +
        className
      }
      {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({ className = '', children, ...props }) => {
  return (
    <h2
      className={
        'text-[35px] md:text-[50px] leading-[45px] md:leading-[60px] font-bold' +
        ' ' +
        className
      }
      {...props}>
      {children}
    </h2>
  );
};
export const H3 = ({ className = '', children, ...props }) => {
  return (
    <h3
      className={'text-[30px] leading-[38px] font-bold' + ' ' + className}
      {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({ className = '', children, ...props }) => {
  return (
    <h4
      className={'text-[25px] leading-[30px] font-bold' + ' ' + className}
      {...props}>
      {children}
    </h4>
  );
};

// Used in Content Headings
export const H5 = ({ className = '', children, ...props }) => {
  return (
    <h4
      className={'text-lg font-semibold leading-snug font-inter' + ' ' + className}
      {...props}>
      {children}
    </h4>
  );
};

// Used in Content Headings
export const H6 = ({ className = '', children, ...props }) => {
  return (
    <h6
      className={'text-2xl font-bold leading-loose font-inter' + ' ' + className}
      {...props}>
      {children}
    </h6>
  );
};

export const BodyText = ({ className = '', children, ...props }) => {
  return (
    <div
      className={'leading-normal text-base font-poppins' + ' ' + className}
      {...props}>
      {children}
    </div>
  );
};

export const LgText = ({ className = '', children, ...props }) => {
  return (
    <p
      className={'text-[18px] leading-[27px]' + ' ' + className}
      {...props}>
      {children}
    </p>
  );
};

export const SmText = ({ className = '', children, ...props }) => {
  return (
    <p
      className={'text-[14px] leading-[24px]' + ' ' + className}
      {...props}>
      {children}
    </p>
  );
};

export const XsText = ({ className = '', children, ...props }) => {
  return (
    <p
      className={'text-[12px] leading-[18px]' + ' ' + className}
      {...props}>
      {children}
    </p>
  );
};

export const NavbarLink = ({ link, children, ...props }) => {
  return (
    <Link
      href={link}
      className='block md:inline-block md:px-4 xl:px-7 focus:outline-none focus:ring-0'
      {...props}>
      {/* dropdown menu items */}
      {children}
    </Link>
  );
};

export const FooterLabel = ({ className = '', children, ...props }) => {
  return (
    <p
      className={
        'text-sm leading-tight font-poppins text-white font-semibold uppercase' +
        ' ' +
        className
      }
      {...props}>
      {children}
    </p>
  );
};
