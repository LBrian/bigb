import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardsProps {
  title: string;
  imageSrc?: string;
  threshold?: number;
  bgColor?: 'bg-orange' | 'bg-purple' | 'bg-pink' | 'bg-red' | 'bg-blue-gray';
}

const Card = ({
  title,
  imageSrc,
  children,
  threshold = 0.6,
  bgColor = 'bg-blue-gray',
}: PropsWithChildren<CardsProps>) => {
  const [ref, inView] = useInView({ threshold });

  return (
    <div className='flip-card'>
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
