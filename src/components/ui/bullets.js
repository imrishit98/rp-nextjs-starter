import { BodyText } from '@/ui/typography';
import { EllipseIcon } from '@/svgs/icons';

/**
 * @description - This component is used for creating bulletted lists.
 * @param {string} color - the color of the bullet
 * @returns
 */

export const Bullet = ({ color, className = '', children }) => {
  return (
    <li className={`flex ${className}`}>
      <span className='w-[11px]'>
        <EllipseIcon
          className='w-full h-[11px] mr-3 mt-[6px]'
          color={color}
        />
      </span>
      <BodyText className='inline-block ml-3'>{children}</BodyText>
    </li>
  );
};
