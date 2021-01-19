import 'content-visibility';
import type { FC, JSX } from 'preact/compat';

import { DraculaName } from './Dracula';

type SectionProps = JSX.HTMLAttributes<HTMLDivElement> & {
  align?: 'left' | 'right';
};

const Section: FC<SectionProps> = ({
  align,
  title,
  children,
  className,
  ...props
}) => {
  const [textAlign, justifyItems] =
    align === 'right'
      ? ['ml-auto md:text-right md:w-4/5', 'md:justify-end']
      : align === 'left'
      ? ['mr-auto md:text-left md:w-4/5', 'md:justify-start']
      : ['', ''];

  return (
    <content-visibility>
      <div
        className={`pt-40 w-full ${textAlign} ${justifyItems} ${
          className ? className : ''
        }`}
        {...props}>
        <div
          className={`mb-20 whitespace-nowrap flex items-center ${justifyItems}`}>
          <span className='font-vt323 text-pink mr-4 text-xl md:text-3xl font-bold'>
            &#60;&#47;&#62;
          </span>
          <DraculaName className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
            {title}
          </DraculaName>
        </div>
        {children}
      </div>
    </content-visibility>
  );
};

export default Section;
