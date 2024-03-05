import { BodyText } from '@/ui/typography';
import { EllipseIcon } from '@/svgs/icons';

export const Bullet = ({ className, children }) => {
  return (
    <li className={`flex ${className}`}>
      <span className='w-[11px]'>
        <EllipseIcon className='w-full h-[11px] mr-3 mt-[6px]' />
      </span>
      <BodyText className='inline-block ml-3'>{children}</BodyText>
    </li>
  );
};
