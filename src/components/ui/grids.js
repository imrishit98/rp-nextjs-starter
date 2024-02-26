import { BodyText, H1, H3, H4, LgText } from '@/components/ui/typography';

import Image from 'next/image';

/** This component is mainly for the grids that have different type of content in each column, eg. image on the right column and text on the left column or vice versa - could be further extended
 * @param {string} title - title of the section
 * @param {string} desc - description of the section
 * @param {string} imgSrc - image source URL
 * @param {string} imgAlt - image alt
 * @param {string} imgW - image width
 * @param {string} imgH - image height
 * @param {string} isHero - if present then the conditions for the hero section will apply
 * @param {string} imgOnTheLeft - if present then image is located in the left column of the grid
 * @param {string} bgColor -
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
  bgLight,
  className,
}) => {
  return (
    <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 ${className} `}>
      <div className='my-auto text-center lg:text-left'>
        {isHero ? (
          <>
            <H1 className={` ${bgLight ? 'text-black' : 'text-white'} mb-9`}>{title}</H1>
            <LgText className={`${bgLight ? 'text-black' : 'text-white'}`}>
              {desc}
            </LgText>
          </>
        ) : (
          <>
            <H3 className={` ${bgLight ? 'text-black' : 'text-white'} mb-9`}>{title}</H3>
            <BodyText className={`${bgLight ? 'text-black' : 'text-white'}`}>
              {desc}
            </BodyText>
          </>
        )}
      </div>
      <div className={`${imgOnTheLeft ? 'order-first' : null}`}>
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

// the RepeatableCols component is for those grid layouts that have the same type of data in each column - mostly in this order: image, title, description - can be extended further

/**
 *
 * @param {integer} numberOfCols - number of columns of the grid
 * @param {string} align - right / left / center
 * @returns
 */
export const RepeatableCols = ({ numberOfCols, align }) => {
  const data = [
    {
      imgSrc: 'https://via.placeholder.com/600x300/00EBF4/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Whether you're an established law firm or just starting out, our Clio Certified Consultants are able to get you set up quickly by automating processes, implementing integrations, and customizing Clio to suit your practice's needs.`,
    },
    {
      imgSrc: 'https://via.placeholder.com/600x300/00EBF4/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Whether you're an established law firm or just starting out, our Clio Certified Consultants are able to get you set up quickly by automating processes, implementing integrations, and customizing Clio to suit your practice's needs.`,
    },
    {
      imgSrc: 'https://via.placeholder.com/600x300/00EBF4/ffffff',
      imgAlt: '',
      title: 'H4 heading',
      desc: `Whether you're an established law firm or just starting out, our Clio Certified Consultants are able to get you set up quickly by automating processes, implementing integrations, and customizing Clio to suit your practice's needs.`,
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
