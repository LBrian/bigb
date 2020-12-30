import React, { HTMLAttributes } from 'react';
import { useInView } from 'react-intersection-observer';

import { DraculaName, DraculaString, DraculaNumber } from './Dracula';

const Intro = (props: HTMLAttributes<HTMLDivElement>) => {
  const [ref, _, entry] = useInView({
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  const observedRatio = entry ? entry.intersectionRatio : 0;
  const careerStart = new Date('2005-05-01T00:00:00Z');
  const careerTimePeriod = new Date(
    new Date().getTime() - careerStart.getTime()
  );
  const years = careerTimePeriod.getFullYear() - 1971;

  return (
    <div {...props}>
      <div className='font-vt323 pb-4 text-3xl text-pink'>Hi, my name is</div>
      <div className='text-5xl xl:text-7xl font-extrabold pb-2'>
        <DraculaName className='mr-4'>Brian</DraculaName>
        <DraculaName className='mr-4 hidden sm:inline'>Yueh-Peng</DraculaName>
        <DraculaName>Liu.</DraculaName>
      </div>
      <div className='text-3xl lg:text-4xl xl:text-5xl font-bold opacity-50 pb-10'>
        <DraculaName>
          I love building web applications from Javascript.
        </DraculaName>
      </div>
      <div className='md:max-w-2xl text-justify font-light md:text-lg'>
        <DraculaString>
          I&apos;m a senior Front-End Engineer based in Sydney, NSW, Australia
          &#129432;. <DraculaNumber value={years} /> years professional
          experience in software across the continents shaped me with unique
          soft/hard skills and broaden vision. From Linux Sys Admin, SD, SDET,
          Back-End Developer and Data Mining academic level, now I specifically
          love building web applications.
        </DraculaString>
      </div>
      <div className='flex mt-20'>
        <img
          ref={ref}
          width={280}
          alt='avatar'
          height={280}
          loading='lazy'
          src='/avatar.png'
          className={`m-auto md:m-0 duration-500 opacity-${
            Math.round(observedRatio * 10) * 10
          }`}
        />
      </div>
    </div>
  );
};

export default Intro;
