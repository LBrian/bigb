import React, { PropsWithChildren, HTMLAttributes } from 'react';

import { DraculaName } from './Dracula';

interface SectionProps {
  align?: 'left' | 'right';
}

const Section = ({
  align,
  title,
  children,
  className,
  ...props
}: PropsWithChildren<SectionProps> & HTMLAttributes<HTMLDivElement>) => {
  const [textAlign, justifyItems] =
    align === 'right'
      ? ['md:text-right', 'md:justify-end']
      : align === 'left'
      ? ['md:text-left', 'md:justify-start']
      : ['', ''];

  return (
    <div
      className={`pt-40 ml-auto w-full md:w-4/5 ${textAlign} ${
        className ? className : ''
      }`}
      {...props}>
      <div
        className={`mb-20 whitespace-nowrap flex items-center ${justifyItems}`}>
        <span className='font-vt323 text-pink mr-4 text-xl md:text-3xl font-bold'>
          &#60;&#47;&#62;
        </span>
        <DraculaName className='font-extrabold text-4xl md:text-5xl'>
          {title}
        </DraculaName>
      </div>
      {children}
    </div>
  );
};

export default Section;
