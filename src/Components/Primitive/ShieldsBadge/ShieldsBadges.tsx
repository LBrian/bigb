import type { FC, JSX } from 'preact/compat';
import { useInView } from 'react-intersection-observer';

import ShieldsBadge, { ShieldsBadgeProps } from './ShieldsBadge';

type ShieldsBadgesProps = JSX.HTMLAttributes<HTMLDivElement> & {
  badges?: ShieldsBadgeProps[];
};

const ShieldsBadges: FC<ShieldsBadgesProps> = ({
  badges,
  children,
  className,
  ...props
}) => {
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
