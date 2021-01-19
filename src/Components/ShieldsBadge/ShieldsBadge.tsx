import type { FC, JSX } from 'preact/compat';

export type ShieldsBadgeProps = JSX.HTMLAttributes<HTMLImageElement> & {
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
};

const ShieldsBadge: FC<ShieldsBadgeProps> = ({
  label,
  value,
  color,
  ...props
}) => {
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
