import type { JSX } from 'preact/compat';

interface CountdownProps {
  value: number;
  label: string;
}

const Countdown = ({
  value,
  label,
  className,
  ...rest
}: JSX.HTMLAttributes<HTMLDivElement> & CountdownProps) => {
  return (
    <div
      {...rest}
      className={`flex flex-col p-2 bg-neutral rounded-md text-neutral-content text-2xs ${className}`}>
      <span className='font-mono text-2xl countdown font-semibold'>
        <span style={`--value:${value}`} />
      </span>
      {label}
    </div>
  );
};

export default Countdown;
