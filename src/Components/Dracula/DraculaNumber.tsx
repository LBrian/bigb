import type { FC, JSX } from 'preact/compat';

const DraculaNumber: FC<
  JSX.HTMLAttributes<HTMLSpanElement> & { value: number }
> = ({ value, className, ...props }) => (
  <span
    className={`text-purple font-semibold ${className ? className : ''}`}
    {...props}>
    {Intl.NumberFormat(navigator.language).format(value)}
  </span>
);

export default DraculaNumber;
