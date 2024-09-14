import { cn } from '@/utils/shadcn';

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
