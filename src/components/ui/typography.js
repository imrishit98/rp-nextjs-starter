export const H1 = ({ className, children }) => {
  return (
    <h1
      className={
        'text-[38px] md:text-[50px] leading-[48px] md:leading-[60px] font-bold' +
        ' ' +
        className
      }
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }) => {
  return (
    <h2
      className={
        'text-[35px] md:text-[50px] leading-[45px] md:leading-[60px] font-bold' +
        ' ' +
        className
      }
    >
      {children}
    </h2>
  );
};
export const H3 = ({ className, children }) => {
  return (
    <h3 className={'text-[25px] leading-[38px] font-bold' + ' ' + className}>
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }) => {
  return (
    <h4 className={'text-[25px] leading-[30px] font-bold' + ' ' + className}>
      {children}
    </h4>
  );
};

export const Subtext = ({ className, children }) => {
  return (
    <p className={'text-[18px] leading-[27px]' + ' ' + className}>{children}</p>
  );
};

export const Paragraph = ({ className, children }) => {
  return (
    <p className={'text-[16px] leading-[24px]' + ' ' + className}>{children}</p>
  );
};

export const Small = ({ className, children }) => {
  return (
    <p className={'text-[14px] leading-[24px]' + ' ' + className}>{children}</p>
  );
};

export const ExtraSmall = ({ className, children }) => {
  return (
    <p className={'text-[12px] leading-[18px]' + ' ' + className}>{children}</p>
  );
};
