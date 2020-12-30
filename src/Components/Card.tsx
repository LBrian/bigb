import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardsProps {
  title: string;
  imageSrc?: string;
  bgColor?: 'bg-orange' | 'bg-purple' | 'bg-pink';
}

const Card = ({
  title,
  imageSrc,
  children,
  bgColor = 'bg-purple',
}: PropsWithChildren<CardsProps>) => {
  const [ref, inView] = useInView({ threshold: 0.7 });

  return (
    <div className='flip-card'>
      <div
        ref={ref}
        className={`flip-card-content ${bgColor} ${inView ? 'in-view' : ''}`}>
        <img src={imageSrc} alt={title} />
        <div className='text-center'>
          <div className='flip-card-title'>{title}</div>
          <div className='flip-card-description'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
