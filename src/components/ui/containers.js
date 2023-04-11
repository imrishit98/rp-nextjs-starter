export const Container = ({ className, children }) => {
  return (
    <div
      className={
        'container w-full px-4 mx-auto md:px-8 lg:px-20 xl:px-40 justify-center items-center' +
        ' ' +
        className
      }
    >
      {children}
    </div>
  );
};
