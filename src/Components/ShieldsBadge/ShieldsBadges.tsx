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
    <div
      className={`flex flex-wrap gap-4 p-4 ${className ? className : ''}`}
      {...props}>
      {badges
        ? badges.map((props, index) => <ShieldsBadge key={index} {...props} />)
        : children}
    </div>
  );
};

export default ShieldsBadges;
