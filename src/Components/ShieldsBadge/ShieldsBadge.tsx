import React, { HTMLAttributes } from 'react';

export interface ShieldsBadgeProps {
  label: string;
  value: string;
  color:
    | 'red'
    | 'blue'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'success'
    | 'violet'
    | 'critical'
    | 'inactive'
    | 'lightgrey'
    | 'important'
    | 'brightgreen'
    | 'yellowgreen'
    | 'informational';
}

const ShieldsBadge = ({
  label,
  value,
  color,
  ...props
}: ShieldsBadgeProps & HTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      loading='lazy'
      alt={`${label} ${value}`}
      src={`https://img.shields.io/badge/${encodeURI(label)}-${encodeURI(
        value
      )}-${color}.svg`}
      {...props}
    />
  );
};

export default ShieldsBadge;
