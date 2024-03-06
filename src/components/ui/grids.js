import { BodyText, H1, H3, H4, LgText } from '@/ui/typography';

import { Button } from '@/ui/buttons';
import Image from 'next/image';

/**
 * @description - This component is mainly for the grids that have different type of content in each column, eg. image on the right column and text on the left column or vice versa - could be further extended
 * @param {string} title - title of the section
 * @param {string} desc - description of the section
 * @param {string} imgSrc - image source URL
 * @param {string} imgAlt - image alt
 * @param {string} imgW - image width
 * @param {string} imgH - image height
 * @param {boolean} isHero - if present then the conditions for the hero section will apply
 * @param {boolean} imgOnTheLeft - if present then image is located in the left column of the grid
 */

export const TwoColsWImg = ({
  title,
  desc,
  imgSrc,
  imgAlt,
  imgW,
  imgH,
  isHero,
  imgOnTheLeft,
  className,
}) => {
  return (
    <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 ${className} `}>
      <div className='my-auto text-center lg:text-left'>
        {isHero ? (
          <>
            <H1 className='text-black mb-9'>{title}</H1>
            <LgText className='text-black'>{desc}</LgText>
            <Button
              link='#'
              label='Learn more'
              variant='secondary'
              type='link'
              className='w-full mx-auto md:w-[200px] lg:ml-0'
            />
          </>
        ) : (
          <>
            <H3 className='text-black mb-9'>{title}</H3>
            <BodyText className='text-black'>{desc}</BodyText>
          </>
        )}
      </div>
      <div className={`${imgOnTheLeft ? 'order-first' : 'order-first lg:order-last'}`}>
        <Image
          src={imgSrc}
          width={imgW}
          height={imgH}
          alt={imgAlt}
          className='w-[490px] m-auto'
        />
      </div>
    </div>
  );
};

/**
 * @description - the RepeatableCols component is for those grid layouts that have the same type of data in each column mostly in this order: image, title, description - can be extended further
 * @param {integer} numberOfCols - number of columns in the grid.
 * @param {string} align - right / left / center
 */
export const RepeatableCols = ({ numberOfCols, align }) => {
  // the data can be moved to and exported from a data file under utils/ to increase maintenance and organization
  const data = [
    {
      imgSrc: 'https://via.placeholder.com/600x300/00EBF4/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      imgSrc: 'https://via.placeholder.com/600x300/00AEEF/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      imgSrc: 'https://via.placeholder.com/600x300/115C89/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
    },
  ];

  return (
    <div className={`grid grid-cols-1 gap-5 lg:grid-cols-${numberOfCols}`}>
      {data.map((col, index) => (
        <div
          key={index}
          className={`text-${align}`}>
          <Image
            src={col.imgSrc}
            alt={col.imgAlt}
            width={556}
            height={192}
            className='h-[150px] w-auto px-4 mx-auto'
          />
          <H4 className='my-9'>{col.title}</H4>
          <BodyText className=''>{col.desc}</BodyText>
        </div>
      ))}
    </div>
  );
};
