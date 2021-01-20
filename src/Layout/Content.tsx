import type { FC } from 'preact/compat';

const Content: FC = ({ children }) => {
  return (
    <div className='py-20 px-4 sm:px-14 md:px-32 lg:px-48 xl:px-64 font-sans'>
      {children}
    </div>
  );
};

export default Content;
