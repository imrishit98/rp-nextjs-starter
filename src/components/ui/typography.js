import Link from 'next/link';
import { poppins } from '@/utils/fonts';

export const H1 = ({ className = '', children }) => {
  return (
    <h1
      className={`text-[38px] md:text-[50px] leading-[48px] md:leading-[60px] font-bold ${className} ${poppins.className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({ className = '', children }) => {
  return (
    <h2
      className={`text-[35px] md:text-[50px] leading-[45px] md:leading-[60px] font-bold ${className} ${poppins.className}`}>
      {children}
    </h2>
  );
};
export const H3 = ({ className = '', children }) => {
  return (
    <h3
      className={`text-[30px] leading-[38px] font-bold  ${className} ${poppins.className}`}>
      {children}
    </h3>
  );
};

export const H4 = ({ className = '', children }) => {
  return (
    <h4
      className={`text-[25px] leading-[30px] font-bold ${className} ${poppins.className}`}>
      {children}
    </h4>
  );
};

export const H5 = ({ className = '', children }) => {
  return (
    <h5
      className={`text-[20px] font-semibold leading-snug ${className} ${poppins.className}`}>
      {children}
    </h5>
  );
};

export const H6 = ({ className = '', children }) => {
  return (
    <h6
      className={`text-[12px] font-bold leading-loose ${className} ${poppins.className}`}>
      {children}
    </h6>
  );
};

export const BodyText = ({ className = '', children }) => {
  return (
    <div className={`leading-normal text-base ${className} ${poppins.className}`}>
      {children}
    </div>
  );
};

export const LgText = ({ className = '', children }) => {
  return (
    <p className={`text-[18px] leading-[27px] ${className} ${poppins.className}`}>
      {children}
    </p>
  );
};

export const SmText = ({ className = '', children }) => {
  return (
    <p className={`text-[14px] leading-[24px] ${className} ${poppins.className}`}>
      {children}
    </p>
  );
};

export const XsText = ({ className = '', children }) => {
  return (
    <p className={`text-[12px] leading-[18px] ${className} ${poppins.className}`}>
      {children}
    </p>
  );
};

export const NavbarLink = ({ link, className = '', children }) => {
  return (
    <Link
      href={link}
      className={`block md:inline-block md:px-4 xl:px-7 focus:outline-none focus:ring-0 ${className} ${poppins.className}`}>
      {/* dropdown menu items */}
      {children}
    </Link>
  );
};
