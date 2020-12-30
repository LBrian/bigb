import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { useContext } from 'preact/hooks';

import { AppContext } from 'App';

const DraculaName = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => {
  const { darkMode } = useContext(AppContext);

  return (
    <span
      className={`${darkMode ? 'text-sky-blue' : 'text-gray'} ${className}`}
      {...props}>
      {children}
    </span>
  );
};

export default DraculaName;
