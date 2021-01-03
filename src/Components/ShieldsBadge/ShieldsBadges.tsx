import { useInView } from 'react-intersection-observer';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

import ShieldsBadge, { ShieldsBadgeProps } from './ShieldsBadge';

const ShieldsBadges = ({
  badges,
  children,
  className,
  ...props
}: PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & { badges?: ShieldsBadgeProps[] }
>) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`flex flex-wrap ${className ? className : ''}`}
      {...props}>
      {inView
        ? badges
          ? badges.map((badgeProps, index) => (
              <ShieldsBadge key={index} {...badgeProps} className='mr-1 mb-1' />
            ))
          : children
        : null}
    </div>
  );
};

export default ShieldsBadges;
