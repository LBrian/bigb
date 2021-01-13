import React, { HTMLAttributes } from 'react';

import { DraculaString } from 'Components';

interface CompanyPreviewProps extends HTMLAttributes<HTMLDivElement> {
  alt: string;
  url: string;
  title: string;
  imageSrc: string;
  description: string;
  width?: string | number;
  height?: string | number;
}

const CompanyPreview = ({
  alt,
  url,
  title,
  width,
  height,
  imageSrc,
  className,
  description,
  ...props
}: CompanyPreviewProps) => {
  return (
    <div className={`text-center ${className ?? ''}`} {...props}>
      <div className='font-bold text-4xl mb-4'>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='filter-drop-shadow'>
          {title}
        </a>
      </div>
      <div className='mb-10 md:w-1/2 mx-auto'>
        <DraculaString>{description}</DraculaString>
      </div>
      <a href={url} target='_blank' rel='noreferrer'>
        <img
          alt={alt}
          width={width}
          src={imageSrc}
          loading='lazy'
          height={height}
          className='mx-auto filter-drop-shadow'
        />
      </a>
    </div>
  );
};

export default CompanyPreview;
