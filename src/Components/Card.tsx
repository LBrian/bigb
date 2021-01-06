import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

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
  bgColor = 'bg-gray',
  ...props
}: PropsWithChildren<CardsProps>) => {
  const [ref, inView] = useInView({ threshold, delay: 200 });

  return (
    <div className={`flip-card ${className ?? ''}`} {...props}>
      <div
        ref={ref}
        className={`flip-card-content ${bgColor} ${
          inView ? 'flip-card-in-view' : ''
        }`}>
        <div className='flip-card-image'>
          <img src={imageSrc} alt={title} loading='lazy' />
        </div>
        <div className='flip-card-info'>
          <div className='flip-card-title'>{title}</div>
          <div className='flip-card-description'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
