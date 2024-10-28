/**
 * Main content wrapper component.
 * Centers content horizontally and vertically within the page.
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be rendered within the main section
 * @returns {JSX.Element} Main content wrapper
 */
const Main = ({ children }) => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
      {children}
    </main>
  );
};

export default Main;
