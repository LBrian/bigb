import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { useContext } from 'preact/hooks';

import { AppContext } from 'App';

const DraculaString = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => {
  const { darkMode } = useContext(AppContext);

  return (
    <span
      className={`${darkMode ? 'text-yellow' : 'text-blue-gray'} ${
        className ? className : ''
      }`}
      {...props}>
      {children}
    </span>
  );
};

export default DraculaString;
