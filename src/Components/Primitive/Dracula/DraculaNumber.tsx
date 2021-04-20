import type { FC, JSX } from 'preact/compat';

const DraculaNumber: FC<
  JSX.HTMLAttributes<HTMLSpanElement> & {
    value: number;
    options?: Intl.NumberFormatOptions;
  }
> = ({ value, options, className, ...props }) => (
  <span
    className={`text-purple font-semibold ${className ? className : ''}`}
    {...props}>
    {Intl.NumberFormat(navigator.language, options).format(value)}
  </span>
);

export default DraculaNumber;
