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
  return (
    <div className={`flex flex-wrap ${className ? className : ''}`} {...props}>
      {badges
        ? badges.map((badgeProps, index) => (
            <ShieldsBadge key={index} {...badgeProps} className='mr-1 mb-1' />
          ))
        : children}
    </div>
  );
};

export default ShieldsBadges;
