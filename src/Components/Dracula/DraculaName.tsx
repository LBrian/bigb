import type { FC, JSX } from 'preact/compat';
import { useContext } from 'preact/hooks';

import { AppContext } from 'AppContextProvider';

const DraculaName: FC<JSX.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  const { darkMode } = useContext(AppContext);

  return (
    <span
      className={`${darkMode ? 'text-neon-blue' : 'text-gray'} ${className}`}
      {...props}>
      {children}
    </span>
  );
};

export default DraculaName;
