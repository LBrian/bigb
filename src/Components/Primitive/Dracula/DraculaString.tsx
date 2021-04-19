import type { FC, JSX } from 'preact/compat';
import { useContext } from 'preact/hooks';

import { AppContext } from 'AppContextProvider';

const DraculaString: FC<JSX.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  const { darkMode } = useContext(AppContext);

  return (
    <span
      className={`font-normal ${darkMode ? 'text-yellow' : 'text-blue-gray'} ${
        className ? className : ''
      }`}
      {...props}>
      {children}
    </span>
  );
};

export default DraculaString;
