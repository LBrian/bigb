import React, { HTMLAttributes } from 'react';

const DraculaNumber = ({
  value,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { value: number }) => (
  <span
    className={`text-purple font-semibold ${className ? className : ''}`}
    {...props}>
    {Intl.NumberFormat(navigator.language).format(value)}
  </span>
);

export default DraculaNumber;
