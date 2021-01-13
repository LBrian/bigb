import React, { useContext, HTMLAttributes, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import { AppContext } from 'App';

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  imageSrc?: string;
  threshold?: number;
  bgColor?:
    | 'bg-orange'
    | 'bg-purple'
    | 'bg-pink'
    | 'bg-red'
    | 'bg-gray'
    | 'bg-blue-gray';
}

const Card = ({
  title,
  imageSrc,
  children,
  className,
  threshold = 0.6,
  bgColor,
  ...props
}: PropsWithChildren<CardsProps>) => {
  const { darkMode } = useContext(AppContext);
  const [ref, inView] = useInView({ threshold, delay: 200 });

  return (
    <div className={`flip-card ${className ?? ''}`} {...props}>
      <div
        ref={ref}
        className={`flip-card-content ${bgColor ? bgColor : ''} ${
          inView ? 'flip-card-in-view' : 'opacity-40'
        }`}>
        <div className='flip-card-image'>
          <img src={imageSrc} alt={title} loading='lazy' />
        </div>
        <div
          className={`flip-card-info ${
            !darkMode && !bgColor ? ' text-blue-gray' : ''
          }`}>
          <div className='flip-card-title filter-drop-shadow'>{title}</div>
          <div className='flip-card-description'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
