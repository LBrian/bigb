import React from 'react';

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

const ShieldsBadge = ({ label, value, color }: ShieldsBadgeProps) => {
  return (
    <img
      loading='lazy'
      alt={`${label} ${value}`}
      src={`https://img.shields.io/badge/${encodeURI(label)}-${encodeURI(
        value
      )}-${color}.svg`}
    />
  );
};

export default ShieldsBadge;
