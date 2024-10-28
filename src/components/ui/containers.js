import { cn } from '@/utils/shadcn';

/**
 * Responsive container component with consistent padding and max-width.
 * Uses Tailwind's container utilities with custom padding at different breakpoints.
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Content to be rendered within the container
 * @returns {JSX.Element} Container wrapper
 */
export const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        'container w-full px-2 mx-auto md:px-8 lg:px-20 xl:px-40',
        className
      )}
    >
      {children}
    </div>
  );
};
