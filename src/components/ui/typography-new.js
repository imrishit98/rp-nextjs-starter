import Link from 'next/link';

// import { poppins } from '@/utils/fonts';
// font family could be defined in the tailwind config to make it more per project kinda usage.
// ${poppins.className}

const Display = ({ children }) => {
  return <>{children}</>;
};

Display.ExtraLarge = ({ children, className = '' }) => {
  return (
    <div className={`text-[80px] leading-[88px] -tracking-[0.8px] ${className}`}>
      {children}
    </div>
  );
};

Display.Large = ({ children, className = '' }) => {
  return (
    <div className={`text-[64px] leading-[76.8px] -tracking-[0.5px] ${className}`}>
      {children}
    </div>
  );
};

Display.Medium = ({ children, className = '' }) => {
  return (
    <div className={`text-[56px] leading-[67.2px] -tracking-[0.25px] ${className}`}>
      {children}
    </div>
  );
};

// and so on

Display.Small = ({ children, className = '' }) => {
  return <div className={`${className} `}>{children}</div>;
};

export default Display;
