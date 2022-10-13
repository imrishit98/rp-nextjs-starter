export const Container = ({ className, children }) => {
  return (
    <div
      className={
        'container w-full px-2 mx-auto md:px-8 lg:px-20 xl:px-40' +
        ' ' +
        className
      }
    >
      {children}
    </div>
  );
};
