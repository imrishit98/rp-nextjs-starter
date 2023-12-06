import { H2, LgText } from '@/ui/typography';

// this container is used when there's a full bg color or bg pattern
export const FullWidthContainer = ({ className = '', bgPattern, children }) => {
  return (
    <div
      className={
        `w-full ${
          bgPattern ? 'bg-pattern bg-gray-800 bg-cover bg-blend-multiply ' : ''
        }` + className
      }>
      <div
        className={
          `container max-w-screen-xl px-4 mx-auto xl:px-20 justify-center items-center py-[50px] xl:py-[100px] ` +
          className
        }>
        {children}
      </div>
    </div>
  );
};

// this container will have variable top/bottom paddings based on which section it's been used
export const Container = ({ className = '', align, children, ...props }) => {
  return (
    <div
      className={`container max-w-screen-xl px-4 mx-auto xl:px-20 justify-center ${
        align == 'left' ? 'items-start' : align == 'right' ? 'items-end' : 'items-center'
      }
    } ${className} scroll-mt-32`}
      {...props}>
      {children}
    </div>
  );
};

// this component will be used for the section's header wrapped in Container component to adjust top/bottom paddings
export const SectionHeader = ({ title, desc, bgDark, className, children }) => {
  return (
    <div className={className}>
      <H2 className={` ${bgDark ? 'text-white' : 'text-gray-900'}`}>{title}</H2>
      {desc ? (
        <LgText className={` ${bgDark ? 'text-gray-300' : 'text-gray-500'} mt-4`}>
          {desc}
        </LgText>
      ) : null}

      {children}
    </div>
  );
};
