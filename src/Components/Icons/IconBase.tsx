import React, { SVGProps } from 'react';

const IconBase = ({
  href,
  target,
  width,
  height,
  children,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <a
      href={href}
      target={target ?? '_blank'}
      className='fill-current filter-drop-shadow'>
      <svg
        version='1.1'
        viewBox='0 0 512 512'
        width={width ?? '2.5em'}
        height={height ?? '2.5em'}
        style={{
          fill: 'inherits',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2
        }}
        {...props}>
        {children}
      </svg>
    </a>
  );
};

export default IconBase;
