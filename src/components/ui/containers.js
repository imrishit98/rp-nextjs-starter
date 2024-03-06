import { H2, LgText } from '@/ui/typography';

// this container is used when there's a full bg color or bg noise/pattern

/**
 *
 * @param {boolean} bgNoise - if exists then the bg-noise from the tailwind.config.js will be applied alongside the rest of the attributes.
 * @param {string} className
 * @param {string} children
 * @returns
 */
export const FullWidthContainer = ({ bgNoise, className = '', children }) => {
  return (
    <div
      className={
        `w-full ${bgNoise ? 'bg-noise bg-cobalt bg-cover bg-blend-multiply ' : ''}` +
        className
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

/**
 *
 * @description - this container will have variable top/bottom paddings based on which section it's been used in
 * @param {string} align - takes right or left values and if not set, then it's centered
 * @param {string} className
 * @param {string} children
 * @returns
 */
export const Container = ({ align, className = '', children }) => {
  return (
    <div
      className={`container max-w-screen-xl px-4 mx-auto xl:px-20 justify-center ${
        align == 'left' ? 'items-start' : align == 'right' ? 'items-end' : 'items-center'
      }
    } ${className} scroll-mt-32`}>
      {children}
    </div>
  );
};

/**
 *
 * @description - this component will be used for the section's header wrapped in Container component to adjust Y paddings as well as the X margins
 * @param {string} title - title of the section
 * @param {string} subTitle - sub title of the section if exists
 * @param {boolean} bgDark - if exists then the text color will change accordingly eg. white
 * @param {string} className
 * @param {string} children
 * @returns
 */
export const SectionHeader = ({ title, subTitle, bgDark, className, children }) => {
  return (
    <div className='mb-10 text-center'>
      <H2 className={` ${bgDark ? 'text-white' : 'text-gray-900'}`}>{title}</H2>
      {subTitle ? (
        <LgText className={` ${bgDark ? 'text-gray-300' : 'text-gray-500'} mt-4`}>
          {subTitle}
        </LgText>
      ) : null}

      {children}
    </div>
  );
};
