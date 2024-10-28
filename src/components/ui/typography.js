import { cn } from '@/utils/shadcn';

/**
 * Collection of typography components with consistent styling.
 * Includes h1, h2, h3, and paragraph components with responsive text sizes.
 */

/**
 * H1 heading component with extra bold weight and tracking.
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Content to be rendered within the heading
 * @returns {JSX.Element} H1 heading
 */
export const H1 = ({ className, children, ...props }) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...props}>
      {children}
    </h1>
  );
};

/**
 * H2 heading component with bold weight and tracking.
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Content to be rendered within the heading
 * @returns {JSX.Element} H2 heading
 */
export const H2 = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
        className,
      )}
      {...props}>
      {children}
    </h2>
  );
};

/**
 * H3 heading component with bold weight and tracking.
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Content to be rendered within the heading
 * @returns {JSX.Element} H3 heading
 */
export const H3 = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl',
        className,
      )}
      {...props}>
      {children}
    </h3>
  );
};

/**
 * Paragraph component with consistent line height and margin.
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {React.ReactNode} props.children - Content to be rendered within the paragraph
 * @returns {JSX.Element} Paragraph element
 */
export const P = ({ className, children, ...props }) => {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}>
      {children}
    </p>
  );
};
